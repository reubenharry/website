---
title: "Quantum Field Theory"
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


$\newcommand{\RR}{\mathbb{R}}$
$\newcommand{\C}{\mathbb{C}}$
$\newcommand{\pd}[2]{\frac{\partial #1}{\partial #2}}$
$\newcommand{\inner}[2]{\langle #1 | #2 \rangle}$
<!-- $\newcommand{\expectation}[3]{\langle #1 | #2 | #3 \rangle}$ -->

most general form of klein gordon in fourier decomp, with calculation of 3 measure