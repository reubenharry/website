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

I think of it like this. There are two recurrent, and opposite intuitions you encounter in abstract algebra (group theory, linear algebra, topology, etc):

1. Reify structure into objects.
2. Don't focus on objects, focus on maps between objects which preserve their structure.

So for example, to study symmetries, capture their essence (1) in an object, namely a group. But then, don't study objects (2), study maps between them, which here are group homomorphisms. But then, reify group homomorphisms into an object (1), namely the category of groups. And don't study that, study maps between categories, namely functors. And so on.

Each kind of algebraic object captures some kind of structure. Groups capture symmetries, vector spaces capture weighted combination, and so on.

When studying any kind of algebraic object, you soon learn about the maps which preserve the structure. For example, group homomorphisms preserves the group operation, while linear transformations preserve weighted combinations:

$$ f(xy) = f(x)f(y) $$

$$ f(ax+by) = af(x)+bf(y) $$

Category theory is the field of mathematics which abstracts this pattern, to study structure-preserving maps in general.

It does so in a way which is initially surprising. It introduces a new kind of object, a *category* which captures the idea of structure preserving maps, in the same way a vector space captures weighted combination or a group captures symmetry. *Categories reify the idea of structure-preservation*.

Concretely, a particular category is a collection of objects and the maps between them. Maps (also known as morphism) must be (associatively) composable and every object must have an identity map.

It is then natural to study the structure preserving maps between categories, or equivalently, to study the category of categories (ignoring [set-theoretic worries about size](TODO)). These morphisms are called functors.

TODO:
  don't study objects; instead, study categories of objects - or equivalently, the mappings between objects.

  reification

In the ensuing landscape, several other concepts emerge as patterns

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
