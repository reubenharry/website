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

Representation theory is all pretty much a special case of category theory, in that a representation is a functor $\pi$ from a group (viewed as a single object category) to a category of vector spaces, let's say Hilb, the category of Hilbert spaces. If you unpack this, you see that the single object of the image category, namely the group $G$, must map to a particular vector space $V$, and that the morphisms, which are the group elements $g$ map to invertible linear operators $\pi(g)$, which in a given basis, can then be written as matrices.

We're interested in particular in representations from a Lie group, which is a group that is also a manifold. More on Lie groups below.

A sub-representation is a representation on a subspace. An irreducible representation (onto a complex vector space) is one which has no non-trivial sub-representations. Since a representation is a functor, a homomorphism between representations is a natural transformation.

Schur's lemma tells us (statement and proof from nLab)

(1) For representations $V, W$, and $\phi : V \to W$ a natural transformation, specified by a linear transform of the same name, $\phi=0$ or $\phi$ is iso.

**Proof**: First note that  for any morphism $f : V \to V$, by naturality we have $\phi \circ f = f \circ\phi$, so for $x\in ker \phi$, $0 = \phi 0 = \phi(f x) = f (\phi x) \Rightarrow $\phi x \in ker \phi$. Similarly, for $y\in im \phi$, $\exists x.  f x = y$, so that $ \phi(y) = \phi(f(x)) = f (\phi(x)) \Rightarrow \phi x \in im \phi $. So $im \phi$ and $ker \phi$ are invariant subspaces. It then follows by assumption that both must be either empty or the whole of their respective spaces. If either $ker \phi$ is $V$ or $im \phi$ is $0$, $\phi=0$. If $ker \phi$ is $0$ and $im \phi$ is full, $\phi$ is iso by the rank-nullity theorem. QED.

(2) For algebraically closed ground fields, and $V=W$, $\phi = C\cdot id $.

**Proof** By the fundamental theorem of algebra, we have an eigenvalue $c$, and $\phi - c\cdot id : V \to V$ is also a natural transformation. But then by (1), $\phi-c\cdot id$ is $0$ (it cannot be iso since the kernel is non-empty, as witnessed by $c$), so $\phi = c \cdot id$. QED.

<!-- - For irreducible unequal $\pi\_1, \pi\_2: (\forall g: S\circ \pi\_1(g) =  \pi\_2(g) \circ S) \Rightarrow S = 0 $ -->
<!-- For irreducible $\pi: (\forall g: S\circ \pi(g) =  \pi(g) \circ S) \Rightarrow S = \lambda I$ -->

<!-- Note that this amounts to saying that an endomorphism on a representation $\pi$ in the category of representations is, provided the underlying field is algebraically closed, a multiple of the identity. (To see this, observe that a morphism in the category of representations is a natural transformation, and a natural transformation between functors from a single object category is specified by a single object, call it $S$ with the commuting property above). -->

<!-- The proof is direct, as all categorical proofs are. We will simply show that $K := ker(S-\lambda I)$ is a non-empty subrepresentation. From that it follows that $K=V$, by the assumption of irreducibility, and from that, $S-\lambda I=0 \Rightarrow S = \lambda I$, as desired. We know that $K$ is non-empty by the fundamental theorem of algebra (we're working on a complex vector space), so it only remains to show it is a subrepresentation: -->

<!-- $$ v \in K \Rightarrow (S-\lambda I)v = 0 \Rightarrow (S-\lambda I)\pi(g)v = \pi(g)(S-\lambda I)v = \pi(g)0 = 0 $$ -->

For a simple corollary, note that:

For $G$ abelian, its irreducible representations are on 1D subspaces. Proof obvious.

A more complex corollary:

The eigenspaces of an operator which commutes with a group representation are its irreducible representations

This point is important for physics: if you have a group representation which commutes with the Hamiltonian, then finding the irreducible representations gives you the energy eigenspaces, and these spaces are invariant under your representation.

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

- the elements of the Lie group: all the complex 1x1 unitary matrices
- the elements of the Lie algebra: all the real skew-self-adjoint matrices

SL(n, C):

- the elements of the Lie group: all complex $n \times n$ matrices with determinant $1$
- the elements of the Lie algebra: traceless matrices (since $e^0=1$)

### The representations of U(1)

$U(1)$ is Abelian and therefore an n-dimensional representation of U(1) at some element $e^{i\theta}$ can be expressed as the sum of 1D irreducible representations.

But there's a lovely intermingling of group theory and calculus that tells us something about 1D irreducible representations of $U(1)$. Note that any $c \in U(1)$ is expressed as $e^{ik}$ for some $k \in [0,2\pi]$. But that means that we can express a representation as a function $f$ of $\theta$ instead of $c$. But then, consider the derivative of $f$, which we know to exist:

$$ \f'(x) = \lim\_{dx \to 0}\frac{\f(x+dx)-f(x)}{dx} $$

$$ = \lim\_{dx \to 0}\frac{\f(x)f(dx)-f(x)}{dx} $$

$$ = f(x)\lim\_{dx \to 0}\frac{\f(dx)-1}{dx} $$

$$ = f(x)\lim\_{dx \to 0}\frac{\f(0+dx)-f(0)}{dx} = f(x)f'(0) $$

And *this* is a differential equation yielding a solution: $f(x)=e^{f'(0)x}$.

But since $1=f(0)=f(2\pi)=e^{if'(0)2\pi}$, it follows that $f'(0) \in \mathbb{Z}$.

And *that* is the origin of quantization.

<!--
    commute with the hamiltonian and you'll be preserved: QU(t) = qU(0)
    XY-YX is in lie algebra if X and Y are: closed under this
    an arbitrary rep pi of U(1) is of the form: \pi(e^{i\theta}) = e^{i\theta Q} -->

<!-- diagonalized, e.g. put in the form $e^{iK\theta}$ for a *diagonal* matrix $K$ where the diagonal elements are *integers*. This is basically the root of quantization, I think. -->

<!-- ### The representations of SU(2)

This is a lot less trivial. The upshot is that there is one irreducible representation for each dimension $(2j+1)$ for half-integer $j$, spanned by

S^n\_-(v) CHECK UNDERSTAND -->
