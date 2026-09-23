# reubenharry.github.io

Personal site, built with [Hakyll](https://jaspervdj.be/hakyll/).

## Requirements

- GHC 9.8 (via [ghcup](https://www.haskell.org/ghcup/))
- cabal-install 3.x
- For interactive demos: [ghc-wasm-meta](https://gitlab.haskell.org/haskell-wasm/ghc-wasm-meta) and a checkout of [real-time-inference](https://github.com/reubenharry/real-time-inference) (override path with `RTI_ROOT`)

## Build

```bash
./build.sh          # WASM demos + cabal build + site rebuild → public/
SKIP_DEMOS=1 ./build.sh   # Hakyll only; reuse static/demos/
# or:
cabal build
cabal run site -- rebuild
cabal run site -- watch   # live preview at http://127.0.0.1:8000
```

### Inline WASM demos

In a post, use a fenced block with a `demo` id. The build compiles it with the real-time-inference browser host (`UserInput >--> Picture`):

````markdown
```{.haskell demo=my-demo from=Tutorial.demo1}
demo :: UserInput >--> Picture
demo = demo1
```
````

- `from=Module.symbol` — compile that library SF (fence body is ignored for the build)
- omit `from` — compile the fence body as `Demo.demo` (standard imports prepended)
- **each fence needs a unique `demo=` id** (duplicate ids overwrite; last wins)
- demos are embedded as iframes (`/demos/<id>/index.html`) so multiple can share a page
- demo fences are not shown in the HTML; add a plain ` ```haskell ` block if you want source visible
- or drop a module at `demos/<id>.hs`

Artifacts go to `static/demos/<id>/`.

## New posts

Add a Markdown file under `content/blog/` (or `content/stuff/`) with YAML front matter:

```yaml
---
title: "My post"
date: 2026-09-22
draft: false
slug: "optional-url-slug"   # blog only; stuff uses the filename
---
```

Set `draft: true` to keep a post out of the published site.

## Deploy (Netlify)

Netlify does **not** run Hakyll (no GHC there). Workflow:

1. Edit content under `content/`
2. Run `./build.sh` (writes `public/`)
3. Commit **both** source and `public/`, then push

`netlify.toml` only checks that `public/index.html` exists and publishes `public/`.

Static assets live in `static/` and are copied to the site root (e.g. `static/docs/` → `/docs/`).
