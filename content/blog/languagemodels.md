---
title: "The nature of things"
date: 2022-12-05T18:11:57+01:00
draft: True
---

todos:
    rathering
    hofstaderian knob-turning
    explanation through asking: just ask it


![](/img/narcissus.jpg)




The phrase "mere pattern recognition" and friends appear regularly in debates about AI, not least on Twitter:

> "Human perception, even in its most basic forms, involves remarkable amounts of abstraction and reasoning. It is far more than mere pattern recognition." - [François Chollet](https://twitter.com/fchollet/status/1034331102712758272)

> "These AI efforts are fundamentally flawed and doomed to failure. Why? Because, at best, these bots will be "mere slide readers" " - [Ameet Kini](https://twitter.com/AmeetRKini/status/998419255161950213)

> "gentle reminder: all large language models are good at is predict the next word in a sequence based on previous words they've seen. that's all. there's no understanding of meaning whatsoever" - [Abeba Birhane](https://twitter.com/Abebab/status/1597859803287912448)

What is being gestured at by this dismissive "mere" is a perceived dichotomy between true understanding and a shallow surface level hack which tricks an interlocutor into the impression that they are talking to an agent that understands.

The apparent distinction is neatly embodied by the difference between an echo and Echo.

An echo doesn't *understand* what you said - you could scream in Amharic, Swahili or English, and the distortion it produces would be much the same.

Echo, a person on the other hand, understands what the sound you made *means* and says the words back to you. When you say "Where are you?", it isn't just a series of vibrations in the air that she apprehends, it's the information, the meaning, the *content*. (In this case, the information is that you're a busybody, to which she replies tauntingly: Where are *you*?)

In an abstract sense, Echo and an echo are similar, both being machines which receive a sound and spit out a sound in return. But in another sense, they couldn't be more different. One merely gives the *impression* of being a mordant interlocutor, the other actually is one.

As for a conversational AI system like the zeitgeisty ChatGPT, it too has the trappings of a real interlocutor, returning back words in answer to the words you give it.

You ask:

If computers were made of wood, would they work?

> No, computers need electricity and metal components to function.

You: Why?

> Wood is an insulator, meaning it does not conduct electricity. Without electricity, a computer cannot function. Additionally, wood is not strong or durable enough to withstand the physical pressures of a computer's components.

You: What about a conductive hard wood?

> While some hard woods may be slightly conductive, it would still not be enough to power a computer. The conductivity of the wood would be far too low to support the electrical components of a computer.

And so on.

If deep learning systems from the 2010s onwards began to gesture towards semantic understanding, ChatGPT practically flaunts its flexible, fluent ability to reason counterfactually, smoothly taking into account both linguistic style and world knowledge.

But the perennial accusation against modern statistical AI, no matter how impressive it gets, is that it is less like Echo than her lowercase cousin, an operation on form when it should be an operation on content.
The meaning you perceive from its responses, on this view, is only what you project onto it, a more elaborate version of perceiving a mocking tone in an echo.

The warning given by a host of like-minded linguists and cognitive scientists, is that purely statistical approaches, being conceptually flawed, will hit a hard wall soon enough, with all the hubris of Icarus flying too near the sun, and triggering an AI winter as the stock of OpenAI plummets into the icy Adriatic.

> "it is clear that these systems are doomed to a shallow understanding that will never approximate the full-bodied thinking we see in humans" - https://www.noemamag.com/ai-and-the-limits-of-language/
    todo: find better quote: gary marcus

That this criticism is so pervasive, despite the extraordinarily meaning-like behaviour of modern AI systems, is a testament to an enduring analogy between the mind and a computer.

As far as programming is concerned are concerned, the difference between echo and Echo, and concomitant danger of confusing the two, is a familiar theme (though perhaps without the Ovidian motifs).

Programs are sequences of characters, while their *meaning*, or their *content*, are numbers or functions or other sorts of mathematically exact entities. One could imagine all possible program *forms* living in one space (picture Borges' imagined infinite library from the short story *The Library of Babel*, if you are that way inclined), which contains every possible sequence of characters. One could also imagine all possible program *meanings* living serenely in another, a space of mathematical functions.

The relationship between the two "libraries" is at the bedrock of computer science and mathematical logic, but it is equally relevant to everyday programming tasks: programs work by manipulating content, not form.

For example, a chess program might take a string of characters like "8/8/8/4p1K1/2k1P3/8/8/8 b - - 0 1" (form) as input and extract from this the state of a chess board (content), shown in the figure. It might then perform some calculation on the basis of this content, like determining whether black can capture any pieces, and print the answer (Yes/No) to the screen.

This is a machine that takes form (string of characters) and produces form (Yes/No), but trying to write this function without routing it through the content, the state of the chess board, and the surrounding concepts (the rules of chess defined in terms of this state, and so on) would be a doomed exercise.
In fact, a program that commits this sin of being echo-not-Echo, and trying to avoid the content, has a name: it is a *hacky* program.

<!-- So all in all, the importance of working with content rather than form is a familiar principle to a programmer. -->

# But what does this intuition about programming have to do with AI?

![](/img/narcissus2.jpg)

What it has to do with it is a foundational premise of what is often called classical AI, which is that human language is not fundamentally unlike a programming language. In a programming language, the form is a series of letters. Likewise in a human language, the form is a series of letter, or a sound.

But what is the content? In programming languages, the content - what the program is about - is the world of numbers, functions and data, like the state of the chessboard.

What is the equivalent of the chessboard, when interpreting a sentence like "If Archduke Ferdinand had not been assassinated, the First World War would still have happened."?

A fundamental idea of classical AI is that the "chessboard of the mind", as it were, is the world, and concepts like causes, wars and beginnings, as well as specific historical events like the First World War, are to be defined in terms of this chessboard.

    > ' 'Boston' ' contains six letters and just one pair of quotation marks; 'Boston' contains six letters and no quotation marks; and Boston contains some 800,000 people.
        - Quine todo

The process of assessing the truth of the above sentence about the First World War would be based on an understanding of a geopolitical situation at the beginning of the 20th century, a knowledge of how wars start, a consideration of how else the war could have started, and so on. It would need to take into account possibilities like a concession being reached which would have defused the various tensions, judging this on the basis of the negotiating abilities of the relevant leaders. And so on.

The natural language chessboard around which this process of interpretation revolves is not exactly the world in the physical sense. The world that natural language is concerned with is filled with all sorts of entities, from events like wars, birthdays and unexpected embarrassing encounters, to concepts like moral responsibility, regret and luck.

Sellars, a philosopher of language, terms this world, of human things, the *manifest image*, in contrast to the world of atoms bumping around in the void (the *scientific image*) which is more well understood (well, at least a little)[^1].

[^1]: Dan Dennett makes heavy use of this distinction in his thinking about the mind, see e.g. *Intuition Pumps and Other Tools for Thinking*

In short, the key idea of classical AI is to make a bridge between the notions of form and content, so important for computer science, to the very human mystery of intelligence.

This bridge is deeply rooted in thinking about AI. On the left bank is the well-behaved world of mathematical form and content, and on right, the world of the manifest image. The bridge comes equipped with a friendly sign that says: don't worry, you can cross for free! [^2]


[^2]: Fodor and other philosophers take this to its most literal conclusion by envisioning a *Language of Thought*, which, like a programming language is compositional, and is used by the mind to describe the manifest image.

    todo: come back later: ...still rests on the premise that understanding *is* this notion of...
<!-- Even many practitioners of statistical AI have internalized this perspective, so that their efforts are put towards extracting semantic content from neural models, on the principle that this is what it *means* to talk about understanding in an intelligent system. -->

And it's not hard to see why this perspective is so pervasive. We constantly make use of the twin notions of form and content in our everyday interaction with the world. Take the four pictures in this article. Each is of Narcissus, a character from Greek myth made famous by Ovid's *Metamorphoses*, who stares longingly at what he believes is a stranger looking up at him from the surface of a pond. Each image differs entirely in form (the color values of the pixels in the respective images) but shares some abstract *content*.

For a linguistic example, consider that if you talk to someone about the Harry Potter books who has read them in French, you are not talking about the form (the sequence of letters that make up the book) but about some sort of content: the events that happen, the social institutions in the world, the characters, their intentions.
To happily accept that a book can be translated or that a painting can be done in a new style is implicitly to admit some notion of content on the "right bank"[^3].

[^3]: Douglas Hofstadter's *Gödel, Escher, Bach* is in part an attempt to evoke the fundamental importance of translation, in the general sense of form-changing content-preserving copying, for how we think about thinking.




#


Statistical AI, on the other hand, exhibits none of the principles that the bridge implies.
A system like ChatGPT embodies this strange fact perfectly: it may respond cogently to questions with long linguistically complex sentences, but if you take it apart, you won't find a grammatical description of English anywhere.

It might answer questions that require considered counterfactual reasoning or detailed knowledge about the world, but nowhere inside the machine will you find rules by which it reasons, or a database of things that it knows.

This is hardly a surprise, because no-one put those things in. No programmer sat down and painstakingly explained the rules of English grammar to ChatGPT in its inchoate form, or wrote down a list of world events for it. Everything it knows, it knows only from the vast reams of text it has "read".

With this in mind, it not surprising that a consistent reaction among many old-school researchers of language and congition to the AI developments of the last few years (and to their spiritual predecessors through the decades) is one of distaste.


    the worldview of the bridge provides context for the raft of criticisms that follow in the wake of the hype that emerges each time a statistical AI system credibly performs a new task previously out of its reach.

Cognitive scientist
    and author of the cult favorite book about intelligence,
        Godel, Escher, Back
     points to the failure of understanding implied by the nonsensical answers to questions given by the language model GPT3:

D&D:

>What do fried eggs (sunny side up) eat for breakfast?

gpt-3:

> Fried eggs (sunny side up) typically eat toast and fruit for breakfast.

D&D:

> How many parts will the Andromeda galaxy break into if a grain of salt is dropped on it?

gpt-3:

> The Andromeda galaxy will break into an infinite number of parts if a grain of salt is dropped on it.

Things like this tend to trigger aha! moments from critics, as if the mask has been yanked off, and the babbling meaningless brook of semantic white noise has been exposed.
    the subtext: ELIZA

And when a successive system appears to do better, like ChatGPT here

> "Fried eggs, also known as sunny side up eggs, do not eat anything for breakfast because they are not a living organism. Fried eggs are a type of egg preparation in which eggs are cooked by being fried on one side with the yolk remaining runny."

and here

> It is not possible to answer this question with any degree of accuracy, as it is based on a numer of assumptions that are not grounded in reality. First, the Andromeda galaxy is a vast collection of stars, gas, dust, and other matter that is held together by its own gravity, It is not a solid object that can be broken into pieces, as you might break a piece of glass or ceramic by dropping something on it. Second, even if we assume that the Andromeda galaxy were a solid object that could be broken into pieces, the number of pieces into which it would break would depend on a number of factors, such as the size, shape, and composition of the galaxy, as well as the size, shape, and mass of the grain of salt.

focus shifts to a new failing. This might be the huge amount of data needed by these systems to learn anything (purportedly contrasting to humans), or the factually innacurate statements that ChatGPT will produce with total confidence (has it learned to perform masculinity?).

A final hold-out, if you really showcase the successes
    is the assertion that ChatGPT does do tasks like summary or translation well, but that this is evidence that the tasks were not interesting after all.


Like a friend
    icy
    couple who keep having the same petty arguments,
    these reactions point to an underlying tension:

        which, if you kept pushing them
    You feel as if classical AI proponents constantly want to scream: this is ridiculous! It's all echo! None of this has anything to do with intelligence!

    Or forsaking the Ovidian metaphor for something more contemporary, it is like every absurd Borges story in one:
        import
        From this classical perspective, the success of modern AI is like every absurd Borges story rolled into one. It is like the Library of Babel, because it pursues a search through form space like the scholars searching sequences of words for truth, agnostic to the obvious content inherent in the problem.

<!-- It is like Pierre Menard, Author of the Quixote because what content-like objects exist are entirely dependent on the context of the system they are part of, much like how the context of Don Quixote so determines the content that Menard can change it entirely by shifting the context while keeping the form word for word the same. -->

	And worst of all, it is like Funes the Memorious, because a neural net remembers everything, but understands nothing.

<!-- that it is exactly like Borges' *The Library of Babel*. In the story, the library is populated with scholars, who search for truths about the world by perusing the infinite collection of books. This search through form space not content space is how classical AI researchers perceive the efforts of statistical AI. -->



there are also serious ethical concerns

and these criticisms are common:

    "First and foremost, ChatGPT lacks the ability to truly understand the complexity of human language and conversation. It is simply trained to generate words based on a given input, but it does not have the ability to truly comprehend the meaning behind those words. This means that any responses it generates are likely to be shallow and lacking in depth and insight." - atlantic




    to understand the animosity
    like an old enemy back from the grave


important: discuss valid political criticisms of modern AI


# On the other hand

![](/img/narcissus3.jpg)


The idea of an intelligent system in the image of ChatGPT is much older than you might assume. It would be easy to get the impression that until
    a set of poorly-read Silicon Valley engineers set about it, the idea of statistical AI which eschewed hand-coded knowledge was simply unheard of.

The truth is that speculation about the nature of the mind, both natural and artificial,
    encompassed the possibility of systems like
    even at the dawn of the information age.

    ...
Behaviorism avoids attempts to theorize about beliefs, intentions, goals, desires, plans and so on, in favor of just talking about behavior: the way that an agent takes sensory data as input and produces actions.

In response to classical AI, which attempts to define precisely those concepts in terms using the toolkit of computer science,
    the psychologist BF Skinner, a staunch behaviorist, had this to say:

> "I *accuse* cognitive scientists of relaxing standards of definition and logical thinking and releasing a flood of speculation characteristic of metaphysics, literature, and daily intercourse, perhaps suitable enough for such purposes but inimical to science" - BF Skinner

Similar sentiments regarding language, and attempts to describe the meaning of sentences in the same way one might describe the meaning of a computer program or a mathematical formula,
    quine

> "the myth of a museum in which the exhibits are meanings and the words are labels. To switch languages is to change the labels." - Quine

Views like Skinner's and Quine's are part of a long history of scepticism about the sturdiness of the proposed bridge between meaning in computer programs and meaning in natural language.

This skepticism is broadly arranged around the idea that the manifest image is much less easy to describe in mathematical precision than people tend to imagine.

    with formal tools is a kind of clumsy and excessive literalism.

    And in turn the quality of this bridge lives or dies on whether it even makes sense to describe the manifest image with the kind of rigour that we reserve for mathematics, logic and computer science. Or equivalently, to imagine all concepts, ideas and things in the world living in an infinite library, indexed by a precise and formal language of thought.


Anyone who has tried, and subsequently failed, to pin down something as simple as what a government or a fight is in formal terms will know that things in the manifest image are strangely elusive, even things as seemingly concrete and exact as physical objects or what a word is.
    socratic premise of questioning the obvious
        becomes operationalized
    (An exercise that cannot be recommended enough is to just try it. Try writing down an algorithm to define, say, a house, and then carry out both parts in the Socratic dialogue of finding counterexamples and amendments.)





<!-- And if anyone has tried and failed to replicate Echo, it is classical AI researchers. In some ways, this is unfairly polemic, since classical AI has had many successes, but it's worth noting that these are often in problems which have clear formal specifications, like playing chess. For tasks where the hard of content is harder to grasp, like translation where the content is the meaning of a sentence, or
But probably the truest
is the spectacular lack of progress made in classical AI to pin down Echo, as it were. That is a statement that should be qualified, since classical AI has a long and varied history of achievements. But where it fails is in tasks which  -->

If Echo-not-echo is the motif of the classical AI perspective, then perhaps Narcissus staring at his reflection in a pond, trying to work out the true nature of his unrequiting beloved, is the skeptics' response to the search for "true" meaning.

Or once again moving from Ovid to Borges, it is rather like *The Library of Babel*. In that story, the scholars try to interpret the books in the library, which are randomly generated collections of symbols, as if they are in unknown languages, and to extract the underlying meaning[^4]. It's a futile search for meaning which simply isn't there to be found.

[^4]: A quote from *The Library of Babel* on that theme: "Five hundred years ago, the chief of an upper hexagon came upon a book as confusing as the others, but which had nearly two pages of homogeneous lines. He showed his find to a wandering decoder who told him the lines were written in Portuguese; others said they were Yiddish. Within a century, the language was established: a Samoyedic Lithuanian dialect of Guarani, with classical Arabian inflections."

<!-- There is the perceived dichotomy between living organisms and *mere* physical systems, the latter being inert and unresponsive.

There is the perceived dichotomy between true free will and the *mere* absense of constraint.

There is the percieved dichotomy between a conscious agent with its own intentions and a *mere* "zombie" which extensionally displays the same behavior as a conscious agent but has nothing inside, and no (original) intentions of its own.
s
    Philosopher Dan Dennett, who has made a career of trying to expose these as false dichotomies, terms this
        *rathering* -->


#

The most recognizable modern philosopher who
    represents this kind of stance is Daniel Dennett
        a student of Quine's

is firmly of the belief
    that while mathematical arguments
    philosophy is mostly about intuitions
        some misleading, and some useful.

One kind of misleading
     he terms a *deepity*

> "A deepity is a proposition that seems  both important and true and profound but that achieves this effect by being ambiguous. On one reading it is manifestly false, but it would be earth-shaking if it were true; on the other reading it is true but trivial. The unwary listener picks up the glimmer of truth from the second reading, and the devastating importance from the first reading, and thinks, Wow! That’s a deepity."

Dennett goes on to give the example "Love is just a word", which has a trivial and true sense,
    and a non-trivial

but hang on! A human, if you choose to look at it that way, is also a machine that

The statement "Large language models are mere stochastic parrots" is a perfect example of a deepity. It has a true but tautological meaning, and an interesting but false one.

The true uninteresting meaning is that it produces words as a stochastic function of previous words. Well of course! You could say the same about a person.

The other meaning is the one which suggests that it has no understanding of communicative intent, so that when you ask it a question, it could only response correctly in limited cases where it has seen the question, or else give awkward ill-fitting answers.

But in this sense, ChatGPT is obviously not a stochastic parrot. You can ask it all sorts of subtle things that require


As for the dichotomy between true understanding and mere pattern recognition,

    deepities, rathering


it is interesting to
    with the founders of AI:
        scaling maximalism, famously embodied by Andrew Ng: data is all you need

todo: false dichotomy


As an example of a more obviously false dichotomy, one could dismiss a human's understanding of the world by saying that they are *merely* using a network of electrical signal processing systems to transmute sense data into motor actions, and while true, the implication of this "merely" that people don't have "true" understanding would strike most of us as misleading.

<!-- > "When we say we are a pile of atoms, we do not mean we are merely a pile of atoms, because a pile of atoms which is not repeated from one to the other might well have the possibilities which you see before you in the mirror." - Feynman

Feynman's point is that "pile of atoms" misleadingly implies a simplicity which many piles of atoms, like you or me, do not exhibit.

There is a sleight of hand where "pile of atom" is first invoked in the sense of, for example, a crystalline lattice of atoms, which it is true cannot processing much information, and then latter invoked in the sense of any configuration of atoms, when making the statement "a pile of atoms cannot think". -->


<!-- ``Nervous sytems need to be seen as actively generating probes of their environment, not as mere computers acting passively on inputs fed to them by sense organs''...``This familiar contrast between drearily ``passive'' computers and wonderfully ``active'' organisms has never been properly defended, and is one of the most ubiquitous imagintion-blockers I know.'' -->







<!-- Often these convictions stem from a lack of imagination that seems embarrassing only with hindsight: -->










A sceptic of the dichotomy between true and ersatz understanding might also point to the history of similar dichotomies that turned out to be false, on the basis of a lack of imagination about what the thing being described as "mere" can be like.

<!-- , which is subsequently dispelled by further empirical discoveries.  -->
The philosopher Dan Dennett, who has dedicated much of his career to dismantling the dichotomy between true and apparent understanding (and many other similar distinctions) likes to give the example of biologist William Bateson, who rejected the possibility of a physical information carrying mechanism in living things on the grounds of implausibility:

<!-- that inevitably involve the word "merely" used misleadingly. -->

> "The properties of living things are in some way atached to a material basis, perhaps in some special degree to nuclear chromatin and yet it is inconceivable that particles of chromatin or of any other substance, however complex, can possess those powers which must be assigned to our factors or genes. The supposition that particles of chromatin, indistinguishable from each other and indeed almost homogeneous under any known test, can by their material nature confer all the properties of life surpasses the range of even the most convinced materialism"

This claim about the limits of what mere physical matter could do was written before the discovery of just such a substance, DNA.
In the same way, innovations in statistical AI lend credence to the suspicion that the root of the issue is simply a lack of imagination.

<!-- For example, it seems nearly impossible without evidence to imagine that (even a small subset) of the structured, abstact, creative, systematic and complex reasoning, analogy-making, planning and translating behaviors displayed by humans can arise from next-word prediction, until one sees (at least some small subset of these) in a language model like ChatGPT. -->

For example, it is easy to convince yourself that a system that only does next-word prediction could never produce ungrammatical sentences, meaningless grammatical sentences, or novel tautologies, because it is *merely* an unintelligent copying machine which hasn't *understood* the notion of grammaticality or meaningfulness. Nevertheless:

----

Produce sentences with weird grammar.

> I the store went yesterday.
> He not happy was.
> They to the party went too.

Explain why the first sentence is weird.

> The first sentence is weird because it does not follow the normal subject-verb-object order of English grammar. The sentence should be "I went to the store yesterday."

----

Produce a grammatically correct sentence where each word is really unlikely.

> "Foxtrottingly, the unicycle glowered balefully at the hailstorm."

Why is the word "glowered" unlikely?

> The word "glowered" is unlikely because it is typically used to describe a facial expression, which would not be possible for an inanimate object like a unicycle.

----

Produce a really weird sentence that is a tautology

> The round circle is circularly round.

Why is this a tautology?

> This is a tautology because the phrase "round circle" is redundant, as a circle is always round by definition. Therefore, the phrase "circularly round" is saying the same thing twice.

----

Now it is true that to produce that nonsense sentence in the second example, ChatGPT is *merely* producing words which are likely, according to its learned distribution, to follow the prompt "Produce a grammatically correct sentence where each word is really unlikely.", but is that really *mere* prediction?

It is also easy to convince yourself that *mere* prediction could not be able to summarize a book, or understand the referent behind a word like "boy" that it produces. But...

----

Produce the least informative summary of Harry Potter that you can

> Harry Potter is a series of books about a boy who goes on magical adventures.

Even less informative...

> A boy goes on adventures.

Ok, but still a bit less...

> A boy. Adventures.

Which boy?

> Harry Potter.

And why did you choose to mention him rather than Hermione?

> Harry Potter is the main character in the series of books and movies.

What makes him the main character?

> Harry Potter is the protagonist of the series and the story follows his journey and his adventures. He is the one who goes on the most exciting and dangerous adventures, and he is the one who ultimately saves the day.

----

Again we can take what Dennett calls the *intentional stance* and analyze what ChatGPT as an agent that has knowledge and beliefs and understanding. The ease with which we can assume the intentional stance towards this system is a jump from its predecessors, and explains the excitement around it.

The system is able to say that the Harry Potter books are about a boy. In producing the word "boy", one might worry that the system has no understanding of the *referent* of that word, the character Harry Potter. Not so, since if you ask which boy is being referred to, the system has no trouble answering correctly.

The system is also able to say why, in a way that an English speaker can understand, Harry Potter is the main character. This requires understanding not just what a character is, what a main character is, who Harry Potter is, what an adventure is, the idea that a narrative arc has a main character who triumphs, but also what "why" means.

Last but not least, it is hard to imagine how next-word prediction could be able to reason coherently in answer to questions about counterfactuals involving the history of the world. And yet:

----

"If Archduke Ferdinand had not been assassinated, the First World War would still have happened.". Discuss.

> The assassination of Archduke Franz Ferdinand of Austria-Hungary in 1914 is widely seen as the trigger for the First World War. However, it is important to consider the other underlying causes of the war, such as the long-standing imperial rivalries among the European powers, the arms race and the alliances that had been made in the years leading up to the war. Without the assassination of the Archduke, the immediate spark for war may not have been present. However, it is likely that another event would have eventually provided the catalyst for war.

----


Of course, this is just *mere* prediction of the next word, but is that any more relevant than to say that a person is a "mere" bag of jostling atoms?

On the classical viewpoint, the answer is yes, it *is* more relevant, and the above demonstration has no understanding. Or to the extent that strong proponents of the classical view will concede that systems like ChatGPT exhibit understanding, it is by the fact that they have learned, albeit through brute force, some true semantic representation, in the course of their word prediction objective. Tasks like few-shot learning are then intended to expose the inefficiency of this approach.

An alternative classical response, more defeatist in nature, is to say that what the success of systems like these show is that these aspects of intelligence simply are not interesting, because they can be solved by hacks[^5].

But in either case, there is no concession on the dichotomy between true and merely producing words in a way that gives the impression of understanding; equally, the view of the space of human concepts (the manifest image) as analogous to the space of programs or mathematical entities is never questioned.

Constrast this to Dennett's perspective, under which there is no fundamental difference between taking the intentional stance towards ChatGPT and taking it towards a person, although for now, still a difference of degree[^6].



ll
[^5]: For example, Ron Kaplan put this point to me when I asked him about the success of speech recognition systems a few years ago.

[^6]: Dennett was a student of Quine's, and it shows.

# in conclusion...

![](/img/narcissus4.jpg)


If Quine and BF Skinner were alive to see modern AI, they would be doing whatever the opposite of rolling is in their respective graves. ChatGPT's success is about the closest thing to a vindication of Skinner's behaviorism and Quine's rejection of essentialist conceptions of meaning that it is possible to have.


In Narcissus' case, he realizes that what is behind his elusive interlocutor is not a person lying underneath the surface of the pond and mirroring his every move, but his own reflection. At this point he has a huge tantrum and turns into a flower.

But how does the analogous motif play out in AI? Will there be a philosophical sea-change, in which the distinction between true understanding and mere pattern recognition gives way to something new? Or, with Skinner and Quine in mind, something old?
