---

title: "The nature of things"
author: "Reuben Cohn-Gordon"
date: 2020-10-26T17:07:24+01:00
draft: False

---

<!-- TODO:

copying, image recognition

general goal:  
	opinion piece about AI, specifically written in a way that you would be comfortable sharing (idiosyncratic, but not too idiosyncratic)

notes:

	I have this nice idea of introducing the IDEAS, and quotes of people who said them: this feels like great way of getting inside my skin

	QUESTION: do I want to write about necessity instead?
		or not instead: with. that is: search for essential representations

	writing about copying:

		task of copying meaning
		fails without understanding
		by understanding, we mean: accessing representations
		in fact, an example where this plays out is scribes
		computational example: translating between markup languages
		comparison: translating between computer languages and translating between natural languages: difference of complexity different type fundamentally?

	theme/framing:

		the invention of nature (keep this in mind, but reserve option of saving it for the next chapter)


	specific communicative goals:

		the sheer generality/ubiquity of the question

	written with who in mind as audience:
		cj, brooke, chiara, HIRO, JOSIAH


	content:

		representations are both abstract and concrete things: this is a big idea
		the idea from computer science and philosophy of language that certain objects are ways of talking and don't correspond one to one to things in the model, like amb, or "nobody" or "an occasional sailor"
		concrete example:

			something like (amazon) Echo copying:

				what is required in order to copy

		follow by piece introducing Echo



	relevant things you've already done:
		letter to martin (Book/sphexishness)
		epistle.tex
		paper (in semantics)
		the part about ovid




TODO:

	what are representations (by example)
	thinking of these as latent variables

	take these cases:
		self driving car
		translation

	the section on: what goes wrong: we've set up idea of representations as symbols in algorithm, but now: where are they to be found?
		maybe: take the example of

	also: I'm cutting a broad swathe, of course.
		blah is a type of thing, blah is a particular instance, blah is a concept, and so on. But the point is

	a different approach:
		here is how it is operationalized:
			we have a task, say blah
			what is the function which takes the input data to birds. what is the thing in the machine which looks like...
			when we see the scene, we get data, but have to calculate what the scene was like to have produced that: we *infer* the scene: it is the latent variable which we then use to...
			the bayesian incarnation of symbolic ai is not substantially different, only more refined: better tooling

	only goal: introduce abstractions, and see them as latent variables

	hofstadter basically does the thing this article is trying to do, re. concepts like sphexishness

	need to dive into something detailed. Alexa answering questions

		but it never works. maybe i should:

			write in response to articles like:
				Bender article on language
 -->

{{< figure src="img/narcissus.jpg" imageMaxWidth="1000px" width="200" class="left" >}}


> "credule, quid frustra simulacra fugacia captas?...quam cernis, imaginis umbra est" - "Fool, why try to catch a fleeting image, in vain?...What you perceive is the shadow of reflected form" [Met 3.432](https://ovid.lib.virginia.edu/trans/Metamorph3.htm)

<br>
<br>
<br>
<br>

------

<!-- Despite all the hype for AI these days, people rarely talk about its uncanny sense of narrative. -->

<!-- If I were to be polemic - let's say that I am - I'd put it to you that the quest to understand intelligence (I) and reproduce it artificially (A) has a totally misunderstood narrative. -->

<!-- to date is strangely unappreciated: it's a good story:
				talks, seminars, grant applications about bringing symbolic representations, interpretability,
				and yet,
					non-symbolic blah work better

				Footnote: (Of course I'm not original in seeing this narrative: no twist that narratively compelling hasn't been explored somewhere, although you read it a lot more in places totally detached from AI and cognitive science, but cognitive science too: hofstadter quote)
				the debate never progresses, it never becomes more nuanced. it is exactly the same debate it was between searle and quine, and the same debate it was between...
					the terms of this debate, as well as the arguments, never seem to change. -->






The quest for artificial (A) intelligence (I) has an appealing narrative. At the center of this narrative is the search for a thing, and at its conclusion is the revelation of the absence of that thing.
		<!-- Narcissus trying to talk to the handsome man in the pond until he realizes its his reflection. -->

<!-- I prefer the second version, but not only because it's a better story. -->

The thing in question is the stuff in between the inputs to the mind (sensory data), and the outputs, such as motor controls. For example, what goes on when a person sees an object and draws it? Vision is the input, muscle movements are the output, but somewhere in the middle is surely a knowledge of what they saw, something which represents the object in question. In short:

<!-- hears a question ("Why is your chaise lounge that hideous shade of purple?") and answers it? ("I thought it matched my puce wardrobe"). At either end of the process is an acoustic signal, but in the middle is a representation of the world, the objects in it, the relations between those objects, etc. -->

Input -> The Thing -> Output



It's illuminating to trace the source of this intuition: it's a by-product of the idea, predating the existence of physical computers, that the mind is a program, a piece of software running on biological hardware.

In a computer program, the role of internal representations is clear. For example, suppose you were to design a system which takes a string describing a chess position and displays it as an image. The input is a list of characters and the output is, I suppose, some function from positions on a screen to pixel values. But the action happens at a "higher level"; you *parse* the input string to extract the information it contains about objects, like pieces and squares and their relative positions, and then you perform some rules, and *then* you decode it into instructions about how to display things on a screen. To wit:

Input -> The Thing -> Output

This kind of intuition about abstraction is fundamental to software engineering: you don't write a program which displays chess pieces on a board by reasoning about strings of characters, much less logic gates, transistors, or the movement of electrons in circuits, you write it by having an explicit representation of a chessboard and chess rules. That is, you work at the appropriate level of abstraction.

<!-- Once you're in that kind of thought space, all it takes is a small idea, namely that the mind is itself just such an information processing machine.  -->

By analogy to the case of a computer program, it seems natural to conjecture that the mind processes sensory data into *representations* of the world, performs computations on these representations and then decodes them into an output.

<!-- The alternative would seem crazy, from this perspective. -->

It's the central obsession of AI - call it the "representational intuition".
<!-- , specifically a machine that takes sensory input and outputs motor control instructions. -->


If the intermediate objects in a computer program are representations of states of various kinds of systems, then what is the cognitive analog? This, presumably, encompasses all the kinds of objects which we think about: representations of physical objects and the meanings of sentences, but also personalities, styles of clothing, both the Midwestern and Bay area connotations of La Croix, your friend's recognizable gait, the way that Mandy Patinkin sounds a bit like Battleship Potemkin, etc.

So. AI operationalizes, as sharply as possible, the otherwise philosophical question of "what are things", because it is of course trying to perform exactly the kind of task where knowing what "things" are seems necessary.

<!-- *All* we have to do, to simulate intelligence artificially, is process sense data into representations, building up from raw sense data to higher and higher level concepts. -->

<!-- It's not hard to understand why this kind of thinking held sway for decades among cognitive scientists and AI researchers in the wake of the development of computers; the idea fits: thinking that the notion of computation was exactly the right "unreasonably effective" mathematical tool for modeling intelligence, in exactly the same way that various branches of applied mathematics turned out to be uncannily perfect tools for various of the physical sciences. -->

<!-- is the ability of a human to steer a car, taking into account sensory data (vision, audio) -->
<!-- The artificial analogue is a self-driving car; although the sensory modalities are different (humans might not use Radar/Lidar or the... TODO), the shape of the task is the same: take in data about the world, output motor controls to the steering. -->
<!--
	In that case, the *thing* is the state of the world
	ok, the problem: not a great example because we do go through explicit representations in solving this task.
 -->


<!-- Or take a very different case, of translation. The input is a sentence, say a sequence of letters or an audio signal. The output is a sentence in a different language. Again, a task that has been the target of AI since AI existed. -->



<!-- And yet when it comes to pinning those things down, they're fleeting.  -->
<!-- They have an elusive quality.  -->


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

<!-- The problem is that's not really a question anyone can answer.  -->

But representations, which are constantly sought after, central in fact to the whole enterprise, have an elusive quality, are impossible to pin down.

Then there's the ineffectiveness of representations in practice. Purely symbolic attempts to operationalize the representational intuition, by building in linguistic representations, plans, complex models of scenes and objects, often have a brittleness to them, a bit like what might happen if you tried to write down a set of rules defining what good fashion sense is.

<!-- , and conversely, the effectiveness of systems without representations.  -->

And converse to the surprising ineffectiveness of representations in actual engineering systems (with some caveats) is the effectiveness of systems without them. Vision and NLP are the flagship AI examples here. The AI story of the last decade has been that statistical models with a huge number of parameters that are fit on a huge number of datapoints (deep learning systems, that is) are the first generation of AI systems to actually get qualitatively impressive performance recognizing objects in images, generating images, translating sentences between languages, answering questions about images, identifying objects in videos, and so on.



<!-- It's pretty common to read thought-pieces, or grant applications, about how, while impressive, modern AI approaches are fundamentally limited, and the next frontier is incorporating semantics. -->

<!-- And yet, it never quite seems to pan out; no matter how much it seems like representations must be there in the middle, they are strangely elusive. -->

### The twist

{{< figure src="img/narcissus4.jpg" imageMaxWidth="1000px" width="300" class="left" >}}

> "iste ego sum: sensi, nec me mea fallit imago..." - "I am he. I sense it and I am not deceived by my own image." Met 3.463



<!-- [^2]:  -->

<br>
<br>
<br>
<br>
<br>

---------
The kind of sudden, paradigm-shifting epiphany that would clarify this situation, and also give the whole narrative a satisfying twist, might go like this:

What if representations are elusive because they don't exist, What if the failure of old fashioned AI is precisely to do with their seeking out of representations, and the success of modern statistical systems is not despite but *because* of their lack of representations.


<!-- Wait for it... -->
<!-- And, not to belabor the point, but what if the elusiveness of representations, both conceptually, and empirically in modern statistical AI architectures is not a bug, but actually a result of the fact that there is no mental chessboard, no explicit representation of the world, and that's why it's so elusive. Because it's not there. -->

<!-- , at least not in the way AI and cognitive science has traditionally conceived of them. -->


<!-- anti-representationalist streak of the behaviorists was right all along? -->


<!--
		They certainly exist linguistically. There's no problem talking about
			why
		but then again, there's no problem talking about a
			Alpha Go's intentions or strategies, even if those things are purely...
	If we shouldn't think of cognition as software running on neural hardware
	And if not representations, then what's the alternative?
 -->
### Anyway

Like any good twist, this idea has been foreshadowed by generations of philosophers who had a suspicion there was something funny about the nature of things, and the reification of mental objects.

<!-- the nature of things, in particular the kind of mental objects that  -->

So this is all by way of setting the stage, to ask: if representations in the mind are not "there" in the straightforward sense, what are they instead?

<!-- There's a long running strain of philosophers, from Ryle to Quine, to Dan Dennett who have been suspicious of reifying concepts, and their ideas feel very relevant. -->
<!-- and it's always felt to me that AI is the battleground where those ideas matter. -->








<!--
Various pieces you can do:

	latent variables as representations: framing the debate in bayesian terms
 -->

<!-- Each piece has a statement and then an explanation:

Objects aren't in the world, they're in the mind
	Thought is full of hollow objects
	Philosophical and literary skepticism about reification is the thing

Next piece: this is a fun piece on ghosts in the machine: start with tourist asking you about...

objects which aren't there.
The example of Homer

THIS GOES SOMEWHERE: i think outside this piece

I find this compelling because science and mathematics are full of things which only exist as a way of speaking, like talking about
various kinds of vibrations as particles,  
physics example: particles
to
Even in the study of natural language: "the occasional sailor" is no particular sailor, but can do anything a sailor can: "the occassional sailor walks past". Similarly, "the average family" has more than 1 child and
Nobody: fit the cyclops idea in here


Idea 1: AI is really about understanding the mind, because once you understand a thing, getting a computer to do it is the (relatively) easy part.

Idea 2: things out in the world are actually representations: quote jackendoff here



 -->
