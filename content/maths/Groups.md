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

## Groups

See elsewhere for the definition of groups, and group homomorphism. GRP is the category of groups and these homomorphisms.

Elementary group theory builds up to the following theorem, for a morphism $f : G \to H$ in the category of groups:

$$
im f \cong G / \ker f
$$

This requires us to define the *quotient* group $G/H$ for a group $G$ and $H \sub G$.

This requires a few steps.

## Cosets and quotients

For a group $G$, let $H \sub G$ be a subgroup.

We have an equivalence relation on $G$ of: 

$$x = y := x^{-1}y \in H$$

which intuitively is saying that the "difference" between $x$ and $y$ is in $H$.  We can quotient $G$ by this equivalence relationship, to form a partition, i.e. a set of non-overlapping subsets, whose union constitutes $G$.

If $H$ is a normal subgroup, which means that $H$ is invariant under conjugation by all $g\in G$, i.e.

$$\forall g \in G, \{ghg^{-1}, h \in H\} = H$$

then the elements of the partition form a group themselves known as $G/H$.
