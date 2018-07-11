---
title: "That Bayesian Dialectic"
date: 2018-06-26T17:07:24+01:00
draft: true
---

style:

	quite a lot of echo could be added

things i think i could convey:

	nested reasoning
	that inference is great paradigm
	that probabilistic programming is really helpful here
	pragmatics and semantics unified

need to get a notion of conventional meaning, and then pragmatic meaning: a good example to hang on to for this
		so first find funny implicature:
			"that's actually a pretty good idea."


	motivation:

		Imagine the scene: Echo is scolding Narcissus for

		So the *semantics* of blah tells us
			but reasoning about what the speaker BLAH and the world, which is the concern of pragmatics, enriched this meaning.

		DIAGRAM

		The distinction was apparently described as follows by a student in a class I TA'ed: ``Semantics is about what things mean, and pragmatics is about what they like actually mean.''. I've always wanted to write a philosophy paper introducing a *like actually* operator LA, such that LA(P) iff P is like actually true.
		maybe: this requires

			I want to show how we can boil down to essence of this reasoning, and how it exemplifies the core blah of pragmatics.
				I also want to convince you that the language of probability (and in particular, recursive agent models like TODO LINK) are the right tool for the job: they neatly incorporate and generalize a logical semantics, can be computationally modelled LINK, experimentally verified LINK, integrated with deep learning, and mathematically speaking, are quite beautiful. In short, they are for pragmatics what higher order logic (Montague grammar) is for semantics.

		OK, so let's exchange our fun example from above for something much more prosaic TODO RIGHT WORD?

		Echo and Narcissus are taking a post-prandial stroll and

			Echo: ?
			Narcissus: . something overly literal

		This example, or something similar, is the (drusophila)[link] of pragmatics: a scalar implicature. As above, Narcissus' utterance seems to suggest that
			since *if he had been trying to communicate BLAH, he would have said BLAH*.
			but then again, suppose the context had been BLAH
				so we probably don't want to put blah into the meaning of blah

		OK, so let's build a model of this.

			General shape of model
				brief mention of types

			We're going to define a conditional probability distribution L(w|u) which represents the act of hearing an utterance and updated your belief about the world according using not just the literal meaning of the utterance but also pragmatic reasoning.

		Recall that a conditional distribution is a function that...
			So L takes (read: hears) an utterance u, and returns a distribution over the set W of possible ways the world could be.

			We're going to define L in terms of a speaker S. S believes that they are in world w (which is really just a strange locution for saying that they believe that the world is a certain way) and picks an

			Note the pleasing symmetry: diagram

			So far so good, but how to define S?

				S is going to reason about a listener Llit

			OK, so there are three layers. L hears u and thinks: what world must S have been in to have said u? And L assumes that S is trying to pick u so as to convey her world to Llit, a totally literal listener.

			I introduced this top down, but looking bottom up, we start with a literal listener, and do some nested Bayesian inference to obtain a pragmatic listener.




					For the computer scientists, this is the base case of the recursion. We haven't gone to the effort of writing recursive definitions, but the gist is to have listeners Ln and speakers Sn reasoning respectively about Sn-1 and Ln-1
		This can all be made precise quite nicely. Putting my technical hat on for a moment/paragraph: let the semantics be a relation between utterances (signals) and worlds (states). Then the base case of our recursion is a listener L which has a prior belief about which world they are in and ...
			S
			L
			The fix point of this recursion is an equilibrium representing the ``ideal'' listener/speaker.




			Graphically:

			listeners: arrows one way, speakers: the other way: make it in keynote i think, or google slides: R use the ones you have!!


			(digression: this arrow is a function from a to dist b: putting on the pointiest most arcane ivory tower shaped hat, this is a morphism in kleisli category of the giry monad, which is precisely why it makes sense to think of a conditional probability distribution as an arrow)


			This is a simple case, but the core idea is powerful. All sorts of pragmatic phenomena can be tackled with tools of this ilk: vagueness link  metaphor link  hyperbole link,  focus,  generic language,  politeness.

			With a logical semantics, we had a way to get from utterances to compatible world states, but no way to handle pragmatic meaning formally. By making things probabilistic, we get to do inference,
				now we have

				upshot: pragmatic meaning same type as semantic meaning: not this vague think any more

			The more general takeaway point,
				is that whenever we think about interpretation \
					meaning arises from a recursive process, where the base case is a conventional association between world states and linguistic forms conventionally referred to as a *semantics*.
						Next time, we'll see that the
							takes on a different character for sociolinguistic phenomena





		My favourite car game works like this. It has two players - on the count of three both say a word of their choosing. Then on the count of three again, they each say a word that they think summarizes the two words said on the last round. They repeat this step until convergence (i.e. until they both say the same word).

		Echo: fish
		Narcissus: boredom

		Echo:
		Narcissus

		It's a cooperative game - the players aren't trying to beat each other. To win, each has to think about what the other would say, knowing that the other playing is, likewise, thinking about them. This concept has a name, ly a Schelling point [link].

		brief name mention of games and wittgenstein

working example:

	a quote or something
	I detect a wrinkle of concern on your otherwise smooth and tobogannable brow

brainstorm:

	meaning:

		relationship between utterances and states of the world

			the right sort of mathematical model:

				formal semantics: a morphism in Rel (say you're glossing over details)

				why probability: beliefs about world, other direction:

					if you are in w,

					if you hear u

				diagram of pragmatic speaker

				why is probability the correct mathematical gadget?

				Echo: what about ...

				conv implic: formalizes grice
				technical hat: equilibrium
				in browser webppl

				What follows is an unfettered hagiography of this choice:



				other reasons probability is great:
					it's also conveniently modular in
						if we're interested in vowel height and affect: both world and utterance spaces are continuous:
							no problem!
					powerful inference methods, quantitative predictions,
					compatible with deep learning:
						modern AI is probabilistic. I want to state strongly that this is a Good Thing, even if you are against the anti-representationalist assumptions of modern machine learning.

					, easy to insert other kinds of uncertainty


































purpose: easy to read compelling intro to the idea of my work genre: nested models

A logician or linguist could be forgiven for being suspicious about probabilistic models of meaning.
	fuzzy logic, etc

turns out to be nice:

	interpretation is map from

An interpretation function is




mention xkcd blue eyed islanders and terence tao, mention goodman 2016
