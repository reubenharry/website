--------------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}

import           Data.Char            (isAlphaNum, isSpace, toLower)
import           Data.List            (intercalate, isPrefixOf)
import qualified Data.Text            as T
import           Hakyll
import           System.FilePath      (takeBaseName, (</>))
import           Text.Pandoc.Definition
import           Text.Pandoc.Options
import           Text.Pandoc.Walk      (walk)

--------------------------------------------------------------------------------

config :: Configuration
config = defaultConfiguration
    { destinationDirectory = "public"
    , previewHost          = "127.0.0.1"
    , previewPort          = 8000
    }

main :: IO ()
main = hakyllWith config $ do
    match "css/*" $ do
        route   idRoute
        compile compressCssCompiler

    match "static/**" $ do
        route   $ customRoute $ dropStatic . toFilePath
        compile copyFileCompiler

    match "templates/*" $ compile templateBodyCompiler

    -- Home
    match "content/_index.md" $ do
        route $ constRoute "index.html"
        compile $ pandocCompiler'
            >>= loadAndApplyTemplate "templates/default.html" homeCtx
            >>= relativizeUrls

    -- Research page
    match "content/research.md" $ do
        route $ customRoute $ \_ -> "research" </> "index.html"
        compile $ pandocCompiler'
            >>= loadAndApplyTemplate "templates/page.html"    defaultContext
            >>= loadAndApplyTemplate "templates/default.html" defaultContext
            >>= relativizeUrls

    -- Blog posts (published only; skip section index)
    matchMetadata blogPattern (not . isDraftMeta) $ do
        route blogRoute
        compile $ pandocCompiler'
            >>= loadAndApplyTemplate "templates/post.html"    postCtx
            >>= loadAndApplyTemplate "templates/default.html" postCtx
            >>= relativizeUrls

    -- Stuff posts (published only; skip section index)
    matchMetadata stuffPattern (not . isDraftMeta) $ do
        route stuffRoute
        compile $ pandocCompiler'
            >>= loadAndApplyTemplate "templates/post.html"    postCtx
            >>= loadAndApplyTemplate "templates/default.html" postCtx
            >>= relativizeUrls

    -- Blog index
    create ["blog/index.html"] $ do
        route idRoute
        compile $ do
            posts <- recentFirst =<< loadAll blogPattern
            let ctx = listField "posts" postCtx (return posts)
                   <> constField "title" "Blog"
                   <> defaultContext
            makeItem ""
                >>= loadAndApplyTemplate "templates/list.html"    ctx
                >>= loadAndApplyTemplate "templates/default.html" ctx
                >>= relativizeUrls

    -- Stuff index
    create ["stuff/index.html"] $ do
        route idRoute
        compile $ do
            posts <- recentFirst =<< loadAll stuffPattern
            let ctx = listField "posts" postCtx (return posts)
                   <> constField "title" "Misc"
                   <> defaultContext
            makeItem ""
                >>= loadAndApplyTemplate "templates/list.html"    ctx
                >>= loadAndApplyTemplate "templates/default.html" ctx
                >>= relativizeUrls

    -- Atom feed
    create ["atom.xml"] $ do
        route idRoute
        compile $ do
            posts <- fmap (take 20) . recentFirst =<< loadAll blogPattern
            let feedCtx = postCtx <> bodyField "description"
            renderAtom feedConfiguration feedCtx posts

--------------------------------------------------------------------------------
-- Patterns

blogPattern :: Pattern
blogPattern = "content/blog/*.md" .&&. complement "content/blog/_index.md"

stuffPattern :: Pattern
stuffPattern = "content/stuff/*.md" .&&. complement "content/stuff/_index.md"

--------------------------------------------------------------------------------
-- Pandoc

pandocCompiler' :: Compiler (Item String)
pandocCompiler' =
    pandocCompilerWithTransform readerOpts writerOpts postTransforms
  where
    readerOpts = defaultHakyllReaderOptions
        { readerExtensions = enableExtension Ext_raw_html
                           $ enableExtension Ext_fenced_code_attributes
                           $ enableExtension Ext_tex_math_dollars
                           $ enableExtension Ext_tex_math_double_backslash
                           $ enableExtension Ext_yaml_metadata_block
                           $ pandocExtensions
        }
    writerOpts = defaultHakyllWriterOptions
        { writerHTMLMathMethod = MathJax ""
        , writerExtensions     = enableExtension Ext_raw_html
                               $ writerExtensions defaultHakyllWriterOptions
        }

postTransforms :: Pandoc -> Pandoc
postTransforms = mermaidTransform . demoEmbedTransform

-- Preserve Mermaid source as raw HTML so Pandoc does not wrap it in <p>
-- or apply smart punctuation (which breaks --> arrows).
mermaidTransform :: Pandoc -> Pandoc
mermaidTransform = walk fixBlock
  where
    fixBlock :: Block -> Block
    fixBlock (CodeBlock (_, classes, _) body)
        | "mermaid" `elem` map T.unpack classes =
            RawBlock (Format "html") $
                "<div class=\"mermaid\">\n" <> body <> "\n</div>"
    fixBlock x = x

-- A ```{.haskell demo=ID} fence is compile input only: replace it with the
-- canvas host (source is not shown; add a plain ```haskell block if you want it).
demoEmbedTransform :: Pandoc -> Pandoc
demoEmbedTransform = walk fixBlock
  where
    fixBlock :: Block -> Block
    fixBlock block@(CodeBlock (divId, classes, attrs) _) =
        case lookup "demo" attrs of
            Just demoId ->
                RawBlock (Format "html") (demoEmbedHtml (T.unpack demoId))
            Nothing
                | "demo" `elem` map T.unpack classes
                , not (T.null divId) ->
                    RawBlock (Format "html") (demoEmbedHtml (T.unpack divId))
                | otherwise -> block
    fixBlock x = x

demoEmbedHtml :: String -> T.Text
demoEmbedHtml demoId = T.pack $ unlines
    [ "<div class=\"rti-demo-block\">"
    , "<iframe class=\"rti-demo-frame\" title=\"Interactive demo\" loading=\"lazy\""
    , "  src=\"/demos/" ++ demoId ++ "/index.html\"></iframe>"
    , "</div>"
    ]
--------------------------------------------------------------------------------
-- Drafts

isDraftMeta :: Metadata -> Bool
isDraftMeta meta =
    case lookupString "draft" meta of
        Just s  -> map toLower s `elem` ["true", "yes", "1"]
        Nothing -> False

--------------------------------------------------------------------------------
-- Routes

dropStatic :: FilePath -> FilePath
dropStatic path
    | "static/" `isPrefixOf` path = drop (length ("static/" :: String)) path
    | otherwise                   = path

blogRoute :: Routes
blogRoute = metadataRoute $ \meta ->
    customRoute $ \ident ->
        let base = takeBaseName (toFilePath ident)
        in "blog" </> postSlug meta base </> "index.html"

stuffRoute :: Routes
stuffRoute = customRoute $ \ident ->
    let base = takeBaseName (toFilePath ident)
    in "stuff" </> base </> "index.html"

postSlug :: Metadata -> String -> String
postSlug meta fallback =
    case lookupString "slug" meta of
        Just s  -> s
        Nothing -> case lookupString "title" meta of
            Just t  -> slugify t
            Nothing -> fallback

slugify :: String -> String
slugify = intercalate "-"
        . filter (not . null)
        . words
        . map toLower
        . filter (\c -> isAlphaNum c || isSpace c || c == '-')

--------------------------------------------------------------------------------
-- Contexts

homeCtx :: Context String
homeCtx =
    constField "title" "Reuben Cohn-Gordon"
    <> defaultContext

postCtx :: Context String
postCtx =
    dateField "date" "%e %B %Y"
    <> defaultContext

--------------------------------------------------------------------------------
-- Feed

feedConfiguration :: FeedConfiguration
feedConfiguration = FeedConfiguration
    { feedTitle       = "Reuben Cohn-Gordon"
    , feedDescription = "Writing and notes"
    , feedAuthorName  = "Reuben Cohn-Gordon"
    , feedAuthorEmail = "reubenharry@gmail.com"
    , feedRoot        = "https://reubenharry.github.io"
    }
