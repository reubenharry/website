---
title: "Probability"
date: 2020-01-26T17:07:24+01:00
draft: True

---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
  MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [['$$','$$']],
    processEscapes: true,
    processEnvironments: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    TeX: { equationNumbers: { autoNumber: "AMS" },
         extensions: ["AMSmath.js", "AMSsymbols.js"] }
  }
  });
  MathJax.Hub.Queue(function() {
    // Fix <code> tags after MathJax finishes running. This is a
    // hack to overcome a shortcoming of Markdown. Discussion at
    // https://github.com/mojombo/jekyll/issues/199
    var all = MathJax.Hub.getAllJax(), i;
    for(i = 0; i < all.length; i += 1) {
        all[i].SourceElement().parentNode.className += ' has-jax';
    }
  });

  MathJax.Hub.Config({
  // Autonumbering by mathjax
  TeX: { equationNumbers: { autoNumber: "AMS" } }
  });

</script>


$\newcommand{\R}{\mathbb{R}}$
$\newcommand{\C}{\mathbb{C}}$
$\newcommand{\N}{\mathbb{N}}$
$\newcommand{\Z}{\mathbb{Z}}$

Highly recommend *Machine Learning: A Probabilistic Perspective* by Kevin Murphy as a no-nonsense reference for a whole lot of probabilistic models and inference strategies.

A useful online reference for basic facts about probability and distributions: https://www.statlect.com/.

## PDF of function of random variable

Suppose Y = g(X) and g is increasing. Then $F\_Y(y) = P(Y\leq y) =  P(g(X)\leq y) = P(X\leq g^{-1}(y)) = F\_X(g^{-1}(y)) $.

Then $f\_Y(y) = F'\_Y(y) = \frac{d}{dy}F\_X(g^{-1}(y)) = f\_X(g^{-1}(y))\frac{d}{dy}g^{-1}(y) =  f\_X(g^{-1}(y))\frac{dg^{-1}(y)}{dy}$

Or:

$$ F\_Y(A) = P(Y\in A) = P(g(X)\in A) = P(X\in g^{-1}(A)) = \int\_{g^{-1}(A)}f\_X(x)dx $$

By the general form of the substitution rule, we then have that

$$ P(Y\in A) = \int\_{A}(f\_X\circ g^{-1})(y)\cdot|J\_{g^{-1}}(y)|dy $$

But $J\_{g^{-1}}(y) = det D(g^{-1}(y)) = det (Dg(g^{-1}(y)))^{-1} = J\_g(g^{-1}(y))^{-1}$ so

$$ P(Y\in A) = \int\_{A}(f\_X\circ g^{-1})(y)\cdot|J\_g(g^{-1}(y))^{-1}|dy = \int\_{A}\frac{(f\_X\circ g^{-1})(y)}{|J\_g(g^{-1}(y))^{-1}|}dy $$

So $\frac{d}{dy}P(Y\in A) = f\_Y(y) = \frac{(f\_X\circ g^{-1})(y)}{|J\_g(g^{-1}(y))|} $

So $(f\_X\circ g^{-1})(y) = f\_Y(y)\cdot|J\_g(g^{-1}(y))^{-1}|$

## Sum Random Variables by Convolving PDFs

$$ F_{X+Y}(z) = \int\_{-\infty}^{\infty}\int\_{-\infty}^{z-x} f\_{(X,Y)}(x,y) dydx $$

$$ = \int\_{-\infty}^{\infty}\int\_{-\infty}^{z} f\_{(X,Y)}(x,v-x) dvdx = \int\_{-\infty}^{z}\int\_{-\infty}^{\infty} f\_{(X,Y)}(x,v-x) dvdx   $$. Then, taking the derivative with respect to $x$, using the fundamental theorem of calculus, and assuming independence of $X$ and $Y$, we have that $f\_{X+Y}(z) = \int\_{-\infty}^{\infty} f\_X(x)\cdot f\_Y(z-x) dx$.

## Characteristic Function

Characteristic function of a random variable is the (inverse) Fourier transform of its density.

Characteristic function of a Gaussian is a Gaussian (see [notes on Fourier analysis](/maths/fourier))

## Some distributions

### Gaussian Distribution

Its weird looking pdf can be understood by first looking at the standard normal N(0,1), with pdf $\frac{1}{\sqrt{2\pi)}}e^{-\frac{1}{2}x^2}$ and then doing change of variables, noting that if $f$ is the pdf of $X$, $\frac{1}{\sigma}f(\frac{x-\mu}{\sigma})$ is the pdf of $\mu + \sigma X$, by change of variables.
Similarly for the multivariate Gaussian, observe that a change from $X$ to $\mu + \Sigma X$ justifies its form.

So really, the hard part is finding the value of the Gaussian integral $\int\_{-\infty}^{\infty}e^{-x^2}=\sqrt{\pi}$.

Smoothing over a bunch of analytic difficulties, here's the basic idea:

$$\int\_{-\infty}^{\infty}e^{-x^2}=\sqrt{(\int\_{-\infty}^{\infty}e^{-x^2}dx)^2}$$
$$ = \sqrt{\int\_{-\infty}^{\infty}e^{-x^2}dx\int\_{-\infty}^{\infty}e^{-y^2}dy}$$
$$ = \sqrt{\int\_{-\infty}^{\infty}\int\_{-\infty}^{\infty}e^{-(x^2+y^2)}dxdy}$$
$$ = \sqrt{\int\_{-\infty}^{0}e^{-r^2}2\pi rdr}$$
$$ =\sqrt{\pi}$$

### Exponential Distribution

$$PDF(x;\lambda) = \int \lambda e^{-\lambda x} $$

$$E[X;\lambda] = E[\int \lambda e^{-\lambda x}] = \int x \lambda e^{-\lambda x} = [x \cdot -e^{-\lambda x}]\_0^{\inf} + \int e^{-\lambda x}$$

$$ = 0 + [-\frac{1}{\lambda}\cdot e^{-\lambda x}]\_0^{inf} = \frac{1}{\lambda}$$

### Markov Random Field

$$P(x|\theta) = \frac{e^{\theta^T\cdot f(x)}}{\sum\_{x'}e^{\theta^T\cdot f(x')}}$$

where $f(x)$ is an indicator function and $\theta$ is a vector of parameters. This parametrization shows that an MRF is an exponential family distribution.

### Empirical Distribution

The delta distribution which places full weight on the data (viewed as a single data point).


## Central Limit Theorem

Various increasingly powerful versions, but simplest is:

For a sequence $\{X\_i\}$ of independent and identically distributed (iid) random variables with mean $\mu$ and variance $\sigma^2$, with $X\_n = \left(\sum\_i^nX\_i\right)-n\mu$, the random variable $Z\_n=\frac{X\_n-n\mu}{\sqrt{n\sigma^2}}$ converges in distribution to $N(0,1)$, i.e. to a standard normal.



<!-- The proof uses the continuity theorem, which effectively says that it's sufficient to show that the moment generating function (MGF) converges to that of a normal MGF. Then we observe the following:

$$MGF\_{X\_n}(t) = [MGF\_{X\_i}(t)]^n $$
$$ MGF\_{Z\_n}(t) = [MGF\_{X\_i}(\frac{t}{\sqrt{n}\sigma})]^n$$

Further, we can Taylor expand the first MGF as follows:

$$ MGF\_{X\_n}(t) = MGF(0) + tMGF'(0) + \frac{t^2}{2}MGF''(0) + o(t^2) = 1 + \frac{t^2}{2}\sigma^2 + o(t^2) $$

(The last step happens by fact that the derivatives of the MGF at $0$ are the moments of the distribution in question.)

But then:

$$ MGF\_{Z\_n}(t) = [1 + \frac{(\frac{t}{\sqrt{n}\sigma})^2}{2}\sigma^2 + o(t^2)]^n = [1 + \frac{t^2}{2n} + o((\frac{t}{\sqrt{n}\sigma})^2)]^n$$

But this converges to $e^{\frac{t^2}{2}}$ as $n$ goes to infinity. That's the MGF of a standard normal, so we're done.
-->

The proof uses Fourier methods. The PDF of a sum of iid random variables $X_i$ is a convolution of $n$ PDFs of $X_i$, the Fourier transform of a convolution is a raising of the Fourier transform of those PDFs to the $n$th power, and Taylor expanding inside the Fourier integral basically gives us the result (see e.g. page 130 of [this](https://see.stanford.edu/materials/lsoftaee261/book-fall-07.pdf)).

## Exponential Family

Not to be confused with the exponential distribution. Really it's a family of families. For fixed functions $b$ and $T$ but with $\eta$ varying, we have a family:

$$P(x;\eta) = b(x)e^{\eta^TT(x)-a(\eta)}$$

$T(X)$: sufficient statistics, $\eta$ : natural parameter, $a(\eta)$: log-normalizer, $b$ : base measure.

Canonical Parameters: $\mu,\sigma...$ : $\Omega$ (the sample space)

Natural Parameters: $\eta : \R$

Link function: $L : \Omega \to \R$

Response function: $R : \R \to \Omega$

So $\eta$ parametrizes a family. For instance, we can choose $T$ and $b$ to make $\eta$ range over all Gaussians, or Bernoulli, Poisson, Exponential, Von-Mises, Gamma etc distributions. $a$ is determined by $T$ and $b$ and is the log of the normalizing constant.

The reason this is useful is that we can prove a bunch of super useful things about distributions in this form. In particular:

- $\frac{da(\eta)}{d\eta} = E[T(x);\eta]$
- $H\_{\eta}a(\eta) = Cov[T(x);\eta]$
- $a$ is convex in $\theta$
- Each exponential family is conjugate to an exponential family
- Maximum Entropy: exponential families are the most entropic distributions given that the expectation is equal to some $\alpha$, for a fixed base measure

To find the maximum likelihood $\theta$ for an observation $D$, one wants to take the gradient of log $P(x|\theta)$, since log-likelihood in exponential families is convex. Taking the gradient of the log of the numerator is easy. But the gradient of the log of the denominator is as follows:

$$ \frac{d}{d\theta} log \sum\_{x'}e^{\theta^T\cdot f(x')} = \frac{1}{\sum\_{x'}e^{\theta^T\cdot f(x')}}
  \cdot \sum\_{x'} \frac{d}{d\theta} e^{\theta^T\cdot f(x')}  $$

$$ = \frac{1}{Z(\theta)} \cdot \sum\_{x'}e^{\theta^T\cdot f(x')} \cdot f(x') =  \sum\_{x'} P(x'|\theta) \cdot f(x') = E\_{x\sim p(x|\theta)}[f(x)]  $$

The Hessian wrt. $\theta$ is the covariance of f(x) wrt the MRF. Covariance matrices are positive semi-definite, proving that the log-likelihood is convex.

Example of how to put Bernoulli distribution in exponential family form:

$T=id$, $b(x)=1, \eta=\sigma^{-1}(\mu)$.

Crucial point: how do we convert from the mean parametrized form of the Bernoulli distribution, namely $P(x|\mu) = x^\mu\cdot x^{1-\mu}$ to the naturally parametrized form?

Easy: take the log odds: $\eta=log(\frac{\mu}{1-\mu})$. And the inverse is the sigmoid function.


## Useful approximations

### Stirling's Approximation

$N!$ rapidly becomes intractable to analytically or numerically compute, which is bad for statistical mechanics, because it appears *a lot*. But for large $N$ we can estimate it. First a rough estimate, and then a better one:

$$
\log N! = \log \prod_{i=1}^N i = \sum\_{i=1}^N \log i \approx \int_1^N \log x dx$$
$$ = [x\log x]\_1^N-\int\_1^N\frac{x}{x}=N\log N - N + 1
$$

A second, better approximation is attained as follows, recalling that $\Gamma(n)=n!$ for $n\in \Z$, where

$$
N!=\Gamma(N)=\int_0^{\infty} e^{-x}x^Ndx
$$

We then do something crazy, which is to approximate the integrand by a Gaussian. The reason this works well is that the integrand $f(x)=e^{-x}x^N$ is peaky. The gaussian function is:

$$
g(x)=Ae^{-\frac{1}{2}(\frac{x-x_0}{\sigma})^2}
$$

We set the mean $x_0$ at the maximum, which is found by setting $0=\frac{d}{dx}\log e^{-x}x^N=\frac{d}{dx}N\log x-x=\frac{N}{x}-1$, which implies that $x_0=N$. Then $A=g(x_0)=g(N)\approx e^{-N}N^N$.

Finally, we note that $\frac{d^2}{d x^2}\log g(x)=-\frac{1}{\sigma^2}$ and equating this to $\frac{d^2}{d x^2}\log f(x)=-\frac{N}{x^2}$ implies that $\sigma$ should be set to $\frac{x^2}{N}$

<!-- TODO: understand: or in particular: $\sigma=\sqrt{\frac{x_0^2}{N}}=\sqrt{N}$. -->

This gives:

$$
N! = \Gamma(N)=\int_0^{\infty} e^{-x}N^Ndx \approx \int_0^{\infty} e^{-N}N^Ne^{-\frac{1}{2}(\frac{x-N}{\sqrt{N}})^2}=e^{-N}N^N\sqrt{2\pi N}
$$




## Monte Carlo Methods

Useful notes: https://ermongroup.github.io/cs228-notes/inference/sampling/

Often you find yourself in a situation where you have specified a distribution P, which you know up to a normalization constant. You might find yourself in this position in statistical physics (e.g. you don't know the partition function) or in Bayesian inference (you know the posterior distribution up to the denominator, which has a hard integral). A common thing you might want is the expectation of some function $f$ under P (i.e. $\int\_{support(P)} f(x)P(x)dx)$, where I'm using $P$ to also mean the pdf of the distribution $P$). You can approximate this, and other such quantities, if you have a good means of taking representative samples from $P$.

**Monte Carlo methods are methods for taking samples from the typical set of a distribution and using those to calculate approximate quantities of the distribution, like the expectation or other moments.**

In particular, you want samples from the typical set, i.e. the part of the space of the support of $P$ which has both large volume and high probability density. It turns out that in high dimensions, almost all of the mass is concentrated in such a set. (Note: the notion of a typical set comes from information theory - as I'm using it here, it's not a precise notion; I'm not saying, for example, that it has an exact boundary).

### Markov Chain Monte Carlo (MCMC)

A particular type of Monte Carlo method. The idea is that you choose a transition kernel $T(x|x')$ in such a way that $P$ is a fixed point of $T$, that is, $P(x) = (TP)(x) = \int T(x|x')P(x')dx'$. There are different ways to do this, and one common one described below is Metropolis-Hastings. Then you invoke some theorems (largely, I think, the Perron-Frobenius theorem) which tells you that given some assumptions (your $T$ should be ergodic), $T$ has a unit eigenvector (i.e. a distribution which is the fixed point of the kernel) which is maximal and unique. That means that $\lim\_{n\to\infty}T^nA$ for any initial distribution $A$ converges to this fixed point, because the largest eigenvector eventually dominates. Because it's unique, this fixed point must be $P$. Taking a Markovian walk along the kernel, starting from any $A$, amounts to sampling from the fixed point, i.e. from $P$. That's pretty amazing.

The caveat: the only guarantee you have is that in the limit of a large number of steps, you will take a sample from $P$. Could be a while...

#### Metropolis Hastings (MH)

$P(x)T(x'|x) = P(x')T(x|x')$ is the condition of *detailed balance* for a pair of a distribution and a kernel. As shown below, detailed balance is sufficient (but *not necessary*) to show that $P$ is a fixed point of $T$.

$$ P(x)T(x'|x) = P(x')T(x|x') \Rightarrow \sum\_xP(x)T(x'|x) = \sum\_xP(x')T(x|x') = P(x')\sum\_xT(x|x') = P(x')  $$

MH is one method to obtain a kernel which satisfies detailed balance. The idea is that you have another kernel $Q$ which you can choose pretty freely, and let $T = A(x'|x)Q(x'|x)$, where $A(x'|x)=min(1,\frac{P(x')Q(x|x')}{P(x)Q(x'|x)})$. Note that you don't have to know $P$, but rather $P$ only up to normalization, since it appears in a ratio. Clever. By design, some simple maths shows that with $T$ as defined, $(P,T)$ satisfies detailed balance, so you're in business. Caveat: you want to make sure that $T$ is ergodic.

<!-- In other words, the states in your Markov chain are assignments to all the variables of the distribution (it could be a joint distribution) and so the stationary distribution of the walk is a distribution over the relevant variable(s). If detailed balance is satisfied, then $P$ is the stationary distribution, and so you can sample from $P$ by taking a nice long walk along the chain, since $\lim\_nT^n(x) = P $ for any starting value $x$. Magic! (Why does this work? It resembles the fix point operator: for $g = f(f(f(....(f(x)))))), $f(g(x)$ = g(x)$, which is familiar from set theory and computer science. But I think the more important point here is that the unit eigenvector is also the largest one, and so, on each iteration, it gains ground while the others diminish). -->

#### Hamiltonian Monte Carlo (HMC)

This involves a terrifying confluence of statistics, differential geometry and statistical mechanics. The idea is that we derive a better transition kernel by moving into a phase space and exploiting the nice volume preserving nature of Hamiltonian dynamics (hence the name).

We start with the canonical distribution (see [notes on statistical mechanics](/maths/statisticalmechanics)).

$$ \pi(q,p) = e^{-H(p,q)} $$

where $\pi$ is our density. We assume that $\pi(q,p)=\pi(p|q)\pi(q)$ so that

$$ H(p,q) = -log \pi(p,q) = -log\pi(p|q) -log \pi(q) = K(p,q) + V(q) $$

In other words, choosing $\pi(p|q)$ amounts to choosing a Kinetic energy, while the potential energy $V$ is determined by $\pi(q)$, which is known.

The transition kernel at a point $q$ is a three step procedure. First sample $p$ from $\pi(p|q)$. Then push $(p,q)$ forward using Hamiltonian dynamics, approximated with a Symplectic integrator. Finally marginalize out $p$ to get $\pi(q)$ (since we have $\sum_p \pi(p,q) = 1$).

What remains is a good choice of Hamiltonian, and a good choice of sympletic integrator. And a real explanation of why this is a valid or good MCMC kernel. I defer these to more detailed notes.

<!-- "Generically, then, volume is largest out in the tails of the target distribution away
from the mode, and this disparity grows exponentially with the dimension of parameter
space. Consequently, the massive volume over which we integrate can compensate to give
a significant contribution to the target expectation despite the smaller density."

"The only significant contributions come
from the neighborhood between these two extremes known as the typical set (Figure 3).
Importantly, because probability densities and volumes transform oppositely under any
reparameterization, the typical set is an invariant object that does not depend on the
irrelevant details of any particular choice of parameters."

"Consequently, in
order to compute expectations efficiently, we have to be able to identify, and then focus
our computational resources into, the typical set"

"The guess-and-check strategy of Random Walk Metropolis is doomed to fail in highdimensional spaces where there are an exponential number of directions in which to guess
but only a singular number of directions that stay within the typical set and pass the check.
In order to make large jumps away from the initial point, and into new, unexplored regions
of the typical set, we need to exploit information about the geometry of the typical set"

"Hamiltonian Monte Carlo is the unique procedure for automatically generating this
coherent exploration for sufficiently well-behaved target distributions."

"To utilize the information in the gradient we need to complement it with additional geometric constraints, carefully removing the dependence on any particular parameterization
while twisting the directions to align with the typical set. Auspiciously, there is an elegant
procedure for doing exactly this in a field of mathematics known as differential geometry. "

"A defining feature of conservative dynamics is the preservation of volume in position-momentum
phase space. For example, although dynamics might compress volumes in position space, the corresponding
volume in momentum space expands to compensate and ensure that the total volume is invariant."

add momentum coordinates
obtain a phase space distribution p(q,p) = p(p|q)p(q)
p(q,p) = e^{-H(p,q)}
H(p,q) = -log \pi(p,q) = -log\pi(p|q) -log \pi(q) = K(p,q) + V(q)

"Following the Hamiltonian vector field for some time, t, generates trajectories,
φt(q, p), that rapidly move through phase space while being constrained to the typical set.
Projecting these trajectories back down onto the target parameter space finally yields the
efficient exploration of the target typical set for which we are searching." -->

## Variational Inference (VI)

The simple part of the idea is: approximately infer a distribution $p(\cdot)$ by optimizing $\lambda$ in some $q_{\lambda}(\cdot)$ to minimize $KL(q || p) - \sum_x q(x) \log\frac{q(x)}{p(x)} = E_q\[\log\frac{q(x)}{p(x)}\]$. In other words, $q_\lambda$, for an appropriate choice of $\lambda$ is our approximation of $p$.

The hard part is working out how we can minimize $KL(q || p)$ without knowing $p$. Here's the idea. Let $\hat{p}$ be the unnormalized version of $p$, and let's assume we have that. Then

$$ J(q) = \sum_x q(x)\log\frac{q(x)}{\hat{p}(x)} = \sum_x q(x)\log\frac{q(x)}{p(x)} - \log Z(\lambda) = KL(q || p) - \log Z(\lambda) $$.

KL divergence is always positive (see any intro to information theory), so

$$ \log Z(\lambda) = KL(q || p) - J(q) \geq -J(q) $$

which means that $-J(q)$ is a lower bound (the evidence lower bound, or ELBO) on $Z$. So we maximize the ELBO to minimize the KL.

### Mean Field VI

If the distribution you are trying to approximate is a joint distribution (see e.g. the Ising model in these [notes on statistical mechanics](/maths/statisticalmechanics)) then as your approximating family use a product of marginals (each independently parametrized).


## Measure theory

The paper *Exact Bayesian Inference by Symbolic Disintegration* has such an excellent introduction to measures that I may as well just quote it:

"The nineteenth-century mathematicians who wanted to know how big a set was were hoping for a definition with four properties

1. The size of an interval should be its length.
2. The size of a set should be invariant under translation.
3. The size of a union of disjoint sets should be the sum of the individual sizes.
4. Any subset of the real line should have a size.

Not all four properties can be satisfied simultaneously. But if we limit our attention to measurable subsets of the real line, we can establish the first three properties. The measurable subsets are the smallest collection of sets of reals that contains all the intervals and is closed under complement, countable intersection, and countable union. The one and only function on the measurable sets that has
the first three properties is the Lebesgue measure. "

Measure theory lives in the category `Meas`. The objects are measurable spaces $(X, \Sigma_X)$, where $X$ is a set and $\Sigma_X$ is a collection of subsets of $X$ closed under compliment and finite union. Morphisms are measurable functions, which means a function $f : X \to Y$ such that for $U \in \Sigma_Y$, $f^{-1}(U) \in \Sigma_X$.

A probability measure on $X$ is a function $\mu : \Sigma_X \to [0,1]$ such that $\mu(X)=1$ and $\mu U(S_i) = \sum \mu(S_i)$, where $U$ means disjoint countable union. Probability measures can be pushed forward through a measurable function in the obvious way.

Measures (with some restrictions) are one-to-one with integrators, so we will abuse notation and write $\mu(f)$ to be the integral of $f$ with measure $\mu$. Defining integrals is boring, so I won't, but the above paper does it very nicely.

## Models

### State space models

This is the kind of territory where Kalman filters, particle filters, etc, come up.

Chapter 18 of [Machine Learning: A Probabilistic Perspective](https://doc.lagout.org/science/Artificial%20Intelligence/Machine%20learning/Machine%20Learning_%20A%20Probabilistic%20Perspective%20%5BMurphy%202012-08-24%5D.pdf) is great.

It introduces state space models (SSMs) by analogy to Hidden Markov Models, but with continuous hidden states. Basically, you have a hidden state that transitions with time (probabilistically), and at each time point, produces an observation (probabilistically).
The goal is to infer the current, or future states of the hidden variable from previous states. Inference methods take advantage of this recurrency inherent in the model.

A linear dynamical system is one where the temporal transitions and production of observations are by linear, with additive Gaussian noise. They are solvable in closed form by a Kalman filter.

In the case where the transition and observation models are not linear, one option (the Extended Kalman Filter) is to take the Jacobian in order to obtain a linear approximation, and basically do a Kalman filter with that. The unscented Kalman filter is similar, but instead first passes the distribution (or sample points) through the non-linear function, and then fits a Gaussian.

<!-- ### Binomial Distribution Approximations -->

