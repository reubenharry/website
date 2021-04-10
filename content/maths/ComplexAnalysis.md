---

title: "Complex Analysis"
author: "Reuben Cohn-Gordon"
date: 2020-02-26T17:07:24+01:00
draft: False

---

-

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
$\newcommand{\RR}{\mathbb{R}}$
$\newcommand{\C}{\mathbb{C}}$
$\newcommand{\N}{\mathbb{N}}$
$\newcommand{\Z}{\mathbb{Z}}$


## Complex derivatives

For a real function $f : \RR^2\to\RR^2$, we have that the total derivative is a linear map $T$ such that:

$$ ||f(a+h) - f(a) - T(h)|| = o_{lim\_{h\to0}}(||h||) $$

with $\frac{\partial f\_i(a)}{\partial x\_j}=T\_{ij}$.

For $g : \C \to \C$, differentiability is defined the same way, with the crucial difference that $T$ is linear in the 1D vector space over a *complex* field (rather than linear in a 2D vector space over the real field), i.e. $T$ is always a operator corresponding to multiplication by a complex number. Multiplication by a complex number corresponds to the following matrix:

$$ \begin{bmatrix} x & y & \\\\ -y & x & \end{bmatrix} $$

(The reason for this is that a complex number corresponds to a stretch followed by a rotation; composition of this results in a matrix of the above form).

As a result,

$$ \frac{\partial f_1(a)}{\partial x_1} = \frac{\partial f_2(a)}{\partial x_2} $$

and

$$ \frac{\partial f_1(a)}{\partial x_2} = -\frac{\partial f_2(a)}{\partial x_1} $$

These are the Cauchy-Riemann equations, which the real and imaginary parts of your complex function need to satisfy in order to be complex-differentiable.

## Complex functions

For a function $f$, a pole is a zero of $\frac{1}{f}$.

A holomorphic function is a complex function which is complex differentiable in a neighborhood of every point in its domain. Every holomorphic function is analytic: this is an essential difference to real analysis: roughly, if a complex function is once differentiable, it is infinitely differentiable.

A function whose only singularities are poles is meromorphic.


## Contour integrals

These are line integrals of holomorphic functions around a loop in the complex plane. Cauchy's integral theorem (which follows from Stokes' theorem) states that these are invariant under homotopy of paths. Simplest example:

$$ \oint\_C z^kdz$$

Because the domain is the whole real plane (no punctures), we can assume WLOG that the path is the unit circle $\gamma$ around the origin. Then suppose $\theta$ is defined such that $z=e^{i\theta}$, so that $dz = d(e^{i\theta})= ie^{i\theta}d\theta$. Then

$$ \oint\_{\gamma} (e^{i\theta})^kie^{i\theta}d\theta = i\oint\_{\gamma} e^{i(k+1)\theta}d\theta$$

This evaluates to $2\pi i$ if $k=-1$ but otherwise to $0$. This fact lets us compute more complex contour integrals, like:

$$ \oint\_{\gamma} \frac{e^z}{z^5}dz = \oint\_{\gamma} \frac{\sum_{k=0}^{\infty}z^k}{z^5k!}dz = \oint\_{\gamma} z^{-1}4!dz = \frac{\pi i}{12}    $$

In the above derivation, we expressed $e^z$ by its Taylor series, distributed the integral over the sum (which we can do because the function converges uniformly on the support of $\gamma$) and then noted that only the term $\frac{z^4}{z^54!}$ survives, by the above result.

In a very similar vein:

$ \oint\_{\gamma} \frac{f(z)}{z^2}dz = \oint\_{\gamma} \frac{f(0)+f'(0)z+\ldots}{z^2}dz = 2\pi if'(0)  $

## Residue

Note that $\oint\_{\gamma} z^kdz$ is $0$ whenever $k\neq 1$. This is in line with Cauchy's integral theorem, which allows us to contract any loop to a point as long as there is no singularity inside the loop, resulting in the integral equal to $0$.

The *residue* of a singularity is the result of an integral around just that singularity (up to a factor of $2\pi i$). It is important because the residue theorem allows for the calculation of a contour integral by (roughly) summing up the residues times their winding numbers (number of times the path loops around the singularity).

## Using complex analysis to solve real integrals

It seems like a common trick is to take an integral on the real line, extend it to a loop going through the complex plane, and then using the powerful tools of complex analysis (e.g. residue theorem) to solve it. Which is pretty neat.

<!-- As an example, consider

$$I = \int\_{-\infty}^{\infty}\frac{1}{x^2+a^2}dx$$

Suppose we first consider the case with finite bounds on integration, say $(-T,T)$ and create a contour by joining the two ends with a semicircle.  -->
