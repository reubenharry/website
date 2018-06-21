---
title: "Bayesian Pragmatics in Haskell"
date: 2017-08-10
draft: true
---

Haskell is already well-known to be great for natural language (NL) semantics. This is unsurprising, since NL semantics, following Montague's seminal work, makes heavy use of the simply typed lambda calculus. Chris Barker and Ken Shan have in turn come up with more ways to borrow ideas from type theory into NL semantics: continuations and monads respectively.

But what about pragmatics? Recently, there's been some exciting work on two things: Bayesian probability for NL pragmatics and probabilistic programming in Haskell. The narrative arc is probably pretty clear by now, so here's some succint Haskell code showing how to model Gricean implicature with mutually recursive Bayesian agents.

Two things first:
1) Disclaimer: neither the idea of Bayesian pragmatics nor the code for probabilistic programming in Haskell is mine. What's mine is the code below for Bayesian pragmatics in Haskell.
2) Context: the goal of this program is to model a speaker and a listener who are **pragmatic**. In brief, this means that they reason about each other's actions. Here they are playing a reference game, where the speaker chooses an expression which describes the world he and the listener are in. Dually, the listener tries to work out which world they are in from the expression. 

    To keep it simple (but note that it's easy to switch in another case in the code), there are two worlds, 0 and 1. Both worlds are blue, but only the first is square (these ``worlds'' are pretty abstract - think of them as pictures if that's helpful.). The speaker can only say two things: that he's in a blue world, or that he's in a square world.

    If I hear a speaker say that they are in the blue world, this is informative, so long as I reason as follows: if I am in world 0, then the speaker could have said they were in a square world, which would have been more informative than saying they were in a blue world. But they didn't, so it's more likely they are in world 1.

We want a model of a listener which is capable of performing this reasoning, and that's precisely what (l 1) represents below. It's a listener that models a speaker modeling a listener.

```
type Utterance = String
type World = Char
--speakers are conditional distributions over utterances given worlds
-- type Speaker = forall d. (MonadBayes d) => World -> d Utterance
--listeners are conditional distributions over worlds given utterances
type Listener = Integer -> Utterance -> Dist Double Char
type Speaker = Integer -> Char -> Dist Double Utterance

--the possible utterances and worlds: both are distributions
utterances = uniformDraw ["blue","square"]
worlds = uniformDraw ['0','1']

--now we declare a semantics, i.e. an interpretation function (which is a functor from syntax to semantics)
--this one is as simple as possible. not even compositional
meaning :: Fractional a => Utterance -> World -> a
meaning "blue" _ = realToFrac 1.0
meaning "square" '0' = realToFrac 1.0
meaning "square" '1'  = realToFrac 0.0


--mutually recursive definitions of pragmatic speaker and listener
--n is the number of levels of recursion. (l 2) models (s 2) who models (l 1) who models (s 1) who... 
s :: Speaker
s 0 w = utterances
s n w = do
  u <- s (n-1) w
  let utility = mass (l (n-1) u) w :: Double
  factor $ realToFrac utility
  return u

l :: Listener
l 0 u = do
    --samples a world uniformly from the possible worlds
    w <- worlds
    --does a condition on the truth of the utterance in the sampled world
    factor $ meaning u w
    return w
l n u = do
    w <- worlds
    factor $ realToFrac $ (mass (s n w) u :: Double)
    return w


-- prints out the first 5 listener depth probabilities of being in '1' on hearing 'blue'
main = print . take 5 . fmap (\n -> mass (l n "blue") '1') $ [0..]
> [0.5,0.7499999999999999,0.8999999999999999,0.9878048780487805,0.999847607436757]
```
<!-- montague to grice
rsa blog

Natural Language Pragmatics in Haskell (in Latin):

Natural Language Semantics has a long history of borrowing ideas from computer science and logic - in this respect, it is a subpart of traditional AI, which models human minds in the image of computers. However, the borrowed material has always had a particularly functional flavour; Montague uses lambda calculus to model word meanings, for instance. More recently, Chris Barker had the great idea of using continuations to model natural language quantifiers. There's even some work on using monads to represent things like conventional implicature, intensionality and discourse reference. Unsurprisingly, all this is uber amenable to Haskell.

So much for semantics, but I want to give an example of how functional programming is well adapted to pragmatics, a much more recent and much less well known innovation. This post is therefore a quick introduction to natural language semantics and pragmatics for a Haskell programmer:

Part 1: Semantics:

The idea of compositional semantics is to assign words in a language to functions (typically terms in simply typed lambda calculus) such that when the words of a sentence are composed, you get a truth value out (which is the type of a sentence, if Frege is to be believed).

People always use English in formal semantics, which is boring, so I'll use Latin. The examples will be simple, so hopefully it won't be confusing. First, we'll need some types

type e = String
type t = Bool

We could do this in a bit more of a fancy way, and actually make new types for entities. But no need to complicate this example. For now, entities are just strings of characters.


    Caecilius currit. 

    OK, so let's say that we're in a world where Caecilius does indeed run. Then the value of BLAH is True. So how to assign functions to 


    caecilius :: e
    currit :: e -> t
    currit x = `elem` ['Caecilius','Grumio']

    OK, so now our syntax will tell us enough to combine these, namely that currit takes Caecilius. So the meaning of ``Caecillus currit'' is: caecillius currit

    Transitive verbs are also easy, thanks to currying:
        caecilius metellam amat:
            amat metellam caecillius 

        Latin word order is free, so this is actually a sentence.


Quantifiers: this section is tricky and requires understanding of continuations and monads. Feel free to skip and just assume that we can write a compositional semantics for sentences like ``Everyone likes someone.''
    Here is a thing we can't yet do:

        omnis amat ...


    Examples like this are the subject of Montague's famous, and totally unreadable paper, On the Proper Treatment of Quantification. Buried beneath layers of unbearable obfuscation is the very simple insight that the type of quantifiers like ``omnis'' should be e->t->t:
        in other words, omnis should take as an argument the sort of thing which takes entities.

        More experienced programmers will recognize that we can rewrite ett as Cont t e. That is, we are working with a continuation.

            By realizing that Montague's type lifting solution to quantifiers is just the continuation passing transform, Barker unlocks a whole bag of new tricks for trickier situations:

                For example, Montague's analysis is totally incapable of dealing with multiple quantifiers:



                Here's a challenge: what on earth is the compositional semantics for ``Different children like different toys.''? Good luck.)

            some, all, none

    geach...



Caecilius runs. 


OK, so we have a rudimentary semantics. What's pragmatics? The easiest example is 

    some of the people like 

introduction to the Bayesian formalization of pragmatics, and an example of how to use Haskell for that purpose.

Firstly, 
    Probability distributions form a monad.

What this means in practice is that we can write code like this:
    do 
        x <- bernoulli 0.5
        return $ x^2
