![](/Users/reubencohn-gordon/Dropbox/Reuben/writing/book/graphics/narcissus1.jpg)



The phrase "mere pattern recognition" and its friends appear regularly in debates about AI, not least on Twitter:



>  "Human perception, even in its most basic forms, involves remarkable amounts of abstraction and reasoning. It is far more than mere pattern recognition." - François Chollet



> "These AI efforts are fundamentally flawed and doomed to failure. Why? Because, at best, these bots will be "mere slide readers" - Ameet Kini



What is being gestured at is a perceived dichotomy between true understanding and a shallow surface level hack that gives an interlocutor the impression they are talking to an agent that understands.



The apparent distinction is neatly embodied by the difference between an echo and Echo. An echo doesn't understand what you said - you could scream in Amharic, Swahili or English, and the distortion it produces would be much the same.



Echo, a person on the other hand, understands what the sound you made means and replies. When you say "Where are you?", it isn't just a series of vibrations in the air that she apprehends; it's the information, the meaning, the content. (In this case, the information is that you're a busybody, to which she replies tauntingly: Where are you?)



In an abstract sense, Echo and an echo are similar, both being machines which receive a sound and spit out a sound in return. But in another sense, they couldn't be more different. One merely gives the impression of being a mordant interlocutor, the other actually is one.



As for a conversational AI system like the zeitgeisty ChatGPT, it too has the trappings of a real interlocutor, returning back words in answer to the words you give it.



You ask:



*If computers were made of wood, would they work?*



ChatGPT replies:



*No, computers need electricity and metal components to function.*



You: Why?



ChatGPT: *Wood is an insulator, meaning it does not conduct electricity. Without electricity, a computer cannot function. Additionally, wood is not strong or durable enough to withstand the physical pressures of a computer's components.*



You: *What about a conductive hard wood?*



ChatGPT: *While some hard woods may be slightly conductive, it would still not be enough to power a computer. The conductivity of the wood would be far too low to support the electrical components of a computer.*



And so on. If deep learning systems from the 2010s onwards began to gesture towards semantic understanding, ChatGPT practically flaunts its flexible, fluent ability to reason counterfactually, smoothly taking into account both linguistic style and world knowledge.



But the perennial accusation against modern statistical AI, no matter how impressive it gets, is that it is less like Echo than her lowercase cousin, an operation on form when it should be an operation on content. The meaning you perceive from its responses, on this view, is only what you project onto it, a more elaborate version of perceiving a mocking tone in an echo.



The warning given by a host of like-minded linguists and cognitive scientists, is that purely statistical approaches, being conceptually flawed, will hit a hard wall soon enough, with all the hubris of Icarus flying too near the sun, and triggering an AI winter as the stock of OpenAI plummets into the icy Adriatic.



> Chickens do tend to come home to roost, though, eventually. Cold fusion may have sounded great, but you still can't get it at the mall. AI will likely experience a winter of deflated expectations. - Gary Marcus, Scientific American



That this criticism is so pervasive, despite the extraordinarily meaning-like behaviour of modern AI systems, is a testament to an enduring analogy between the mind and software.



As far as programming is concerned, the difference between echo and Echo, and the concomitant danger of confusing the two, is a familiar theme.



Programs are sequences of characters, while their *meaning*, or their *content*, are numbers or functions or other sorts of mathematically exact entities. One could imagine the *forms* of all programs living in one space (picture Borges' imagined infinite library from the short story *The Library of Babel*, if you are that way inclined), which contains every possible sequence of characters. One could also imagine the *meanings* of all possible programs living serenely in another, a space of mathematical functions.



The relationship between the two "libraries" is at the bedrock of computer science and mathematical logic, but it is equally relevant to everyday programming tasks: programs work by manipulating content, not form.



For example, a chess program might take a string of characters like "8/8/8/4p1K1/2k1P3/8/8/8 b - - 0 1" (form) as input and extract from this the state of a chess board (content), shown in the figure. It might then perform some calculation on the basis of this content, like determining whether black can capture any pieces, and print the answer (Yes/No) to the screen.



This is a machine that takes form (string of characters) and produces form (Yes/No), but trying to write this function without routing it through the content, the state of the chess board, and the surrounding concepts (the rules of chess defined in terms of this state, and so on) would be a doomed exercise.

In fact, a program that commits this sin of being echo-not-Echo, and trying to avoid the content, has a name: it is a *hacky* program.





## But what does this intuition about programming have to do with AI?



![](/Users/reubencohn-gordon/Dropbox/Reuben/writing/book/graphics/narcissus3.jpg)



What it has to do with it is a foundational premise of what is often called classical AI, which is that human language is not fundamentally unlike a programming language. In a programming language, the form is a series of letters. Likewise in a human language, the form is a series of letters, or a sound.



But what is the content? In programming languages, the content - what the program is about - is the world of numbers, functions and data, like the state of the chessboard.



What is the equivalent of the chessboard, when interpreting a sentence like "If Archduke Ferdinand had not been assassinated, the First World War would still have happened."?



A fundamental idea of classical AI is that the "chessboard of the mind", as it were, is the world, and concepts like causes, wars and beginnings, as well as specific historical events like the First World War, are to be defined in terms of this chessboard.



The process of assessing the truth of the above sentence about the First World War would be based on an understanding of a geopolitical situation at the beginning of the 20th century, a knowledge of how wars start, a consideration of how else the war could have started, and so on. It would need to take into account possibilities like a concession being reached which would have defused the various tensions, judging this on the basis of the negotiating abilities of the relevant leaders. And so on.



The natural language chessboard around which this process of interpretation revolves is not exactly the world in the physical sense. The world that natural language is concerned with is filled with all sorts of entities, from events like wars, birthdays and unexpected embarrassing encounters, to concepts like moral responsibility, regret and luck.



Sellars, a philosopher of language, terms this world, of human things, the *manifest image*, in contrast to the world of atoms bumping around in the void (the *scientific image*) which is more well understood (well, at least a little).



In short, the key idea of classical AI is to build a conceptual bridge from the mathematical world of computer science to the very human phenomenon of intelligence. On the left bank is the well-behaved world of mathematical form and content, and on right, the world of the manifest image. The bridge comes equipped with a friendly sign that says: don't worry, you can cross for free! [^2]



[^2]: Fodor and other philosophers take this to its most literal conclusion by envisioning a *Language of Thought*, which, like a programming language is compositional, and is used by the mind to describe the manifest image.



And it's not hard to see why this perspective is so pervasive. We constantly make use of the twin notions of form and content in our everyday interaction with the world. Take the four pictures in this article. Each is of Narcissus, a character from Greek myth made famous by Ovid's *Metamorphoses*, who stares longingly at what he believes is a stranger looking up at him from the surface of a pond. Each image differs entirely in form (the color values of the pixels in the respective images) but shares some abstract *content*.



For a linguistic example, consider that if you talk to someone about the Harry Potter books who has read them in French, you are not talking about the form (the sequence of letters that make up the book) but about some sort of content: the events that happen, the social institutions in the world, the characters, their intentions.

To happily accept that a book can be translated or that a painting can be done in a new style is implicitly to admit some notion of content on the "right bank"[^3].



[^3]: Douglas Hofstadter's *Gödel, Escher, Bach*, a cult classic on symbolic AI, is largely an attempt to evoke the fundamental importance of translation, in the general sense of form-changing content-preserving copying, for how we think about thinking.



Statistical AI, on the other hand, exhibits none of the principles that the bridge implies.

A system like ChatGPT embodies this strange fact perfectly: it may respond cogently to questions with long linguistically complex sentences, but if you take it apart, you won't find a grammatical description of English anywhere.



It might answer questions that require considered counterfactual reasoning or detailed knowledge about the world, but nowhere inside the machine will you find rules by which it reasons, or a database of things that it knows.



This is hardly a surprise, because no-one put those things in. No programmer sat down and painstakingly explained the rules of English grammar to ChatGPT in its inchoate form, or patiently entered a history of the world into a database. Everything it knows, it knows only from the vast reams of text it has read.



With this in mind, it not surprising that a firm reaction among many more traditional researchers of language and cognition to ChatGPT, its contemporaries, and its spiritual predecessors[^7] and its peer of the last decade is one of distaste.

[^7]: Decades ago, Jim McClelland was pioneering statistical AI systems which eschewed symbolic structure in a fashion deeply reminiscent of modern AI, under a school of thought in psychology known as *connectionism*.





In an article in the Economist, cognitive scientist Douglas Hofstadter and David Bender supply the following questions to GPT-3 (a precursor to ChatGPT), and point to the failure of understanding implied by its nonsensical answers.



**D&D**: *What do fried eggs (sunny side up) eat for breakfast?*



**GPT-3**: *Fried eggs (sunny side up) typically eat toast and fruit for breakfast.*



**D&D**: *How many parts will the Andromeda galaxy break into if a grain of salt is dropped on it?*



**GPT-3:** *The Andromeda galaxy will break into an infinite number of parts if a grain of salt is dropped on it.*



Behaviors like this tend to trigger aha! moments from critics, as if the mask has been yanked off, and the babbling meaningless brook of semantic white noise has been exposed.

And when a successive system appears to do better, focus shifts to a new failing.  ChatGPT answers the first question much more sensibly:



> Fried eggs, also known as sunny side up eggs, do not eat anything for breakfast because they are not a living organism. Fried eggs are a type of egg preparation in which eggs are cooked by being fried on one side with the yolk remaining runny. - (prompts given by Riley Goodside: https://twitter.com/goodside/status/1598053568422248448)



and also the second:



> It is not possible to answer this question with any degree of accuracy, as it is based on a number of assumptions that are not grounded in reality. First, the Andromeda galaxy is a vast collection of stars, gas, dust, and other matter that is held together by its own gravity, It is not a solid object that can be broken into pieces, as you might break a piece of glass or ceramic by dropping something on it. Second, even if we assume that the Andromeda galaxy were a solid object that could be broken into pieces, the number of pieces into which it would break would depend on a number of factors, such as the size, shape, and composition of the galaxy, as well as the size, shape, and mass of the grain of salt. (prompts given by Riley Goodside: https://twitter.com/goodside/status/1598053568422248448)
>
>



Criticisms of it tend to focus less on its ability to understand the world and answer previously unseen questions, and more to the huge amount of data needed it to learn anything (often claimed to be in contras with humans), or the factually inaccurate statements that ChatGPT will produce with total confidence, as if it has learned, from the wealth of examples on the internet, to perform masculinity.



A final hold-out by traditionalists, if you really press the case, is that ChatGPT does do tasks like summary or translation well, but that this is evidence that the tasks were not interesting after all.



Like a friend with whom you keep having the same petty arguments, these icy reactions point to an underlying tension. You feel as if classical AI proponents constantly want to scream: this is ridiculous! It's all echo! None of this has anything to do with intelligence! Some of them do scream that on Twitter.

For them, it is like every absurd Borges story about philosophy rolled into one.  It is like *The Library of Babel*, where scholars search for knowledge about the world not by exploring the space of ideas, but by literally trying to read every possible permutation of symbols. It is like *Pierre Menard, Author of the Quixote*, where the eponymous protagonist rewrites Don Quixote, not by restating the plot in modern language, but by literally copying each word. And worst of all, it is like *Funes the Memorious*, a story about a man who remembers everything, but understands nothing.







## On the other hand



![](/Users/reubencohn-gordon/Dropbox/Reuben/writing/book/graphics/narcissus4.jpg)



But beyond all that, the main reason for the animosity is that modern statistical AI is like an old enemy returned from beyond the grave. This is because the idea of an intelligent system built in the manner of ChatGPT is much older than you might assume.

Though it would be easy to get the impression that it was invented by a set of philosophy-ignorant Silicon Valley engineers, the truth is that one can trace a direct line from systems like ChatGPT right back to a psychological school of thought from the early 20th century, *behaviorism*.

Behaviorism avoids attempts to theorize about beliefs, intentions, goals, desires, plans, events, mental representations of objects and so on, in favor of just talking about behavior: the way that an agent takes sensory data as input and produces actions. It was, famously, a reaction against behaviorism that provoked the wave of cognitive science and classical AI from the 50s onwards that in turn was left behind by modern AI.

This wave is often associated with linguist and political theorist Chomsky, and his review of a book, *Verbal Behavior*, by the behaviorist psychologist Burrhus Skinner.

In a reply to Chomsky decades later, Skinner concludes with a fiery set of accusations against what had then become a standard perspective on the mind:

> I *accuse* cognitive scientists of relaxing standards of definition and logical thinking and releasing a flood of speculation characteristic of metaphysics, literature, and daily intercourse, perhaps suitable enough for such purposes but inimical to science.
>
> ...I  *accuse* cognitive scientists of misusing the metaphor of storage. The brain is not an encyclopaedia, library, or museum.'



Skinner was not alone in his views. Similar sentiments regarding language, and attempts to describe the meaning of sentences like the meaning of a computer program, were voiced by the (also weirdly named) philosopher Willard Van Orman Quine, who talked about:



> "the myth of a museum in which the exhibits are meanings and the words are labels. To switch languages is to change the labels." - Quine



Views like Skinner's and Quine's are part of a long history of scepticism about the sturdiness of the proposed bridge between meaning in computer programs and meaning in natural language.



This skepticism is broadly arranged around the idea that the manifest image is much less easy to describe in mathematical rigour than people tend to imagine, and the attempt to do so is a kind of clumsy and excessive literalism.



Indeed, anyone who has tried, and subsequently failed, to pin down something as simple as what a government, or a fight or a game is in precise terms will know that things in the manifest image are strangely elusive, even things as seemingly concrete and exact as physical objects or words.



If Echo-not-echo is the motif of the classical AI perspective, then perhaps Narcissus staring at his reflection in a pond, trying to work out the true nature of his unrequiting beloved, is the skeptics' response to the search for "true" meaning.

Or once again moving from Ovid to Borges, it is rather like *The Library of Babel*. In that story, the scholars try to interpret the books in the library, which are randomly generated collections of symbols, as if they are in unknown languages, and to extract the underlying meaning[^4]. It's a futile search for a thing which simply isn't there to be found.



[^4]: A quote from *The Library of Babel* on that theme: "Five hundred years ago, the chief of an upper hexagon came upon a book as confusing as the others, but which had nearly two pages of homogeneous lines. He showed his find to a wandering decoder who told him the lines were written in Portuguese; others said they were Yiddish. Within a century, the language was established: a Samoyedic Lithuanian dialect of Guarani, with classical Arabian inflections."









## Deepities



Skeptics of the bridge between the manifest image and the scientific one also tend to be skeptical of the dichotomy between true understanding and mere pattern recognition.

If there is one philosopher who comes to mind on this front, it is Daniel Dennett,  who has made a career of trying to expose a series of what he perceives as false dichotomies (true free will versus mere freedom from constraint, true agents versus mere machines, true understanding versus mere pattern recognition), and who, fittingly, was a former student of Quine's.



A fan of making up whimsical names for useful ideas, he coins the term *deepity*:



> "A deepity is a proposition that seems  both important and true and profound but that achieves this effect by being ambiguous. On one reading it is manifestly false, but it would be earth-shaking if it were true; on the other reading it is true but trivial. The unwary listener picks up the glimmer of truth from the second reading, and the devastating importance from the first reading, and thinks, Wow!" - Dennett, Intuition Pumps and Other Tools for Thinking



A classic example is the phrase "A person is a pile of atoms". The true uninteresting sense is that a person is made up of atoms, the interesting but false sense is that a person is simple and predictable because of this. The deepity performs a slight of hand, by wavering between the former and the latter:

> "When we say we are a pile of atoms, we do not mean we are merely a pile of atoms, because a pile of atoms which is not repeated from one to the other might well have the possibilities which you see before you in the mirror." - Feynman



Coming back to AI, the statement "Large language models are mere stochastic parrots" is a phrase made popular by a paper on that theme by Emily Bender, Timnit Gebru, Angelina McMillan-Major, and, the convincingly anonymous Shmargaret Shmitchell.

This is a perfect example of a deepity. It has a true but tautological meaning, and an interesting but false one.



The true uninteresting meaning is that large language models (i.e., systems like ChatGPT) produce words as a (probabilistic) function of previous words and other data. Well of course! You could say the same about a person, just like you could describe them as a collection of atoms.



The other meaning is the one which suggests that it has no understanding of communicative intent, so that when you ask it a question, it could only response correctly in limited cases where it has seen the question, or else give awkward ill-fitting answers.



But in this sense, ChatGPT is obviously not a stochastic parrot. You can ask it all sorts of subtle things:



Me:

> Translate the following sentence into the language spoken in the country of which Madrid is the capital: "I want to travel the world"

ChatGPT:

> "Quiero viajar por el mundo."
> This sentence is in Spanish, which is the official language of Spain, the country of which Madrid is the capital. The translation of "I want to travel the world" into Spanish is "Quiero viajar por el mundo."

(Note how it has reasoned about what country Madrid is the capital of, and then translated the sentence appropriately. But does it understand communicative intent? Let's probe further.)

Me :

> What might be the communicative intent of saying this?

ChatGPT:

> The communicative intent of saying "I want to travel the world" might be to express a desire or ambition to see and experience different places and cultures around the globe. The speaker might be expressing a longing for adventure, a curiosity about the world, or a desire to broaden their horizons and learn new things. Alternatively, the speaker might simply be stating a personal preference or expressing a plan to travel extensively in the future. The specific communicative intent of the statement would depend on the context in which it is made and the relationships between the speaker and the listener(s).

Me:

> Give two different contexts, with different communicative intents, where one might say this

ChatGPT:

> Here are two different contexts in which one might say "I want to travel the world," with different communicative intents:

> Context 1:

> Speaker: A young person who is planning their gap year after high school graduation

> Listener: A group of friends or family members who are discussing travel plans or future goals

> Communicative intent: The speaker is expressing a desire to see and experience different parts of the world and is possibly seeking encouragement or support from the listener(s) in realizing this goal.

> Context 2:

> Speaker: A business owner who is seeking to expand their company's global reach

> Listener: A potential client or business partner

> Communicative intent: The speaker is expressing their ambition to grow their business and reach new markets, and is possibly seeking to establish credibility or build rapport with the listener(s) by demonstrating a global perspective and willingness to take risks.



Having had an interaction like this,  a new user of ChatGPT might feel rightly misled by the epithet "stochastic parrot".



A sceptic of the dichotomy between true and ersatz understanding might also point to the history of similar dichotomies that turned out to be false, on the basis of a lack of imagination about what the thing being described as "mere" can be like.





Dennett likes to give the example of biologist William Bateson, who, before the discovery of DNA, rejected the possibility of a physical information carrying mechanism in living things on the grounds of implausibility:





> "The properties of living things are in some way attached to a material basis, perhaps in some special degree to nuclear chromatin and yet it is inconceivable that particles of chromatin or of any other substance, however complex, can possess those powers which must be assigned to our factors or genes. The supposition that particles of chromatin, indistinguishable from each other and indeed almost homogeneous under any known test, can by their material nature confer all the properties of life surpasses the range of even the most convinced materialism"





In the same way, innovations in statistical AI lend credence to the suspicion that the root of the issue is simply a lack of imagination.



The fact is, it is remarkably easy to treat ChatGPT as an agent with beliefs, knowledge and intentions, or to borrow another coinage from Dennett, to take an *intentional stance* towards it.  The ease with which we can do this, and the degree to which the system's behavior does not disabuse us of this stance, is startlingly greater than systems even a few years ago, and goes some way to explain the hype ChatGPT generated towards the end of 2022. It is able not just to respond to questions, but to respond in the way you'd expect if it did indeed understand what was being asked.



Of course, this is just *mere* prediction of the next word, but is that any more relevant than to say that a person is a "mere" bag of jostling atoms? From the viewpoint of classical AI, the answer is emphatically yes, it *is* more relevant, and the above demonstration has no understanding. There is no concession on the dichotomy between true and merely producing words in a way that gives the impression of understanding; equally, the view of the space of human concepts (the manifest image) as analogous to the space of programs or mathematical entities is never questioned.



Contrast this to Dennett's perspective, under which there is no fundamental difference between taking the intentional stance towards ChatGPT and taking it towards a person, although for now, still a difference of degree.











![](/Users/reubencohn-gordon/Dropbox/Reuben/website/static/img/narcissus2.jpg)





If Quine and BF Skinner were alive to see modern AI, they would be doing whatever the opposite of rolling is in their respective graves. ChatGPT's success is about the closest thing to a vindication of Skinner's behaviorism and Quine's rejection of essentialist conceptions of meaning that it is possible to have.



In Narcissus' case, he realizes that what is behind his elusive interlocutor is not a person lying underneath the surface of the pond and mirroring his every move, but his own reflection. At this point he has a huge tantrum and turns into a flower.



But how does the analogous motif play out in AI? Will there be a philosophical sea-change, in which the distinction between true understanding and mere pattern recognition gives way to something new? Or, with Skinner and Quine in mind, something old?
