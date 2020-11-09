---
title: "Electromagnetism"
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

Mostly summarizing David Griffiths' excellent and approachable *Introdution to Electrodynamics*.

Convetions: $\hat{r}$ for a unit vector, occasional use of bold for vectors.

### Electrostatics

Concerning the calculation of non-time-varying electric fields.

Although you can derive everything from a Lagrangian written in terms of the electromagnetic potential, here we'll start from some assumptions instead. In particular, Coulomb's law, where $F$ is the force on a test charge $Q$, if there is only a single point charge $q$ that is at rest, where $r(q)$ is the position of $q$ and $s = r(Q)-r(q)$. My understanding is that a test charge is taken to be a charge sufficiently small that we don't have to worry about the field it creates.

$$ F = \frac{1}{4\pi\epsilon_0}\frac{qQ}{s^2}\hat{s} $$

More abstractly, we can think of the electric field $E( r ) = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}\hat{r}$

Importantly, another derivable assumption we make is that fields combine linearly, so that the field from two point particles at rest is the sum of the field from each separately.

The goal is then to solve for the electric field. While simple in principle, the integrals in question are often difficult. The general approach to calculating these integrals is to use the different manifestations of the generalized Stokes theorem, namely that the integral of a quantity over a boundary is the same as the integral of the derivative of that quantity over the interior. This is a generalization of the fundamental theorem of calculus, see [notes](/maths/differentialforms).

Some notable uses of this approach:

The divergence theorem (a direct corollary of the generalized Stokes theorem) has that:

$$ \int\_S E\cdot da = \int\_V \nabla\cdot E d\tau $$

Now take a whole region with (varying) charge density $\rho$, and note that the total charge of the region is $Q\_{enc} = \int\_V\rho d\tau $

OK, and then we can establish that $\int E \cdot da = \frac{Q\_{enc}}{\epsilon\_0}$, since given a point charge $q$, you can take a sphere centered at this charge and integrate its surface, as:

$$ \int E\cdot da = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}\hat{r} \cdot (r^2\sin\theta d\theta d\phi\hat{r}) = \frac{1}{\epsilon_0}q $$

Then apply linearity to derive the desired result for a point mass not a point particle.

But that means that $ \int\_V \nabla\cdot E d\tau = \int\_S E\cdot da = \frac{Q\_{enc}}{\epsilon\_0} = \int\_V\frac{\rho}{\epsilon\_0} d\tau $ so that

$$ \nabla\cdot E = \frac{\rho}{\epsilon\_0} $$

But we also have that the curl is:

And so we can define the vector potential...

But noting that


A typical example would be to find the

useful reference facts:

coulomb's law

vector calculus toolbag:

	integration by parts for gradients

	fact: divergence of r/|r|^2: v useful fact!

Some common facts: infinite plates, etc

Using the generalized Stokes' theorem + symmetry, to make things easy

static electric field: charge creating the field stays fixed.

	curl of field is 0: why?

why do the sides of the pillbox contribute nothing?

whence the cylindrical volume element?

and the line element in polar coords?

change this to electromag, and other one to: Circuits
