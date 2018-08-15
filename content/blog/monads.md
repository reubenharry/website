---
title: "Monads"
date: 2018-07-24T00:29:59-07:00
draft: true
---

**This is a description of [this project](/docs/monads.pdf)**.


The whole project of logical semantics for natural language makes much more sense when you realize that, since its conception, it was motivated by the application of tools originating in pure computer science and logic to phenomena in natural language. There's something undeniably compelling about having some mechanism, like lambda calculus, and realizing that it's a fit for something totally different (well, maybe not totally different - after all, natural language was in the crosshairs of logic since its beginnings.). The following are some examples that come to mind of the application of logic and computer science to natural language semantics:

* first order predicate calculus and Tarski's notion of meaning
* simply typed lambda calculus
* modal logic for natural language modality
* continuations: for natural language quantifiers, from Montague but made more explicit in Chris Barker's [awesome research programme](https://www.amazon.com/Continuations-Natural-Language-Theoretical-Linguistics/dp/0199575029)
* monads for natural language "side effects"

Monads are the shibboleth of functional programming, at least if you like types. What follows is an instance of a now famous genre, the monad tutorial:

Some people say that understanding an abstract concept, like the notion of a monad, is a matter of applying oneself and working through problems.

That's probably true, but part of me wonders if it's always necessary to suffer in order to learn. What if the right explanation lessens the stumbling in the dark?

To which end, let me try to explain what I think is the core concept of a monad.

There are some prerequisites, and these are important. Like everything in this area of computer science, they seem somewhat trivial but aren't, at least not to BLAH TODO
