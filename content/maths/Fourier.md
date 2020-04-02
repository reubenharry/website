---
title: "Fourier Analysis"
date: 2020-01-26T17:07:24+01:00

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

## [Disclaimer on these notes](/maths/purposeofthesenotes)

$\newcommand{\R}{\mathbb{R}}$
$\newcommand{\C}{\mathbb{C}}$
$\newcommand{\N}{\mathbb{N}}$
$\newcommand{\Z}{\mathbb{Z}}$

## The general idea

The general insight of Fourier analysis is that (sufficiently nice) functions can be expressed as sums (or integrals) of some set of functions which have nice symmetry properties. That is, we want to find something like a basis of periodic functions, in a vector space of functions. Three cases:

- Even and odd functions: Any function can be expressed as a sum of an even function (a function where $f(-x)=f(x)$) and an odd function (where $f(-x)=-f(x)$).

- Fourier series: a (sufficiently nice) periodic function can be expressed as an (infinite) sum of complex exponentials. In other words, $e^{ki\pi}$, for $k\in\Z$, is a basis for periodic functions.

- Fourier transform: a (sufficiently nice) function can be expressed as an integral of complex exponentials. This is like a continuous analog of a basis.

There are abstractions under which all of these cases are instances of a general pattern.

## Fourier Transform

### Orthogonality of complex exponentials

We have a notion of an inner product in a function space, of the general form $\langle f,g\rangle = \int f(x)g^\*(x)dx$, which is exactly how you might imagine a continuous analog of the dot product.

Let $T(x)$ be the complex conjugate of $x$. Orthogonality is shown as follows:

  For n$\neq$m:
  $$ \langle e^{it2\pi m},e^{ti2\pi n}\rangle = \int_0^1 e^{ti2\pi m}T(e^{ti2\pi n}) $$
  $$ = \int_0^1 e^{ti2\pi m}(e^{-ti2\pi n}) = \int_0^1 e^{ti2\pi (m-n)}$$
  $$ = \frac{1}{i2\pi(m-n)}e^{i2\pi (m-n)} - \frac{1}{i2\pi(m-n)}e^{0} = \frac{e^{i2\pi (m-n)}-1}{i2\pi(m-n)} = 0$$.

### Fourier transform of a Gaussian is a Gaussian

**Problem**:

For $F(x(t),t)=-2\pi tx(t)$, the corresponding solution to the ODE $\frac{d\phi(x\_0)(t)}{dt} = F(\phi(x\_0)(t))$ is $\phi\_F(1,t)=e^{-\pi t^2}$.

Show that $\mathcal{F}(\phi\_F(1))(t)= \langle e^{2i\pi ts},\phi\_F(1)(s) \rangle = \int\_{-\infty}^{\infty}e^{2i\pi ts}\phi\_F(1)(s)ds=\phi\_F(1,t)$

**Solution**:

$$
\frac{d}{dt}\mathcal{F}(\phi\_F(1))(t) = \int\_{-\infty}^{\infty}\frac{d}{dt}e^{2i\pi ts}\phi\_F(1)(s)ds = \int\_{-\infty}^{\infty}-2\pi sie^{2i\pi ts}\phi\_F(1)(s)ds = \int\_{-\infty}^{\infty}ie^{2i\pi ts}\frac{d}{ds}\phi\_F(1)(s)ds$$
$$ = \int\_{-\infty}^{\infty}-(\frac{d}{ds}ie^{2i\pi ts})\phi\_F(1)(s)ds = -2\pi t\int\_{-\infty}^{\infty}e^{2i\pi ts}\phi\_F(1)(s)ds = -2\pi t \mathcal{F}(\phi\_F(1))(t)
$$
This means that $\mathcal{F}(\phi\_F(1))(t)$ solves the ODE given by $F$, i.e. $\mathcal{F}(\phi\_F(1))(t) = \phi\_F(1,t)$.
