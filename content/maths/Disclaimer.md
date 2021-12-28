---
title: "Disclaimer + Overview"
date: 2020-03-26T17:07:24+01:00
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
--

Over the last few years, I've been learning some elementary maths. I like writing up notes to help myself understand a new concept, or to help myself remember it later. Some of these notes are stand-alone summaries (e.g. [these](/maths/fourier)), others are just collections of useful facts (e.g. [these](/maths/probability)). In both cases, there are almost certainly a *lot* of mistakes, both conceptual ones and typos.

The main principle I try to stick to with these notes is modularity, in the software design sense. For example, an explanation of the postulates of quantum physics should *not* itself contain an explanation of what a Hermitian operator is - it should outsource that a separate set of notes on linear algebra.

For me, at least, the lack of modular explanations makes learning *much* slower. Often I find an explanation of some subject confusing, but it's usually because the thing being explained relies heavily on mathematical background that I don't have (e.g. Fourier analysis). In these cases, I much prefer the "dependency" to be made explicit, and not implicitly crammed into the core narrative.
