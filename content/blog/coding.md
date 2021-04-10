---
title: "Functional Programming"
date: 2020-01-26T17:07:24+01:00
draft: False

---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
  MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [['$$','$$']],
    processEscapes: true,
    processEnvironments: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    TeX: { equationNumbers: { autoNumber: "AMS" },
         extensions: ["AMSmath.js", "AMSsymbols.js"] }
  }
  });
  MathJax.Hub.Queue(function() {
    // Fix <code> tags after MathJax finishes running. This is a
    // hack to overcome a shortcoming of Markdown. Discussion at
    // https://github.com/mojombo/jekyll/issues/199
    var all = MathJax.Hub.getAllJax(), i;
    for(i = 0; i < all.length; i += 1) {
        all[i].SourceElement().parentNode.className += ' has-jax';
    }
  });

  MathJax.Hub.Config({
  // Autonumbering by mathjax
  TeX: { equationNumbers: { autoNumber: "AMS" } }
  });

</script>

$\newcommand{\R}{\mathbb{R}}$
$\newcommand{\C}{\mathbb{C}}$
$\newcommand{\N}{\mathbb{N}}$
$\newcommand{\Z}{\mathbb{Z}}$

Haskell has a difficult learning curve. A familiar complaint people have with Haskell is that you learn the basics (the type system, higher order functions, pattern matching, lazy evaluation, various forms of recursion, functors, monads, typeclasses) but then are unable to actually use standard Haskell libraries, and are baffled by the apparent lack of documentation.

These are some resources aimed at an intermediate level. By that, I mean everything after [Learn You a Haskell](http://learnyouahaskell.com/).


## General

[Extremely useful overview of important Haskell libraries and concepts](http://dev.stephendiehl.com/hask/)

**Ecosystem**: Haskell is a research language, so there are a lot of half-finished or broken libraries made public. There are also a lot of good robust libraries though. [Useful overview of the ecosystem here](https://github.com/Gabriel439/post-rfc/blob/master/sotu.md#single-machine-concurrency).

**Documentation**: libraries in Haskell tend to be less verbosely documented then you'd think would be useful. Often this is because it's research code and the authors didn't care if other people used it. But equally often it's because Haskell types do a lot of the talking, so that you can work out what a library is doing by reading through the types.

Because Haskell is so expressive, it's common for libraries to be fairly small collections of combinators, centering around some central datatype. The key to understanding the library is to grok that datatype, largely by seeing what things you can do with it via the available functions. *Yampa* is a nice example of a library with seemingly minimal documentation, which is in fact very easy to understand in this way.


## Libraries

The best way to learn how to write good Haskell is to read libraries. Some really great, well-documented libraries:

- diagrams
- pipes
- megaparsec

More abstract libraries which I found pretty intelligible include:

- [recursion-schemes](https://hackage.haskell.org/package/recursion-schemes) (again, rather than getting too hung up on how mind-bending catamorphisms are, just look at the types of functions like `cata`)
- monad-coroutine

A couple of more niche libraries that I found very useful for seeing more advanced features/libraries in action (type level arithmetic, automatic differentiation, proper use of typeclasses, free monad transformers with the codensity optimization, coroutines) include:

- hamilton
- monad-bayes

# Miscellaneous topics

## Parser combinators

[A tutorial for a good parser combinator library](https://markkarpov.com/tutorial/megaparsec.html)

[Example of simple parser combinators written from the ground up](http://dev.stephendiehl.com/fun/002_parsers.html)

## Types are propositions

[Types are propositions](https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_correspondence) and programs are constructive proofs of those propositions, i.e. a construction of an inhabitant of the type, which witnesses the truth of the proposition.

So `Int -> Int` is "proved" by `(+5)`, among many other proofs.

This perspective plays well with polymorphism, which corresponds to propositions involving quantifiers. For example `forall a. a -> a` is "proved" by `id`. And in fact that's the only possible proof.

This also makes sense for existential types, which correspond to propositions with existential quantifiers, like this example from (http://dev.stephendiehl.com/hask/):

```
{-# LANGUAGE ExistentialQuantification #-}
{-# LANGUAGE RankNTypes #-}

-- ∃ t. (t, t → t, t → String)
data Box = forall a. Box
  { value  :: a
  , update :: a -> a
  , print  :: a -> String
  }
```

Note that you use a universal quantifier to implement the existential, but the moral type is given in the comment. This is saying: a value of type `Box` must be a program which proves the claim that there is *some* inhabitant of `Box`. So you get to have boxes which contain totally different types, like:

```
boxa :: Box
boxa = Box 1 negate show

boxb :: Box
boxb = Box "foo" reverse show
```

**Contradictory propositions**: If you have a type `(forall a. a)`, a program of that type would be a value which is of all types at once. Which you can't do, except with `undefined` or non-termination. For example, `let x = fix id :: forall a. a`. Similarly for `forall a b. a -> b`.



## Recursion via fixpoints

[Excellent introduction to difficult topic](https://www.parsonsmatt.org/2016/10/26/grokking_fix.html) and another [blog post](https://elvishjerricco.github.io/2017/08/22/monadfix-is-time-travel.html) which builds on that.

## Recursion schemes and free monads

Necessary to first understand `fix`.

The theory of f-algebras and recursion schemes is nicely summarized by https://bartoszmilewski.com/2017/02/28/f-algebras/

[Great tutorial](https://www.parsonsmatt.org/2017/09/22/what_does_free_buy_us.html) building up to Free from scratch.

[Another good tutorial on free monads](https://jtobin.io/practical-recursion-schemes)

## Lenses

A small bit of theory: https://blog.jle.im/entry/lenses-products-prisms-sums.html

## Continuations

https://begriffs.com/posts/2015-06-03-haskell-continuations.html

## Category theory

Lovely summary of category theory origins of [monads](https://www.stephendiehl.com/posts/monads.html) and [adjunctions](https://www.stephendiehl.com/posts/adjunctions.html) with the beautiful diagrammatic notation that this kind of stuff allows for.

[Category theory for programmers](https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/). Learn why a monad is a monoid in the categories of endofunctors, and why polymorphic functions are natural transformations.

## Functional Reactive Programming

Took me a while to find out what this actually meant, but thankfully this [2015 talk by Conal Elliott](https://begriffs.com/posts/2015-07-22-essence-of-frp.html) ([or this version](https://www.youtube.com/watch?v=j3Q32brCUAI)) precisely answers that question. "Imperative programmers have to choose between simplicity and truth"...

## Generics

Since many types in Haskell can be expressed as sums and products, along with recursion, if you can instantiate some pattern for sums and products, it should automatically be generalizable to complex types. This is the core idea of generics, but there's a lot of fiddly detail, most of which is boring.

https://markkarpov.com/tutorial/generics.html

## Generalized Algebraic Datatypes (GADTs)

A normal data declaration in Haskell might look like:

```Haskell
data Expr a n = Bar a n | Baz a n
```

But GADTs allow you to do:

```Haskell
data Expr a where
  Foo :: a -> Expr a Int
  Bar :: a -> Expr a Double
  Bar :: Num n => a -> Expr a n
  (:||:) :: Expr a Bool -> Expr a Bool -> Expr a Bool
```

This means that the type of the resulting expression changes from constructor to constructor. Handy for building stronger types.

## Type Families

Haskell doesn't (currently - 2020) have dependent types (very roughly, types which depend on values), but there are ways to obtain some of the capabilities of dependent types you might want. Type families are functions from types to types. A simple example:

```Haskell
data Zero
data Succ n

data Vect n a where
  VNil :: Vect Zero a
  VCos :: a -> Vect n a -> Vect (Succ n) a

type family Plus x y where
  Plus Zero x = x
  Plus (Succ x) y = Succ (Plus x y)

append :: Vect x a -> Vect y a -> Vect (Plus x y) a
append = ...
```

The point in this particular example being that you can express numerical guarantees at the type level.

## Probabilistic programming

[Example of how to build simple probabilistic programming DSL in Haskell](https://jtobin.io/simple-probabilistic-programming)


## For fun

A really mind-blowing quine: https://rosettacode.org/wiki/Quine#Haskell

[powerset = filterM (const [True,False])](https://abhiroop.github.io/Haskell-Powerset/)
