---
title: "Stochastic Processes"
date: 2023-01-26T17:07:24+01:00
draft: True
---

Stochastic processes are (roughly) distributions over functions, often functions on a time domain. If you want to model the evolution of a system under forces you are uncertain about (e.g. a particle moving around in water, or the price of a stock) this is the right tool. 

The measure theory involved is, well, involved, so these notes follow a physicist's introduction (http://www.damtp.cam.ac.uk/user/tong/kintheory/three.pdf), which just gives the general shape of things.

##  Marginals

If $p(x)$ is a distribution over functions $x :: \mathcal{R} \to \mathcal{R}^n$, then for a given time $t$, we can consider the marginal distribution at that time, which we often write $x(t)$.

The moments of marginals, i.e. $E(x(t))$ and $Cov(x(t_1), x(t_2))$ partially characterize a stochastic process, and in the case of white noise, its defining feature is that they totally characterize it.


## White noise

Consider the following distribution over functions:

$$
\frac{1}{Z} exp(-\int^\infty_{-\infty}dt \frac{f(t)\cdot f(t)}{4D\gamma^2}) = \frac{1}{Z}e^{-\frac{1}{4D\gamma^2}\langle f, f \rangle}
$$

which is evidently a normal distribution (in an infinite dimensional space).

This is an exponential family distribution

todo 

## Stochastic differential equations (SDEs)

We can then formulate SDEs like

$$
\frac{dx}{dt} = f(x)
$$

where $f$ is, for example, white noise.

Solving for just the marginal moments (as described above) is easy:

$$
x(t) = x(0) + \int_0^t f(x) \Rightarrow \langle x(t) \rangle = x(0)
$$



## Fokker-Planck

Given a stochastic process $x : Dist(Time \to R^n)$, characterized by an SDE (known as the Langevin equation)

$$
\gamma\frac{dx}{dt} = -\nabla V(x,t) + f(x)
$$

for white noise $f$, with 
mean $0$ and covariance $\langle f(t_1), f(t_2) \rangle = 2D\gamma^2\delta_{ij}\delta(t_2 -t_1)$, we can obtain the time varying distribution over the marginal $\rho(t) : Time \to Dist(R^n)$, characterized by the Fokker-Planck equation

$$ 
\frac{d\rho}{dt} = \nabla \cdot J
$$

where $J = \frac{1}{\gamma}\rho\nabla V + D\nabla \rho$

This is a continuity equation. Naturally, the flow is volume preserving:

$$ 
\frac{d}{dt}\int dx \rho(x) = \int dx \frac{d}{dt} \rho(x) = \int_{vol} \nabla \cdot J = \int_{\delta(vol)} J = 0 
$$

A stationary (i.e. time-translation invariant) distribution $\rho^*$ can be derived by solving for 

$$ 
0 = J = \frac{1}{\gamma}\rho\nabla V + D\nabla \rho
$$

$$
\Rightarrow  \nabla \rho = -\frac{\nabla V}{\gamma D}\rho \Rightarrow \rho^*(x) \propto e^{-\frac{V(x)}{\gamma D}}
$$

Since the (position-marginal) stationary distribution in a heatbath is also 

$$
\rho^*(x) \propto e^{-\frac{V(x)}{k_bT}}
$$

(see the [statistical mechanics notes](/notes/StatisticalMechanics)), we obtain the Einstein relation

$$
\gamma = k_BT/D
$$

which is a special case of the fluctuation-dissipation theorem.




## Ito and Stratonovich