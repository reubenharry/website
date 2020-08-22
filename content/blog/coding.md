---
title: "Functional Programming"
date: 2017-01-26T17:07:24+01:00
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

[Great tutorial](https://www.parsonsmatt.org/2017/09/22/what_does_free_buy_us.html) building up to Free from scratch.

[Another good tutorial on free monads](https://jtobin.io/practical-recursion-schemes)

## Category theory

Lovely summary of category theory origins of [monads](https://www.stephendiehl.com/posts/monads.html) and [adjunctions](https://www.stephendiehl.com/posts/adjunctions.html) with the beautiful diagrammatic notation that this kind of stuff allows for.

[Category theory for programmers](https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/). Learn why a monad is a monoid in the categories of endofunctors, and why polymorphic functions are natural transformations.

## Functional Reactive Programming

Took me a while to find out what this actually meant, but thankfully this [2015 talk by Conal Elliott](https://begriffs.com/posts/2015-07-22-essence-of-frp.html) ([or this version](https://www.youtube.com/watch?v=j3Q32brCUAI)) precisely answers that question.

## Probabilistic programming

[Example of how to build simple probabilistic programming DSL in Haskell](https://jtobin.io/simple-probabilistic-programming)

[Use of fancier probabilistic programming language](https://github.com/reubenharry/Haskell-Projects/blob/master/probability/probabilisticProgrammingLinguistics.hs) (code snippet)

## For fun

The most brain-bending quine: https://rosettacode.org/wiki/Quine#Haskell

[powerset = filterM (const [True,False])](https://abhiroop.github.io/Haskell-Powerset/)
