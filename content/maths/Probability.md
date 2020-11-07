---
title: "Probability"
date: 2020-01-26T17:07:24+01:00
draft: False

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


## Central Limit Theorem

Various increasingly powerful versions, but simplest is:

For a sequence $\{X\_i\}$ of independent and identically distributed (iid) random variables with mean $\mu$ and variance $\sigma^2$, $\bar{X}\_n=\sum\_i^nX\_i$ converges to $Z \sim N(\mu,\sigma^2)$, i.e. to a normal.

The proof uses the continuity theorem, which effectively says that it's sufficient to show that the moment generating function (MGF) converges to that of a normal MGF. Let $Z\_n= \frac{X\_n}{STD[X\_n]} = \frac{X\_n}{\sqrt{n}\sigma}$. Then we observe the following:

$$MGF\_{X\_n}(t) = [MGF\_{X\_i}(t)]^n $$
$$ MGF\_{Z\_n}(t) = [MGF\_{X\_i}(\frac{t}{\sqrt{n}\sigma})]^n$$

Further, we can Taylor expand the first MGF as follows:

$$ MGF\_{X\_n}(t) = MGF(0) + tMGF'(0) + \frac{t^2}{2}MGF''(0) + o(t^2) = 1 + \frac{t^2}{2}\sigma^2 + o(t^2) $$

(The last step happens by fact that the derivatives of the MGF at $0$ are the moments of the distribution in question.)

But then:

$$ MGF\_{Z\_n}(t) = [1 + \frac{(\frac{t}{\sqrt{n}\sigma})^2}{2}\sigma^2 + o(t^2)]^n = [1 + \frac{t^2}{2n} + o((\frac{t}{\sqrt{n}\sigma})^2)]^n$$

But this converges to $e^{\frac{t^2}{2}}$ as $n$ goes to infinity. That's the MGF of a standard normal, so we're done.

Note that this proof is a basic application of Fourier analysis an is most simply seen from that perspective. The PDF of a sum of iid random variables $X_i$ is a convolution of $n$ PDFs of $X_i$, the Fourier transform of a convolution is a raising of the Fourier transform of those PDFs to the $n$th power, and Taylor expanding inside the Fourier integral basically gives us the result (see e.g. page 130 of [this](https://see.stanford.edu/materials/lsoftaee261/book-fall-07.pdf)).

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

Crucial point: how do we convert from the mean parametrized form of the Bernoulli distribution, namely $P(x|\mu) = x\mu\cdot x^{1-\mu}$ to the naturally parametrized form?

Easy: take the log odds: $\eta=log(\frac{\mu}{1-\mu})$. And the inverse is the sigmoid function.

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

### Markov Chain Monte Carlo

A type of Monte Carlo method. You choose a translation kernel T (in the finite case, representable as a stochastic matrix from states to states) and then take a random Markovian walk with this kernel. Given some assumptions (ergodicity of your kernel), you can prove that the distribution over states induced by the random walk will eventually converge to the stationary distribution (unit eigenvector) of T. Now

$$ P(x)T(x'|x) = P(x')T(x|x') \Rightarrow \sum\_xP(x)T(x'|x) = \sum\_xP(x')T(x|x') = P(x')\sum\_xT(x|x') = P(x')  $$

which is to say that $P$ is just such a stationary distribution. The condition denoted by the first equation above is known as "detailed balance".

In other words, the states in your Markov chain are assignments to all the variables of the distribution (it could be a joint distribution) and so the stationary distribution of the walk is a distribution over the relevant variable(s). If detailed balance is satisfied, then $P$ is the stationary distribution, and so you can sample from $P$ by taking a nice long walk along the chain, since $\lim\_nT^n(x) = P $ for any starting value $x$. Magic!

Metropolis-Hasting is one method for obtaining T. The idea is that you have a kernel Q, and let $T = A(x'|x)Q(x'|x)$, where $A(x'|x)=min(1,\frac{P(x')Q(x|x')}{P(x)Q(x'|x)})$. Note that you don't have to know $P$, but rather $P$ only up to normalization, since it appears in a ratio. Clever. By design, some simple maths shows that with $T$ as defined, $(P,T)$ satisfies detailed balance, so you're in business.

## Models

### State space models

This is the kind of territory where Kalman filters, particle filters, etc, come up.

Chapter 18 of [Machine Learning: A Probabilistic Perspective](https://doc.lagout.org/science/Artificial%20Intelligence/Machine%20learning/Machine%20Learning_%20A%20Probabilistic%20Perspective%20%5BMurphy%202012-08-24%5D.pdf) is great.

It introduces state space models (SSMs) by analogy to Hidden Markov Models, but with continuous hidden states. Basically, you have a hidden state that transitions with time (probabilistically), and at each time point, produces an observation (probabilistically).
The goal is to infer the current, or future states of the hidden variable from previous states. Inference methods take advantage of this recurrency inherent in the model.

A linear dynamical system is one where the temporal transitions and production of observations are by linear, with additive Gaussian noise. They are solvable in closed form by a Kalman filter.

In the case where the transition and observation models are not linear, one option (the Extended Kalman Filter) is to take the Jacobian in order to obtain a linear approximation, and basically do a Kalman filter with that. The unscented Kalman filter is similar, but instead first passes the distribution (or sample points) through the non-linear function, and then fits a Gaussian.

<!-- ### Binomial Distribution Approximations -->
