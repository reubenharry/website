---
title: "Statistics"
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

I thought this online book was great: https://www.statlect.com/.


## Overview

A key idea in statistics is fitting a model to data. A (parametric) model is a probability distribution $P(x;\theta)$, parameterized by some $\theta$. In Bayesian terms, the idea is to assume the model, then find the posterior distribution over $\theta$. One frequentist approach is to find the single value of $\theta$ which maximizes the likelihood of the data.

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

## Monte Carlo for Bayesian inference

Bayes' rule takes the form

$$ \forall a\forall b. P(B=b|A=a) = \frac{P(A=a,B=b)}{P(A=a)} = \frac{P(A=a|B=b)\cdot P(B=b)}{\sum_{b'} P(A=a|B=b')\cdot P(B)} $$

where $B$ is the latent variable, $A$ is the observed variable, $P(B)$ is our prior, which we can calculate tractably (most likely), and $P(A|B)$ is our likelihood, corresponding to the generative process generating the data from the latent variable.

Now the denominator $P(A=a)=\sum_{b'} P(A=a|B=b')\cdot P(B=b')$ could well be totally intractable to compute. But this is constant in $b$, so the numerator is proportional to $P(B=b|A=a)$. This means that to sample from $P(B|A)$ we need only apply Monte Carlo to the unnormalized distribution constituting the numerator. We can sample from this ancestrally, i.e. by first sampling from the prior and then inputting that sample into the likelihood.
