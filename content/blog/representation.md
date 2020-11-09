---

title: "The nature of things"
author: "Reuben Cohn-Gordon"
date: 2020-10-26T17:07:24+01:00
draft: False

---



{{< figure src="img/narcissus.jpg" imageMaxWidth="1000px" width="200" class="left" >}}


> "credule, quid frustra simulacra fugacia captas?...quam cernis, imaginis umbra est" - "Fool, why try to catch a fleeting image, in vain?...What you perceive is the shadow of reflected form" [Met 3.432](https://ovid.lib.virginia.edu/trans/Metamorph3.htm)

<br>
<br>
<br>
<br>

------


The quest for artificial (A) intelligence (I) has an appealing narrative. At the center of this narrative is the search for a thing, and at its conclusion is the revelation of the absence of that thing.

The thing in question is the stuff in between the inputs to the mind (sensory data), and the outputs, such as motor controls. For example, what goes on when a person sees an object and draws it? Vision is the input, muscle movements are the output, but somewhere in the middle is surely a knowledge of what they saw, something which represents the object in question. In short:

Input -> The Thing -> Output



It's illuminating to trace the source of this intuition: it's a by-product of the idea, predating the existence of physical computers, that the mind is a program, a piece of software running on biological hardware.

In a computer program, the role of internal representations is clear. For example, suppose you were to design a system which takes a string describing a chess position and displays it as an image. The input is a list of characters and the output is, I suppose, some function from positions on a screen to pixel values. But the action happens at a "higher level"; you *parse* the input string to extract the information it contains about objects, like pieces and squares and their relative positions, and then you perform some rules, and *then* you decode it into instructions about how to display things on a screen. To wit:

Input -> The Thing -> Output

This kind of intuition about abstraction is fundamental to software engineering: you don't write a program which displays chess pieces on a board by reasoning about strings of characters, much less logic gates, transistors, or the movement of electrons in circuits, you write it by having an explicit representation of a chessboard and chess rules. That is, you work at the appropriate level of abstraction.

By analogy to the case of a computer program, it seems natural to conjecture that the mind processes sensory data into *representations* of the world, performs computations on these representations and then decodes them into an output.


It's the central obsession of AI - call it the "representational intuition".


If the intermediate objects in a computer program are representations of states of various kinds of systems, then what is the cognitive analog? This, presumably, encompasses all the kinds of objects which we think about: representations of physical objects and the meanings of sentences, but also personalities, styles of clothing, both the Midwestern and Bay area connotations of La Croix, your friend's recognizable gait, the way that Mandy Patinkin sounds a bit like Battleship Potemkin, etc.

So. AI operationalizes, as sharply as possible, the otherwise philosophical question of "what are things", because it is of course trying to perform exactly the kind of task where knowing what "things" are seems necessary.


### The never-ending debate

Largely because of the centrality of the representation intuition, artificial intelligence has an old-new (better in German: altneu) feel. A child of the information age, it nevertheless revolves around a debate at least as old as, say, Plato.

Discourses about AI feel stuck in an eternal limbo, with one set of people firmly convinced that a lack of representations is fatal for longterm AI efforts and another either disinterested in that kind of argument or more pragmatic in their approach.

A typical argument of the first group goes like this:

"Modern AI systems don't really *understand* what they're doing - they merely learn to fit the data, to recognize patterns. This will only go so far, and to really solve the *hard* problem of AI, something fundamentally different is needed."

This is the same argument Chomsky levels against behaviorists, for example concerning the ability to process language, the argument that Pinker makes against the connectionist account of word reading, and that goes [back and forth](https://blog.julianmichael.org/2020/07/23/to-dissect-an-octopus.html#thesis) still.

Note that it's fundamentally analogous to the "hackiness" criticism you would rightly level against the chess program that had no internal representation of a chess board or the rules of chess. Indeed, there are extensional failings of AI systems which gesture at their lack of abstract models - a vision system mistaking a leopard skin couch for a leopard because it lacks an understanding of 3D structures and cheats by looking at surface patterns instead.

### Seeds of doubt

{{< figure src="img/narcissus3.jpg" imageMaxWidth="1000px" width="350" class="left" >}}

> In the Metamorphoses, Narcissus with increasing frustration tries to communicate with the handsome stranger he encounters in a woodland pool. Who waves back but never reveals his identity.

------

Like a darkening horizon in front of this serene vision, there are some difficult questions.

How do we make good on the representational intuition? If we believe in these mental chessboards, so to speak, what do they look like, and what is the process by which the mind goes from input data to these representations?

But representations, which are constantly sought after, central in fact to the whole enterprise, have an elusive quality, are impossible to pin down.

Then there's the ineffectiveness of representations in practice. Purely symbolic attempts to operationalize the representational intuition, by building in linguistic representations, plans, complex models of scenes and objects, often have a brittleness to them, a bit like what might happen if you tried to write down a set of rules defining what good fashion sense is.


And converse to the surprising ineffectiveness of representations in actual engineering systems (with some caveats) is the effectiveness of systems without them. Vision and NLP are the flagship AI examples here. The AI story of the last decade has been that statistical models with a huge number of parameters that are fit on a huge number of datapoints (deep learning systems, that is) are the first generation of AI systems to actually get qualitatively impressive performance recognizing objects in images, generating images, translating sentences between languages, answering questions about images, identifying objects in videos, and so on.


### The twist

{{< figure src="img/narcissus4.jpg" imageMaxWidth="1000px" width="300" class="left" >}}

> "iste ego sum: sensi, nec me mea fallit imago..." - "I am he. I sense it and I am not deceived by my own image." Met 3.463




<br>
<br>
<br>
<br>
<br>

---------
The kind of sudden, paradigm-shifting epiphany that would clarify this situation, and also give the whole narrative a satisfying twist, might go like this:

What if representations are elusive because they don't exist, What if the failure of old fashioned AI is precisely to do with their seeking out of representations, and the success of modern statistical systems is not despite but *because* of their lack of representations.

### Anyway

Like any good twist, this idea has been foreshadowed by generations of philosophers who had a suspicion there was something funny about the nature of things, and the reification of mental objects.


So this is all by way of setting the stage, to ask: if representations in the mind are not "there" in the straightforward sense, what are they instead?
