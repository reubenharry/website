---
title: "Category Theory"
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
$\newcommand{\pd}[2]{\frac{\partial #1}{\partial #2}}$

My favourite introductory texts are TODO
  and TODO

# What category theory is about

A common pattern in mathematics is to distill a kind of pattern into an object.

For example, a *group* captures the notion of symmtery: a group is an object where the elements include an identity, have inverses, and can be combined associatively). There are many different groups, but each has these properties.

Vector spaces are the objects which capture the notion of linear combination: a vector space is a space where the things in it (vectors) can be added together and scaled. There are many vector spaces, but each has this property.

Abstract algebra is full of such objects (sets, rings, topologies, etc etc).

There is a second intuition, equally ubiquitous, which goes like this: to understand objects, understand the maps between objects which preserve their structure. For example, study groups by studying group homomorphisms. Study vector spaces by studying linear maps.

The two intuitions in short:

1. To study a thing, reify its structure into an abstract object.
2. To study a thing, study the maps between instances of this object.

Category theory in the inevitable result of applying these intuitions to each other. Suppose that first, via intuition (1), have some kind of abstract object, like the notion of a group. Then, by intuition (2), you start considering the collection of all groups and the maps between them.

So far, no category theory. But then! Suppose you apply intuition (1) again, and decide to reify the idea of mappings between concrete instances of some abstract object as an object in and of itself.

This object is a category. It has the following data and laws: a category contains a collection of objects $A, B, C, D$, and arrows (aka morphisms) between those objects, $f : A \to B, g : B \to C, h : C \to D \dots$. There is an operation that combines two arrows $f \circ g$ which, crucially, is associative and has an identity at each object, the arrow $id\_A : A \to A$.

That's the abstract definition of a category, but a concrete example is the category of (finite dimensional) vector spaces, which contains vector spaces as objects and linear maps as arrows.

Category theory continues in this vein. Since we now have an algebraic object, the category, we study it - applying intuition (2) - by studying the maps between it. These are known as functors, and are the maps which preserve the category structure.

The ensuing category, the category of categories, has interesting structure that not all categories have. In particular, it admits a good way of mapping between arrows $f, g : A \to B$ (natural transformations), and also a good way of relating arrows $f : A \to B, g : B \to A$ (adjunctions). Both of these concepts turn up everywhere in algebra and seeing the common pattern is often very useful.

## Recursion

Category theory provides the general definition of a fold, as in "foldr" on lists in functional programming.

I'll give the definition of a catamorphism first, and then unpack it after.

We'll do this in the category $\mathbf{Set}$.

Let $F$ be an endofunctor, and define an $F$-algebra as any pair (a, A), where $A \in \mathbf{Set}$ and $a : F A \to A$. These form a category where a morphism $h : A \to B$ in $\mathbf{Set}$ is a morphism in $\textbf{F-alg}$ iff $ h . a = b . F h $.

If an initial object $(in, \mu)$ exists in $\textbf{F-alg}$, then the unique morphism $h : \mu \to A$ for a given $A$ is a *catamorphism*. Moreover, we can prove (Lambek's lemma) that $in$ is iso. This is easily seen as follows: we construct a new algebra $(F in, F \mu)$ and use initiality to obtain $t : mu \to F \mu$

 consider $in . \mu$, which is an endomorphism in $\textbf{Set}$ but *also* an endomorphism in $\textbf{F-alg}$ because $(in . \mu) . in TODO

= F in . F in . F \mu =  F in . F (in . \mu)

But being initial, $in . \mu$ is therefore the only morphism, so is equal to the identity. Repeat the same trick for (\mu . in) to finish.

Now to unpack this. To say that $in$ is an isomorphism is to say that $F(\mu) ~ \mu$.

By definition, we have that:

$$ h = a . F h . in^{-1} $$

And indeed, this is the Haskell definition of a catamorphism: we use this equation to compute.
