---
title: "Functional Reactive Probabilistic Programming"
slug: "browser-spike"
date: 2026-09-22T14:40:00-04:00
draft: false
description: "Interactive demos: Rhine-Bayes on the web"
---

```{.haskell demo=browser-spike from=Tutorial.demo1}
-- Built from real-time-inference's shared core (src/Tutorial.hs).
-- The fence is showable source; `from=` tells the site build which SF to compile.
demo :: UserInput >--> Picture
demo = demo1
```

Shown above is an example of real time inference. The system receives as data noisy observations (in red) of the position of a particle (green, unseen to the system), and uses them to obtain a posterior distribution, by running a particle filter.

The code that generates this simulation is written in a *reactive probabilistic programming library* in Haskell.[^1]

[^1]: Around the same time, it occured to Manuel Bärenz and I that reactive programming and probabilistic programming could be combined - Manuel worked out how to write a particle filter, and built [a library](https://www.tweag.io/blog/2023-10-12-rhine-bayes/) on top of some of his existing software.

Here's how the code looks. First, the prior captures how the particle is believed to move:

```haskell
prior :: () >--> Position
prior = proc _ -> do
  x <-brownianMotion1D-< ()
  y <-brownianMotion1D-< ()
  returnA -< V2 x y
```

Note the types! (`a >--> b`) is the type of stochastic dynamical systems[^2].

[^2]: A signal $s \in S(A)$ is a function from the time domain to some value space $A$. A filter is a function from functions of time to functions of time, i.e. $f \in S(A) \to S(B)$. With the additional requirement (known as causality) that $f(s_o)(t)$ is only a function of $s_i(t')$ for $t' \leq t$, it becomes a *dynamical system*. By stochastic, I mean that the dynamical system is really $f : S(A) \to D(S(B))$, i.e. a distribution over signals, conditional on an input signal.

So the type (`() >--> Position`) of `prior` means that it takes nothing (or rather the trivial signal $\lambda x : ()$ ) as input, and returns a signal as output with the value `Position` at each time point.

`prior` describes the system's prior knowledge of how the green particle moves. Note that `prior` is a *time-varying* distribution, i.e. a stochastic process. This is reflected in the type of `prior`. Next, the generative model:

```haskell
observationModel :: Position >--> Observation
observationModel = proc p -> do
  xNoise <-(uncorrelated (normal 0 std))-< ()
  yNoise <-(uncorrelated (normal 0 std))-< ()
  returnA -< p + V2 xNoise yNoise
```

`observationModel` generates a process describing observations *given* the process describing the true position. The is what we see in the red dots in the above gif. In this case, the observations are just the positions perturbed by uncorrelated Gaussian noise. Again, this is reflected in its type. Then the posterior:

```haskell
posterior :: Observation >-/-> Position
posterior = proc (V2 oX oY) -> do
  latent@(V2 trueX trueY) <-prior-< ()
  () <-observe-< normalPdf oY std trueY * normalPdf oX std trueX
  returnA-< latent
```

Given a process representing incoming observations, `posterior` is a process representing the inferred position of the particle. We cannot sample from it yet, because it is unnormalized. This is reflected in the fact that they type has `>-/->`, not `>-->`.

```haskell
inference :: Observation >--> [(Position, Log Double)]
inference = particleFilter params posterior
```

The `particleFilter` inference method takes an unnormalized signal function (here the posterior), and produces a (normalized) signal function representing the position of a set of particles and their corresponding weights, given the observations. This is what we sample from to obtain the purple particles shown in the first gif above.

Finally, we wrap the whole system in a signal function that expresses the behavior to be displayed to screen:

```haskell
main :: Text >--> Picture
main = proc message -> do
  actualPosition <-prior-< ()
  measuredPosition <-observationModel-< actualPosition
  samples <-inference-< measuredPosition
  (showObs, showParts) <-interpretMessage-< message
  renderObjects-< Result 
    (if showObs then measuredPosition else 0) 
    actualPosition 
    (if showParts then samples else [])
```

