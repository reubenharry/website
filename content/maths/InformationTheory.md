---
title: "Information theory"
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

# Entropy

Entropy $(H : Distributions \to \mathbb{R_+})$ is a function that maps a distribution to a real number. It is best defined via the relative entropy aka KL divergence:

$$ KL(p,q) = \int p(x)\log \frac{p(x)}{q(x)} dx $$

Conceptually, this is a measure of the information gained by moving from $q$ to $p$. It is (evidently) not symmetric.

When $q(x)\propto C$, i.e. when $q$ is uniform, and when the support of the distribution is discrete, we define $H$ as follows:

$$ H(p) = -KL(p, q) = - \sum p(x)\log p(x) dx  $$

So, entropy is the measure of how much more information a distribution contains that the uniform one.

## Entropy in a continuous space

The obvious extension of entropy to a continuous variable, namely 

$$ - \int (p(x)\log p(x))dx $$

does **not** represent the right definition. The most obvious way to see that it cannot be right is that it isn't invariant under a change of variables, which means that for $f : X \to Y$, and $y=f(x)$:

$$
- \int (p(x)\log p(x))dx 
$$
$$
= - \int (p'(f(x)))|\frac{df}{dx}|\log(p'(f(x))|\frac{df}{dx}|) dx
$$
$$
= - \int (p'(f(x)))\log(p'(f(x))|\frac{df}{dx}|) df(x)
$$
$$
= - \int (p'(y))\log(p'(f(x))|\frac{dy}{dx}|) dy
$$
$$
\neq - \int p'(y)\log p'(y)dy
$$

(This uses $p(x)dx = p'(y)dy$ and $df(x) = |\frac{dy}{dx}|dx$ )

A similar derivation shows that relative entropy **is** reparametrization invariant, which is an indication that it is the more fundamental quantity.


# Entropy and Communication

Suppose you have a distribution over some set $A$, $p : D(A)$, from which you will be given a sample. Your goal is to come up with a bijection $f : A \to List(\{0,1\})$ (i.e. from $A$ to arbitrary length bitstrings) such that $E_{x\sim p}[len(f(x))]$ is minimized.

Intuition: you are trying to minimize the *expected* length of messages which losslessly communicate.

The upshot is that one can talk of the *information* contained in a distribution, measured in the *expected* number of bits (Booleans) needed to encode a draw from the distribution.

The source coding theorem states that the minimum expected length is $H(p)$, known as the entropy of $p$, which is, up to a factor, the KL distance from a uniform dsitribution.

$$ - \sum\_ip\_i\log(p\_i)$$

Intuition: if the entropy is low, this means the distribution puts a lot of mass on certain elements of the support, and accordingly, these can be assigned short messages, minimizing the expected message length.

There is the foundation of a much larger relationship between information theory and communication, which tries to find efficient ways to send data over noisy or noiseless channels.

## Properties of entropy

As the source coding theorem makes clear, information, as measured by entropy, is an additive quantity, which is why a logarithm appears in the definition.

It has various intuitive properties, not least that your uncertainty on a distribution over the cells of a partition of the $p\_i$, added to your uncertainty for each distribution over the cell weighted by the cell probability, is equal to the entropy of the unpartitioned set.

# The geometry of information

Quite beautifully, differential geometry turns out to be the natural language to describe information. (See the notes on [differential geometry] as a prerequisite).

The short version of how this works is as follows: the family of distributions on $S$ forms a [manifold](/maths/DifferentialForms), in the usual sense that every point on the manifold can be mapped to its parameters under some chart.

For example, if $S=\mathbb{R}$, then the unit normal distribution corresponds to a single point on the manifold, and one particular chart might map it to $(0,1)$, its mean and variance. Thus there is a 2D submanifold of Gaussian distributions on $\mathbb{R}$.

The most importance fact about this manifold is that there is a canonical way to make it Riemannian, i.e. a canonical choice of metric tensor $g$, known as the Fisher information, which turns out to be the Hessian of the relative entropy:

$$
g_{ij} = E[\delta_i\log p(x;\theta)\delta_j\log p(x;\theta)] 
$$

The upshot is that we can talk about the distance between distributions in a parametrization-invariant (i.e. coordinate free) way.

## Divergence

Rather than defining a metric directly, one can instead specify a divergence $D : M \times M \to \R$, for which $D(p,q)$ is $0$ for $p=q$ and positive otherwise, and for which $D(p,p+dp) = \frac{1}{2}g_{ij}(p)dp_idp_j + O(|dp|^3)$, for $g$ positive-definite.

### **Divergence from a convex function**

Looking at this definition, we see that for any convex function $\phi : \R^n \to \R$ that acts on the *parameters* of the manifold, we obtain a metric by:

$$
D_\phi(p,q) = \phi(x(p)) - \phi(x(q)) - \frac{d\phi(x(q))_i}{dx(q)}(x(p)-x(q))_i
$$

This is known as the Bregman divergence measures the distances between the tangent hyperplane of $\phi$ (the last two terms) and its value (the first term), which is always non-negative as desired, by convexity. Moreover, convexity means that the first two terms of the Taylor series are $0$ and that the Hessian, which is $g$, is positive-definite.

TODO: make sure you understand the above

The Legendre transform $L : (X \to_c \R) \to (X^* \to_c \R$ (where $a \to_c b$ is a convex function) is involutive (i.e $f(f(x)) = x$)). 

It is defined by $X^* = f(X)$, where $f(x) = \nabla\phi(x)$, and by 

$$
\phi^*(x^*) = \langle f^{-1}(x^*), x^* \rangle - \phi(x) 
$$

(We're assuming that both $X$ and $X^*$ are $\R^n$).

We can view $\phi$ as acting on $m \in M$ under the $x$ chart (ie. $\phi(m) := \phi(x(m))$), but then $\phi^*$ acts under the $x^*$ chart.

It happens that the Bregman divergence then takes a convenient form:

$$
D_\phi(p,q) = \phi(x(p)) + \phi^*(x^*(q)) - \langle x(p), x^*(q)\rangle
$$

## Exponential family

A particularly important manifold of probability distributions is the exponential family (see [these notes](/maths/probability)):


$$
P(x) = e^{\theta_is^i(x) -k(x) - \phi(\theta)}
$$

The familiar features of the exponential family all come into play here.

$\theta$ can be taken as coordinates of $P$, in which case a divergence is induced by $\phi$, the log normalizer, which is known to be convex for the exponential family.

Moreover, the dual coordinates are $\frac{\partial \phi(\theta)}{\partial \theta_i}$, which for the exponential family are $E[s(x)]$.

The dual of $\phi$ is:

$$\phi^*(\theta^*) = \langle \theta^*, \theta \rangle - \phi(\theta) = \langle E_\theta[s(x)], \theta \rangle - \phi(\theta)
$$

$$
= \langle \int s(x)p(x;\theta) dx, \theta \rangle - \phi(\theta) $$
$$
= \int \langle s(x), \theta \rangle p(x;\theta) dx - \phi(\theta) 
$$
$$
= \int (\log(p(x;\theta))+\phi(\theta)) p(x;\theta) dx - \phi(\theta) 
$$
$$
= \int (\log(p(x;\theta))) p(x;\theta) dx = -H(p(\cdot | \theta))
$$

The resulting divergence can be calculated as follows:

$$
todo KL
$$

This implies that $g$, the Riemannian metric, is the Hessian of the log normalizer, which is the covariance of the two distributions.

It is not hard to calculate that this is the Fisher information, since covariance is defined as $E[(s(x)_i - E[s(x)_i])(s(x)_j - E[s(x)_j])]$.



