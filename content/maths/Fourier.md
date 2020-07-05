---
title: "Fourier Analysis"
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

Notes largely from [this **excellent** book](https://see.stanford.edu/materials/lsoftaee261/book-fall-07.pdf) and these [more concise but extremely useful notes](https://jeremykun.com/2012/04/25/the-fourier-series/).

## The general idea

The general insight of Fourier analysis is that (sufficiently nice) functions can be expressed as sums (or integrals) of some set of functions which have nice symmetry properties. That is, we want to find something like a basis of periodic functions, in a vector space of functions. Three cases:

- Even and odd functions: Any function can be expressed as a sum of an even function (a function where $f(-x)=f(x)$) and an odd function (where $f(-x)=-f(x)$).

- Fourier series: a (sufficiently nice) periodic function can be expressed as an (infinite) sum of complex exponentials. In other words, $e^{ki\pi x}$, for $k\in\Z$, is a basis for periodic functions. We then have an operator taking a (nice) periodic function on $\R$ to a real valued function on $\Z$.

- Fourier transform: a (sufficiently nice) function can be expressed as an integral of complex exponentials. This is like a continuous analog of a basis. Here, the operator $\mathcal{F}$ takes any (nice) function $f$ on $\R$ to a function $\mathcal{F}f$ on $\R$.

There are ways to express all of above as basically the same idea, and various important properties hold in either case, such as:

- The transform is unitary. E.g. $ ||f||^2 = ||\mathcal{F}f||^2 $. Unpacking that: $\int |f(t)|^2 dt = \int |\mathcal{F}f(k)|^2dk$, which is (depending on community, and degree of generality), Parseval's theorem, Plancherel's theorem or Rayleigh's identity.

- convolution and multiplication are related by: $\mathcal{F}(f * g) = \mathcal{F}f\mathcal{F}g$

## Function spaces

You can have vector spaces in which the vectors are functions.

There is a notion of an inner product in a function space, of the general form $\langle f,g\rangle = \int f(x)g^\*(x)dx$, which is exactly how you might imagine a continuous analog of the dot product. I'm being deliberately vague about the domain of integration, as it might depend on the choice of space. I'm assuming the functions are of type $V\to\C$, for some underlying vector space $V$ over the complex field. Often I'll assume that the range of the functions is $\R$.

## Operators

Linear operators on the function space include the operator $p=\frac{d}{dt}$ (which physically is the momentum operator in quantum mechanics). This takes a function and gives back a new function. It is linear. It is also skew-self-adjoint (using integration by parts, and noting that the first term in the integration by parts disappears because of the boundary conditions):

$$ \langle \frac{d}{dt}(f),g \rangle = \int\_{\infty}^{\infty}\frac{df(t)}{dt}g(t)dt = - \int\_{\infty}^{\infty}f(t)\frac{dg(t)}{dt}dt =  -\langle f,\frac{d}{dt}(g) \rangle $$

But if an operator $A$ is skew-self-adjoint, then $iA$ must be self-adjoint (since $\langle iA x, y \rangle = -\langle  x, (iA)^{\dagger}y \rangle = \langle  x, Ay \rangle$).

$p$ being self-adjoint means that (a version of) the spectral theorem gives that it has an orthonormal eigenbasis. The functions $e^{ikt}$ are one such eigenbasis, for $k$ real. (Note that I'm using "basis" to include this uncountable set of functions).

As such, both the Fourier series and Fourier transform, which put functions into a basis of complex exponentials, are kinds of eigendecompositions of derivative operators. This is very handy for solving differential equations, where these operators obviously feature heavily.

### Orthogonality of complex exponentials

Let $T(x)$ be the complex conjugate of $x$. Orthogonality is shown as follows:

  For n$\neq$m:
  $$ \langle e^{it2\pi m},e^{ti2\pi n}\rangle = \int_0^1 e^{ti2\pi m}T(e^{ti2\pi n}) $$
  $$ = \int_0^1 e^{ti2\pi m}(e^{-ti2\pi n}) = \int_0^1 e^{ti2\pi (m-n)}$$
  $$ = \frac{1}{i2\pi(m-n)}e^{i2\pi (m-n)} - \frac{1}{i2\pi(m-n)}e^{0} = \frac{e^{i2\pi (m-n)}-1}{i2\pi(m-n)} = 0$$.


## Even and Odd functions

Consider the function space of functions $\R\to\R$ that can be integrated (with a finite result).

An even function $f\_e$ is such that $f\_e(-x)=f\_e(x)$. An odd function $f\_o$ is such that $f\_o(-x)=-f\_o(x)$.

Even and odd functions form respective subspaces: linear combinations of even functions are even, and likewise for odd.

Every function $f$ can be written as $\frac{f(x)+f(-x)}{2} + \frac{f(x)-f(-x)}{2}$, where the first term is even and the second is odd. So the whole space is a direct sum of the two subspaces.

The two subspaces are orthogonal:

$$
\langle f\_e, f\_o \rangle = \int\_{\infty}^{\infty} f\_e(x)f\_o(x)dx = \int\_{0}^{\infty} f\_e(x)f\_o(x)dx + \int\_{-\infty}^{0} f\_e(x)f\_o(x)dx\\\\\\
= \int\_{0}^{\infty} f\_e(x)f\_o(x)dx + \int\_{0}^{\infty} f\_e(-x)f\_o(-x)dx \\\\\\
= \int\_{0}^{\infty} f\_e(x)f\_o(x)dx - \int\_{0}^{\infty} f\_e(x)f\_o(x)dx = 0
$$

The integral of an odd function over the whole real line is $0$.

Consider the operator $M$, such that $M(f)(x)=f(-x)$. Then $1$ and $-1$ are eigenvalues, and the corresponding eigenspaces are the even and odd functions.

<!-- Self adjoint: Note that $\int Nf(x)g(x)dx = int f(-x)g(x) = int f(x)g(-x) = int f(x)Ng(x)  -->

## Fourier Series

$$f(t) = \sum\_{-\infty}^{\infty}\langle f, e^{2\pi i n t} \rangle e^{2\pi i n t}$$

Here, the inner product is on $L^2([0,1])$, so:

$$ \langle f, e^{2\pi i n t} \rangle = \int_0^1 f(t)e^{-2\pi i n t}dt $$

Functions which are not smooth (either discontinuous or possessing discontinuous $n$th derivative) require infinite sum of complex exponential basis elements, since finite sum of smooth functions is smooth.

## Fourier Transform

Note that the following is very handwavy, but useful for intuitions about the Fourier transform.

Thinking of a function $\R\to\R$ as a vector in a function space, its coordinates are its values, ranging over inputs in $\R$.

A basis is a countable set, so amounts to a function from $\Z$ to a basis element. Recall that in a function space $V$, a basis element is itself a function. The continuous extension is a map from $\R$ to a basis element. $x\mapsto e^{ikx}$ is such a function.

The analog of expressing an element $\mathcal{F}f$ in your vector space (here a function) with a basis map $f$ is to integrate over your basis map, with the coordinates (the amount you multiply each basis vector) being provided by $Ff$, i.e.:

$$
f(x) = \int\_{-\infty}^{\infty}\mathcal{F}f(k)e^{2\pi ikx}dk
$$

What is $\mathcal{F}f$? It's the Fourier transform of $f$. Here is the definition:

$$\mathcal{F}f(k) = \int\_{-\infty}^{\infty}f(k)e^{-2\pi ikx}dk
$$

$\mathcal{F}f$ is the Fourier transform of $f$, giving the representation of $f$ in the eigenbasis of the 2nd derivative operator.

$f$ is the inverse Fourier transform of $\mathcal{F}f$. The Fourier transform of $f(x)$ projects $f$ onto a basis of complex exponentials and the inverse Fourier transform of $f$ builds up $F^{-1}f$ from a basis. This duality between projection and linear combination is at first a little weird looking.

## Fourier transform as unitary operator

Unitarity of Fourier transform is known as Parseval's theorem. Proof

TODO

### Nice algebraic properties of Fourier operator

TODO

Shift

Squash

Special case: reverse

Convolution


### Dirac Delta

This is a continuous analog to the Kronecker delta $\delta_{ij}$, which is $0$ except when $i=j$ and is then $1$. We want the same but in a continuous space. In particular, we want that $\int\_{-\infty}^{\infty}\delta(x)dx=1$ and $\langle \delta\_{x_0},f\rangle = f(x\_0)$. No function has these properties, and the Dirac $\delta$ is actually a functional, but it's useful and elegant.

<!-- Derivation of why $\langle \delta_{x_0},f\rangle = f(x_0)$.

First assume that $f$ is analytic (infinitely differentiable) around $x\_0$, so that $f=\sum_{i=0}^{\infty}\frac{f^{(i)}(x\_0)}{i!}(x-x\_0)^i$. Then write:

$$\langle \delta\_{x\_0},f\rangle = \int\_{-\infty}^{\infty}\delta\_{x\_0}(x)f(x)dx$$
$$ = \sum_{i=0}^{\infty}\int\_{-\infty}^{\infty}\frac{\delta\_{x\_0}f^{(i)}(x\_0)}{i!}(x-x\_0)^i $$
 -->

### Fourier transform of a Gaussian is a Gaussian


**Problem**:

For $F(x(t),t)=-2\pi tx(t)$, the corresponding solution to the ODE $\frac{d\phi(x\_0)(t)}{dt} = F(\phi(x\_0)(t))$ is $\phi\_F(1,t)=e^{-\pi t^2}$.

Show that $\mathcal{F}(\phi\_F(1))(t)= \langle e^{2i\pi ts},\phi\_F(1)(s) \rangle = \int\_{-\infty}^{\infty}e^{2i\pi ts}\phi\_F(1)(s)ds=\phi\_F(1,t)$

This amounts to the claim that the Gaussian is an eigenfunction of the Fourier transform.

**Solution**:

$$
\frac{d}{dt}\mathcal{F}(\phi\_F(1))(t) = \int\_{-\infty}^{\infty}\frac{d}{dt}e^{2i\pi ts}\phi\_F(1)(s)ds = \int\_{-\infty}^{\infty}-2\pi sie^{2i\pi ts}\phi\_F(1)(s)ds = \int\_{-\infty}^{\infty}ie^{2i\pi ts}\frac{d}{ds}\phi\_F(1)(s)ds$$
$$ = \int\_{-\infty}^{\infty}-(\frac{d}{ds}ie^{2i\pi ts})\phi\_F(1)(s)ds = -2\pi t\int\_{-\infty}^{\infty}e^{2i\pi ts}\phi\_F(1)(s)ds = -2\pi t \mathcal{F}(\phi\_F(1))(t)
$$
This means that $\mathcal{F}(\phi\_F(1))(t)$ solves the ODE given by $F$, i.e. $\mathcal{F}(\phi\_F(1))(t) = \phi\_F(1,t)$.
