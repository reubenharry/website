---
title: "Topology"
date: 2020-02-26T17:07:24+01:00
draft : True
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

\emph{Compactness} There's a concrete definition for $\RR$, which is that a compact set is closed and bounded. Note that $[\alpha,\infty]$ or $[-\infty,\beta]$ or $[-\infty,\infty]$ is closed but not bounded, so closed and bounded mean different things. There's a topological definition that's much more abstract, that any cover of a compact set has a finite subcover, and this is equivalent in the case of $\RR$ by the Heine-Borel theorem. The important intuition - Terence Tao has a nice article on it - is that compactness is a property of (potentially) infinite sets that are ``finite-ish''. Crucially, certain things that are true of functions on finite sets are true of \emph{continuous} functions on compact sets.
