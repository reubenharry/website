---
title: "Dimensions"
date: 2020-02-26T17:07:24+01:00
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
$\newcommand{\pd}[2]{\frac{\partial #1}{\partial #2}}$


## Dimensions

Dimensions are a "type system" for the natural world. Just like in functional programming, understanding the types of the values being manipulated both avoids simple bugs and gets you surprisingly far in solving problems.

Units, like meters, are values which have a dimension.  For example:

- mass: M
- length: L
- time: T
- speed: $LT^{-1}$
- acceleration: $LT^{-2}$
- force: $LDT^{-2}$
- energy: $ML^2T^{-2}$

For various common operations and objects, we can say useful things about their dimensions:

Probabilities are dimensionless.

Probability densities have dimensions such that integrating over them gives a dimensionless quantity. So for example, a distribution over a physical area with have a density with dimensions $L^{-2}$.

You can't exponentiate a dimensional quantity, because, by the power series expansion of the exponential, you can see that you would be adding incommensurate quantities, like $M+M^2...$ for example.

If $x$ has some dimension, an infinitesimal $dx$ has the same dimension.

If $x$ has dimension $X$ and $y$ has dimension $Y$, then $\frac{dx}{dy}$ has dimension $XY^{-1}$. Thinking about this is very helpful in thinking about what sort of thing a derivative is.
