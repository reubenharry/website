---
title: "Statistics"
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



## Overview

These notes are about the application of probability to the real-world problem of updating beliefs given data. See [here](/notes/probability.md) for notes on the mathematics of probability (including how to do inference).

(n.b. This is an extremely Bayesian perspective, roughly following Jaynes' *Probability Theory: The Logic of Science*).

The general form of this problem is this. Let $A$ be the set of ways the world (or rather, the system you are studying) can be. What is the optimal distribution $P(A)$ to represent your beliefs, given some constraints on $P$?

A concrete example is fitting a model to data. In this case $A = \Theta \times X$ is the joint space of values that the parameters of your model $\theta$ and realizations of data $x$. The constraint is that you know the actual value of $x$ - that is your data, and also a likelihood $P(x|\theta)$. 


A frequentist approach would be to find the single value of $\theta$ which, say, maximizes the likelihood $\lambda \theta . P(x|\theta)$ of the data. This is useful in a range of common applications, but problematic in general. It's better to think of this as a rough approximation of Bayesian inference that happens to be effective to compute in some useful settings.

# Common problems

### Regression

Regression is one particular model (or class of models).

**The data**: It assumes that data comes in parts, of an output vector $y\in\R^n$, where $n$ is the number of features, and an input variable $X\in\R^{n\times n}$. We usually interpret the rows of $X$ as datapoints, and the elements of $y$ as some continuous prediction associated with that data point. E.g. a row of $X$ could be a list of house features (has-bathroom, is-green...), and $y$ might be its market value. We can also include a column of $1$s in $X$ to represent a bias term).

**The model**: $y \sim N(X\theta,I)$. In other words, $P(y)=N(X\theta,I)$. Note: in simple regression models, only $y$ is random, not $X$.

**Fitting the model**: for a point estimate of $\theta$, the computation is simple, and amounts to minimizing a least squares loss function (sum over dataset of square of difference between *expected* model prediction and actual observation). Finding this minimum actually just amounts to a simple matrix computation (the Moore-Penrose pseudo-inverse).

To see why, here is a minimization-based perspective on fitting the model:

We wish to find $\theta$ such that $X\theta = y$. But there may be no such $\theta$, if $X \in R^{m\times n}$ for $m > n$.

Instead, then, we want to find the $\theta$ which minimizes the square norm of $X\theta$ and $y$. Ah! But that means that $X\theta$ must be the closest possible point to $y$ in the range of $X$. A crucial fact about inner product spaces is as follows:

For a subspace $U$ of $V$, and any $v\in V$, the projection of $v$ onto $U$ is the closest point in $U$ to $v$, under Euclidean distance.

So, we want to solve: $X\theta = proj(X,y)$. Second fact:

The projection of $y$ onto a subspace given by the matrix $U$ of an operator is $U(U^TU)^{-1}U^T$.

So, we want to solve $X\theta = X(X^TX)^{-1}X^Ty$, and thus: $\theta = X(X^TX)^{-1}X^Ty$, where $(X^TX)^{-1}X^T$ is the Penrose-Moore pseudoinverse of $X$.

### Generalized Linear Models

Same as regression above, but $y \sim G(X\theta)$, where $G$ is any distribution in the exponential family (see [probability notes](/maths/probability)), parametrized by the natural parameter $\eta$.

To compute the mean $E[y]$ from the natural parameter requires some transformation. In the case of Gaussians with fixed variance, the transformation is the identity, so this issue doesn't arise in linear regressions.


In general, we say that $E[y]=g^{-1}(X\theta)$, where $g$ is a link function. This generalization includes logistic regression, where $y$ is a Bernoulli random variable, and Poisson regression where $y$ is a Poisson random variable, among others. The nice properties of exponential family distributions (convexity) mean that the models can be fit easily.

Logistic regression. Key observation: let $g(x)=log(\frac{x}{1-x})$. Let $f(x)=\frac{1}{1+e^{-x}}$. $g$ (log odds function) and $f$ (sigmoid function) are inverses.


## Monte Carlo for Bayesian inference

Bayes' rule takes the form

$$ \forall a\forall b. P(B=b|A=a) = \frac{P(A=a,B=b)}{P(A=a)} = \frac{P(A=a|B=b)\cdot P(B=b)}{\sum_{b'} P(A=a|B=b')\cdot P(B)} $$

where $B$ is the latent variable, $A$ is the observed variable, $P(B)$ is our prior, which we can calculate tractably (most likely), and $P(A|B)$ is our likelihood, corresponding to the generative process generating the data from the latent variable.

Now the denominator $P(A=a)=\sum_{b'} P(A=a|B=b')\cdot P(B=b')$ could well be totally intractable to compute. But this is constant in $b$, so the numerator is proportional to $P(B=b|A=a)$. This means that to sample from $P(B|A)$ we need only apply Monte Carlo to the unnormalized distribution constituting the numerator. We can sample from this ancestrally, i.e. by first sampling from the prior and then inputting that sample into the likelihood.


# The Principle of Maximum Entropy

This mathematical structure allows you to understand Bayesian probability as movement along the manifold. You start somewhere, at a point on the manifold representing your prior.

Given information, which can always be formulated as a constraint on the space of possible distributions, you then move along the manifold to the distribution with the greatest entropy relative to your starting point which satisfies this constraint.

TODO: show that this gives Bayes' theorem






TODO:

A good reference here is chapter 
  of Ariel Caticha's todo 

Bayesian probability can be derived from a single principle, namely: your belief about the world should maximize entropy up to known constraints.

That is, you should be absolutely no more certain about the state of the world than you have to, given the data or constraints you are working with.

One can derive Bayes' rule from this principle as follows. Suppose you begin with a joint distribution $p(x,y)$. You then find the particular value of $y$, which is to say, you learn that any possible belief $q$ about $(x,y)$ must obey the constraint $\int_x q(x,y) = \delta(y-y^*)$.

Following the principle of maximum entropy, you choose $q^*(x,y)$ to maximize entropy, subject to this constraint, namely:

$$ \forall q. H(q^*) = -E_{x \sim q^*}[\log q(x)] \geq H(q) $$
$$ \int_x q(x,y) = \delta(y-y^*) $$


## notes 

H is concave 

the log normalizer of the exponential family is convex

the bregman divergence of the log normalizer is the kl divergence

convexity is preserved under affine pullback

convex differentiable <==> psd hessian

## Optimal experiment design

Bayesian probability explains how to optimally update beliefs, but a natural extension of this toolkit is to a setting where you can take actions.

Suppose the world is modeled as a conditional distribution $p(y|d)$, where $d$ is an action you "give" to it, and $y$ is an observation it gives you in return. In particular, $p(y|d) = \int d\theta p(y,\theta | d) = \int d\theta p(y| \theta)p(\theta|d)$. That is, the observation and action are conditionally independent given $\theta$.

As an agent, your objective is to gain information about the marginal $p(\theta)$, so the question is: how to choose $d$ optimally, in the interest of gaining information?

This boils down to the following. Suppose that $p$ is your marginal prior over models, so that your information **b**efore doing anything, relative to a reference measure is:

$$ 
K_b = K[p, \mu] = \int d\theta p(\theta) \log \frac{p(\theta)}{\mu(\theta)}
$$

If $q(\theta)=p(\theta|d, y)$ is your posterior **a**fter feeding the world your decision $d$ and subsequently observing $y$, then 

$$ 
K_a(d)(y) = K[q, \mu] = \int d\theta p(\theta|d,y) \log \frac{p(\theta|d,y)}{\mu(\theta)}
$$

The idea is that, before taking the action, you want to calculate the expectation $I(d) = E_{y \sim p(\cdot|d)}[K_a(y)]$, which amounts to:

$$
I(d) = \int dy \quad p(y|d) \int d\theta\quad p(\theta|d,y) \log \frac{p(\theta|d,y)}{\mu(\theta)}
$$

$$
= \int d\theta \int dy \quad  p(\theta, y|d) \log \frac{p(\theta|d,y)}{p(\theta)}\frac{p(\theta)}{\mu(\theta)}
$$

$$
= \int d\theta \int dy \quad  p(\theta, y|d) \log \frac{p(\theta|d,y)}{\mu(\theta)} + \int d\theta \int dy \quad  p(\theta, y|d) \log \frac{p(\theta)}{\mu(\theta)}
$$


$$
= \int d\theta \int dy \quad  p(\theta, y|d) \log \frac{p(\theta|d,y)}{p(\theta)} + \int d\theta \quad  p(\theta|d) \log \frac{p(\theta)}{\mu(\theta)}
$$

$$
= \int d\theta \int dy \quad  p(\theta, y|d) \log \frac{p(\theta, y|d)}{p(y|d)p(\theta|d)} + \int d\theta \quad  p(\theta) \log \frac{p(\theta)}{\mu(\theta)}
$$

(here I have used the conditional independence of $p(y|d) = p(y|\theta)p(\theta |d)$)

TODO: have I??

$$
= MI(\theta, y | d) + K_b
$$

that is, the new information, given $d$, is the mutual information (conditional on $d$) of the model parameters and $y$, plus your prior information.

Thus, the *expected information gain* is $EIG(d) = E_{y \sim p(\cdot|d)}[K_a(y)] - K_b = MI(\theta, y|d)$.

A non-insane thing to do is to choose $d$ to maximize $EIG(d)$.

This is known as *optimal experiment design* (OED). It is very difficult in practice, because calculating $EIG(d)$ is extremely costly, and you have to do it for every potential value of $d$. The general tools used to speed up Bayesian inference (MCMC, SMC, amortization) are relevant here.

OED is particularly relevant in a sequential setting, where $d$ is a sequence of actions, and $y$ is a corresponding sequence of observations. Here, the procedure is exactly the same, but the inference problem is even harder, because they are likely to be extremely important dependencies between actions in $d$. For example, if you learn that your keys are not in your car, this informs where you should search next.


## Frequestist statistics

A sample is a vector of independent, identically distributed draws from the model. An estimator is a function on the sample. The sample, and in turn the estimator, are random variables themselves, and a key method of frequentist statistics is to find the distribution of a given estimator, or a good approximation of it in the limit of large sample size.

In practice, this is the mainstream approach to statistics, and there are lots of nice analytical results about the distributions of statistics, as well as more modern approximate approaches like bootstrapping, which make this easy. But conceptually it's a weird approach, and Bayesian methods are much more fundamental.

### Estimators

The variance of the estimator is a function of the true parameter. We can estimate the variance using the estimate of the true parameter in our function for the variance. This is the estimated standard error. Assuming our estimate of the true parameter converges on the true parameter, our estimate of its variance will also converge, assuming that estimate is a continuous function of the parameter.

### Maximum Likelihood Estimate

MLE is consistent if the likelihood is reasonably smooth.

MLE tends asymptotically towards being normally distributed with bias of the true parameter and variance the inverse Fisher information:

$$ \sqrt{nI(\theta_0)}(\hat{\theta}-\theta_0) \approx N(0,1) $$

### Cramer-Rao (general form)

Variance of any estimator $\hat{\theta}$ is bounded by: $$ \frac{\tau'(\theta)}{nI(\theta_0)} $$ where $\tau(\theta)$ is $E[\hat{\theta}]$
