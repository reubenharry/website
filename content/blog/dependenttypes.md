---
title: "Dependent Types"
date: 2020-01-26T17:07:24+01:00
draft: True

---

Dependent types are most easily understood by looking at a program that requires them. I'll first give a contrived example, then a real one.

## Contrived example

Suppose we want a function that takes an integer, and returns it if it is less than $10$, and otherwise returns the unit value `()`.

Haskell functions must have a single return type, so you could either have `Int -> Int` or `Int -> ()`, but a function cannot sometimes return an `Int` and sometimes return a `()`, depending on the input.

The standard solution is to return a sum type, i.e. `Int -> Either () Int`. This works, but it is then the job of the consumer of this function to handle the `Either`, and moreover, we don't have a static guarantee that when the input is less than $10$, the returned `Either () Int` is really a `Left ()`.

Dependent types allow a degree of expressivity which solves this problem. In pseudocode, the desired type would be:

```haskell
foreach (x :: Int) -> if x < 10 then Int else ()
```

Two key things to note about this:

- the types here are treated like values, to the extent that we can write an if-statement involving *types*
- the `foreach` keyword associates a value with the type `Int`, so that this value can be used later on in the type.

This isn't a valid Haskell type, and won't be for a while.

## Real example

Suppose I want to write an interpreter. The idea is that I'll parse my input expression (say "4 + 3 = 8") into a syntax tree like:

```  
       /\
      /  \
     /    \
    /\     \  
   /\ \    /\  
  4 +  3  =  8
```

I then assign a value to each leaf, and recursively compute the nodes of the tree until I get to the top.

But what values should I assign to the leafs? The typical functional answer would be:

- "4" --> `4 :: Int`
- "+" --> `(+) :: (Int -> Int -> Int)`
- "3" --> `3 :: Int`
- "=" --> `(=) :: (Int -> Int -> Bool)`
- "8" --> `8 :: Int`

Think of this as a *lexicon*, which takes strings to their meanings.

But note that the values have different types. So if I want a function that implemented this lexicon, i.e. that takes the strings and returns their meaning, without dependent types I would need to make a sum type like:

```haskell
data Expression =
    Number Int
    | Operator (Int -> Int -> Int)
    | Prop (Int -> Int -> Bool)
```

and then a lexicon of type:

```haskell
type LexiconNaive = String -> Expression
```

This is a workable solution, but it causes pain points down the road. In particular, when it comes to combining nodes of the tree, one has the awkward task of pattern matching on all possible cases, and throwing an error if neither the lefthand expression can be applied to the right nor vice versa. This scales poorly.

A nicer solution is dependently typed, and uses the implementation of dependent types from the singletons library (which the reader need not understand in depth):

```haskell
{-# LANGUAGE TypeOperators, PatternSynonyms, TypeFamilies, FlexibleContexts, TypeApplications, ScopedTypeVariables,
    GADTs, AllowAmbiguousTypes, DataKinds, TemplateHaskell, StandaloneKindSignatures, PolyKinds #-}

data Category =  P | N | BS Category Category | FS Category Category
genSingletons [''Category]

type family Semantic (s :: Category) where  
    Semantic N  = Int
    Semantic P = Bool
    Semantic (FS a b) = (Semantic b -> Semantic a)
    Semantic (BS a b) = (Semantic b -> Semantic a)

type Syntactic a = Sing a
```

`Category` is a new type, but also gets lifted, so that it's a new *kind*. We then write a type family, `Semantic`, on types of this kind, that takes a type like `N` (standing for "number") and gives the type that a number's meaning should have, which for our purposes is `Int`.

`Syntactic a` is a convenient synonym for the singleton library's `Type`-kinded `Sing a`.


With this, we can now give a beautiful dependent type for lexicons:

```haskell
type Lexicon = forall (a :: Category). Syntactic a -> Text -> Semantic a
```

An example of a lexicon, as we might need for an interpreter, is:

```haskell
example :: Maybe Integer
example = (fmap . fmap) sum Just [1, 2, 3]

exampleLexicon :: Lexicon
exampleLexicon = \case
    Number -> \case
        "1" -> 1
        "2" -> 2
        "3" -> 3
        "4" -> 4
        "5" -> 5
        "6" -> 6
        "7" -> 7
        "8" -> 8
        "9" -> 9

    Proposition -> \case
        "True" -> True
        "False" -> False


    Number `ForwardSlash` Number -> \case
        "-" -> negate

    (Proposition `BackSlash` Number ) `ForwardSlash` Number  -> \case
        "=" -> (==)

    (Number `ForwardSlash` Number ) `BackSlash` Number  -> \case
        "+" -> (+)

    _ -> error "not implemented"
```

```haskell
data Category =  
    Proposition
    | Number
    | Branch Category Category

genSingletons [''Category]

type family Semantic e (s :: Category) where    Semantic e Number  = e
    Semantic _ Proposition = Bool
    Semantic e (Branch a b) = (Semantic e b -> Semantic e a)


lexicon :: forall (a :: Category). Syntactic a -> Semantic a
```

This type states its intent beautifully. For any type of kind `Category`, the syntactic representation (of kind `Type`) is mapped to the semantic representation (also of kind `Type`).

examples
exampleLexicon Proposition "True"
exampleLexicon Number "3"
exampleLexicon (Number `To` Number) "-"
>>> No instance for (Show (Int -> Int))
(exampleLexicon (Number `To` Number) "-") 5
>>> (-5)
