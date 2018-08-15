---
title: "Artificial Intelligence and the Library of Babel"
date: 2018-07-03T10:42:56+02:00
draft: true
---

the moral:

	the first is that sphexishness is a bad way to solve problems

	the second is that we, in the actual world, are like the librarians: we believe objects are natural kinds and thus perform an absurd process

	representables: in borges, the representation of meaning is the text

	in AI, representations are absent

	in borges' library, the task of finding an answer doesn't involve manipulating meaning or abstract objects

	1: they are wrong to search (for nonexistent entity)
	2: they are searching wrong

	mention searle

borges' story is about logic, and the relation between form and meaning: it's an obvious argument that the meaning of harry potter isn't just a function of the string itself:
	this is boring

in borges' story, there is an example of shifting context to dislodge meanings from their strings:
	but there's more, because this example is like in the real world but way too extreme (there's no real library)



say: there's a fairly obvious statistical fallacy, of inferring that the library isn't totally random on the basis of very rare chance occurences of well formed phrases
		but that's not all

seems like the natural thing to talk about would be the unrepresented nature of sentence meaning in ai

	no representation means no interpretability

	this and sphexishness both boil down to meaning


what thoughts could really bring out the interesting complexity that i want to think about?

	is a certain configuration of pixels a picture OF something?


>"Every block of stone has a statue inside it and it is the task of the sculptor to discover it." - Michelangelo

Borges inhabits a genre I think of as ironic realism. His stories are liberally sprinkled with a trope where he takes some abstraction of his choice and makes it parochially literal in a deliberately absurd way. As the first of two unwieldly neologisms in this post, I'll call it *borgesification*.

For instance, I could imagine him writing a story in which the clearly figurative quote above is interpreted literally and sculptors spend their careers searching for certain blocks of stone which they think contain the desired statues. In the end, you'd be compelled to think that the dichotomy between the figurative and literal interpretations was uncomfortably blurry.

But rather than talking about an imaginary short story (though I'm sure Borges would appreciate that concept), what about an actual one, *The Library of Babel*, and its borgesification of meaning.

Since meaning is the intersection of artificial intelligence and linguistics that I care about, I can't help drawing some morals from it.

# Creativity as Search

One of the really old ideas in AI is that creativity is just search in the appropriate search space.

This applies both to problems that have an obvious search-like element (e.g. planning a route from 2 points that your roomba should take) but also creative tasks like writing a novel: there's a space of possible ways your novel could be, and *all you have to do* is to find the right one.

Or to make a statue, you just have to find it; as the Michelangelo quote suggests, this idea turns up in all sorts of discourse about creativity and it's fun to spot. Another one by modern Greek poet Seferis:

> "all poems written or unwritten exist...The special ability of the poet is to see them.".

*Creativity as search* goes hand in hand with the quest in AI (and philosophy, for that matter) to find appropriate representations. I'll make that a bit less gnomic by way of example:

	for example, consider the task of image generation from sentences. Amazingly, deep learning has yielded a modicum of success at this [task](todo link): you provide a sentence describing a scene, like

	picture from paper TODO
		GOOD

Thinking about this task as a search problem, there's a space of possible ways
	but what is a particular way?

		picture space and pixel space: GOOD intuition carrier for DL


# *Creativity as Search* Borgesified

In The Library of Babel, all books exist, present in an enormous library which constitutes the known world. Every possible combination of symbols seems to be present in some book somewhere.

> "Everything: the minutely detailed history of the future, the archangels’ autobiographies, the faithful catalogues of the Library, thousands and thousands of false catalogues, the demonstration of the fallacy of those catalogues, the demonstration of the fallacy of the true catalogue, the Gnostic gospel of Basilides, the commentary on that gospel, the commentary on the commentary on that gospel, the true story of your death, the translation of every book in all languages, the interpolations of every book in all books, the treatise that Bede could have written (and did not) about the mythology of the Saxons, the lost works of Tacitus."

In this universe, people search for truth by physically searching the library for the book that contains it.
In the real world, the reframing of creativity as search makes creativity not one bit easier, but not so in Borges' imagined one. Forget thinking about clever proofs - to find the answer to Fermat's last theorem, just find the book it's written in. To write the most beautiful song in the world, just pick it out from the space of possibilities.

The fallacy inherent in this conceit is somewhat obvious, but instructive to spell out: a string of characters is not the same as the meaning you might obtain by interpreting that string according to any particular language.


<!-- (Imputing meaning to a text seems reasonable in general: when I look at a book consisting of strings of characters, it's not weird that I learn something about the world by interpreting those characters according to the rules of English. -->

<!-- But when that book is just one of the totality of possible combinations of symbols in an endless library, the belief that you can learn things about in any particular language ) -->

The [locus classisus](TODO link) of smart thinking about form, meaning and intelligence is Douglas Hofstadter's *Godel, Escher, Bach* which makes a point precisely on these lines:

> "people often attribute meaning to words in themselves, without being in the slighest aware of the very complex "isomorphism" that imbues them with meanings. This is an easy enough error to make. It attributes all the meaning to the object (the word), rather than to the link between that object and the real world.".

Someone sensible who lived in the library would never reject the null hypothesis that no interpretation of the library's books gives you any information about anything in the world. Borges, in typical fashion, introduces the reasonable and correct position as a radical belief:

> "(I know of an uncouth region whose librarians repudiate the vain and superstitious custom of finding a meaning in books and equate it with that of finding a meaning in dreams or in the chaotic lines of one’s palm . . . They admit that the inventors of this writing imitated the twenty-five natural symbols, but maintain that this application is accidental and that the books signify nothing in themselves.)"


A consequence of the librarians' belief that meaning *inheres* in the library's books is that they answer questions about the world by searching over the space of strings, rather than the space of ideas that those strings might, in some language, represent.

			confusing: this WOULD be useful
		It would be like (to use a Hofstadterian analogy again) understanding ant colonies by dissecting ants,

<!-- or learning to code by memorizing muscle movements corresponding to successful programs.  -->

 creating a picture by choosing the colours of individual pixels one by one. To wit, you shouldn't be thinking on the level of pixels, you should be thinking on the level of objects.

TODO not too hard to spot it elsewhere. At one point in Lemony Snicket's *Series of Unfortunate Events*, Klaus has to open a door by entered a passcode. He's told this code is the sentence describing the central theme of Anna Karenina and accordingly enters the following words

>"a rural life of moral simplicity, despite its monotony, is the preferable personal narrative to a daring life of impulsive passion, which only leads to tragedy."

And the door opens. This is absurd because you could never expect someone to enter that exact sequence given the prompt: there might be one moral of the book, but there are countless strings of words which represent that moral. In other words, there might be a unique answer in concept space, but not in string space.

Only in a world where symbols were somehow inseparable from their meanings could this security system be expected to work.

# The superficial moral

Just in the same way that the librarians think randomly chosen strings of symbols are about history or their lives, I like to think Borges' The Infinite Library is really about AI.

A perennial criticism first of [connectionism](todo link) and now of modern statistical AI as used in machine translation, is that it does not engage with the correct level of abstraction, namely the *meanings* of the sentences it translates.

For instance, critics regularly complain that neural machine translation systems don't manipulate representations of syntactic or semantic structure and as such, are just a sort of data-driven hack.
	The alternative they imagine is that the system first translates the target sentence into an abstract meaning, maybe represented in first order logic, and then back out into another language.

		then doing some finagling AT THIS LEVEL OF ABSTRACTION
		and then producing a


A word for this, coined by Douglas Hofstadter (the second neologism, as promised) is sphexishness. This describes the "algorithm" of the Sphex wasp when preparing food for its young. In short, "the wasp's routine is to bring the paralyzed cricket to the burrow, leave it on the threshold, go inside to see that all is well, emerge, and then drag the cricket in. If the cricket is moved a few inches away while the wasp is inside making her preliminary inspection, the wasp, on emerging from the burrow, will bring the cricket back to the threshold, but not inside, and will then repeat the preparatory procedure of entering the burrow to see that everything is all right." -(*Godel, Escher, Bach*).

Although subsequently the biological facts have turned out to be more nuanced, the original example is still useful. The point is that the wasp's algorithm works just fine in normal circumstances, but needlessly repeats the burrow-checking step when one element of its routine is altered. It doesn't really understand the meaning of its actions, because if it did, it would act differently. In other words, *this extensional failing is taken to indicate an intensional problem with the wasp's algorithm*.

*Sphexish* is the perfect word to describe the librarians' method of answering questions about the world. And machine learning, according to some, has the same failing: it works in a certain subset of cases, but by dint of not engaging with meaning, will fail - it's claimed - when meaning is required. A standard example is a Winograd schema:

	feared

	in order to translate this correctly, you have to identify which group "they" refers to, which requires you to know that
It's worth pointing out that Winograd schemas aren't exactly the Achilles' heel they're posed as for neural machine translation - for instance, see TODO LINK
	but it's easy to sympathise with the critics: it just *seems wrong* to not engage with the appropriate abstractions in favour of training systems on swathes of inherently meaningless data, like books in the library of Babel.

Another is [this well-known article](http://rocknrollnerd.github.io/ml/2015/05/27/leopard-sofa.html), which nicely illustrates a failure mode of statistical image recognition where a leopard skin couch is recognized as a leopard. The problem seems to be that the decision process for leopard-hood used by the statistical classifier has no abstract notion of 3D shape. It's sphexish.

So you might agree with the following version of Klaus from an alternate reality's *A Series of Unfortunate Events*:

> Klaus: the moral of *The Library of Babel* is that an algorithm which doesn't take into account the relevant abstractions is doomed to failure.

# That said.


I think you'd be wrong to agree with this version of Klaus' answer. Nor indeed do I think the above is a good moral as regards machine learning and modern statistical AI.

I don't think it's a good moral because the problem with the librarians is not that they're sphexish. In fact, I don't think sphexishness is a problem at all.

Their problem is that they are committed to the misguided assumption that meaning is a thing books just *have*, rather than a thing books have in the context of an interpretation.

To put this in the context of AI, imagine

	I would say that the takeaway is

		meanings (which are abstractions, but you haven't shown that in any way)
		don't exist


		hard to get across
	The librarians' problem is not that they are failing to find the right abstractions, but rather that they're crazy to search at all


	consider how crazy it would be to say that a picture of a lion could be a picture of something else






You might wonder, reading this slightly odd hagiography of Borges, whether I really believe his stories are *about* what I'm saying they're about. Avoiding the obvious answer that *The Library of Babel* exists to problematize aboutness, I do think that
	they get at the core of
		meaning and
	But however you interpret the moral of *The Library of Babel*, I think it's fair to say that it
		central
			meaning

I also think they demonstrate how effective it is to do philosophy by parable, a moral which philosophers like Dan Dennett have taken up with aplomb.

THE END TODO: lop rest off
-------

# Borgesification Elsewhere

<!-- Borgesification is everywhere in Borges. Another story, **Pierre Menard, Author of the Quixote** is a borgesification of the idea that writing is just a changing of the context of a previous text. *Funes the Memorious* TODO CHECK is a borgesification of  -->














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
