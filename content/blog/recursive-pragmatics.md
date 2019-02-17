

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
