---
title: "Information theory"
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

# Information theory

Suppose you have a distribution over some set $A$, $p : D(A)$, from which you will be given a sample. Your goal is to come up with a function $f : A \to [Bool]$ (i.e. from $A$ to arbitrary length bitstrings) such that $E_x\tilde p[len(f(x))]$

Suppose you want a function $H$ on discrete distributions (which for convenience we'll represent as a k-tuple $(p\_1\ldots p\_k)$ ) which measures uncertainty. Specifically, it should have the following properties:

- $H$ is continuous in $(p\_1\ldots p\_k)$
- $H$ is monotonic in $k$, for uniform distributions
- $H$ composes well: your uncertainty on a distribution over the cells of a partition of the $p\_i$, added to your uncertainty for each distribution over the cell weighted by the cell probability, should be equal to the entropy of the unpartitioned set. TODO: explain better

Shannon shows that these are *uniquely satisfied* by $H = -K \sum\_ip\_ilog(p\_i)$ for positive $K$. This quantity is entropy.
