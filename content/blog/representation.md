---

title: "The nature of things"
author: "Reuben Cohn-Gordon"
date: 2020-10-26T17:07:24+01:00
draft: True

---



{{< figure src="img/narcissus.jpg" imageMaxWidth="1000px" width="200" class="left" >}}


> "credule, quid frustra simulacra fugacia captas?...quam cernis, imaginis umbra est" - "Fool, why try to catch a fleeting image, in vain?...What you perceive is the shadow of reflected form" [Met 3.432](https://ovid.lib.virginia.edu/trans/Metamorph3.htm)

<br>
<br>
<br>
<br>

------

TODO: put in the examples of copying here instead, and the several Ideas, which you can summarize at the end, referring to the examples:

	work in the terms: meaning and form

	Taking the computational intuition as far as it can go:

	language:

		- (in green) cognitive science is a process of debugging


The quest for artificial (A) intelligence (I) has an appealing narrative. At the center of this narrative is the search for a thing, and at its conclusion is the revelation of the absence of that thing.

The thing in question is the stuff in between the inputs to the mind (e.g. visual data), and the outputs (e.g. motor controls). For example, what goes on when a person sees an object and draws it? Vision is the input, muscle movements are the output, but somewhere in the middle is surely a representation of what they saw and their planned action. In short:

Input -> The Thing -> Output

It's illuminating to trace the source of this intuition: it's a by-product of the idea,  present since the discovery of computation, that the mind is a program, a piece of software running on biological hardware.

In a computer program, the role of internal representations is clear. For example, suppose you were to design a system which takes a string of characters describing a chess position and displays it as an image. The input is a list of characters and the output is, I suppose, some matrix of pixel values. But the action happens at a "higher level"; you *parse* the input string to extract the information it contains about objects, like pieces and squares and their relative positions, and then you perform some rules, e.g. discarding invalid positions, and *then* you decode it into instructions about how to display images on a screen. The "thing" between the input and the output is a representation of a chess board, and it's on this representation that most of the action happens: you might check, for example, if the position is a valid chess position, or maybe draw a marker to indicate whose move it is.

Those operations would be hard to define on the string which was input directly - it's important that you first convert it into the appropriate object.
TODO: hackiness: actually this gives a nice definition of hackiness: a program is hacky if it is


<!-- This kind of intuition about semantics is fundamental to computer science: you don't write the chess program by operating on  -->

<!-- which displays chess pieces on a board by reasoning about strings of characters, much less logic gates, transistors, or the movement of electrons in circuits, you write it by having an explicit representation of a chessboard and chess rules. That is, you work at the appropriate level of abstraction. -->


Early AI researchers were fueled by the idea that, entirely analogous to the case of a computer program, the mind processes sensory data into *representations* of the world, performs computations on these objects and then decodes them into an output.

If the intermediate objects in a computer program are representations of states of various kinds of systems, then what is the cognitive analog? Using the concrete example of vision, the intermediate object is your model of the physical world. It's then tempting to guess that things work as follows: to sketch an object, you have to take in a signal in the form of light hitting your eyes, transform it into information about (some parts of) the physical world, namely the object's shape, orientation, color and so on, and then use that information to plan the movements you'll make to sketch it.

Just as it would seem like an error of abstraction to write the chess program's operations in terms of the input string, it would seem impossible that such a complex task as sketching could take place without this intermediate representation.

Sketching objects is actually a task given to people with visual agnosia, a condition where the subject struggles to recognize objects. Agnosics' sketches tend to copy individual lines and features, but fail to preserve the object as a whole. This seems like a case where
TODO finish

But this kind of computational view of cognition generalizes far beyond vision. Think about the task of answering a question. The input is a sound, the acoustic signal corresponding to the question. We might imagine that what then happens is that this gets processed into not just one, but a series of intermediate objects: first the words, then maybe the grammatical structure, and then the *information* the question elicits - its *meaning*. And from there, the answerer consults their own knowledge - that's another, enormously complex intermediate object - and produces an answer.

Whether or not accounts like this are true, it's important to note that we *act* like they are.
All sorts of the things we talk about every day, the meanings of sentences, personalities, styles of clothing, both the Midwestern and Bay area connotations of La Croix, your friend's recognizable gait, etc, would seem to be just this kind of intermediate object: things which exist somewhere between the inputs and outputs of cognition.

<!-- That is, we talk about all kinds of intermediate objects that don't have any direct physical reality, but rather are internal to the mind:  -->

<!-- For language, the input is the sound (or visual stimulus) constituting an utterance, but the object in the middle is information about the world. This information, the *meaning* of the sentence, is the thing that is preserved by translation or paraphrase, in the same way that difference views of the same room map to a single invariant object. -->



<!-- other internal representations include the meanings of sentences, and concepts like personalities, styles of clothing, both the Midwestern and Bay area connotations of La Croix, your friend's recognizable gait, the way that Mandy Patinkin sounds a bit like Battleship Potemkin, etc. -->

<!-- To repeat all that in different words, since it's the main point: -->

<!-- Computer science has had a lot of success at separating semantics from implementation. To add numbers in a computer, you don't have to worry about circuity or memory. There's sort of a process of climbing up a ladder of abstraction, where you start with fundamental physics, and step by step design systems which operate on higher levels.  -->

<!-- The siren idea of traditional AI is that cognition does precisely the same thing: it separates semantics (meaning) from implementation (form). Using the tools of computer science, the goal, laid out very enthusiastically by early AI pioneers, is to reverse engineer how the brain ascends an analogous ladder of abstraction. -->

Since computer science has had so much success with (read: is entirely about) abstract objects which exist at a level of separation from physical reality, it's no surprise that people have, historically, wanted to apply the same ideas to cognition.

This perception of a parallel between intermediate objects in computation and cognition is the central obsession of AI - call it the "semantic intuition".


### Seeds of doubt

{{< figure src="img/narcissus3.jpg" imageMaxWidth="1000px" width="350" class="left" >}}

> In the Metamorphoses, Narcissus with increasing frustration tries to communicate with the handsome stranger he encounters in a woodland pool. Who waves back but never reveals his identity.

------

But like a darkening horizon in front of this serene vision, there are some difficult questions.

How do we make good on the semantic intuition? If we believe in these mental chessboards, so to speak, what do they look like, and what is the process by which the mind goes from input data to these abstract objects?

But abstract objects, which are constantly sought after, central in fact to the whole enterprise, have an elusive quality, are impossible to pin down.

Then there's the ineffectiveness of this world view in practice. Purely symbolic attempts to operationalize the semantic intuition, by building in linguistic representations, plans, complex models of scenes and objects, often have a brittleness to them, a bit like what might happen if you tried to write down a set of rules defining what good fashion sense is.


And converse to the surprising ineffectiveness of representations in actual engineering systems (with some caveats) is the effectiveness of systems without them. Vision and NLP are the flagship AI examples here. The AI story of the last decade has been that statistical models with a huge number of parameters that are fit directly from the inputs to the outputs of a task (deep learning systems, that is) are the first generation of AI systems to actually get qualitatively impressive performance recognizing objects in images, generating images, translating sentences between languages, answering questions about images, identifying objects in videos, and so on.

### The never-ending debate

Largely because of the centrality of the representation intuition, artificial intelligence has an old-new (better in German: altneu) feel. A child of the information age, it nevertheless revolves around a debate at least as old as, say, Plato.

Discourses about AI feel stuck in an eternal limbo, with one set of people firmly convinced that a lack of representations is fatal for longterm AI efforts and another either disinterested in that kind of argument or more pragmatic in their approach.

A typical argument of the first group goes like this:

"Modern AI systems don't really *understand* what they're doing - they merely learn to fit the data, to recognize patterns. This will only go so far, and to really solve the *hard* problem of AI, something fundamentally different is needed."

This is the same argument Chomsky levels against behaviorists, for example concerning the ability to process language, the argument that Pinker makes against the connectionist account of word reading, and that goes [back and forth](https://blog.julianmichael.org/2020/07/23/to-dissect-an-octopus.html#thesis) still.

Note that it's fundamentally parallel to the "hackiness" criticism you would rightly level against the chess program that had no internal representation of a chess board or the rules of chess. Indeed, there are extensional failings of AI systems which gesture at their lack of abstract models - a vision system mistaking a leopard skin couch for a leopard because it lacks an understanding of 3D structures and cheats by looking at surface patterns instead. This seems reminiscent of the failure to copy objects of visual agnosics.


### The twist

{{< figure src="img/narcissus4.jpg" imageMaxWidth="1000px" width="300" class="left" >}}

> "iste ego sum: sensi, nec me mea fallit imago..." - "I am he. I sense it and I am not deceived by my own image." Met 3.463




<br>
<br>
<br>
<br>
<br>

---------

While deep learning systems make no commitments to internal representations (which is not to say that they do not leverage inductive biases via their architectures), there are still constant efforts to eke representations out of them. But again, these are elusive objects. Asking where a statistical model that can recognize animals stores the knowledge that a giraffe is yellow doesn't yield a clear answer.

The kind of sudden, paradigm-shifting epiphany that would clarify this situation, and also give the whole narrative a satisfying twist, might go like this:

What if abstract objects in cognition are elusive because they don't exist. What if the failure of old fashioned AI is precisely to do with their seeking out of abstractions, and the success of modern statistical systems is not despite but *because* of their lack of them.



Like any good twist, this idea has been, in one form or another, offered up by generations of philosophers who had a suspicion there was something funny about the nature of things, and the reification of mental objects.

### Anyway

So this is all by way of setting the stage, to ask: if abstract objects in the mind are not "there" in the straightforward sense, what are they instead?

In a sense, this is a philosophical question, but what's nice about AI is that it operationalizes the question, as sharply as possible. It feels like applied philosophy: if you can understand the right way to think about abstraction, you can build a system which harnesses that understanding.
