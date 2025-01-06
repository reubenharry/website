---
title: "Research"
author: "Reuben Cohn-Gordon"
date: 2018-06-26T17:07:24+01:00

---

## Current Research

I currently work on MCMC methods, in the general vicinity of Hamiltonian Monte Carlo.

## PhD

During my PhD, I worked on unifying logical and statistical perspectives on meaning in natural language using [probabilistic models of pragmatic reasoning](https://reubencohngordon.com/blog/social-reasoning-in-arcadia/).

The general idea is to model the interpretation of a linguistic expression (e.g. a sentence) as a process of Bayesian inference, to ask: given that this sentence is true (or, more to the point, given that someone said it) what must the world be like. This turns out to be a nice viewpoint for integrating a traditional logical perspective on meaning with an information-theoretic one, as well as handling semantic and pragmatic meaning in a single framework. I say a little bit more about that in the introduction of my [dissertation](/docs/ReubenCG-thesis.pdf).

Below are some of the projects I never quite finished.

### Direction 1 of PhD research: scaling the models

- [Metaphor and Linguistic Creativity](/docs/metaphor.pdf) <br/>
This paper explores the technical and conceptual consequences of a model of meaning where the listener's prior over worlds is over a vector space. This allows integration with word embedding semantics. <br/>
(*unpublished draft*, experiment section should be disregarded; the baseline model was implemented incorrectly. Cohn-Gordon and Bergen).

- [Lost in Machine Translation: A Method to Reduce Meaning Loss](https://arxiv.org/abs/1902.09514)
<br/>
This and some related papers look at models of meaning where the utterance space is recursively generated. This allows for integration with a neural semantics, in particular a conditional language model.
<br/>
(NAACL 2019 - Cohn-Gordon and Goodman).

### Direction 2 of PhD research: enriching the models

<!-- In particular, I was interested in scaling probabilistic models of meaning in computationally tractable ways to handle real-world natural language, as well as enriching them on the theoretical side. -->

- [Verbal Irony, Pretense, and the Common Ground](/docs/irony.pdf)
<br/> This paper looks at models where the listener is uncertain not only of the state of the world, but also the state of the common ground. In a nutshell, if I tell you something, you learn not only that thing, but also that I believed you didn't already know it (an inference about my belief about your prior). A speaker can leverage this to communicate and that yields a very satisfying account of a very distinctive feature of *natural* languages, namely sarcasm.
<br/> (*unpublished draft*, Cohn-Gordon and Bergen).

<!-- [**Various other publications**](https://scholar.google.com/citations?user=AG4_QecAAAAJ&hl=en&oi=ao) -->


- [The Pragmatics of Multiparty Communication](/docs/salt.pdf)
<br/> This project looked at what novel dynamics emerge when there are multiple listeners, so any one can explain away a speaker's utterance on the assumption that it was directed towards a different listener. The interesting idea lurking in the background is that the joint common ground is not the union of the pairwise common grounds; at some point I should sit down and write out clearly what this means. It also gives a nice model of the semantics of proper names as *presupposed* variable assignments, which shows how parts of a 1st order logical semantics can be lifted into a Bayesian model.
<br/> (*unpublished abstract*, Cohn-Gordon, Levy, and Bergen).

- [An Incremental Iterated Response Model of Pragmatics](https://arxiv.org/abs/1810.00367)
 <br/> This paper looks at what happens if the listener starts reasoning pragmatically before an utterance is complete. It's pretty simplistic.
 <br/> (SCiL 2019, ACL Proceedings - Cohn-Gordon, Goodman and Potts).



<!-- ### Figurative Language -->


<!-- ### Social Meaning -->
<!--
(Similar work presented at CompPrag 2018 - Cohn-Gordon and Potts)
[Communication-based Evaluation for Natural Language Generation](https://arxiv.org/pdf/1909.07290.pdf) <br/> (SCiL 2020, ACL Proceedings - Newman, Cohn-Gordon, and Potts)
[Modeling "Non-literal" Social Meaning with Bayesian Pragmatics](https://semanticsarchive.net/Archive/Tg3ZGI2M/Cohn.pdf) ([slides](/docs/sub_slides.pdf)) <br/>(Sinn und Bedeutung 2018 - Cohn-Gordon and Qing)

[Non-descriptive/use-conditional meaning in Rational Speech-Act models](https://semanticsarchive.net/Archive/Tg3ZGI2M/Qing.pdf) <br/> (Sinn und Bedeutung 2018 - Qing and Cohn-Gordon)
 -->
<!-- ### Past Work

[Intransitive Object Marking in Amharic](/docs/amharic.pdf) ([description](/docs/dares-and-warnings-in-amharic/)) <br/> (Presented as a [poster](/docs/amharicposter.pdf) at LSA 2017)

[Ability Modals](/docs/modals.pdf) ([description](/docs/ability-modals/))

[Monads for NL Semantics](/docs/monads.pdf) (draft)

[Resultativity in Latin](/docs/resultatives.pdf) ([description](/docs/resultativity-in-latin/)) -->
