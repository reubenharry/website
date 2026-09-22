---
title: "Research"
author: "Reuben Cohn-Gordon"
date: 2018-06-26T17:07:24+01:00

---

## What I'm interested in at the moment

Recently I've been thinking about [reactive probabilistic programming languages](https://functional-reactive-ppl.netlify.app/reactive/) and using them to build dynamical systems models of cooperation between agents. This is appealing because it pulls together a lot of the things I like: functional programming, non-equilibrium statistical mechanics, and a longstanding curiosity about how language emerges.

## Postdoc

At Berkeley, I worked at the intersection of computational statistics and physics. These fields turn out to be very deeply connected, although there is surprisingly little cross-talk (possibly because both statisticians and physicists have very different cultures).

In particular, I worked on the [Microcanonical Hamiltonian Monte Carlo sampler](https://microcanonical-monte-carlo.netlify.app/), which is inspired, as the name suggests, by the microcanonical ensemble in statistical mechanics. I worked on applying this to many-body problems in condensed matter physics. I also thought about flow-based models, and non-equilibrium physics, which led to [counterdiabatic Hamiltonian Monte Carlo](https://arxiv.org/abs/2602.21272).

## PhD

During my PhD, I worked on unifying logical and statistical perspectives on meaning in natural language using [probabilistic models of pragmatic reasoning](https://reubencohngordon.com/blog/social-reasoning-in-arcadia/).

The general idea is to model the interpretation of a linguistic expression (e.g. a sentence) as a process of Bayesian inference, to ask: given that this sentence is true (or, more to the point, given that someone said it) what must the world be like. This turns out to be a nice viewpoint for integrating a traditional logical perspective on meaning with an information-theoretic one, as well as handling semantic and pragmatic meaning in a single framework. I say a little bit more about that in the introduction of my [dissertation](/docs/ReubenCG-thesis.pdf).

Below are some of the projects I never quite finished; for one reason or another, a lot of the most interesting projects in grad school never ended up published. (For the others, see Google Scholar.)

### Direction 1 of PhD research: scaling the models

- [Metaphor and Linguistic Creativity](/docs/metaphor.pdf) <br/>
This paper explores the technical and conceptual consequences of a model of meaning where the listener's prior is over a vector space. This allows integration with word embeddings. <br/>
(Cohn-Gordon and Bergen).

- [Lost in Machine Translation: A Method to Reduce Meaning Loss](https://arxiv.org/abs/1902.09514)
<br/>
This and some related papers look at models of meaning where the utterance space is recursively generated. This allows for integration with a neural semantics, in particular a conditional language model.
<br/>
(NAACL 2019 - Cohn-Gordon and Goodman).

### Direction 2 of PhD research: enriching the models

<!-- In particular, I was interested in scaling probabilistic models of meaning in computationally tractable ways to handle real-world natural language, as well as enriching them on the theoretical side. -->

- [Verbal Irony, Pretense, and the Common Ground](/docs/irony.pdf)
<br/> This paper looks at models where the listener is uncertain not only of the state of the world, but also the state of the common ground. In a nutshell, if I tell you something, you learn not only that thing, but also that I believed you didn't already know it (an inference about my belief about your prior). A speaker can leverage this to communicate and that yields a very satisfying account of a very distinctive feature of *natural* languages, namely sarcasm.
<br/> (Cohn-Gordon and Bergen).

<!-- [**Various other publications**](https://scholar.google.com/citations?user=AG4_QecAAAAJ&hl=en&oi=ao) -->


- [The Pragmatics of Multiparty Communication](/docs/salt.pdf)
<br/> This project looked at what novel dynamics emerge when there are multiple listeners, so any one can explain away a speaker's utterance on the assumption that it was directed towards a different listener. The interesting idea lurking in the background is that the joint common ground is not the union of the pairwise common grounds; at some point I should sit down and write out clearly what this means. It also gives a nice model of the semantics of proper names as *presupposed* variable assignments, which shows how parts of a 1st order logical semantics can be lifted into a Bayesian model.
<br/> (Cohn-Gordon, Levy, and Bergen).



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
