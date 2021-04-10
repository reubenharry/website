---
title: "Representation Theory"
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




Representation theory can involve an offputting amount of wading through constructions before any payoff, so I liked these notes very much: https://scholar.harvard.edu/files/noahmiller/files/representation-theory-quantum.pdf. They are a condensation of Peter Woit's book on representation theory for physics.

Representation theory has various applications, one being physics. The idea is that a lot of the ideas about symmetry which give physical systems their structure are representation theoretic in nature.

A representation is just a functor $\pi$ from a group (viewed as a single object category) to a category of vector spaces, let's say Hilb, the category of Hilbert spaces. If you unpack this, you see that the single object of the image category, namely the group $G$, must map to a particular vector space $V$, and that the morphisms, which are the group elements $g$ map to invertible linear operators $\pi(g)$.

We're interested in particular in representations from a Lie group, which is a group that is also a manifold. More on Lie groups below.

A sub-representation is a representation on a subspace. An irreducible representation has no non-trivial sub-representations. Schur's lemma tells us (proof omitted, but it's a nice simple algebraic proof):

- For irreducible unequal $\pi\_1, \pi\_2: (\forall g: S\circ \pi\_1(g) =  \pi\_2(g) \circ S) \Rightarrow S = 0 $
- For irreducible $\pi: (\forall g: S\circ \pi(g) =  \pi(g) \circ S) \Rightarrow S = \lambda I$
- For $G$ abelian, its irreducible representations are on 1D subspaces
- The eigenspaces of an operator which commutes with a group representation are the irreducible representations

This fourth point is important for physics: if you have a group representation which commutes with the Hamiltonian, then finding the irreducible representations gives you the energy eigenspaces, and these spaces are invariant under your representation.

So the question we generally want to solve is: what are the irreducible representations of a given group. For example, it turns out that the irreducible representations of SO(3) (the *real* orthogonal matrices with $\det 1$) are the functors to odd dimensional Hilbert spaces, and the direct sum of all these irreducible representations gives a representation:

$$ \pi : SO(3) -> GL(L^2(S^2)) $$

where $GL(L^2(S^2))$ is the vector space of all linear maps from $L^2(S^2)$ to itself. $L^2(S^2)$ is the vector space of complex valued functions on the unit sphere.

What's the upshot? It's that the unit sphere has a natural rotation symmetry, and accordingly, representation theory gives a decomposition of this space, with spherical harmonics $Y\_l^m$ ranging over the irreducible representations $l$ and the dimensions of each representation $m$. Thus for an arbitrary $f \in GL(L^2(S^2))$:

$$ f(\theta, \phi) = \sum\_l\sum\_m \alpha\_l^mY\_l^m $$

Now, the Hamiltonian of an electron in the Coulomb potential is rotationally invariant, in precisely the sense that it commutes with the aforementioned representation $\pi$ of SO(3), so this is why things like the above come up when studying its wave function (I'm being vague here cause there's more detail I'm eliding).


### Lie objects

Lie groups have some natural structure on account of being both a group and a manifold. This structure is the tangent space at the only designated element of the group, the identity. This tangent space is the *Lie algebra* of the Lie group.

The derivative of a path going through the identity, at the identity, is an element of the Lie algebra. By definition.

The Lie algebra is closed under the commutator; in fact, you could make an algebraic definition of Lie algebras with this being the core property.

The matrix exponential of an element of the Lie algebra is in the Lie group. The exponential takes sums to products, which makes sense here; derivatives, which live in the Lie algebra, are linear and add.

A Lie algebra representation is the functor induced by a Lie group representation (where the target of the Lie group representation is also a Lie group). Here, functoriality means what it should, namely that the functor respects linearity and the commutator, so preserves the structure.

<!-- TODO: group homomorphism $\pi$ induces lie algebra homomorphism $\pi'$ with: \pi(e^{Xt})= e^{t\pi'(X)} -->

Relevant examples:

U(1):

- the elements of the Lie group: all the complex unitary matrices
- the elements of the Lie algebra: all the real skew-self-adjoint matrices

SL(n, C):

- the elements of the Lie group: all complex $n \times n$ matrices with determinant $1$
- the elements of the Lie algebra: traceless matrices (since $e^0=1$)

### The representations of U(1)

$U(1)$ is Abelian and therefore an n-dimensional representation of U(1) at some element $e^{i\theta}$ can be diagonalized, e.g. put in the form $e^{iK\theta}$ for a *diagonal* matrix $K$ where the diagonal elements are *integers*. This is basically the root of quantization, I think.

<!-- ### The representations of SU(2)

This is a lot less trivial. The upshot is that there is one irreducible representation for each dimension $(2j+1)$ for half-integer $j$, spanned by

S^n\_-(v) CHECK UNDERSTAND -->
