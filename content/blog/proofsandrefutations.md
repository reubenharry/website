---
title: "Proofs, Refutations and Zombies"
date: 2016-08-20T15:10:55-04:00
draft: false
---
-

> "There is strictly speaking no such thing as mathematical proof; we can, in the last analysis, do nothing but point; ...proofs are rhetorical flourishes designed to affect psychology" - Hardy

> "Other thought experiments are less rigorous but often just as effective: little stories designed to provoke a heartfelt, table thumping intuition - "Yes of course, it has to be so" - about whatever thesis is being defended" - Dennett


Somewhat inspired by Jacob Andreas' note-form [posts on philosophers](http://blog.jacobandreas.net/translation-meaning.html), I wanted to jot down what I'm taking away from reading Lakatos' *Proof and Refutation* (the above title being a reference not just to [this](https://www.amazon.com/Pride-Prejudice-Zombies-Quirk-Classic/dp/1511336188), but also to [philosophical zombies](https://en.wikipedia.org/wiki/Philosophical_zombie) which are humans extensionally but not intensionally. Lakatos explores the equally tricky, and I think closely related issue of the extensional and intensional notions of proof, though not in those words.)

The book is noteworthy in two ways: first, it convincingly points out that the default conception of mathematical proofs as well-defined formal objects doesn't at all capture the notion of proof as used, which is more like a way of thinking about a problem. Lakatos pushes this point to the extent of saying that a proof can fail to prove what it sets out to and still be a proof - in fact, from his perspective, establishing truth is not the point; proofs exist to establish structure.

The book is also noteworthy in its dialectic style; the argument is set up as a dialogue between a teacher and a classroom-full of students, and their discussion parallels the dialogues that took place over the course of mathematical history, as explained in the footnotes.

<!-- I read it through the lens of my own anti-representationalist sensibilities -->

Lakatos does an amazing job of diving into the mathematical detail, while staying intelligible (inevitably, half of the effort in teaching is finding just the right sort of examples for a good exposition of an idea).

The following are basically just chapter-by-chapter notes on the book - nothing particularly synthesized - so this will expand as and when I move through the rest of the book.

# Chapter 1

This chapter seems to constitute a sort of Socratic attack on the "dogma" that proofs are mathematical or logical objects.

> "Many working mathematicians are puzzled about what proofs are for if they do not prove. On the one hand, they know from experience that proofs are fallible but on the other hand they know from their dogmatist indoctrination that *genuine* proofs must be infallible. *Applied mathematicians* usually solve this dilemma by a shamefaced but firm belief that the proof of the *pure mathematicians* are 'complete', and so *really* prove. Pure mathematicians, however, know better - they have such respect only for the 'complete proofs' for *logicians*. If asked what is then the use, the function, of their 'incomplete' proofs', most of them are at a loss."

Lakatos exemplifies this point by careful examination of Euler's formula (V−E+F=2). As shown in a series of careful proofs and refutations of the claim that polyhedra's vertices (V), edges (E) and faces (F) obey V-E+F=2, it's hard to nail down what exactly what a particular proof is a proof of.

Given a counterexample to V−E+F=2 in the form of a weird looking polyhedron, one student's response is *monster-barring*: ruling that this counterexample isn't a *real* polyhedron in the sense meant by the proof.

On the one hand, this move is clearly unfalsifiable, but on the other, reflects the intuition that the counterexample misses the essence of the proof.

> "Delta's main mistake is perhaps his dogmatist bias in the interpretation of mathematical proof: he thinks that a proof necessarily proves what it has set out to prove. My interpretation of proof will allow for a *false* conjecture to be "proved" ."

Lakatos moves towards a technique where, rather than monster-barring, one identifies which lemmas in the proof lead to the failure (this can be subtle), and change those steps so that the core nature of the proof remains intact.

### Proof as Explanation

As Lakatos sees it (here I'm making the assumption that his position is represented by the teacher), a proof is not about truth, but rather, is the insight allowing a problem to be deconstructed into a particular set of lemmas. In this sense, a proof is more like an explanation.

When the [four colour theorem](https://en.wikipedia.org/wiki/Four_color_theorem) was proven, many mathematicians were disappointed by the nature of the proof (in large part just a brute force case by case proof done by a computer) because it didn't afford any insight. It's interesting to compare this to the disappointment of traditional AI researchers in machine learning methods for tasks like translation, which perform their task without giving insight into any sort of internal process involved.

This raises a natural connection to algorithms and the notion of modularity:
(there's a much more precise connection between algorithms and proofs stemming from the Curry-Howard correspondence - this is more like an informal side note to that.). Thinking about traditional approaches to cognition (e.g. Marr), a key idea is that the mind performs computations which can be understood by identifying their subparts. (Early efforts in AI reflect a now naive seeming optimism about the degree of modularity). Likewise for Lakatos, proofs break problems down into lemmas (of which counterexamples may refute all or only part).


And the skepticism Lakatos has about proofs as formal objects reminds me of Dennett's skepticism about intentions, among other things: regarding a chess playing computer, we may say things like "it's trying to get the queen out; that's why it made that move". This is a modularization of its strategy, breaking it into two (further sub-dividable) lemmas (first: get queen out, then: win).

On the Dennettian view (at least based on my scant reading) the chess player's algorithm is fundamentally an explanatory concept (with a complex connection to the actual program), just as a proof of a proposition is an explanation (with a complex connection to the *formal* proof of the proposition), not a guarantee of truth.


I also wonder if proofs can be both formal and explanatory. I'm thinking particularly of diagrammatic proofs, as have become popular for category theory - this excellent series of blog posts is one example: https://graphicallinearalgebra.net/

### Other

Hidden in the footnotes, there are references to Skepticism; Lakatos cites [Sextus Empiricus](https://reubenharry.github.io/blog/medieval-type-theory/), for example, and frequently uses the term *dogmatist* which I assume he gets from Empiricus too.
