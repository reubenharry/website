---
title: "Functional Programming"
date: 2020-01-26T17:07:24+01:00
draft: True

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

# Table of Contents
1. [Overview](#general)
2. [Libraries](#libraries)
3. [Parser Combinators](#parser-combinators)
4. [Curry Howard](#types-are-propositions)
5. [Recursion Schemes](#recursion-schemes)
6. [The Free Monad](#the-free-monad)
7. [Lenses](#lenses)
8. [Continuations](#continuations)
9. [Category Theory](#category-theory)
10. [Functional Reactive Programming](#functional-reactive-programming)
11. [Generics](#generics)
12. [GADTs](#generalized-algebraic-datatypes
)
13. [Type families](#type-families)


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


## Recursion schemes

This is a place where the type system of Haskell really shines, because it allows you to modularize a recursive program into two parts: the recursion itself, and the non-recursive logic.

Here's my take. I'll proceed by example, instead of abstractly, since I think once you see how things work for one recursive datatype, you have the means to extrapolate. Consider the data type

```haskell
data Tree a = Leaf a | Branch (Tree a) (Tree a)
```

First, before even getting into the details, it's crucial to recognize that `Leaf` and `Branch` are data constructors, while `Tree` is a type constructor. Total clarity on that point is a prerequisite, which I only mention because it's the kind of thing I got very confused by.

So, having defined this recursive type `Tree a`, we can ask about functions of the form `Tree a -> a`, for a given `a`. For example `sum :: Tree Int -> Int` would take a tree with integers on the leaves, and sum them all to a single integer. If you imagine how this would actually define this, you can see that it is recursive.

The core idea of recursion schemes is this: *rather than writing a recursive function on a recursive type, write a non-recursive function on a non-recursive type* and pass that to a higher order function. In particular, consider the following type, with an obvious functor instance:

```haskell
data TreeF a x = Leaf a | Branch x x
```

Here, `TreeF a x` is a *non-recursive* type that is counterpart to `Tree a`. So the idea is that we will have a folding function of the type

* The `x` parameter in `TreeF a x` represents the hole where the recursive nesting happens in `Tree a`.
* In particular, to obtain `Tree a` from `TreeF a x` and eliminate the `x` in the process you do:

```haskell
TreeF a (TreeF a (TreeF a...))
```

* That is, `Fix (TreeF a)` is isomorphic to `Tree a`

With this datatype introduced, here is `fold`:

```haskell
fold :: (TreeF a x -> x) -> Tree a -> a
```

Note that, in `fold :: (TreeF a x -> x) -> Tree a -> a`, you can choose `x` to be *any* type.

In the recursion-schemes library, type families are used, so that `Base` is a function on types defined such that `Base (Tree a)` equals `TreeF a`. This allows for a generalization to arbitrary recursive datatypes, as follows:

```haskell
fold :: Recursive t => (Base t a -> a) -> t -> a
```


<!-- So that's the general idea.  -->

<!-- It's almost impossible to get a sense of this without actually using it in code, but here are some salient points, again using the example of `Tree a`: -->


`fold` (or synonymously `cata` for "catamorphism") is only one of many recursion schemes provided in libraries like `Data.Functor.Foldable`. The beauty of this approach is that much more complex recursion patterns are expressible very simply.

For example, I often want to do some kind of rather sophisticated fold of some scary datatype like `FreeT f m a`. Haskell can tell me exactly the type of the Base function here, and so writing a fold is easy.


## The free monad

The documentation in https://hackage.haskell.org/package/free-5.1.6/docs/Control-Monad-Free.html is surprisingly illuminating.

The theory of f-algebras and recursion schemes is nicely summarized by https://bartoszmilewski.com/2017/02/28/f-algebras/. This is a [good tutorial](https://www.parsonsmatt.org/2017/09/22/what_does_free_buy_us.html) building up to Free from scratch. This is [another good tutorial on free monads](https://jtobin.io/practical-recursion-schemes)

## Fixpoints and monadfix

[Excellent introduction to difficult topic](https://www.parsonsmatt.org/2016/10/26/grokking_fix.html) and another [blog post](https://elvishjerricco.github.io/2017/08/22/monadfix-is-time-travel.html) which builds on that.




## Lenses

Roughly, a way to modify subparts of a larger data structure, functionally.

```haskell
Lens s t a b
```

means: if you can tell me how to turn an $a$ into a $b$, I'll turn an $s$ (of which $a$ is a subpart) into a $t$ (of which $b$ is a subpart).


The most well known style of lens implementation, but not the only one, is the van Laarhoven style approach by Edward Kmett in the `lens` package. Great overview: https://en.wikibooks.org/wiki/Haskell/Lenses_and_functional_references . The gist is that the underlying representation of a lens is:

```haskell
type Lens s t a b = forall f. Functor f => (a -> f b) -> (s -> f t)
```

where there is some constraint on $f$. Exactly what functor $f$ we use determines the functionality we want; we can pick any. For example, `Const b` gives you `(a -> Const r b) -> (s -> Const r t) ~ (a -> r) -> (s -> r)`, which lets you view. Meanwhile `Identity` gives you `(a -> Identity b) -> (s -> Identity t) ~ (a -> b) -> (s -> t)`, which lets you update.

Moreover, lenses compose by function composition. Kmett's library extends this idea to other similar types where the constraint is e.g. `Applicative` not `Functor`, and other generalizations of this sort, which yields a family of beautifully composable "optics".

### Optics

A brief summary of some of the optics in the lens package. (Note that there is also a category theory story about optics, based on profunctors, which is somewhat separate.)

**Traversals**:

```haskell
type Traversal s t a b = forall f. Applicative f => (a -> f b) -> (s -> f t)
```

Like a lenses but gets or sets multiple places. A characteristic usage is `a ^.. t`, where `a` is our data and `t` is our traversal, to obtain a list of the elemens being pointed to by the traversal.


We already have:

```haskell
instance Monoid m => Applicative (Const m) where
    pure _ = Const mempty
    liftA2 _ (Const x) (Const y) = Const (x `mappend` y)
```

so for `m` a monoid, we can view it. For instance, if we have a traversal which points to every leaf in a tree, we can extract a list (the free monoid) of those leafs.

And `Identity` is an applicative, so no problem there.

We can also generalize from `->` to any profunctor `p`. This is how many of the indexed versions of optics works, and also gives the most general type in the package:

```haskell
type Iso s t a b = forall p f. (Profunctor p, Functor f) => p a (f b) -> p s (f t)
```


<!-- **Folds**

```haskell
type Fold s a = forall f. (Contravariant f, Applicative f) => (a -> f a) -> s -> f s
```

`Const` is a contravariant functor, so we can still use it to `get` things.
-->



A small bit of theory of lenses: https://blog.jle.im/entry/lenses-products-prisms-sums.html. "A Lens' s a is nothing more than a witness for the fact that there exists some q where s ~ (a, q).". Here q is existentially quantified:




## Continuations

https://begriffs.com/posts/2015-06-03-haskell-continuations.html

## Category theory

Category theory is to set theory as Haskell is to C. It is a branch of mathematics in which you can express hugely powerful succinct generalizations. It inspires a number of ideas in Haskell.

Lovely summary of category theory origins of [monads](https://www.stephendiehl.com/posts/monads.html) and [adjunctions](https://www.stephendiehl.com/posts/adjunctions.html) with the beautiful diagrammatic notation that this kind of stuff allows for.

[Category theory for programmers](https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/). Learn why a monad is a monoid in the categories of endofunctors, and why polymorphic functions are natural transformations.

Two places where category theory comes up fairly directly in Haskell are recursion schemes (see below) and the free monad and its surrounding optimizations which involve Kan extensions / the Yoneda lemma / the codensity monad. See http://blog.ezyang.com/2012/01/problem-set-the-codensity-transformation/.

## Functional Reactive Programming

FRP is a slightly elusive concept. This [2015 talk by Conal Elliott](https://begriffs.com/posts/2015-07-22-essence-of-frp.html) ([or this version](https://www.youtube.com/watch?v=j3Q32brCUAI)) is nice, and serves as a good introduction to denotational semantics, but doesn't really give the full flavour.

There are two use cases I have encountered. One is to deal with continuous time properly; rather than discretizing first and having gross resolution issues, you work with continuous time with composing and building your system and only at the end, discretize. Here, the salient analogy is to vector graphics: represent your image continuously, and later discretize.

The second is to deal with interaction with an external system. For example, you might want to write a program which does something when a mouse click happens. Rather than write a function which is triggered by a mouse click, you consider, as an abstract object, the full history of all mouse clicks that ever have or will happen (represented as a function from time values to `()` ). This is counterintuitive at first, since future events haven't happened yet. If you're confused by that, the point is that you're going to write a function which *takes* any such full history, and outputs a new full history of some other value. That doesn't mean that you have the full history of clicks determined - rather it's just saying that if you did, this is what you would do with it. You then take the system you defined in this abstract way, and "compile" into an IO action.

A connection I find useful is to electrical engineering. There, it is common to think of systems, in particular linear systems, which take a function as input, and give a new function as output. Here, people are used to the idea that all past and future time is captured by a function. See [these notes](/maths/fourier). People who work with systems also quickly build up intuitions about how they are different from just plain functions, such as the possibility of feedback loops and switches.

Yampa is a good Haskell library to look into for getting a better sense of this: you can implement switches and loops, for example.

Another approach, in libraries like reactive-banana, involves the use of recursive do-notation. This example from the reactive-banana docs is a little mind-blowing:

```haskell
mdo
    let price = 50 :: Int
    bAmount  <- accumB price $ unions
                  [ subtract 10 <$ eCoin
                  , const price <$ eSold ]
    let eSold = whenE ((<= 0) <$> bAmount) eCoin
```

## Generics

Since many types in Haskell can be expressed as sums and products, along with recursion, if you can instantiate some pattern for sums and products, it should automatically be generalizable to complex types. This is the core idea of generics, but there's a lot of fiddly detail, most of which is boring.

https://markkarpov.com/tutorial/generics.html

## Generalized Algebraic Datatypes

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
