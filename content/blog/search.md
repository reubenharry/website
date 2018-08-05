---
title: "Searching the Library of Babel"
date: 2018-07-03T10:42:56+02:00
draft: true
---

seems like the natural thing to talk about would be the unrepresented nature of sentence meaning in ai

	connectionism vs
	behaviourism vs

	meaning in translation:

		where is it?

	are the librarians miscontruing the location of meaning?
		if so, explain

connect "there are no explicit rules" to "there is no meaning in texts"

what thoughts could really bring out the interesting complexity that i want to think about?




Borges inhabits a genre I think of as ironic realism. His stories are liberally sprinkled with a trope where he takes some abstraction of his choice and makes it parochially literal in a deliberately absurd way. As the first of two unwieldly neologisms in this post, I'll call it *borgesification*.

>"Every block of stone has a statue inside it and it is the task of the sculptor to discover it." - Michelangelo

For instance, I could imagine him writing a story in which the clearly figurative quote above is interpreted literally and sculptors spend their careers searching for certain blocks of stone which they think contain the desired statues. In the end, you'd be compelled to think that the dichotomy between the figurative and literal interpretations was uncomfortably blurry.

But rather than talking about an imaginary short story (though I'm sure Borges would appreciate that concept), what about an actual one, *The Library of Babel*, and its borgesification of meaning.

Since meaning is the intersection of artificial intelligence and linguistics that I care about, I can't help drawing some morals from it.


# Creativity as Search

One of the really old ideas in AI is that creativity is just search in the appropriate search space.

This applies both to problems that have an obvious search-like element (e.g. planning a route from 2 points that your roomba should take) but also creative tasks like writing a novel: there's a space of possible ways your novel could be, and *all you have to do* is to find the right one. Or to make a statue, you just have to find it: as the quote at the beginning of this post shows, this is an old idea. Actually a pretty recurrent one: Seferis...
						the Greek poet Seferis' remark that "all poems written or unwritten exist...The special ability of the poet is to see them.".

To take this idea seriously, one first has to define the space of possible solutions to the relevant problem (Dennett's [design space](TODO LINK) for instance), and then trawl through it.



# *Creativity as Search* Borgesified

In The Library of Babel, all books exist, present in an enormous library which constitutes the known world. Every possible combination of symbols seems to be present in some book somewhere.

>"Everything: the minutely detailed history of the future, the archangels’ autobiographies, the faithful catalogues of the Library, thousands and thousands of false catalogues, the demonstration of the fallacy of those catalogues, the demonstration of the fallacy of the true catalogue, the Gnostic gospel of Basilides, the commentary on that gospel, the commentary on the commentary on that gospel, the true story of your death, the translation of every book in all languages, the interpolations of every book in all books, the treatise that Bede could have written (and did not) about the mythology of the Saxons, the lost works of Tacitus."

In this universe, people search for truth by physically searching the library for the book that contains it.
In the real world, the reframing of creativity as search doesn't make creativity one bit easier, but not so in Borges' imagined one. Forget thinking about proof and mathematics - to find the answer to Fermat's last theorem, just find the book it's written in.

The absurdity of this conceit is somewhat obvious, but instructive to spell out in detail.  Imputing meaning to a text seems reasonable in general: if I read a book, I take it to be conveying a message from its author
	TODO CLARIFY
but when that book is just one of the totality of possible combinations of symbols in an endless library, it becomes clear that any meaning you find in it is
		meaning you put there.
The [locus classisus](TODO link) of smart thinking about meaning as it pertains to intelligence is Douglas Hofstadter's *Godel, Escher, Bach* which makes a point precisely on these lines:

>"people often attribute meaning to words in themselves, without being in the slighest aware of the very complex "isomorphism" that imbues them with meanings. This is an easy enough error to make. It attributes all the meaning to the object (the word), rather than to the link between that object and the real world.".

Borges, in typical fashion, introduces what is actually the reasonable and correct position as a fringe belief of radicals:

>"(I know of an uncouth region whose librarians repudiate the vain and superstitious custom of finding a meaning in books and equate it with that of finding a meaning in dreams or in the chaotic lines of one’s palm . . . They admit that the inventors of this writing imitated the twenty-five natural symbols, but maintain that this application is accidental and that the books signify nothing in themselves. This dictum, we shall see, is not entirely fallacious.)"

The librarians' confusion of texts with their meanings lead them to perform their search for meaning as a search for texts.

	If they were in a library constructed by an English speaker in which only truths were recorded, they'd be in luck

	the search for new ideas happens over the wrong space: that of all possible book-length strings of characters.


It would be like (to use a Hofstadterian analogy again) understanding ant colonies by dissecting ants, understanding a movie by watching individual pixels on the screen, or learning to program by memorizing muscle movements corresponding to successful programs.

Borgesification is everywhere in Borges. Another story, **Pierre Menard, Author of the Quixote** is a borgesification of the idea that writing is just a changing of the context of a previous text.

But I can think of examples outside Borges too. At one point in Lemony Snicket's **Series of Unfortunate Events**, Klaus has to open a door by entered a passcode. He's told this code is the sentence describing the central theme of Anna Karenina and accordingly enters the following words

>"a rural life of moral simplicity, despite its monotony, is the preferable personal narrative to a daring life of impulsive passion, which only leads to tragedy."

And the door opens. This is absurd because you could never expect someone to enter that exact sequence given the prompt: there might be one moral of the book, but there are countless strings of words which represent that moral. In other words, there might be a unique answer in concept space, but not in string space.

Only in a world where symbols were somehow indistinct from their meanings could this security system be expected to work.

# The moral

A perennial criticism of modern statistical AI, particularly of machine translation, is that it does not engage with the correct level of abstraction, namely the *meanings* of the sentences it translates.

For instance, critics regularly (and tediously) complain that neural machine translation systems don't manipulate representations of syntactic or semantic structure and as such, are just a sort of data-driven hack.
	what they imagine is first the process of adducing the meaning of a sentence
		then doing some finagling AT THIS LEVEL OF ABSTRACTION
		and then producing a


A word for this, coined by Douglas Hofstadter (the second neologism, as promised): sphexishness. This describes the "algorithm" of the Sphex wasp when preparing food for its young. In short, "the wasp's routine is to bring the paralyzed cricket to the burrow, leave it on the threshold, go inside to see that all is well, emerge, and then drag the cricket in. If the cricket is moved a few inches away while the wasp is inside making her preliminary inspection, the wasp, on emerging from the burrow, will bring the cricket back to the threshold, but not inside, and will then repeat the preparatory procedure of entering the burrow to see that everything is all right." -(*Godel, Escher, Bach*).

Although subsequently the biological facts have turned out to be more nuanced, the original example is still useful. The point is that the wasp's algorithm works just fine in normal circumstances, but needlessly repeats the burrow-checking step when one element of its routine is altered. It doesn't really understand the meaning of its actions, because if it did, it would act differently. In other words, *this is an extensional failing which is taken to indicate an intensional problem.*


The criticism of machine learning is that it too is sphexish. It works in a certain subset of cases, but by introducing
	winograd schema is like wasp failing

the worry is valid. For instance, [this well-known article](http://rocknrollnerd.github.io/ml/2015/05/27/leopard-sofa.html) nicely illustrates a failure mode of statistical image recognition where a leopard skin couch is recognized as a leopard. The problem seems to be that the decision process for leopard-hood used by the statistical classifier has no abstract notion of 3D shape.




which may as well culminate in a motto that is the apex of the psuedo-nomenclature: **sphexishness is what you get when you borgesify intelligence**:

Just in the same way that the librarians think randomly chosen strings of symbols are about history or their lives, I like to think Borges' The Infinite Library is really about this debate in AI.

After all, you might say that the librarians' pursuit of truth in the library of Babel is sphexish, operating on too low a level of abstraction, and making their work futile.

# That said.


	> Klaus: the moral of *The Library of Babel* is that an algorithm which takes into account the relevant abstractions is doomed to failure.



I think you'd be wrong to agree with this version of Klaus' answer (from an alternate reality's *A Series of Unfortunate Events*, where Tolstoy is replaced by Borges).

Nor indeed do I think the above is a good moral as regards machine learning and modern statistical AI.

I don't think it's a good moral because the problem with the librarians is not that they're sphexish. I think real intelligence is sphexish.

Their problem is that they believe meaning inheres in objects (here texts), not in the interpretation of those objects in their contexts.
		parody of efforts to find structure: these observations (books) are not evidence of structure in the latent space, even if particular books appear very structured:

		hard to get across
	The librarians' problem is not that they are failing to find the right abstractions, but rather that they're crazy to search at all

connect "there are no explicit rules" to "there is no meaning in texts"

How does THIS relate to AI???

	well: the gofai desire to translate by taking a sentence
		let's look at how image captioning used to work. I say "work", but
			as the brain was believed to be: take image: parse it into objects, etc etc

how do these two criticisms relate?

	what would you need to change to make the librarians' actions reasonable?
		you'd need the library to be man-made and the books to have the weird property that there's little to no junk interpretations: PUSH THIS FURTHER


You might wonder, reading this slightly odd hagiography of Borges, whether I really believe his stories are *about* what I'm saying they're about.
	facetious answer: reading into them
	but yeah, I do

It's sometimes
	effective to communicate by story
		Dan Dennett, Hofstadter









			This leads to a question posed by Douglas Hofstadter as the jukebox question of meaning TODO CHECK
				what part of the content of a book is in the physical object, and what part is in the system which interprets it?
				Erring too far one way



				QUOTE



					this is like?
						: finding meaning in kaballah
















MAYBE DROP ALL OF THE SECOND ONE
	Philosophical Idea 2: Pierre Menard

		creativity is recontextualisation

		AI spin?? :

				(when you're unsure what to do, remember this as your destination: borges' idea of inventing an author/meaning is like a virtual object, and all objects are virtual. make the connection abundantly clear)

				Postmodern strains of thought often take interest
					in the notion that the meaning of texts (writ broad)
						are not fixed in the texts themselves, but are continually recreated by succesive authors' usage of those texts

						Thus two authors can express the same idea but have it be understood differently...??

						also: forms are necessary
					or: none of the meaning is natural to the text itself
				or more precisely: texts that are conceptually the same can differ by context NOT QUITE
			the idea that writing is really just recontextualisation of past texts:
				for example, Catullus writes a poem
					remarkably similar to:
						...
						is this good example?

				This radical idea builds on the difficulty in separating the meaning of a text from the process of interpretation.
					to what degree is blah Blah and to what degree is its blahness a result of our interpretation

					most radical: nothing in text at all



			Borgesification:

				Finally my favourite.

				story: pierre menard...

				Pierre Menard is a poet totally devoted to creating original work, but his magnum opus is a word for word copy of Don Quixote.
					Borges goes into great detail pointing about how...

					quotes:

						The Cervantes text and the Menard text are verbally identical, but the second is almost infinitely richer. `..truth, whose mother is hostiry, rival of time, depository of deeds...": written by the "ingenious layman" miguel de Cervantes, is mere rhetorical praise of history, [but for menard]: History, the mother of truth! - the idea is straggering. Menard, a contemporary of William James, defines history not as a delving into reality but as the ery fount of reality.The contrast in styles...

				AH: (quix X context1) vs (quix X context2): tensor product


				point here:
			I'm also thinking of his imagined poet, Pierre Menard, who copies Don Quixote word for word, in order to produce an entirely original text.

				in this case, the philosophical point in the background is that


				but which are only fantasy by virtue of taking a philosophical idea to an overliteral extreme:


				he even admits it: fantasy quote

		Borgesification without Borges:

			Borgesification is pretty ubiquitous
				both as a technique in literature
				and a genuine fallacy in philosophy

				for the former,
					in one of many excellent Series of Unfortunate Events (surely the most postmodern children's books ever written), there is a door that can only be unlocked by entering on a keyboard the central theme of Anaa Karenina
						this, is "is that a rural life of moral simplicity, despite its monotony, is the preferable personal narrative to a daring life of impulsive passion, which only leads to tragedy."

					This is a borgesification, because while Anna Karenina might indeed have a central theme, the premise of this situation is that the precise wording Klaus provides is somehow
						is that the door requires to be provided a particular point in the sentence space, not the idea space

					precise wording is surely not derivable

						search space of ideas: choose idea
						requires: search space of words

			This sort of confusion between high level ideas (like
			) and low level ones is

				for the latter, I think that the view that free will has anything to do with the physical world's being determined or not, is really a fallacy of borgesification


			Ovid loves borgesification.
			EXAMPLE:














"The idealists argue that the hexagonal rooms are a necessary form of absolute space or, at least, of our intuition of space. They reason that a triangular or pentagonal room is inconceivable."

		"(I know of an uncouth region whose librarians repudiate the vain and superstitious custom of finding a meaning in books and equate it with that of finding a meaning in dreams or in the chaotic lines of one’s palm . . . They admit that the inventors of this writing imitated the twenty-five natural symbols, but maintain that this application is accidental and that the books signify nothing in themselves. This dictum, we shall see, is not entirely fallacious.)"

		"From these two incontrovertible premises he deduced that the Library is total and that its shelves register all the possible combinations of the twenty-odd orthographical symbols (a number which, though extremely vast, is not infinite) that is, everything it is given to express: in all languages. Everything: the minutely detailed history of the future, the archangels’ autobiographies, the faithful catalogues of the Library, thousands and thousands of false catalogues, the demonstration of the fallacy of those catalogues, the demonstration of the fallacy of the true catalogue, the Gnostic gospel of Basilides, the commentary on that gospel, the commentary on the commentary on that gospel, the true story of your death, the translation of every book in all languages, the interpolations of every book in all books, the treatise that Bede could have written (and did not) about the mythology of the Saxons, the lost works of Tacitus."

		"When it was proclaimed that the Library contained all books, the first impression was one of extravagant happiness. All men felt themselves to be the masters of an intact and secret treasure. There was no personal or world problem whose eloquent solution did not exist in some hexagon. The universe was justified, the universe suddenly usurped the unlimited dimensions of hope. At that time a great deal was said about the Vindications: books of apology and prophecy which vindicated for all time the acts of every man in the universe and retained prodigious arcana for his future. Thousands of the greedy abandoned their sweet native hexagons and rushed up the stairways, urged on by the vain intention of finding their Vindication. "

		information theoretic point that if everything is meaningful, nothing is meaningful

		possible worlds semantics
		textual variants: how do you represent a book?

		basically the question of deciding whether there is an intentional author

		dennett and questions of semantics:
