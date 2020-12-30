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

Haskell has a difficult learning curve at the intermediate level. I'm keeping track of resources and short code snippets I find useful in that regard.

## General

[Extremely useful overview of important Haskell library and features](http://dev.stephendiehl.com/hask/)

## Parser combinators

[A tutorial for a good parser combinator library](https://markkarpov.com/tutorial/megaparsec.html)

[Example of simple parser combinators written from the ground up](http://dev.stephendiehl.com/fun/002_parsers.html)

## Recursion via fixpoints

[Excellent introduction to difficult topic](https://www.parsonsmatt.org/2016/10/26/grokking_fix.html) and another [blog post](https://elvishjerricco.github.io/2017/08/22/monadfix-is-time-travel.html) which builds on that.

## Recursion schemes and free monads

Necessary to first understand *fix*.

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

Haskell doesn't (currently - 2020) have dependent types (types which depend on values), but there are ways to obtain some of the capabilities of dependent types you might want. Type families are functions from types to types. A simple example:

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

The point here being that you can express numerical guarantees at the type level.

## Probabilistic programming

[Example of how to build simple probabilistic programming DSL in Haskell](https://jtobin.io/simple-probabilistic-programming)

[Use of fancier probabilistic programming language](https://github.com/reubenharry/Haskell-Projects/blob/master/probability/probabilisticProgrammingLinguistics.hs) (code snippet)

## For fun

The most brain-bending quine I know: https://rosettacode.org/wiki/Quine#Haskell

[powerset = filterM (const [True,False])](https://abhiroop.github.io/Haskell-Powerset/)
