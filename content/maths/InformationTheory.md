---
title: "Information theory"
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

# Information theory

Suppose you have a distribution over some set $A$, $p : D(A)$, from which you will be given a sample. Your goal is to come up with a bijection $f : A \to List(\{0,1\})$ (i.e. from $A$ to arbitrary length bitstrings) such that $E_{x\sim p}[len(f(x))]$ is minimized.

Intuition: you are trying to minimize the *expected* length of messages which losslessly communicate.

The upshot is that one can talk of the *information* contained in a distribution, measured in the *expected* number of bits (Booleans) needed to encode a draw from the distribution.

The source coding theorem states that the minimum expected length is $H(p)$, known as the entropy of $p$, which is, up to a factor, the KL distance from a uniform dsitribution.

$$ - \sum\_ip\_ilog(p\_i)$$

Intuition: if the entropy is low, this means the distribution puts a lot of mass on certain elements of the support, and accordingly, these can be assigned short messages, minimizing the expected message length.

## Properties of entropy

As the source coding theorem makes clear, information, as measured by entropy, is an additive quantity, which is why a logarithm appears in the definition.

It has various intuitive properties, not least that your uncertainty on a distribution over the cells of a partition of the $p\_i$, added to your uncertainty for each distribution over the cell weighted by the cell probability, is equal to the entropy of the unpartitioned set.
