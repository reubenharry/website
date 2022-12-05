---
title: "The nature of things"
date: 2022-06-22T18:11:57+01:00
draft: False
---

![](/img/narcissus.jpg)


The phrase "mere pattern recognition" and compatriots appear regularly in debates about AI:

> "Human perception, even in its most basic forms, involves remarkable amounts of abstraction and reasoning. It is far more than mere pattern recognition." - [François Chollet](https://twitter.com/fchollet/status/1034331102712758272)

> "These AI efforts are fundamentally flawed and doomed to failure. Why? Because, at best, these bots will be "mere slide readers" " - [Ameet Kini](https://twitter.com/AmeetRKini/status/998419255161950213)

> "gentle reminder: all large language models are good at is predict the next word in a sequence based on previous words they've seen. that's all. there's no understanding of meaning whatsoever" - [Abeba Birhane](https://twitter.com/Abebab/status/1597859803287912448)

What is being gestured at by these criticisms of modern statistical AI is a perceived dichotomy between true conceptual understanding and a shallow surface level hack which tricks the interlocutor into the impression that they are talking to an agent with real understanding.

The perceived distinction is neatly embodied by the difference between an echo and Echo.

An echo doesn't *understand* what you said - you could scream in Amharic, Swahili or English, and the distortion it produces would happen in the same way.

Echo, a person on the other hand, understands what the sound you made *means* and says the words back to you. When you say "Where are you?", it isn't just a series of vibrations in the air that she apprehends, it's information, meaning, *content*. (In this case, the information is that you're a busybody, to which she replies tauntingly: Where are *you*?)

In an abstract sense, Echo and an echo are similar, both being machines which take in a sound and spit out a sound in return. But in another sense, this viewpoint goes, they couldn't be more different.

A system like GPTChat has the same functional form as a human on the other end of a conversation, in the sense that it returns words when given words. Here is a conversation I had with it:

---

If computers were made of wood, would they work?

> No, computers need electricity and metal components to function.

Why?

> Wood is an insulator, meaning it does not conduct electricity. Without electricity, a computer cannot function. Additionally, wood is not strong or durable enough to withstand the physical pressures of a computer's components.

What about a conductive hard wood?

> While some hard woods may be slightly conductive, it would still not be enough to power a computer. The conductivity of the wood would be far too low to support the electrical components of a computer.

----

If deep learning systems from the 2010s onwards began to gesture towards semantic understanding, GPTChat practically flaunts its flexible, fluent ability to reason counterfactually, taking into account both linguistic knowledge and world knowledge.

But the perennial accusation against modern statistical AI, no matter how impressive it gets, is that it is more like an echo than Echo, an operation on form when it should be an operation on content.

That this criticism is so pervasive, despite the extraordinarily meaning-like behaviour of modern AI systems, is a testament to an enduring analogy between the mind and a computer, sometimes explicitly and sometimes implicitly at the heart of how we understand understanding.

Indeed, the echo-Echo distinction, and concomitant criticism, is intuitively familiar to a programmer.

Programs are sequences of characters, while their *meanings*, their *content* are numbers, or functions, or other sorts of mathematical entities, that live serenely in mathematically precise spaces.



Moreover, programs themselves work by manipulating not form but content. For example, a chess program might take a string of characters like "8/8/8/4p1K1/2k1P3/8/8/8 b - - 0 1" (form) and extract from this the state of a chess board (content). It could then perform some calculation on the basis of this content, like determining whether black can capture any pieces and print the answer (Yes/No) to the screen.

This is indeed a function from form (string of characters) to form (Yes/No), but trying to write this function without routing it through the content, the state of the chess board, and the surrounding concepts (the rules of chess defined in terms of this state, and so on) would be a doomed exercise.

Or even if not doomed, it would be pointless. There is a simple, reliable and correct way to write this function, in terms of the content.
In fact, a program that commits this sin of being echo-not-Echo, and trying to avoid the content, has a name: it is a *hacky* program.


All this is to say that in the domain of computer science, the importance of working with content rather than form is a well understood principle.

# But what does this intuition about programming have to do with AI?


![](/img/narcissus2.jpg)


What it has to do with it is the foundational premise of classical AI that human language is fundamentally like a programming language. In a programming language, the form is a series of characters. Likewise the form is a series of characters, or an acoustic signal, in a human language

In programming languages, the content - what the program is about - is the world of numbers, functions and data, like the state of the chessboard.

In a human language, what is the content? What is the equivalent of the chessboard, when interpreting a sentence like "If Archduke Ferdinand had not been assasinated, the First World War would still have happened."?

A fundamental idea of classical AI is that the "chessboard of the mind", as it were, is the world itself, and concepts like causes, wars and beginnings, as well as specific historical events like the First World War, defined in terms of this chessboard.

The process of assessing the truth of the above sentence about the First World War would be based on an understanding of a geopolitical situation at the beginning of the 20th century, a knowledge of how wars start, what it means for wars to start, a model of how else the war could have started, and so on. It would need to take into account possibilities like a concession being reached which would have defused the various tensions, judging this on the basis of the negotiating abilities of the relevant leaders.

The natural language "chessboard" around which this process of interpretation revolves is not exactly the world in the physical sense. The world that natural language is concerned with is filled with all sorts of entities, from events like wars, birthdays and unexpected sporting upsets, to concepts like moral responsibility, regret and luck.

Sellars, a philosopher of language, terms this world, of human things, the *manifest image*, in contrast to the world of atoms bumping around in the void which is (at least a little) more well understood.

This view of meaning in terms of a logical semantics in which the "state space" is the manifest image is deeply rooted in thinking about AI, even statistical AI, to the extent that a significant amount of research is dedicated to trying to extract semantic (more often called symbolic) content from neural models.

<!-- Explainability can mean many things, but one thing it often means is the act of extracting a more -->

<!-- The idea that meaning in natural language might work like this is quite old, and actually predates computers entirely.


Classical AI more generally is built on analogies like this between notions in computation and cognition.
    In particular, the idea of shallow understanding...
    human planning versus planning algorithms,
    natural language grammar versus formal language grammars -->


# On the other hand

![](/img/narcissus3.jpg)


The criticism of modern statistical AI as "echo not Echo" succeeds or fails on the quality of this proposed bridge between meaning in the sense of computer programs and meaning in natural language.

And in turn the quality of this bridge lives or dies on whether it even makes sense to describe the manifest image with the kind of rigour that we reserve for mathematics, logic and computer science.

Anyone who has tried, and subsequently failed, to pin down something as simple as what a government or a fight is in formal terms will know that things in the manifest image are strangely elusive, even things as seemingly concrete and exact as physical objects or what a word is.

If Echo-not-echo is the motif of the classical AI perspective, then perhaps Narcissus staring at his reflection in a pond, trying to work out the true nature of his unrequiting beloved is the modern response to the search for "true" meaning.

Indeed, there is a long history of scepticism of the classical view, broadly arranged around the idea that treating things in the manifest image with formal tools is a kind of hysterical literalism. Two famous such sceptics are Skinner and Quine:

> "I *accuse* cognitive scientists of relaxing standards of definition and logical thinking and releasing a flood of speculation characteristic of metaphysics, literature, and daily intercourse, perhaps suitable enough for such purposes but inimical to science" - BF Skinner

> "Uncritical semantics is the myth of a museum in which the exhibits are meanings and the words are labels. To switch languages is to change the labels." - Quine


A sceptic of the dichotomy between true and ersatz understanding might also point to the history of similar dichotomies that inevitably involve the word "merely" used misleadingly.

There is the perceived dichotomy between living organisms and "mere" physical systems, the latter being inert and unresponsive.

There is the perceived dichotomy between true free will and the mere absense of constraint.

There is the percieved dichotomy between a conscious agent with its own intentions and a mere "zombie" which extensionally displays the same behavior as a conscious agent but has nothing inside, and no (original) intentions of its own.

<!-- dennett todo -->




For example, one could dismiss a human's understanding of the world by saying that  they are *merely* using a network of electrical signal processing systems to transmute sense data into motor actions, and while true, the implication of this "merely" that people don't have "true" understanding would strike most of us as misleading.

<!-- > "When we say we are a pile of atoms, we do not mean we are merely a pile of atoms, because a pile of atoms which is not repeated from one to the other might well have the possibilities which you see before you in the mirror." - Feynman

Feynman's point is that "pile of atoms" misleadingly implies a simplicity which many piles of atoms, like you or me, do not exhibit.

There is a sleight of hand where "pile of atom" is first invoked in the sense of, for example, a crystalline lattice of atoms, which it is true cannot processing much information, and then latter invoked in the sense of any configuration of atoms, when making the statement "a pile of atoms cannot think". -->


<!-- ``Nervous sytems need to be seen as actively generating probes of their environment, not as mere computers acting passively on inputs fed to them by sense organs''...``This familiar contrast between drearily ``passive'' computers and wonderfully ``active'' organisms has never been properly defended, and is one of the most ubiquitous imagintion-blockers I know.'' -->







<!-- Often these convictions stem from a lack of imagination that seems embarrassing only with hindsight: -->









#

A common theme of these dichotomies is a lack of imagination about what "mere" matter can result in, which is subsequently dispelled by further empirical discoveries. Dennett likes to give the example of biologist William Bateson, who rejected the possibility of a physical information carrying mechanism in living things on the grounds of implausibility:

> ``The properties of living things are in some way atached to a material basis, perhaps in some special degree to nuclear chromatin and yet it is invconcievable that particles of chromatin or of any other substance, however complex, can possess those powers which must be assigned to our factors or genes. The supposition that particles of chromatin, indistinguisable from each other and iddend almost homogenous under ay known test, can by their material nature confer all the properties of life surpoasses the range of even the most convcined materialism'' - Bateson

...
Similarly, innovations in statistical AI lend credence to the suspicion that the root of the problem here is simply a lack of imagination.

It seems nearly impossible to imagine that all the structured, abstact, systematic and complex reasoning, analogy-making, planning, translating, summarizing, rewriting, and creating behaviors displayed by humans can arise from next-word prediction, until one sees (at least some small subset of these) in a language model like GPTChat.

And once behaviors of neural nets started to show glimmers of these features, a fallback position of classical AI was that even if neural networks *could* learn the true semantics of language, they were doing so inefficiently. Tasks like few-shot learning were intended to expose this, but GPTChat, and presumably the many systems that will follow, have impressive few-shot learning abilities in many tasks.

<!-- GPTChat reasons systematically, in the sense that it gives answers to questions that if thoughts to have been produced by humans, would be regarded as instances of human-level reasoning.  -->

-----

What is assumed by saying "When are you going to Peru?"?

> The assumption is that the person being asked the question is planning to go to Peru in the near future.

----


GPTChat isn't trained to do this explicitly. It hasn't seen training data about assumptions of sentences. It has just learned to explain sentences in the process of "mere" statistical understanding.

It is true that this is "mere" next word prediction, but is that any more of a relevant observation that to say that a person is a "mere" bag of jostling atoms?



And yet, if you believe in the classical view, as many linguists and cognitive scientists still do, then no. On that view, it has precisely no understanding.


# in conclusion...

![](/img/narcissus4.jpg)


If Quine and BF Skinner were alive to see modern AI, they would be doing whatever the opposite of rolling is in their respective graves. GPTChat's success is about the closest thing to a vindication of Skinner's behaviorism and Quine's rejection of essentialist conceptions of meaning that it is possible to have.

In Narcissus' case, he realizes that what is behind his elusive interlocutor is not a person lying underneath the surface of the pond and mirroring his every move, but his own reflection. At this point he has a huge tantrum and turns into a flower.

But how does the analogous motif play out in AI? Will there be a philosophical sea-change, in which the essentialist convictions about linguistic meaning so fundamental to work on natural language semantics in the past 50 years give rise to something new? Or, with Wittgenstein and Quine in mind, something old?

My strong desire never to hear the phrase *mere pattern recognition* again means that I hope the answer is yes.






<!-- is that our intuitions of what next word prediction can do are quite limited
    how could a system know that the word "dog" is more likely that "cat" here, except if...
But -->


<!-- ---

If computers were made of wood, would they work?

> No, computers need electricity and metal components to function.

Why?

> Wood is an insulator, meaning it does not conduct electricity. Without electricity, a computer cannot function. Additionally, wood is not strong or durable enough to withstand the physical pressures of a computer's components.

What about a conductive hard wood?

> While some hard woods may be slightly conductive, it would still not be enough to power a computer. The conductivity of the wood would be far too low to support the electrical components of a computer.

---

If computers were made of cats, would they work?

> No, computers require electricity and cats cannot provide that.

Why not?

> Cats are not capable of producing electricity. They lack the necessary components and processes to generate electricity.

But there is electricity in their brains, no?

> No, the electricity in a cat's brain is not enough to power a computer. The electricity in a cat's brain is used for basic biological functions, not to power a computer.

--- -->
