---
title: "Bayesian Pragmatics in Haskell"
date: 2017-08-10
draft: false
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
'''
