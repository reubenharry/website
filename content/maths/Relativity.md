---
title: "Special Relativity"
date: 2020-02-26T17:07:24+01:00
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

# Relativity

Notes based mostly on Special Relativity and *Classical Field Theory: The Theoretical Minimum* and [this wikipedia page](https://en.wikipedia.org/wiki/Derivations_of_the_Lorentz_transformations).

The "feel" of quantum physics is that linear algebra provides the relevant mathematical toolbox. For special and general relativity, the relevant mathematical tool comes from geometry.

## Spacetime

If we view space and time together as a vector space (just doing this in itself makes no claims about relativistic vs. classical mechanics), then we can think about motions of point-masses as trajectories in this space.

Of course, we are free to choose coordinates in many ways. Newton's first law amounts to the claim that there is a set of so-called *inertial* reference frames under which the laws of physics don't change, in the sense that the same differential equation determines them. Moreover, the rule is that for an object with no external forces, its velocity is constant, which corresponds to a straight line trajectory in spacetime.

Inertial transforms are ones which switch between inertial reference frames. The difference between Newtonian and relativistic mechanics boils down to the nature of these transforms.

What are we happy to assume about them? Firstly, they should form a group (closed under composition and are associative, invertible, have identity). Secondly, since they map lines to lines, they must also be linear maps.

Obvious examples are shifts of the time axis, and shifts and rotations of space. Again, these exist in either relativistic or classical mechanics. The case that is very important for relativity is known as a *boost* TODO CHECK

There is an intuitive correspondence between boosts and trajectories. To see this, suppose that I'm standing at a point one a railroad. Party B is traveling away from me on a train at a constant velocity. There is then a frame corresponding to party B, and a transform from my frame to hers.

For simplicity, suppose space is 1D, so that spacetime is 2D. Then the non-relativistic model of boosts uses the transform $(x,t)\mapsto(x-vt,t)$. That is, the position (here in 1 dimension) that I call $x$, the train passenger calls $x-vt$. Here, $v$ is the velocity of the train. In matrix form:

$$ \begin{bmatrix} t' \\\\ x'
\end{bmatrix} \begin{bmatrix} 1 & 0 \\\\ -v & 1
\end{bmatrix} \begin{bmatrix} t \\\\ x
\end{bmatrix} $$

Einstein notes that this the assumption that this Galilean transform preserves inertial frames contradicts a second principle, that the speed of light is invariant across frames. The problem is pretty clear: if I perceive the speed of light moving away from me as $c$, then surely you should perceive it as $c-v$. But then the speed of light is relative.

The key idea of special relativity is to postulate that Galilean transforms do not preserve inertial frames, but rather a new kind of transform, Lorentzian transforms, do.

We can actually derive what the Lorentzian transform must be, given the assumption that the speed of light is constant. (In fact, this derivation predates Einstein, I think, but he was the first to really understand its physical significance.)

## Deriving the Lorentz transform

Still working with 1D space, what we're looking for is a matrix:

$$ $$ \begin{bmatrix} t' \\\\ x'
\end{bmatrix} \begin{bmatrix} \gamma & \delta \\\\ \beta & \alpha
\end{bmatrix} \begin{bmatrix} t \\\\ x
\end{bmatrix} $$ $$

TODO


lightlike and timelike

Mechanics
