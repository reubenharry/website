---
title: "Sarcasm is Countersignaling about the Common Ground"
date: 2018-07-26T17:07:24+01:00
draft: true
---

purposes:
	have people think: oh, that's the right idea about irony
	explain academic ideas clearly



viewed naively, communication transmits knowledge about the state of the world from one party to another
	you know foo...

This seems at least partly right in some broad sense, but natural language has a lot of distinctive quirks

	A flagship example of such a quirk is sarcasm (or verbal irony, to use a term that encompasses slightly more), as in examples refs

Why say something untrue? What does it communicate that saying a true thing would not?

Here's an intuition.


Thinking about (ref) gives an intuition:

	by saying ``I loved the play'', I
		import

Extrapolating, the broad insight is this:
	by using sarcasm, one can communicate not only about what the world is like, but about the common ground

	And why would non-sarcastic language fail in this regard?
		To see why, consider the effect of saying ``I hated the play''

**Sarcasm is a way to be informative about the common ground**

This leads to two intuitive predictions about when it makes sense to use sarcasm:

	1. import
	2. import





<!-- (**This is a description of [this project](/docs/irony.pdf)**) -->

asked if I was coughing sarcastically (despite appearances, I was not).

While people are pretty good at detecting sarcasm (and concomitantly, knowing when to use it), there are clearly cases that are too ambiguous.

We can ask: when is sarcasm hard to interpret and therefore bad to use?

I want to suggest that this

This amounts to asking: what is a theory of sarcasm?

Here's the intuition behind what I propose in the paper:

Suppose I say
	(1)

When would I do this?

if you say (1), it conveys that you believe that whoever you're talking to already believed that you did not love the play.

Why? Because if your interlocutor believed it was plausible that you liked the play, you'd risk

countersignaling


###Sarcasm###

some good examples

> (1) Wow, I really loved that play.

For instance, imagine

(2) Yeah mum, I'm just in the park doing heroin

(3) Oh yeah, I'm gonna buy a Tesla then

The idea:

###Countersignaling###

There's an phenomenon in economic game theory called countersignaling, which
	IMPORT QUOTE

	when you say *u* sarcastically, you're communicating that you're sufficiently sure your interlocutor knows that *u* doesn't pertain that it's safe to pretend otherwise by saying *u*.

	In other words, sarcasm is countersignaling.


	The dynamic is analogous to countersignaling, as discussed in the game theoretic economic literature:

		if your interlocutor already knew that you hated the play, pretending (i.e. speaking as if you were in the counterfactual world in which) you loved carries relatively low risk of your interlocutor failing to detect that you are pretending.

		So a listener aware of this trade-off can infer that the speaker must have believe the

		And conversely, a speaker can leverage this inference to communicate about the common ground.

###Common Ground###

But countersignaling about what?

The notion of the common ground in a conversation









So the idea here was to characterize the core dynamic of sarcasm. With (1) in mind (or a sarcastic utterance of your choosing)




sarcasm is a way of communicating about the (prior) common ground

In this [paper](/docs/irony.pdf) Leon Bergen and I take this intuitive story and formalize it. This turned out to be very fruitful. We were forced to be precise about what it means to pretend linguistically, and ended up with nice predictions about the space of contexts in which sarcasm is communicatively effective.

The intuition that the model makes precise about when to use sarcasm:


	Suppose *u* literally means P.
	sarcastically say *u* when

		1. you believe P has high probability under the common ground

		2. you believe there is uncertainty over the common ground itself.

Each point in this visualization from the paper is a possible common ground (i.e. a possible hyperprior). White points are those where a speaker who assumes their interlocutor has that common ground prefers to use irony. The shape of the white regions reflects both (1) and (2) above.

That's pretty vague (it's hard to say anything precise without more maths) so if you're intrigued, please do check out the paper.

We went a certain way towards fleshing out the dynamics of sarcasm in the [paper](/docs/irony.pdf) (dealing with ironic questions, understatement and some other phenomena), but there's a very open space for research about more sophisticated pretenses, ironic and otherwise.
