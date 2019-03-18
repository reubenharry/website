---
title: "Machine Learning and Pragmatics"
date: 2018-06-26T17:07:24+01:00
draft: true
---

OK, modularize into series:

	1. the concept of neural pragmatics:
		translation, captioning
		mention another interpretation:
			vector space
	2. the functional programming beauty of inference here

I remember an idea which really struck me when I was learning about probabilistic models of language.

I'd just learnt about nested agents for playing reference games, like a speaker model S1(u|w) that reasons about a listener L1(w|u) that reasons about a literal speaker, and so prefers saying hat to the ambiguous glasses:



said:
	what if R1 and R2 were real images, and a machine learning model like a convolutional neural net replaced the hand specified semantics

Improving quality


Nested probabilistic models of language are pretty cool, but are they useful?

idea I really like:

	you have this model that you given a semantics and priors
		can show things qualitatively
			also in theory you can test

	let's instantiate the semantics as a neural

	When I first heard this idea, I was totally struck by how ambitious it was:

		you take this abstract model
			and suddenly it becomes a generative model of language

			you can really DO Gricean pragmatics in the real world

So that's the picture. How can we realize it? A large part of my PhD research has consisted of different answers to this question.

I want to explain why I found this so compelling:

	I'd assumed the connection between totally theoretical toy models of language and totally data-driven
		ones
			would involve a lot of fiddly machinery,
		but no:
			image captioners, once trained, are conditional distributions of exact the right type to serve as the S0

	worlds colliding

	if it worked, this model would be able to use the full range of language
		not finite
		and the full complexity of the image
			not just one feature


### Abstracting a little ###

maths and representations:

	a logical form can mean lots of things

	this is powerful

	for instance, W could be points in a vector space, representing words

		or W could be just a set of worlds

Like good logicians, we can separate formal expressions like
	S1 =...
	from what they mean.

	What they are is just a formal expression.

	What they mean is a probability distribution.
	But what probability distribution?
	That depends on the values of W, U, S0 and L0.

	Specifying those things constitutes an interpretation of S1.

	In that sense, we can talk about giving a semantics to these expressions, but with care to distinguish the semantics of EQUATION from the semantics of
		Totally different beasts.


	Bringing this around, the idea in
		blah
			is just to use a neural net to provide the semantics for equation BLAH

So the above is just: what if that semantics were...

### Algorithmic Innovation ###

OK, so now that we have a model

	a different sort of problem looms:




So now we have an interpretation for

As discussed above, this is in theory a very powerful thing:
	in generating a referring expression for R1, the S1 should now be able to

	Note that the problem of alternatives (i.e. how do we choose U), which is one of the big issues with this class of models, is implicitly addressed:
		everything is an alternative, with probability depending on S0.

But unfortunately, there are two problems: actually computing values from this distribution is totally and completely intractable.

1. Accessing the s0 distribution:

How do we find the max?

	Intractable.

	But we can find the max of a simpler distribution, such as: beam

	max . beam . s0word

2. OK, now for pragmatics:

	max cdot pragmatics cdot unfold cdot s0word

	That clearly doesn't work.

	One option: max cdot pragmatics cdot beam cdot s0word

	The problem: exponentially diminishing returns

	Solution two:

		max cdot beam cdot pragmatics cdot s0word

	I've taken some pains, in presenting this problem to phrase it in such a way that the solution amounts to no more than commuting the order of the operations.

	This change of order seems trivial, but much like most things of this flavor in functional programming (or category theory), the actual consequence of making this change has very subtle consequences.

	For one, s1inc and s1glob are not equivalent. This issue is orthogonal to the beam search. Neither [fully unfolded versions] are equivalent.

	But, and this is the crucial point, s1inc serves as a very good approximation of s1glob in practice:

		at least, this is what the results of my somewhat exploratory evaluations in BLAH and BLAH suggest.

	LARGER PICTURE:

		unfold is compositionality, pragmatics is pragmatics: so it's about which you do first

	1. to find the max, you need to search all

		Solution

	2. Why? Well essentially because of the norm:
	you don't need the norm if you just want the max value, but if you want the max value, you have to search over all utterances. No good.

### A functional programming solution ###

lazy:

	can talk about generating infinite distribution and then choosing best things

is this a fusion???

	build up a list
	reorder it
	take it down

for problem 1: beam search:

	takes a distribution over a recursive type:
		takes the algebra
		folds

There's an elegant solution, which I've used a lot in my work, first employed by VEDANTAM.

Step one:

	note that sentence dist is product of word dists: inductive

	note that we can define s1 on word dist

unfold . pragmatics approx pragmatics . unfold

or is it:

	greedy . fmap pragmatics . unfold
	greedy . pragmatics . unfold

This strategy should generalize to any *unfold* over any recursive datatype. In Haskell terms, unfold can be any *anamorphism*.

square diagram

This is, very abstractly (but in a way that can be made totally precise with a hefty dose of category theory) much like the solution to the problem of intractability above.

In short, the trick is to recall that a
	is recursively generated

We could do the opposite

DIAGRAM

for any recursive generation. tree, or characters

GIF

### What if the state space is made of language not images? ###

we take $W$ to be a state space. For linguists, each w in W is a possible world.

	but we can be more abstract, just like in physics.

	images seem like pretty natural representation of a possible world.

		note the word representation: the image isn't the possible world itself, but rather a sort of description of one, albeit a description we can parse visually

	but we could be a bit more abstract.
	What if (what if?!) we described a possible world by a sentence in English.

		what would the literal speaker be doing:

			produce English sentences compatible with that world:

				such a thing would

			translation

	we can also be more imaginative.

### Translation ###

Many to one

semantics of the model (importantly: not semantics of language - that's different):
	semantics of the formal model is a particular...



I previously TODO LINK used this diagrammatic as a sort of paradigmatic statement about meaning

	looking at the simple case where you choose between

these are be broadly split into two sets of qualms:

	(qualms about W)

	1. There are more than 2 things you can say (qualms about U)
		utterances seem to have recursive structure (the picture [of the pipe [which I bought])
	2. The world consists
		States of the

1. not a problem! we can recursively generate utterances in a probabilistic fashion (see PCFGs as a simple case)
	in fact, a recursive neural net as a very simple example of a probablistic

	anamorphism

2. Bit trickier. Let's table it,
	but future work

The whole inspiration came from a functional programming intuition:

	often, when working with recursive structures,
	oh, maybe lazy eval for inference:


		generate infinite list, then sum

	fold then double vs double then fold


I didn't get a change to make this point in the paper, but this diagram isn't just an intuition:

	it can be made totally formal

	unfold ::
	pragmatic ::

	unfold . pragmatic
	pragmatic . unfold

What's nice about working at this level of abstraction is that we have now effortlessly generalized to **any recursion pattern**. In other words,
	suppose, like linguists everywhere, we thought that linguistic expressions had tree structure

same pattern applies

lazy eval:

	beam . unfold . pragmatic:

		does a beam search which only explores the regions of the distribution

		beam is catamorphism: whole thing: hylomorphism

so once again, fuctional programming
	operates at the perfect level of abstraction, allowing us to write programs that are isomorphic to explanations of those programs.

here's a case study in scaling that
	marries idea from functional programming
	with Bayesian probability




# Unfold

familiar with folding a list:

[1,2,3] -> 6

[2,3,4] -> 9

Certain operations commute:

	eg





For instance, if you give me a really fancy
	image captioning

red bus

marriage of computer science theory (mathematics)
	and practice

	functor:

		we can either

The general story is the same as before


		now it turns out that in natural language, utterances are more than just elements in set:
			they have structure:
				at the very least, they're temporally extended,
					but a bit more generously, they're sequences of words
						and if you're a linguist, you probably believe that they are recursively generated in a fancier
		now at this stage, you could ask yourself two questions, one of which befits a theorist and the other, an engineer
			1. Does pragmatics interact with this recursive structure
			2. If such an interaction exists, does it help with intractability of inference?
		I haven't done much more than dip my toe into these questions, but at least, some of the work I've done pertains
			Concretely, I worked out the details of a sequence of words, incremental:
				this lets you do inference efficiently, and makes some interesting predictions about linguistic behaviour
				high level:
