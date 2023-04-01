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

(1) For irreducible representations $V, W$, and $\phi : V \to W$ a natural transformation, specified by a linear transform of the same name, $\phi=0$ or $\phi$ is iso.

The proof is fun, because it exploits basic properties of linear algebra:

1. $ker(S)$ is invariant under $\pi_1$ (Proof: Consider $x \in \ker S$. Then $0 = (\pi_2(f)\circ S)(x) = (S\circ \pi_1(f))(x) = S(\pi_1(f)(x))$, so $\pi_1(f)(x) \in ker S$. $\square$)
2. $im(S)$ is invariant under $\pi_2$ (Consider $x \in im(S)$. Then $Sy = x$ so $\pi_2(f)(Sy) = \pi_2(f)x = S(\pi_2(f)y)$, so $\pi_2(f)x \in im(S)$)
3. Both are therefore subrepresentations of $\pi_1$ .
4. By the assumption of irreducibility of $\pi_1$, $ker(S)$ is either empty or the full space.
5. If the latter, $S=0$. If the former, im(S) is the whole space by rank-nullity, so $S$ is an isomorphism.

It has the following corollaries:

- For $V = W$, $S = c\cdot I$. Proof:
  1. invoke fundamental theorem of algebra to obtain eigenvalue $c$ of $S$.
  2. $S - cI$ is a map between $\pi_1$ and $\pi_2$. *By Schur's lemma*, it must be either full or $0$.
  3. It can't be full because its kernel is non-empty (since $v_c$ is eigenvector of $S$).
  4. So it's 0, and then $S - cI = 0 \Rightarrow S = cI$

- the irreducible representations of an Abelian (aka commutative) group are 1D. Proof: Invoke corollary 1 for $S = \pi(g)$ for any $g$.

- suppose $\forall f \in G, [H, \pi(f)] = 0$. Then the irreducible representations making up $\pi$ are eigenspaces of $H$. (Proof omitted, but it's not hard)


<!-- - For irreducible unequal $\pi\_1, \pi\_2: (\forall g: S\circ \pi\_1(g) =  \pi\_2(g) \circ S) \Rightarrow S = 0 $ -->
<!-- For irreducible $\pi: (\forall g: S\circ \pi(g) =  \pi(g) \circ S) \Rightarrow S = \lambda I$ -->

<!-- Note that this amounts to saying that an endomorphism on a representation $\pi$ in the category of representations is, provided the underlying field is algebraically closed, a multiple of the identity. (To see this, observe that a morphism in the category of representations is a natural transformation, and a natural transformation between functors from a single object category is specified by a single object, call it $S$ with the commuting property above). -->

<!-- The proof is direct, as all categorical proofs are. We will simply show that $K := ker(S-\lambda I)$ is a non-empty subrepresentation. From that it follows that $K=V$, by the assumption of irreducibility, and from that, $S-\lambda I=0 \Rightarrow S = \lambda I$, as desired. We know that $K$ is non-empty by the fundamental theorem of algebra (we're working on a complex vector space), so it only remains to show it is a subrepresentation: -->

<!-- $$ v \in K \Rightarrow (S-\lambda I)v = 0 \Rightarrow (S-\lambda I)\pi(g)v = \pi(g)(S-\lambda I)v = \pi(g)0 = 0 $$ -->


This point is important for physics: if you have a group representation which commutes with the Hamiltonian, then finding the irreducible representations gives you the energy eigenspaces, and these spaces are invariant under your representation.

So the question we generally want to solve is: what are the irreducible representations of a given group. For example, it turns out that the irreducible representations of SO(3) (the *real* orthogonal matrices with $\det 1$) are the functors to odd dimensional Hilbert spaces, and the direct sum of all these irreducible representations gives a representation:

$$ \pi : SO(3) -> GL(L^2(S^2)) $$

where $GL(L^2(S^2))$ is the vector space of all linear maps from $L^2(S^2)$ to itself. $L^2(S^2)$ is the vector space of complex valued functions on the unit sphere.

What's the upshot? It's that the unit sphere has a natural rotation symmetry, and accordingly, representation theory gives a decomposition of this space, with spherical harmonics $Y\_l^m$ ranging over the irreducible representations $l$ and the dimensions of each representation $m$. Thus for an arbitrary $f \in GL(L^2(S^2))$:

$$ f(\theta, \phi) = \sum\_l\sum\_m \alpha\_l^mY\_l^m $$

Now, the Hamiltonian of an electron in the Coulomb potential is rotationally invariant, in precisely the sense that it commutes with the aforementioned representation $\pi$ of SO(3), so this is why things like the above come up when studying its wave function (I'm being vague here cause there's more detail I'm eliding).

# Some preliminaries

## Lie groups

If the object $S$ is a manifold, then $G(S)$ is a Lie group, which is of course a special case of a group. More precisely, we want the functions $f$ to be differentiable mappings of the manifold to itself.

Consider for example the sphere as $S$ and the rotations of the sphere as the functions on $S$. This Lie group is referred to as $SO(3)$.

As with manifolds generally, it's occasionally useful to think in terms of coordinates. In this case, each element of $SO(3)$ can be described by a *special orthogonal matrix* (i.e. a 3x3 matrix with determinant 1), which explains the name of the group.

What is interesting about Lie groups is that calculus now comes into the picture. We can consider the tangent space of the sphere at its distinguished base point, the identity function (which in coordinates is the identity matrix). For present purposes, think of the tangent space as being populated by elements of the form $\frac{d}{dt}f(t)|_{t=0}$, where $f(t) : \R \to G$ and $f(0)=I$.

Then suppose $X \in g$. Then $1 + \frac{1}{N}X + O(\frac{1}{N^2})$ is in $G$ for large $N$, so

$$
\lim_{N \to \infty} (1 + \frac{1}{N}X + O(\frac{1}{N^2}))^N = $$
$$ \lim_{N \to \infty} (1 + \frac{1}{N}X)^N = e^X \in G
$$

So the exponential maps from the Lie algebra to the Lie group. But the map isn't surjective unless G is connected (which is the topological property that there's a path between any two points on the manifold).

Next note that $xe^{tX}x^{-1} \in G$, so $\frac{d}{dt}(xe^{tX}x^{-1})|_{t=0} = xXx^{-1} \in g$.

But then $e^{tY}Xe^{e-tY} \in G$, so

$$
\frac{d}{dt}(e^{tY}Xe^{e-tY})|_{t=0} = YX - XY = [Y,X] \in g
$$

So the Lie algebra is closed under the commutator.

We say that the tangent space of a Lie group is a *Lie algebra*.
As it turns out, different Lie groups may have the same Lie algebra. In particular, the group of complex 2D rotations $SU(2)$ and the group of real 3D rotations $SO(3)$ are not isomorphic, but their Lie algebras are.

We can deduce a lot about the Lie algebra of $SO(3)$. Its elements are linear operators $V^3 \to V^3$, which exponentiate to obtain elements of $SO(3)$.

Since

$$
0 = \frac{d}{dt}(1)|_{t=0} = \frac{d}{dt} e^{tX}e^{tX^T}|_{t=0}
$$

$$
= (e^{tX}Xe^{tX^T} + e^{tX}X^Te^{tX^T} )|_{t=0} = X + X^T
$$

we see that $X$ is skew-Hermitian.

Since $\det(e^X) = e^{Tr(X)}$, $X$ must be traceless.

Actually all skew-Hermitian traceless matrices are in the Lie algebra, so it's spanned by three operators conventionally called $L_i$.

By the linearity of the derivative, real linear combinations of $so(3)$ are in $so(3)$, so $L_i$ are basis elements of a real $V^3$ space. We say that rotations are generated by the exponential map applied to these *generators of rotation*.

## Adjoint representations

Since the Lie algebra of a group is itself a vector space, we can consider representations of the group on it. In particle, for $g$ in the group, and $X$ in the Lie algebra, let $\pi(g)(X) = gXg^{-1}$. This is the *adjoint representation*; think of it as a representation we get for free.

## The representations of $U(1)$

This group is commutative, so we know that its irreducible representations are 1D. Thus any arbitrary representation is a direct sum of 1D representations, so in matrix form is a diagonalizable matrix.

But we can say more.

We work from the parametrization of $U(1)$ as $e^{i\theta}$ and let $f(\theta) = \pi(e^{i\theta}$)

$$
\frac{d}{d\theta}f(\theta) = \lim_{\Delta\theta \mapsto 0} \frac{\pi(e^{i(\theta + \Delta\theta)}) - \pi(e^{i\theta})}{\Delta\theta}
$$

$$
= \lim_{\Delta\theta \mapsto 0} \frac{\pi(e^{i\theta}e^{\Delta\theta}) - \pi(e^{i\theta})}{\Delta\theta}
$$

$$
= \lim_{\Delta\theta \mapsto 0} \frac{\pi(e^{i\theta})\pi(e^{\Delta\theta}) - \pi(e^{i\theta})}{\Delta\theta}
$$

$$
= \pi(e^{i\theta})\lim_{\Delta\theta \mapsto 0} \frac{\pi(e^{\Delta\theta}) - 1}{\Delta\theta}
$$

$$
= f(\theta)\lim_{\Delta\theta \mapsto 0} \frac{f(\Delta\theta+0) - f(0))}{\Delta\theta}
$$

$$ = f(\theta) (\frac{df(\theta)}{d\theta}|_{\theta=0}) $$



so for $R = (\frac{d\pi(e^{i\theta})}{d\theta}|_{\theta=0})$, we have $f(\theta) = e^{R\theta} $

But given that $1 = f(1) = \pi(e^{i\theta}) = f(2\pi) = \pi(e^{i\theta 2\pi}) = e^{2\pi R}$

we conclude that $R = ik$, for $k \in \Z$.

So the irreducible representations of $U(1)$ are $\pi_k(e^{i\theta}) = e^{ik\theta}$ for $k\in \Z$.

So not only is any representation an eigendecomposable operator, but the spectrum takes values in $\Z$.


## The representations of $SU(2)$

There is exactly one irreducible representation of $SU(2)$ for each vector space $V^{(2n+1)}$ for $2n\in Z$. This can be established by a Dirac-style ladder operator argument, which we omit.

## The representations of $SO(3)$

$SO(3)$ and $SU(2)$ are not isomorphic, but $su(2)$ and $so(3)$ are. That isomorphism is given by $L_i \to \sigma_i$, since we know that $\sigma_i$ and $L_i$ are both 3D real vector spaces of operators that behave the same with respect to the commutator (i.e. the Lie bracket).

The map from $SU(2)$ to $SO(3)$ is surjective but two-to-one. An easy way to see this is to parametrize $SO(3)$ as $\theta \hat{n}$, where $\theta \in \pi$ is a rotation and $\hat{n}$ is a unit vector giving the axis of rotation. Then every point in the sphere is an element of $SO(3)$, and **antipodal points are identified**. Topologically, this means that $SO(3)$ has a non-contractible path.

Meanwhile $SU(2)$ elements live on the boundary of the 4D sphere, which is the 3D sphere, and has no non-contractible paths. So the map between them maps two separate antipodal points in $SU(2)$ to a single antipodal point in $SO(3)$. And since we know there is only one spin-1 representation of $SU(2)$, this map is it.

# Applications to physics

Representations have an immediate application in physics, since they describe how a symmetry acts on a space. This is important in classical physics (a representation of the Galilean group on spacetime preserves rest frames), relativistic physics (the representation of the Poincare group on spacetime preserves rest frames), but also in quantum mechanics, which is the relevant topic here.


As a first example, a physical statement about a quantum mechanical system like "The Hamiltonian is rotationally symmetric" translates to the mathematical statement that $[H,R]=0$ for all $R \in SO(3)$.
<!-- The groups of interest to physics are often continuous groups, like $SO(3)$.  -->

And once we have this mathematical statement, we know from the corollaries of Schur's lemma above that the eigenspaces of $H$, which of course are all important for the physics of the system, are precisely the irreducible representations of $SO(3)$, which are extremely well studied mathematically.

Physically speaking, the elements of the Lie algebra of the group correspond to generators of the symmetry, so for example $L_i$ lives in $so(3)$ and generates rotations of space. This is where angular momentum and its strange behavior comes from.

As a second example, we showed above that the representations of $S(1)$ are eigendecomposable, so energy takes integer eigenvalues in systems where the Hamiltonian has this symmetry. This is a simple case of quantization.


## Spin

It is reasonable to expect that a quantum system should not have a preferred orientation with respect to measurement. Taking this as a postulate and thinking physically, that means that for any rotation of the observation apparatus in 3D space, there should be a corresponding action on the Hilbert space of the system which cancels out the change. That is to say that there must be a representation of $SO(3)$ on the system.

We can define a representation of $\pi$ of $SU(2)$ given a representation of $\phi$ of $SO(3)$, given the map $f : SU(2) \to SO(3)$ defined above, namely by $\pi = \phi \circ f$. But recall that $f$ is not injective, so its inverse isn't a representation, and so we can't automatically get a representation of $SO(3)$ from one of $SU(2)$. *However*, we only care about a representation up to a phase change since as far as measurement is concerned, quantum states are rays, not vectors. In this case, we can invert $f$ (choosing one of the two points) and then construct $ \xi \circ f^{-1}$, where $\xi$ is a representation of $SU(2)$. $\xi \circ f^{-1}$ is a representation up to phase. In summary, we get all the representations spin(n) of $SU(2)$, for $n$ half-integer. That's the origin of spin, which is the spin 1/2 representation (up to phase) of $SO(3)$: a spin 1/2 representation *can* exist, and indeed it appears in nature.

<!-- xAn relevant example of a Lie group for physics is the collection of rotations of 3D space (this group is called SO(3) ), or the set of all inertial frame preserving transformations in classical or relativistic physics.  -->

## Spherical harmonics

There is also a representation of $SO(3)$ onto $L^2(S^2)$ (the space of functions from the circle to itself that are normalizable). This is the direct sum of all the irreducible representations. That means that we can write

$$
f(\theta, \phi) = \sum_l\sum_m \alpha^m_lY^m_l
$$

where we have decomposed an arbitrary $f \in L^2(S^2)$ into a  sum of functions on the subspaces corresponding to the irreducible representations. These are the spherical harmonics.

## Vector operators

(I have pieced the following together, and think it's roughly correct, but doesn't come directly from any notes I could find).

The adjoint representation is what we're invoking when we talk about vector operators, in the following sense. Given the Lie algebra $so(3)$, which can be regarded as the real vector space $V^3$, we get the adjoint representation of $SO(3)$ on $so(3)$ being $R^T(\delta)V_iR(\delta)$. Now since we have classified the representations of $SO(3)$, we know that this must be the spin $n$ representation for $n$ half integer. For $n=0$, $V_i$ is a scalar, for $n=1$, a vector (note the correspondence with the indexing in the Wigner Eckart theorem).

If $[L_i, V_j] = ie^{ijk}V_k$, then $R^T(\delta)V_iR(\delta) = i\delta n_j[L_j, V_i] = V_i + \delta(n \times V)^i$, for small $\delta$, which indicates this is the spin 1 representation.

# Conclusion

There's a lot more one can say in this vein, but hopefully the general point is clear. Representation theory gives a lot of clarity about where various physically real objects come from in quantum physics, as well as concepts like vector operators.
