---
title: "Pragmatics and Artificial Intelligence"
date: 2018-06-26T17:07:24+01:00
draft: true
---

structure:
	what pragmatics is
	key theme of my dissertation research: taking a neural semantics and using it to power Bayesian pragmatic reasoning
	some definitions

	link to two projects with two different kinds of semantics and tasks, but similar philosophy
		task 1: generating informative language
		task 2: interpretation non-literal language

	language model semantics:

		two tasks
		why it's magic
		the problem
		the solution:
			functional programming as inspiration and implementation
		why it's surprising

	distributional semantics:

		the task
		what a distributional semantics is
		how to translate the task into a vector space: each idea neatly corresponds to a new one: make table

Pragmatics and AI: using machine learning
			semantics and pragmatics together offer a picture of meaning

The idea of applying statistical models with the intricate
	and idealized
	struck me as vaguely magical at first.

I think what I found surprising is how directly they combine. In particular, probabilistic accounts of language interpretation and production, like the Rational Speech Acts model allow a statistical model to ``slot in'' for the semantics.

To get a concrete sense of what the Rational Speech Acts model is

			what is a semantics though?
				I'll give an answer that satisfies me, which is not to say that it's
					: a semantics is the *relation* between the states of the world and linguistic expressions which is *convention* in a *community of practice*
					Now for those three bolded words:
						by a relation, I have in mind a function
							(this is isomorphic to the set theoretic notion of a relation) *or more generally* a (joint or conditional) probability distribution over states and linguistic expressions
						by a *convention*, I have in mind what Lewis meant, which is a rule that is common knowledge, i.e. which everyone knows, assumes everyone else knows, assumes everyone else knows everyone else knows, and so on.
							For instance, I drive on the right
						By a community of practice, I mean what
							Penny? means, which I think is pretty intuitive: it's a set of people among which a convention exists
			I talk about one way to turn these ideas into a predictive model in
				link
				I recommend reading that post if you're interested in what follows, but in short
					in that view
					the semantics is a set theoretic relation
					conventions are up to order n
					the relevant community of practice is a pair of interlocutors (although generalizing this is something I've done some (unpublished) work on.)
			It's not the only way, but to my mind, it's by far the most appealing, because it wraps everything up in a way both compatible with logical work on semantics, Bayesian cognitive science and AI

			As advertised, it's the last of those that I want to talk about.
			two projects
