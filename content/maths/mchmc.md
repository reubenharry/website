---
title: "Microcanonical HMC"
date: 2020-01-26T17:07:24+01:00
draft: True

---



# Microcanonical Hamiltonian Monte Carlo

One way to view Markov Chain Monte Carlo algorithms, which is particularly enlightening for the gradient based versions like HMC, is as follows:

What we want:

- to sample from a distribution p(x)

What we do:

1. Consider a distribution q(x,z) \propto e^{-bH(x,z)} such that the marginal q(x) = \int dz q(x,z) = p(x)
2. Specify some (possibly stochastic) differential equation (SDE), that has as a fixed point under its flow q, and then numerically integrate to obtain samples from q, (assuming ergodicity).




paper (CITE TODO) gives a recipe for constructing such an SDE to obtain e^{-bH} for any H. 

Specific choices of SDE yield familiar algorithms, in particular Hamiltonian Monte Carlo (HMC) and Langevin Monte Carlo (LMC).

For HMC, the differential equation are the equations of motion, and Liouville's theorem gives that the determinant of the flow is 1 for any time span, so one can 


This would seem to be the final word in this problem. Not so.

What CITE TODO propose is to instead consider a distribution $\delta(H(x,z)-E)$ (known in statistical mechanics as the micocanonical ensemble), with $H$ chosen carefully, such that the marginal over x, i.e. q(x)=\int dz q(x,z), is equal to p(x). One can then consider both the analogs of Hamiltonian and Langevin Monte Carlo in the microcanonical setting.

[1] and [2] TODO CITATIONS establish the requisite properties of these inference algorithms, consider appropriate choices of H and kinetic energy to ensure the right marginal, and show that it works very well both on toy problems and real ones.

## Choosing $H$

The simplest case is a separable $H$. For example, suppose
    T

The V = ...

The mathematics of this is as follows:

$$
p(x) \propto \int_{\mathbb{R}^d} \delta(H(x, p) - E) d p = \frac{\Omega_{d-1} \Pi^{d-1}}{\vert \partial_{p} H\vert},
$$


To see this, note that the integral can be converted into (hyper)spherical coordinates. The angular part of the integral can be evaluated separately (we assume a rotationally symmetric $H$), giving the numerator.

The denominator is the integral of $\delta(H(\mu))d\mu$, which is a standard result.


This is the most explored

In paper todo cite
    some more abstract results about this differential equation are shown.