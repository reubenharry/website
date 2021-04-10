---
title: "Linear Algebra"
date: 2020-02-26T17:07:24+01:00

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

<!-- Linear algebra is the study of a kind of abstract algebraic object called a vector space. Using similar methods to other parts of abstract algebra, you can prove a lot of things about vector spaces and functions between them. Key ideas:

				- Vector spaces are closed under *linear combination*: as such, linear combination is the idea that they exist to capture, like how sets capture elementhood, groups capture multiplication, and so on.
				- Coordinates:
				- A lot is understood about how to simplify a complicated looking linear map into simpler parts

			Applications: linear algebra is particularly distinctive among fields of abstract maths for its applicability to real-world problems
				- sets (confusingly called systems) of linear equations ($y\_1=ax\_1+bx\_2\cdot$) appear everywhere. They can be written as equations like $y=\phi x$, where $\phi$ is a linear map. Then we can apply powerful tools to solve linear systems efficiently.
				- There is a powerful intersection between calculus and linear algebra
 -->

### Vector Spaces

A vector space is a set equipped with some extra structure, namely that you can add elements together (and get new elements that are in the space), and you can multiply elements by *scalars*.  

These scalar are themselves elements of a separate kind of structured set called a field. For example, that field can be the real numbers, the complex numbers, or even the Boolean field, consisting only of $0$ and $1$.

The vectors themselves need not be what you might expect, i.e. arrows in space. For example, you can have a vector space of functions, where $\lambda(f+g)(x)=\lambda (f(x)+ g(x))$. This is a nice idea because while the functions themselves need not be linear, we can analyze them with the tools of linear algebra.

### A basis

Given a field $F$, and a vector space $V(F)$ over it, we want a set $\\{a_i\\}\_{i=1}^n$ known as a basis, such that every vector can be written in the form of a weighted sum $\sum\_{i=1}e\_ia\_i$ where each $a_i$ is a scalar in $F$. (Note that this sum refers to addition in the vector space, with is different to addition in the field.) A basis should also have the property of uniqueness: there should only ever be one way of expressing a vector in terms of a basis.

The dimension of a vector space is the size of any basis (it turns out that any basis has the same size as any other).

Once we have a basis, we can refer to vectors by the $a_i$. So an array of numbers $a$ *represents* a vector in $V(F)$, in a particular basis.

### Linear Independence

A set of vectors $\\{v\_i\\}\_{i}^n$ is linearly independent if $\sum_{i=0}^na_iv_i=0\Rightarrow \forall i:a_i=0$. This is the relevant property to ensure that there aren't two ways of expressing the same vector with this set.

### Subspaces:

A subspace is a subset of a vector space which is *closed under the operations of the vector space*, namely addition of elements and multiplication of elements with scalars. Very different from just being a subset.

For subspaces $U_1...U_n$, $U_1+...U_n$ is the least upper bound of $U_1...U_n$: i.e. it contains every $U_i$ and is the smallest subspace to do so.

For subspaces $U_1, U_2$, $dim(U_1+U_2)=dim(U_1)+dim(U_2)-dim(U_1\cap U_2)$. That is: $dim(U_1\cap U_2)$ measures the dimensional overlap of $U_1$ and $U_2$, as you'd expect. Nice.

A direct sum captures the notion of subspaces with no overlap. Indeed, $dim(U_1\cap U_2)=0$ is equivalent to $U_1+U_2$ is direct.

### Linear maps

Linear maps a functions between vector spaces which preserve structure, in the sense that $\phi(av+bu)=a\phi(v)+b\phi(u)$. In other words, they are morphisms in a category of vector spaces.

A crucially useful observation, is that by dint of their linearity, linear maps are entirely determined by their action on a basis. This is the principle which allows for the representation of a linear map as a matrix.

More precisely, if $\phi:V\to W$ is a linear map, and if $e^{(1)}$ and $e^{(2)}$ are respective bases for $V$ and $W$, then suppose $\phi(e^{1}\_i)=\sum\_kA\_{ik}e^{(2)}\_k$. In other words, you put in a basis element in $V$ into $\phi$ and you get out a weighted sum of basis elements in $W$. Here $A\_{ij}$ is the weight, and the ensuing matrix has $A_{ij}$ in the $i$-th row and $j$-th column.


### Composition of maps

Given two maps, $\phi: A\to B$ and $\psi: B\to C$, $\psi\circ\phi$ is the map obtained by composing them. We can ask what the operation of composition of linear maps corresponds to for matrices, and the answer is matrix multiplication. We have:

$$
(AB)\_{ij} = \sum\_kA\_{ik}B\_{kj}
$$

A vector $v\in V$ can itself be viewed as a linear map $\R\to V$ or $V\to\R$. The multiplication of a matrix and a vector is just a special case of matrix multiplication, so it's:

$$
(Av)\_{i} = \sum\_kA\_{ik}v\_{k}
$$

### More on index notation

It's often very handy to talk about matrices by talking about an arbitrary element $A\_{ij}$. To be clear, this is implicitly a universal quantification. For example, if I write $(IA)\_{ij}=A\_{ij}$, I mean: $\forall i\forall j: (IA)\_{ij}=A\_{ij}$.

If you think about it, the Kronecker delta $\delta\_{ij}$ corresponds to the identity matrix $I$. That is, $\forall i\forall j, I\_{ij}=\delta\_{ij}$. This plays extremely nicely with multiplication by the identity matrix, so that $(IA)\_{ij}=\sum_k\delta\_{i=k}A\_{kj}=A\_{ij}$, as you would want.

The Einstein-summation convention is to write for example $\sum\_{j} A\_{ij}B\_{jk}$ as $A\_{ij}B\_{jk}$. So, variables which appear once are bound by universal quantification, and variables which appear twice are bound by a sum.

The dot product is then $x\_ix\_i$. Also, $A_iB_j$ is the index version of $A\otimes B$, the tensor product.



Note that $A\_{ij}$ is a scalar, so for example $A\_{ij}B\_{jk} = B\_{jk}A\_{ij}$ even though $AB \neq BA$. In a nutshell, this is what makes it so useful. You can reason about individual entries in the matrix.

Note that you'll sometimes see the indices as superscripts, and in fact, there's a whole story about covariant and contravariant tensors that comes up in Riemannian geometry. But for now, I'll just abuse conventions and write all indices with subscripts.


### Cross product

The cross product in a 3-dimensional space is $(u\times v)\_i=\epsilon\_{ijk}u\_jv\_k$

Note that $(u\times v)\_iu\_i = \epsilon_{ijk}u\_jv\_ku\_i=u\_1u\_2v\_3-u\_1u\_3v\_2+u\_2u\_3v\_1-u\_2u\_1v\_3+u\_3u\_1v\_2-u\_3u\_2v\_1=0$

Also note that $(u\times u)\_i=u\_ju\_k-u\_ku\_j=0$

So the cross product of a two vectors $u\times v$ is orthogonal to $u$ and $v$, and the cross product of a vector with itself is $0$.

### Useful theorems about linear maps

Rank-nullity theorem: the kernel and range are subspaces, and further, $\dim(\ker\phi)+\dim(im~\phi)=\dim(V)$ for $\phi : V\to W$.

$v \in \ker\phi$ iff the corresponding system of homogeneous linear equations is solved by $v$ and $w\neq 0\in im~\phi$ iff the corresponding system of inhomogeneous linear equations has a non-zero solution.

A map to a smaller dimensional space is not injective and a map to a larger dimensional space is not surjective.

$\phi$ having a kernel which is the zero subspace is equivalent to $\phi$ being an injective map.

### Inverses

Finding the inverse of a linear map, or the inverse of a matrix, is often very useful. For example, suppose we have: $AX=B$, where $A$ and $B$ are known matrices, and $X$ is unknown. This sort of equation is confusingly known as a system of linear equations. Solving it is the same as multiplying both sides by $A^{-1}$ if it exists (it may not).

A bijective linear map is an isomorphism: i.e. composes with an inverse to form the identity, in both directions. This raises an important point: an arbitrary linear map $\phi$ need not have an inverse $\phi^{-1}$.

A matrix is invertible iff it sends bases to bases.

### Linear Operators

Linear operators are linear maps from a vector space to itself (endomorphisms). A lot of things can be proven about them, and certain concepts are specific to them (as opposed to linear maps in general), like determinants, eigensystems, and the characteristic polynomial.

### Eigenobjects

The eigenspace of an operator $T$ at a field element $\lambda$ is $\ker(T-\lambda I)$. So, the subspace of $V$ where for all elements $v$ in it, if you apply $T$, you get back $\lambda v$. Eigenspaces are invariant subspaces of $\phi$. A sum of eigenspaces is direct. If $V$ is the sum of eigenspaces of $\phi$, $V$ has a basis of eigenvectors of $\phi$, and for some basis, $\phi$ has a diagonal matrix. This is equivalent to saying that there is a basis in the linear operator can be expressed in a very nice and "untangled" form, as a stretching along each dimension of the space. As far as applications go, from statistics to PDEs to quantum mechanics, this is probably the single most important concept in linear algebra.

A 1D eigenspace is spanned by a single vector, which up to a multiplicative constant is referred to as an eigenvector $v$. If $\phi v = \lambda v$ for some scalar $\lambda$, then $\lambda$ is referred to as an eigenvalue.

Not all maps are diagonalizable. If $\phi : V\to V$ has dim(V) distinct eigenvalues, $\phi$ is diagonalizable.

Since eigendecomposition (change into a basis of eigenvectors) is such an important idea, the theory of how to do this, by obtaining the eigenvectors, is in turn important. This requires two new concepts, the determinant, and the characteristic polynomial.




### Determinants

The determinant is the product of all the eigenvalues of a linear map. Note that it's defined in terms of a linear map, not a matrix, so it's basis independent. Often, determinants are introduced as a property of matrices, and then it's a surprise to learn that they are preserved under a change of basis.

If the determinant is $0$, then one of the eigenvalues is $0$, so the map has a non-zero kernel.

As mentioned above, if you're working in a basis of eigenvectors of a given map $\phi$, that map is simply a stretch in each dimension. So the determinant measures the volume gained under the map. This is why it turns up in the change of variables formula (see [calculus](/maths/analysis)).

Along those lines, here's a horrible geometric way of viewing the determinant: A volume function is a multilinear alternating map $\alpha : V^n\to F$. Alternating means that $\alpha(v_1...v_n)=0$ if any $v_i=v_j$. The set of volume functions $\alpha$ of a given type forms a vector space over $F$ of dimension 1. For a non-zero volume function $\alpha$, its value is 0 iff its input is not a basis. So volume functions let us check basis-hood. The determinant of a linear operator $\phi$ is the ratio $\frac{\alpha(\phi(v_1)...\phi(v_n))}{v_1...v_n}$ for any non-zero volume function $\alpha$. Also, the determinant of a matrix $A$ is the sum of the product of each possible route from top to bottom of the matrix, choosing each column only once. These two definitions of the determinant align.

This notion of the determinant as a sum of products of elements in a matrix can be derived from the product of eigenvalues viewpoint, by changing into a particular kind of basis involving generalized eigenspaces, since the map might not be diagonalizable (see Jordan normal form).

### Characteristic Polynomial

The characteristic polynomial $p\_{\phi}$ of a linear operator $\phi : \C^n\to\C^n$:

$$
p\_{\phi}(\lambda) = \det (\phi-\lambda I) = \prod\_i^m(\lambda-\lambda\_i)^{v\_i}
$$

Here's the idea: the determinant of $(\phi-\lambda I)$ is some polynomial in $\lambda$ (a scalar), and any root of that polynomial is a value of $\lambda$ for which the determinant is $0$ and hence for which the map $\phi-\lambda I$ has a non-zero kernel, which means $\exists v: (\phi-\lambda I)v = 0 \Rightarrow \phi(v)=\lambda v$, which is precisely what it means for $v$ to be an eigenvector. So the roots of the characteristic polynomial are the eigenvalues of $\phi$. Because we're working with complex numbers, every polynomial has a root, so there's always an eigenvector.

$\lambda$ is an eigenvalue of $\phi$ iff $\det(\lambda I - \phi)=0$. This is a means to calculate every eigenvalue, since $\det(\lambda I - \phi)=0$ is a polynomial in terms of $\lambda$. Since all complex polynomials have a root, by the fundamental theorem of algebra, a complex linear map always admits an eigenvalue. Not so for real linear maps.

Worth dwelling on this: the point is that if we work in a vector space over an algebraically closed field, i.e. the complex field, then endomorphisms (i.e. operators) always have eigenvectors. This is part of the reason why quantum physics happens in complex vector spaces.

### Triangular Matrices

An upper triangular matrix (all entries at or below the diagonal are 0) represents in the standard basis an operator with the property that $Ae_j \in span(e_1...e_j)$ for all $e_j$. All complex linear operators admit a triangular matrix.

### Nilpotent operators

A nilpotent operator $\phi : V\to V$ is one where for every $v \in V$, $\exists k : \phi^k(v)=0$. A nilpotent map is not diagonalizable (except if it's zero).

All nilpotent operators have a matrix of the form of blocks $J_i$, where each $J_i$ looks like a right shift operator: left column and bottom row of zeros, and then the identity. Truly horrible proof.

### Polynomials of operators

We can take polynomials of linear operators, in the sense of maps like $\phi^3+3\phi^4+7id$. Two polynomials of $\phi$, $f(\phi)$ and $g(\phi)$ commute.

## Inner product spaces

The inner product is an abstraction of the notion of an angle, and leads to some really important types of operator (self-adjoint operators) and powerful results, in particular the spectral theorem.

The inner product  $\langle \cdot,\cdot\rangle :V(F)\times V(F)\to F$ is linear in first argument, conjugate linear in its second, conjugate symmetric, positive real for $\langle v,v\rangle$ and non-degenerate ($\langle v,v\rangle = 0$ iff $v=0$).

The dot product is one inner product. I think it's the only one, up to isomorphism, for finite vector spaces.

The norm of v $= |\langle v,v\rangle|^{\frac{1}{2}}$. The absolute value is because the output of the inner product may be complex. A norm should always be a real number. That's sort of its whole raison d'etre.



## Cauchy-Schwartz

$|\langle u,v\rangle| \leq ||u||\cdot||v||$. Can be used to prove the triangle inequality. I find this *incredibly* confusing. It's very important, and can be used to derive all sorts of things, including Heisenberg's uncertainty principle.

## Projection

An orthonormal (orthogonal and normal) basis $b_1...b_n$ has the nice intuitive property that the component of a vector $v$ along $b_i$ is $\langle v,b_i\rangle$.

The projection of $y$ onto a subspace given by the matrix $U$ of an operator is $U(U^TU)^{-1}U^T$. Note that when $U$ is invertible, $U(U^TU)^{-1}U^T = U(U^{-1}U^{-T})U^T = I$. Note also that projection is idempotent: $U(U^TU)^{-1}U^TU(U^TU)^{-1}U^T = U(U^TU)^{-1}((U^TU)(U^TU)^{-1})U^T = U(U^{-1}U^{-T})U^T$.

## Gram-Schmidt

Process which takes basis and makes it orthonormal.

If $U$ is a subspace of $V$, the set of vectors orthogonal to $U$ is a subspace $W$, and these make a direct sum to V. Thus, any vector $v$ can be decomposed into orthogonal components $u+w$, calculated easily for an orthonormal basis with the dot product. Further, $u$ is the closest vector in $U$ to $v$.



## Adjoint operators

Two operators $\phi:A\to B$ and $\phi^\*: B\to A$, are adjoint iff $\langle \phi v, u \rangle = \langle v, \phi^\* u \rangle$. (Note: I think the categorical notion of an adjunction gets its name by analogy to this, but there's no deep connection).

For a map $\phi$, the kernel of $\phi^\*$ is equal to the perpendicular subspace to $im~\phi$. Proof: suppose $v\in\ker\phi^*$. Then $\langle \phi^\*(v),u\rangle = 0 = \langle v,\phi(u)\rangle$, so $v \in \perp(im~\phi)$. Proof also runs backwards for other direction.

The eigenvalues of a self-adjoint map are real. This is because any eigenvalue must be equal to its complex conjugate, and this means it must be real.

## The conjugate transpose of a matrix

How does the notion of an adjoint map translate back into the language of matrices? It corresponds to the notion of a matrix transpose (or in the more general complex setting, a conjugate transpose.)

The conjugate transpose $A^\*$ of a matrix $A$ is defined as: $A^\*\_{ij}=\bar{A\_{ji}}$. Fixing an *orthonormal* basis B, if one map $\phi$ has a matrix M and another map $\psi$ has matrix N which is the conjugate transpose of M, then $\phi$ and $\psi$ are adjoint, i.e. $\langle \phi(v), v\rangle = \langle v, \psi(v)\rangle $.

## Spectral Theorem:

Every complex linear map which is self-adjoint has an orthonormal basis of real eigenvectors.

A key use of this is in quantum physics, where a measurable quantity is associated with a complex self-adjoint linear operator, and the results of measurement are its eigenvalues, which are real.

## Unitary operator

A unitary operator $U$ is one that preserves inner products, that is: $\langle v, u \rangle = \langle Uv, Uu \rangle$.

Unitary operators have the property that, since $\langle v, u \rangle = \langle Uv, Uu \rangle = \langle v, U^\*Uu \rangle$, $U^\*U=I$. This means that $U^{-1}=U^\*$.

### Function spaces as inner product spaces

Here's one common inner product for a space of (integrable) functions of type $\R\to\C$: $\langle f,g\rangle = \int f(x)g(x)^\*dx $

Eigenvectors of an operator in a function space are sometimes referred to as eigenfunctions.

The second derivative operator $\frac{d^2}{dt^2}$ is self-adjoint in such a space, and a generalization of the above spectral theorem gives an analogous result, namely that it has an orthonormal basis of eigenvectors (the complex exponentials).

## Cayley-Hamilton Theorem

$p_{\phi}(\phi)=0$. The characteristic polynomial with the operator itself as the argument is the $0$ matrix. This is useful both for the generalized eigendecomposition (see below), but also to invert operators. Namely:

$$p_{\phi} = aI + b\phi... = 0\Rightarrow I = \phi(K)\Rightarrow K = \phi^{-1}$$

## Singular value decomposition:

Every map $\phi:U\to W$ has a basis B of U and a basis B' of W such that the matrix of $\phi$ is diagonal with real entries, and then zero for the rest of the rectangle. Think of this as a generalization of eigenvectors outside operators. So, for any matrix $A$, there exists orthonormal U and V, and diagonal $\Sigma$ such that $A=U\Sigma V$, and therefore

$$A^TA=(U\Sigma V)^T(U\Sigma V) = (V^T\Sigma^T U^T)(U\Sigma V) $$

which by the orthogonality of U and V (inverse of orthogonal matrix is transpose), and the diagonality of $\Sigma$ (equal to transpose),

$$ = V^T\Sigma (U^{-1}U)\Sigma V = V^T\Sigma^2 V$$

The singular values are the diagonals of $\Sigma$ which are the square root of the eigenvalues of $A^TA$, which exist by the spectral theorem.

## Positive semidefinite linear operators

A quadratic form $f(x) : R^n\to R$ is of the form $x^TAx = (A^Tx)^Tx = (x^TA^Tx)^T = x^TA^Tx$. Since every linear operator decomposes into a symmetric and antisymmetric part ($A = \frac{A+A^T}{2} + \frac{A-A^T}{2}$), $x^TAx = x^T(\frac{A+A^T}{2})x$, so in general we assume $A$ symmetric. A positive semidefinite matrix is one for which $x^TAx \geq 0$ for all $x$.

A positive definite ($x^TAx>0$) matrix is full rank, since otherwise we could choose $x$ such that $Ax=0$ and therefore $x^TAx=0$.

$A^TA$ is positive definite for any matrix $A$.

Note that if the eigenvalues of an operator $\phi$ are all positive, its diagonal matrix $\Lambda\_{\phi}$ must be positive semidefinite, since the quadratic form $f(x)$ of $\Lambda\_{\phi} = \sum\_i\lambda\_ix\_i^2 > 0$.

## Tensors

A tensor is an element of a tensor product space. The tensor product $\otimes$ is the monoidal product of the category of finite dimensional vector spaces, with $\R$ as the unit. It is a reification of linear maps, such that $hom(A,B)$ is isomorphic to $A \otimes B$. Moreover, any multilinear map can be reduced to a canonical map into a tensor product space, followed by a linear map from the tensor product space.

In the category of sets, the monoidal product and the categorical product are the same, but in the category of finite dimensional vector spaces, they are not. This accounts for a lot of why quantum physics is intuitively confusing: it involves monoidal products of vector spaces, which don't have properties you'd expect from a categorical product. Things like entanglement derive from this.

## Generalized Eigendecomposition

A generalized eigenspace is set of vectors $v$ such that for *some* $k$, $(\phi - \lambda I)^kv=0$, for some eigenvalue $\lambda$. Indeed, $k$ needs to be at most dim(V) to kill $v$, so a generalized eigenspace $G(\lambda,\phi : V\to V)$ is just the kernel of $(\phi - \lambda I)^{dim(V)}$.

Recall that the characteristic polynomial $p_{\phi}(\lambda)$ of a linear operator $\phi$ is defined as:

$$
p_{\phi}(\lambda) = \prod_i^m(\lambda-\lambda_i)^{v_i}
$$

where $\lambda_i$ are the $m$ distinct eigenvalues of $\phi$ and $v_i$ their corresponding multiplicities. Then some algebra which I don't yet understand give us that

$$
ker(p_{\phi}(\lambda)) = \bigoplus_i^m ker\space (\phi-\lambda_iI)^{v_i}
$$
And the Cayley-Hamilton theorem gives that

$$
p\_{\phi}(\phi) = 0 \Rightarrow ker\space p\_{\phi}(\lambda) = \C^n
$$

So putting that together:

$$
\C^n = \bigoplus_i^m ker\space (\phi-\lambda_iI)^{v_i}
$$

This is the decomposition of $\C^n$ into a bunch of generalized eigenspaces. On each, $\phi-\lambda\_i I$ is nilpotent. Moreover, the $\lambda_i$ are the eigenvalues of $\phi$, so for example, if $\forall i: v_i=1$, then $\phi$ is diagonalizable.

## $\Lambda+N$ Decomposition

This is the decomposition of any linear operator $\phi$ into the sum of a diagonalizable operator $\Lambda$ and a nilpotent operator $N$.  (A nilpotent operator $N$ is one such that $\exists k\in\N: N^j=0$ for $j\geq k$  ).

(Note: I've chosen to make this definition in terms of linear maps rather than matrices. This seems sensible since the definitions don't depend on coordinates, but I might be missing something.)

Why does any matrix admit this decomposition? The key to seeing this is to consider the generalized eigendecomposition of $\C^n=\bigoplus_i^m ker\space (\phi-\lambda_iI)^{v_i}$ according to $\phi$.

Then we define $\Lambda$ as follows:
$$
\forall v: v \in ker (\phi-\lambda\_iI)^{v\_i}:  \Lambda v \mapsto \lambda_iv
$$
Since $\bigoplus\_i^m ker\space (\phi-\lambda\_iI)^{v\_i}$ is a direct sum, $v$ always belongs in a single generalized eigenspace, and clearly it is diagonalizable (just choose any basis).

Now consider $N=\phi-\Lambda$. It follows easily that $N\Lambda=\phi\Lambda - \Lambda^2 = \Lambda\phi - \Lambda^2 = \Lambda N$. Moreover, if we once again use the fact that any vector $v$ has to be in one of the generalized eigenspaces:
$$
Nx = \phi x - \Lambda x = (\phi - \lambda_iI) x \Rightarrow N^nx = (\phi - \lambda_iI)^nx = 0
$$
if $n$ is sufficiently large, by the very definition of the generalized eigenspace as $ker(\phi-\lambda_i)^{v_i}$.

It only remains, then, to prove uniqueness of the $\Lambda+N$ decomposition, but I'll omit that for now.

## Jordan Normal Form

A nilpotent linear operator $N$ can be represented as a block matrix with blocks of the form $\delta_{i+1=j}$.

A Jordan matrix $J(\lambda)$ takes the form $\delta\_{i+1=j}+\lambda\delta\_{i=j}$.

A matrix in Jordan Normal Form (JNF) consists of Jordan blocks $J(\lambda_i)$ for each generalized eigenvalue of the generalized eigendecomposition of the corresponding linear operator $\phi$.




## Matrix Exponentials

We now introduce a notion of a *matrix exponential* which has the same analytic property of the scalar exponential. To wit:
$$
e^{At} = I + At + \frac{1}{2}(At)^2 + ... = \sum_{i=0}^{\infty}\frac{(At)^i}{i!}
$$
With some analysis, this can be shown to converge.

By the distributivity of differentiation over addition, it's clear that $\frac{de^{At}}{dt} = A + At... = Ae^{At} $.

We also get that $e^{t(A+B)}=e^{tA}e^{tB}$ **if** $AB=BA$.

The next step is to find a way to calculate arbitrary matrix exponentials. We can do so easily if we make use of the $\Lambda+N$ decomposition.

The reason this is useful is that the matrix exponential of a diagonal matrix is simply the exponential of the diagonal elements, that is: $(e^{\Lambda})\_{ij} = \delta\_{ij}\cdot e^{\Lambda\_{ij}}$. Further, the exponential of a nilpotent matrix is only the first $k$ terms of the Taylor series defining the exponential, for $N^k=0$.

In addition, $\Lambda$ and $N$ commute. This is good, because then $e^A=e^{\Lambda}e^N$, which we can calculate easily and exactly.

Exponentiating a JNF matrix corresponds to exponentiating each block. Because taking integer powers of a nilpotent matrix is a kind of right shift operation on the matrix columns, and using the Taylor definition of the exponential, we can derive after some painful squinting, that $e^{tJ(\lambda)}\_{ij}=\sum\_{k=0}\delta\_{i-j=k}\cdot \frac{e^{\lambda t}t^k}{k!}$

## Spectral Mapping Theorem and related facts

The spectral mapping theorem is that if $\lambda_i$ is an eigenvalue of $\phi$, then $e^{\lambda_i}$ is an eigenvalue of $e^{\phi}$.

Nice corollary:

$$
\det e^{\psi}=\prod_i\lambda_i(e^{\psi})=\prod_ie^{\lambda_i(\psi)}=e^{\sum_i\lambda_i(\psi)}=e^{tr(\psi)}
$$

The middle equality follows from the spectral mapping theorem. This is a great way to think of determinants and traces, as being product-like and sum-like respectively.
