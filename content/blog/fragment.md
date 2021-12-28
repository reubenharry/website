---
title: "Probability, Recursion, and Language"
date: 2021-06-22T18:05:57+01:00
draft: True
---

Compositionality, linguists will tell you, is a core


To interpret the meaning of a sentencee

Indeed, this idea is more general, ...

Language is all about compositionality except when it isn't.

Idiom

There is a very elegant theory

This involves three difficult things


The simplest unfold: ana on a binary tree

Two directions of extension: more complex unfold, and: add a monad

TODO BOOL presents a very elegant model of storage and reuse in language.


It's particularly appealing to use Haskell for this problem, because it has beautiful and powerful tools for dealing with recursion, and beautiful and powerful tools for handling side effects (here: stochasticity).

### Recursion

```
a tree unfold
```

## Putting probability and recursion together

### Recursion schemes

0. Generate sentences
1. Generate sentences stocastically
2. Generate fragments stochastically
3. Generate sentences using those fragments
4. Generate sentences while generating fragments
5. Infer fragments from sentences


```
pcfg :: MonadInfer m => ...
```


We can unfold a tree from a root node using an *anamorphism*. However, we want two extra features:

- probabilistic choice at each step in the unfolding
- the ability to expand a node in partially unfolded trees

For the first, we use the Free monad transformer over our base functor.
