---
title: "Physics"
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

Newton's first law is that there is a set of so-called *inertial* reference frames under which the laws of physics don't change, in the sense that the same differential equation determines them.

Inertial transforms are ones which switch between inertial reference frames. One particular kind of switch is called a Galilean transform, and is the switch between one reference frame, and the reference frame determined by a particle moving at a constant speed relative to that frame.

To make that clear, imagine that I'm standing at a point one a railroad. I measure distances along the railroad relative to myself. But a passenger on a train moving away from me at a constant speed might also measure positions relative to themselves, and their measurements would be different.

The transform can be expressed as: $(x,t)\mapsto(x-vt,t)$. That is, the position (here in 1 dimension) that I call $x$, the train passenger calls $x-vt$. Here, $v$ is the velocity of the train.

Einstein notes that this the assumption that this Galilean transform preserves inertial frames contradicts a second principle, that the speed of light is invariant across frames. The problem is pretty clear: if I perceive the speed of light moving away from me as $c$, then surely you should perceive it as $c-v$. But then the speed of light is relative.

The key idea of special relativity is to postulate that Galilean transforms do not preserve inertial frames, but rather a new kind of transform, Lorentzian transforms, do.

## Deriving the Lorentz transform

TODO

Group properties of Lorentz transform: via wikipedia: was v nice

lightlike and timelike

Mechanics
