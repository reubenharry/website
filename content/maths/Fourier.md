---
title: "Fourier Analysis"
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

Notes largely from [this **excellent** book](https://see.stanford.edu/materials/lsoftaee261/book-fall-07.pdf) and these [more concise but extremely useful notes](https://jeremykun.com/2012/04/25/the-fourier-series/).

## The general idea

The general idea of Fourier analysis is to express (sufficiently nice) functions as sums (or integrals) of some set of functions which have nice symmetry properties, usually complex exponentials. That is, we want to find something like a basis of periodic functions, in a vector space of functions. The applications of Fourier methods are therefore often cases where we want to "untangle" a function. This plays out in various different settings:



- $\mathcal{F}:(\R/n\Z\to\C)\to(\Z\to\C)$ is called the Fourier Series: that is, a (sufficiently nice) periodic function can be expressed as an (infinite) sum of complex exponentials. In other words, $e^{ki\pi x}$, for $k\in\Z$, is a basis for periodic functions.

- $\mathcal{F}:(\R\to\C)\to(\R\to\C)$ is called Fourier Transform: that is, a (sufficiently nice) function can be expressed as an integral of complex exponentials. This is like a continuous analog of a basis.

- $\mathcal{F}:(V^n\to\C)\to(V^n\to\C)$ is called Discrete Fourier Transform: is it a linear operator between finite dimension vector spaces, so can be expressed as a matrix.

- $\mathcal{F}:(\Z\to\C)\to(\R\to\C)$ is called Discrete Time Fourier Transform.

<!-- - Even and odd functions: Any function can be expressed as a sum of an even function (a function where $f(-x)=f(x)$) and an odd function (where $f(-x)=-f(x)$). -->

A range of properties hold, mutatis mutandis, across all the cases. I'll state them by default for the Fourier transform:

- The transform is unitary. E.g. $ ||f||^2 = ||\mathcal{F}f||^2 $. Unpacking that: $\int |f(t)|^2 dt = \int |\mathcal{F}f(k)|^2dk$, which is (depending on the community, and the degree of generality), Parseval's theorem, Plancherel's theorem or Rayleigh's identity. Here we're using the inner product of the space we're in, to obtain a norm. Unitary transforms are invertible with $U^{\*}=U^{-1}$, so we now know the inverse of the Fourier transform too.

- Define shifts and squashes as:

$$ \tau\_af(x) = f(x-a)$$

$$\sigma\_af(x) = f(ax) $$

Then the shift and stretch theorems:

$$ \left(\mathcal{F}\circ\tau_a\right)f = e^{-2\pi i a s}\mathcal{F} f$$

$$\left(\mathcal{F}\circ \sigma\_a\right) f = \frac{1}{|a|}(\sigma\_{\frac{1}{a}}\mathcal{F}f) $$

As an *extremely* useful special case, we have, writing $f^- = \lambda x \to f(-x)$:

$$ \mathcal{F}f^- = \mathcal{F}^{-1}f = (\mathcal{F}f)^- $$

- Differentiation:

$$ \mathcal{F}f' = 2\pi i s \mathcal{F}f $$

- Convolution

Define the convolution operator $\*$ by:

$$ (f\*g)(t) = \int\_{-\infty}^{\infty}f(t-x)g(x)dx $$

Convolution forms a commutative monoid on functions, which, to unpack that statement, means that it yields a new function, is commutative (as can be shown by a change of variables of the above equation), is associative (shown similarly), and has an identity.

Furthermore, the Fourier transform induces a monoid homomorphism from this monoid to the product monoid of functions (i.e. the binary operation maps $f$ and $g$ to $fg$, and the unit is $1$). In particular, $\mathcal{F}(f\*g)(k) = \mathcal{F}f\mathcal{F}g$. Very useful.

Deconvolution is then solving $f*g=h$ for $f$ given $g,h$, which (ignore division by $0$ issues) is given by $\mathcal{F}^{-1}(\frac{\mathcal{Fh}}{Fg})$

## Fourier as an eigendecomposition (i.e. diagonalization)

You can have vector spaces in which the vectors are functions.

There is a notion of an inner product in a function space, of the general form $\langle f,g\rangle = \int f(x)g^\*(x)dx$, which is exactly how you might imagine a continuous analog of the dot product. I'm being deliberately vague about the domain of integration, as it might depend on the choice of space. I'm assuming the functions are of type $V\to\C$, for some underlying vector space $V$ over the complex field.

Linear operators on the function space include the operator $p=\frac{d}{dt}$ (which physically is the momentum operator in quantum mechanics). This takes a function and gives back a new function. It is linear. It is also skew-self-adjoint (using integration by parts, and noting that the first term in the integration by parts disappears because of the boundary conditions):

$$ \langle \frac{d}{dt}(f),g \rangle = \int\_{\infty}^{\infty}\frac{df(t)}{dt}g(t)dt = - \int\_{\infty}^{\infty}f(t)\frac{dg(t)}{dt}dt =  -\langle f,\frac{d}{dt}(g) \rangle $$

But if an operator $A$ is skew-self-adjoint, then $iA$ must be self-adjoint (since $\langle iA x, y \rangle = -\langle  x, (iA)^{\dagger}y \rangle = \langle  x, Ay \rangle$).

$p$ being self-adjoint means that (a version of) the spectral theorem gives that it has an orthonormal eigenbasis. The functions $e^{ikt}$ are one such eigenbasis, for $k$ real. (Note that I'm using "basis" to include this uncountable set of functions - the actual story is more complicated and I don't understand it yet).

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

Note how the Fourier series is the projection of a periodic function onto an orthonormal basis of complex exponentials:

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

### Inversion:

$$ (\mathcal{F}^{-1}(\mathcal{F}(f)))(t) = \int\_{-\infty}^{\infty}\mathcal{F}f(k)e^{2\pi itk}dk $$

$$ = \int\_{-\infty}^{\infty}\left( \int\_{-\infty}^{\infty}f(x)e^{-2\pi ikx}dx \right)e^{2\pi itk}dk $$

$$ = \int\_{-\infty}^{\infty} \int\_{-\infty}^{\infty} \left(e^{-2\pi itk} e^{2\pi ikx}dk \right) f(x) dx $$

$$ = \int\_{-\infty}^{\infty}\delta\_t f(x) dx = f(t) $$

### Dirac Delta

This is a continuous analog to the Kronecker delta $\delta_{ij}$, which is $0$ except when $i=j$ and is then $1$. We want the same but in a continuous space. In particular, we want that $\int\_{-\infty}^{\infty}\delta(x)dx=1$ and $\langle \delta\_{x_0},f\rangle = f(x\_0)$. No function has these properties, and the Dirac $\delta$ is actually a functional (see below), but it's useful and elegant.

Key properties:

$$ \mathcal{F}\delta(t-a) = e^{-2\pi i k a} $$

Note the consequence, via the shift theorem that $\mathcal{F}\delta(t) = 1 $

### Extending Fourier analysis to linear functionals

There's a complex story re. the analysis part of Fourier analysis, namely finding classes of functions for which the Fourier transform is a well defined unitary isomorphism. One clear problem is that we want things like the $\delta$ function to be such that $\mathcal{F}\delta = 1$, but it has none of the properties of a function. Not to mention to Fourier transform of, e.g. a complex exponential.

In summary, one common approach is to first take some quite restricted set of well-behaved functions (such as the Schwartz functions, which are functions which decay very rapidly) and then obtain "distributions" (not to be confused with the probabilistic sense), which are linear functionals on this restricted set.

More concretely, call the restricted set $\mathcal{S}$, and for a function $f$ such that $\forall h\in \mathcal{S}: \langle f, h \rangle \leq \infty$, let $T_f(g) = \langle f, g \rangle$, where $T_f \in \mathcal{T}$, the set of distributions, i.e. linear functionals $\mathcal{S}\to \C$.

Because of the infinite setting we're in, $\lambda f \to T_f$ is not an isomorphism (I believe), which is to say that there will be operators $T \in \mathcal{T}$ which do not come from dualizing a function in $\mathcal{S}$. The prominent example being $\delta$.

$\delta$ and the like we just define directly by their action on $f\in \mathcal{S}$. For example, $\delta f = f(0)$.

It's then straightforward to define the Fourier transform on $\mathcal{T}$ in the usual way you define things on dual objects, namely $(\mathcal{F}T)f = T(\mathcal{F}f)$.

What we get is the *extremely useful* ability to take things which integrate to infinity on the real line, and take the Fourier transform of them. The emphasize this, people write, in a horrible type error: $\langle T, f \rangle$ to mean $Tf$.

Terminological note: when $\mathcal{S}$ is the Schwartz functions, $\mathcal{T}$ is called the set of *tempered distributions*.

### Delta function as a distribution

What is the identity of the convolution monoid? It's $\delta$, since, as we know, $\mathcal{F}\delta = 1$. Making this concrete, we have that $\delta * f = f$.

Actually, extending this to distributions is a little tricky, because you can't take a product of arbitrary distributions, so you have to just define convolution of a distribution with a function in $\mathcal{S}$.

People often write $\delta(x-b)$ to mean $\tau_b\delta$, although this is not well-typed. With that in mind, the two key properties of $\delta$:

$$ f(x)\delta(x − b) = f(b)\delta(x − b) $$

$$f * \delta(x − b) = f(x − b)$$

### Fourier transform as unitary operator

Unitarity of Fourier transform is known as Parseval's theorem:

Taking any (appropriate) functions $f, g$, and writing $g(x) = \int\_{-\infty}^{\infty}\mathcal{F}g(k)e^{2\pi i k x}dk$, we have:


$$ \langle f,g\rangle = \int\_{-\infty}^{\infty}f(x)\overline{g}(x)dx$$

$$ =  \int\_{-\infty}^{\infty}f(x)\overline{\left(\int\_{-\infty}^{\infty}\mathcal{F}g(k)e^{2\pi i k x}dk\right)}dx$$

$$ =  \int\_{-\infty}^{\infty}f(x)\left(\int\_{-\infty}^{\infty}\overline{\mathcal{F}g}(k)e^{-2\pi i k x}dk\right)dx$$

$$ =  \int\_{-\infty}^{\infty}\mathcal{F}f(k)\overline{\mathcal{F}g}(k)dk = \langle \mathcal{F}f,\mathcal{F}g\rangle $$

## Discrete Fourier Transform

The operates on discrete n-periodic signals, which can be represented by vectors of length n. As such, it is just a linear map, written in Einstein notation as:

$$ (\mathcal{F}v)\_m = e^{\frac{-2\pi i mn}{N}}v\_n $$

(Note that the sum starts with $n=0$)

## Discrete Time Fourier Transform

$$ \mathcal{F}v\_m = \sum\_{n=-\infty}^{\infty} e^{-2\pi i mn}v\_n $$

## N-dimensional Fourier transform

The Fourier transform (as well as its relatives) is easily extended to functions of type $\R^n\to\C$ (yielding functions of the same type). The definition, for $f$ of this type:

$$ \mathcal{F}f(\xi) = \int\_{\R^n}f(x)e^{-2\pi i \langle x, \xi \rangle}dx $$

In this setting, we have some new facts. First, an extension of the shift theorem which more or less follows from the change of variables formula:

$$ \mathcal{F}f(Ax) = \frac{1}{|\det A |}\mathcal{F}f(A^{-T}\xi) $$

Second, separability:

$$ f=\bigotimes_nf_n \Rightarrow \mathcal{F}f = \bigotimes_n(\mathcal{F}f)_n  $$

Note that the tensor product, in this setting is just: $(f \otimes g)(x) = f(x)g(x)$, so nothing conceptually fancy here.

## Various important functions and facts

### $\Pi$ and sinc

$\Pi_p$ is the function which is $1$ for $|x|\lt p$ and $0$ otherwise.

Its Fourier transform is $sinc(x)=\frac{\sin (\pi x)}{\pi x}$

### Gaussian function

Gaussian function $f(x)=e^{-\pi x^2}$ is fixed point of $\mathcal{F}$:

Showing that is a nice application of ODEs, using the notation from [these notes](/maths/odes) where $F$ is *not* $\mathcal{F}f$:


Start by observing that for $F(x(t),t)=-2\pi tx(t)$, the corresponding solution to the ODE $\frac{d\phi(x\_0)(t)}{dt} = F(\phi(x\_0)(t))$ is $\phi\_F(1,t)=e^{-\pi t^2}$.

The goal is to show that

$$\mathcal{F}(\phi\_F(1))(t)= \langle e^{2i\pi ts},\phi\_F(1)(s) \rangle = \int\_{-\infty}^{\infty}e^{2i\pi ts}\phi\_F(1)(s)ds=\phi\_F(1,t)$$

This amounts to the claim that the Gaussian is an eigenfunction of the Fourier transform. We do so as follows:


$$
\frac{d}{dt}\mathcal{F}(\phi\_F(1))(t) = \int\_{-\infty}^{\infty}\frac{d}{dt}e^{2i\pi ts}\phi\_F(1)(s)ds = \int\_{-\infty}^{\infty}-2\pi sie^{2i\pi ts}\phi\_F(1)(s)ds = \int\_{-\infty}^{\infty}ie^{2i\pi ts}\frac{d}{ds}\phi\_F(1)(s)ds$$
$$ = \int\_{-\infty}^{\infty}-(\frac{d}{ds}ie^{2i\pi ts})\phi\_F(1)(s)ds = -2\pi t\int\_{-\infty}^{\infty}e^{2i\pi ts}\phi\_F(1)(s)ds = -2\pi t \mathcal{F}(\phi\_F(1))(t)
$$

## Dirac Comb

The Dirac comb ${III}_p(x) = \sum\_{n=-\infty}^{\infty}\delta(x-kp)$, in particular, $III_1:=III$ is also a fixpoint of $\mathcal{F}$, since, using the Poisson summation formula

$$\langle \mathcal{F}III,\phi\rangle = \sum\_{n=-\infty}^{\infty} \mathcal{F}\phi(k) = \sum\_{n=-\infty}^{\infty} \phi(k) = \sum\_{n=-\infty}^{\infty} \langle \delta\_k,\phi\rangle = \langle \sum\_{n=-\infty}^{\infty}  \delta\_k,\phi\rangle = \langle III,\phi \rangle $$

Convolving with the comb, i.e. applying the function $(III \*)$, periodizes.

Multiplying by the comb samples.

### Poisson summation formula

$$ \sum\_{n=-\infty}^{\infty}f(n) = \sum\_{k=-\infty}^{\infty}\mathcal{F}f(k)  $$

## Linear Systems

A linear system $L$ is just a linear operator on a function space, taking $v(t)$ to $Lv(t)=w(t)$. Note that like an operator on a finite dimensional space, it can be characterized by how it acts on (the equivalent of) a basis, namely, let $h(x,y)=L\delta(x-y)$. Then:

$$ Lv(x) = \int\_{-\infty}^{\infty}h(x,y)v(y)dy $$

Here, $h$ is known as the impulse response and $H=\mathcal{F}h$ as the transfer function.

### LTI systems

$L$ is linear and time invariant (LTI) if $L\tau_b=\tau_bL$.

$L$ being LTI is equivalent to $L=(h\*)$ for some $h$. In that case, complex exponentials $e^{2\pi i st}$ are the eigenvectors, with eigenvalues $\mathcal{F}h(s)$. To see that, note that for $w=L(e^{2\pi i vx})=h*e^{2\pi i vx}$:

$$ \mathcal{F}^{-1}\left(\mathcal{F}(w)(k)\right) = \mathcal{F}^{-1}\left(\mathcal{F}h(k)\mathcal{F}(e^{2\pi ivx})\right) = \mathcal{F}^{-1}\left(H(k)\delta(k-v)\right) = \mathcal{F}^{-1}\left(H(v)\delta(k-v)\right)= H(v)e^{2\pi ivx} $$


## Sampling theory

### Limited functions

A function $f$ is time-limited at $L$ if for any $|t|\gt L$, $f(t)=0$.

A function $f$ is band-limited at $B$ if for any $|k|\gt B$, $\mathcal{F}f(k)=0$.

A function cannot be both time and band limited. To see this, suppose $f$ is bandlimited at $B$. Then $\mathcal{F}f = \Pi_B\mathcal{F}f$, which means that $f = \mathcal{F}^{-1}\mathcal{F}f = p\cdot sinc(pt)\*f(t)$.

### Orthonormal basis of band-limited functions

Generalizing the above point, and taking $f$ bandlimited:

$$ f(x) = \mathcal{F}^{-1}(\mathcal{F}f)(x) = \mathcal{F}^{-1}(\Pi(\mathcal{F}f * III)(x)) $$

$$ = \left(\mathcal{F}^{-1}\Pi * \mathcal{F}^{-1}\mathcal{F}f\cdot \mathcal{F}III\right)(x) = (sinc * IIIf)(x)$$

$$ = \sum_{k=-\infty}^{\infty} f(k)sinc(x-k)$$

Note that the first step uses the compact support of $\mathcal{F}f$ (i.e. the band-limitedness of $f$), because it says: periodize and then chopping back does nothing. The significance of the above result is that a *countably* infinite set of *samples* of $f$ suffice to represent the whole function. That is cool and moreover, important.

It's further clear that the sampling rate is the reciprocal of the bandwidth, i.e. twice the max frequency (in absolute value). This is the Nyquist frequency.

One can also obtain a similar result in which a *periodic* bandlimited function is the sum of a *finite* number of quotients of trig functions (it's a bit more fiddly).

# Applications

## PDEs

A good example of the usefulness of convolution is that the solution to the heat equation (on an infinite rod), i.e. $u\_t = \frac{1}{2}u\_{xx}$ is

$$g(x,t)*u(x,0)$$

where $g(x,t)=\frac{1}{\sqrt{2\pi t}}e^{\frac{-x^2}{2t}}$, i.e. the PDF of a Gaussian with $\mu=0,\sigma^2=t$. We should understand the above equation as saying: take the initial heat distribution $u(x,0)$, and convolve it with the kernel $g(x,t)$ to move forward to time $t$.


## Signal processing

"Signal" is an electrical engineering term for "function". Filtering is the idea of taking a signal $f$, diagonalizing it (i.e. Fourier transforming), doing some function on $\mathcal{F}f$ like zeroing out some of it, and then inverting the transform. That's (at least one of) the foundational ideas of signal processing.

As an example, consider the process of denoising. We model a noisy signal as $n=v+p$, where $p$ is the noise, and we want to design an LTI that denoises. To wit, let $h$ be the impulse response of $L$, and $q=h*p$, so that $Ln=Lv+q$.

Note that (using capital letters for Fourier transforms of functions):

$$||q||^2 = ||\mathcal{F}q||^2 = \int\_{-\infty}^{\infty}\mathcal{F}q(s)ds = \int\_{-\infty}^{\infty}H(s)P(s)ds $$

Now suppose that the noise $p$ is white, which here means that $\exists C. \forall s. P(s)=C$. That means that $||q||^2 = C^2||H||^2$. We now apply Cauchy-Schwartz to great effect, but noting that:

$$ |w(t)|^2 = |\mathcal{F}^{-1}w(t)|^2 = |\int\_{-\infty}^{\infty}(H\cdot V)(s)e^{2\pi i st}ds|^2$$

$$ \leq |\int\_{-\infty}^{\infty}H(s)ds|^2 |\int\_{-\infty}^{\infty}V(s)e^{2\pi i st}ds|^2 $$

$$ \leq \int\_{-\infty}^{\infty}|H(s)|^2ds \int\_{-\infty}^{\infty}|V(s)|^2ds $$

Adding a definition, we have the signal to noise ratio:

$$ SNR := \frac{|w(t)|^2}{||q||^2} \leq \frac{1}{C^2}\int\_{-\infty}^{\infty}|V(s)|^2ds$$

We maximize the SNR be attaining equality in Cauchy-Schwartz. Recall that this happens when the two vectors lie in the same span, which here means that $h$ is proportional to $\mathcal{F}ve^{2\pi ist}$. (This is the matched filter theorem)

## Spectroscopy

Turns out that waves roughly behave in a way where if you have a plane wave hit a wall with a hole, it will *diffract*, causing the *Fourier transform of the hole* to be the resulting field on a wall further on. This generalizes a lot, and is the principle that allows you to "see" the structure of a crystal by looking at the pattern it makes (the diffraction pattern), which is the Fourier transform (and then 2D projection) of an appropriate Dirac comb representing the lattice in question (the given model of the atomic structure of the material of interest).

## Imaging

My favorite example of how powerful Fourier methods are, especially in multiple dimensions, where you can do things like fix one variable, or vary both.

For the application of e.g. medical imaging, you have the following setup. Assume you want to map out the internal density of some 2D region, i.e. find the density function $\mu(x) \in \R$, for $x\in \R$.

Characterize a line through the region by its angle and offset, respective $(\rho, phi)$, for $\rho \in \R$, $\phi \in [0,\pi]$.

We can also have a 2D line $\delta$ for $(\rho,\phi)$, written $\delta(\rho - x\_1\cos\phi-x\_2\sin\phi)$ which turns out, when integrated on $dx\_1\wedge dx\_2$ against a function $f$, to give the line integral of $f$ along that line.

You know that material density affects the speed of the rays you can send through the region, so we get the line integral for a given line, we have:

$$M(x\_1,x\_2) = \int\_{\R^2} \mu(x\_1,x\_2)\delta(\rho - x\_1\cos\phi-x\_2\sin\phi)dx\_1\wedge dx\_2 $$

Set $\mathcal{R}\mu=M$. $\mathcal{R}$ is then called the Radon transform, and the goal of imaging is to find its inverse.

As it turns out, it's not hard to show that, for $\mathcal{F}$ the 2D Fourier transform, $\mathcal{F}\_{\rho}$ the 1D Fourier transform in $\rho$, and $(\xi\_1,\xi\_2) = (r\cos\theta, r\sin\theta)$:

$$ \mathcal{F}\_{\rho}\mathcal{R}(\mu)(r,\phi) = \mathcal{F}\mu(\xi\_1,\xi\_2) $$

So, almost unbelievably, we have a way of recovering $\mu$ from the total mangling it undergoes by $\mathcal{R}$.

## Quantum mechanics

Since particles in quantum mechanics are vectors in a function space, all the machinery of Fourier analysis is perfectly adapted to this setting. In particular, representing a function as an integral of deltas is called the position representation, while the Fourier transform is the momentum representation. See [notes](/maths/quantum).



<!-- Derivation of why $\langle \delta_{x_0},f\rangle = f(x_0)$.

First assume that $f$ is analytic (infinitely differentiable) around $x\_0$, so that $f=\sum_{i=0}^{\infty}\frac{f^{(i)}(x\_0)}{i!}(x-x\_0)^i$. Then write:

$$\langle \delta\_{x\_0},f\rangle = \int\_{-\infty}^{\infty}\delta\_{x\_0}(x)f(x)dx$$
$$ = \sum_{i=0}^{\infty}\int\_{-\infty}^{\infty}\frac{\delta\_{x\_0}f^{(i)}(x\_0)}{i!}(x-x\_0)^i $$
 -->
