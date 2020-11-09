---
title: "Differential Forms"
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
$\newcommand{\RR}{\mathbb{R}}$
$\newcommand{\C}{\mathbb{C}}$
$\newcommand{\N}{\mathbb{N}}$
$\newcommand{\Z}{\mathbb{Z}}$

A bit sparser than some of the other notes here. Mostly based on [these notes](http://math.stanford.edu/~eliash/Public/math177/177-diff-forms.pdf), and bolstered with a bit of category theory.

### Overview

In general, we want to do calculus on spaces which are locally Euclidean, but perhaps not globally. These are (smooth) manifolds. View this is a category $\mathcal{M}$, with manifolds as the objects and diffeomorphisms as the morphisms.

Riemann integrals have this $dx$ in them, which is basically "syntactic sugar" (as a programmer might say) to indicate what the variable of integration is. The calculus of differential forms actually treats the $dx$ or in a 2D case $dx\wedge dy$ as a real object (in fact, an asymmetric multilinear map). Doing this right takes some setup, but results in a very clean and more importantly, coordinate independent, notion of integration on manifolds.

After developing the groundwork, one thing that can be expressed very nicely in the language of differential forms is (the generalized) Stokes' theorem, which subsumes many important theorems of the flavour: the volume of a blob is related to the volume of its boundary. For that reason, this bit of maths feels a lot like computer science, where if you set up your framework carefully, you get a lot of generality for free.

### Antisymmetric multilinear maps

Antisymmetric multilinear maps ($k$-forms) turn out to be the right objects to capture a notion of volume - they are closely related to the determinant. Note that a $k$-form is $k$-multilinear, but operates on a vector space of dimension some $n$.


Further, there are various algebraic operations, like the hodge star and contraction, which operate on spaces of antisymmetric multilinear maps in important ways. The most important is the *exterior product* $\wedge$, which take an $n$-form and an $m$-form, takes their tensor product, and antisymmetrizes it (there's a canonical way to do this), to produce a $(n+m)$-form.


A top form is an $n$-form on $\RR^n$. It is 1D, and spanned by $x_1\wedge\ldots\wedge x_n$.

$k$-forms on $\RR^n$ themselves form a vector space, and have a basis formed of the wedge products of the 1-forms on that space, so that for any $k$-form $\omega$:

$$\sum\_{1\leq i\_1 \lt ...\lt i\_k \leq n} A\_{i\_1,\ldots,i\_k}(y)dy\_{i\_1}\wedge\ldots\wedge dy\_{i\_k}$$

This means that we are summing over all permutations of $(1...k)$ which satisfy the constraint of increasing order.

$\wedge$ has the property that $x\wedge x = 0$, which turns out to be enormously useful in calculations.

### Differential k-forms

A differential $k$-form on $\RR^n$, $\alpha \in \Omega^{k}(\RR^n)$, has type: $\RR^n \to \Lambda^k(\RR^n)$, where $\Lambda^k(V)$ is the vector space of antisymmetric multilinear maps (*non*-differential $k$-forms) on $V$. We can generalize this slightly, so that a differential $k$-form, instead of living on $\RR^n$, lives on an $n$-dim manifold.

Consequently, we can express any differential $k$-form as a sum over non-differential $k$-forms, each multiplied by some function.

As a simple example, take: $\omega\_0 = \frac{x dy-ydx}{x^2+y^2}$

This is a 1-form on $\RR/{0\}$, i.e. on the punctured plane.

### Pullbacks

Having a morphism $f$ between manifolds $M\to N$ gives us a natural definition of a morphism $f^{\*}: \Omega^{k}(N) \to \Omega^{k}(M)$. Concretely:

$$ f^{\*}\omega(H\_1,\ldots,H\_k) = \omega(df(H\_1),\ldots,df(H\_k)) $$

Suppose

$$\omega = \sum\_{1\leq i\_1 \lt ...\lt i\_p \leq n} A\_{i\_1,\ldots,i\_p}(y)dy\_{i\_1}\wedge\ldots\wedge dy\_{i\_p}$$

Then

$$f^{\*}\omega = \sum\_{1\leq i\_1 \lt ...\lt i\_p \leq n} A\_{i\_1,\ldots,i\_p}(f(x))df\_{i\_1}\wedge\ldots\wedge df\_{i\_p}$$

This is an *extremely* useful formula when actually calculating anything. For instance, take a $1$-form $\alpha$ on $[a,b]$, which necessarily is of the form $f(x)dx$. Then for any $\phi : [c,d]\to[a,b]$, $\phi^{\*}\alpha = f(\phi(y))\phi'(y)dy$. As shown below, this means that integrals are pullback invariant (by using the substitution formula).

Here is another very important example, the pullback of $\omega\_0$ above along $f(r,\theta)=(r\cos\theta, r\sin\theta)$:

$$f^*\omega\_0 = \frac{r\cos\theta(\sin\theta dr+r\cos\theta d\theta) - r\sin\theta(\cos\theta dr-r\sin\theta d\theta)}{r^2} $$

$$= r\frac{r\cos\theta\cos\theta d\theta+r\sin\theta\sin\theta d\theta}{r^2} = d\theta$$


### Vector fields

Any vector field $v: V\to V$ is naturally associated with a first order differential operator:

$$ D\_v(f) = \lambda x \to df\_x(v) $$

For the vector field $v\_i$ which simply translates $V$ so that the origin is sent to some point $x\_i$, for $x\_i$ a (dual) basis vector, $D\_{v\_i}(f) = \frac{\partial f}{\partial x\_i}$. A lot is hidden in the clever choice of notation here.

In fact, we can write any vector field $v$ in terms of a "basis" of partial derivatives:

$$ \sum_{i=1}^na_i\frac{\partial}{\partial x\_i} $$

where $a\_i$ is a *function* corresponding to $x\_i \circ v$.

### Total derivative

Take $f : U \subset V \to W$. Then $df : V \to V\_x \to W\_{f(x)}R$, where $V\_k$ is a copy of $V$ and the second arrow indicates a linear map.

By the chain rule:

$$df = \sum_{i=1}^n \frac{\partial f}{\partial x_i}dx\_i $$

### Exterior derivative

The exterior derivative is a generalization of the derivative to differential forms. But actually it's better to think of it as a family of operators, and in particular as a natural transformation. First, the definition, for $\omega = \sum\_{i\_1\lt \ldots \lt i\_k}a\_{i\_1\ldots i\_k} dx\_{i\_1}\wedge\ldots \wedge dx\_{i\_k}$

$$ d\omega = \sum\_{i\_1\lt \ldots \lt i\_k}da\_{i\_1\ldots i\_k}\wedge dx\_{i\_1}\wedge\ldots \wedge dx\_{i\_k} $$

Consider a category where objects are differential forms on a manifold M, and morphisms are *pullbacks*.

Consider a functor $F^k : \mathcal{M} \to \Omega^k(\mathcal{M})$, where $M$ is some category of differentiable manifolds (morphisms are differentiable) and $\Omega^k(M)$ is the category with differential forms as objects and pullbacks as morphisms.

The exterior derivative is a natural transformation $F^{n}\to F^{n+1}$ (no proof given here, just stated as a fact). Spelling this out, it is a family of morphisms, each taking a $k$-form on some manifold $M$ to a $k+1$-form on $M$, which commutes with the pullback. Each morphism in the natural transformation corresponds to the standard notion of the derivative, and being a morphism in a category of vector spaces, is a linear map.

This means (just by definition of natural transformation) that $d(\phi^{\*}\alpha) = \phi^{\*}d\alpha$.

The exterior derivative obeys versions of the product and chain rules as you'd expect. It also has the crucial property that $dd\alpha=0$. Similarly the boundary operator $\partial$ has the property that $\partial\partial m=\\{\\}$.

### Integration of forms

We define the integral of a differential 1-form on an interval $\overrightarrow{[a,b]}$ (the arrow denotes the *orientation* of the path) in terms of a Riemann integral (on the right below):

$$ \int_{[a,b]}\alpha = \int_a^b\alpha $$

We define the integral of a differential 1-form on a path (which is on $[a,b]$) as:

$$\int_{\gamma}\alpha = \int_a^b\gamma^{\*}\alpha $$

### Invariance of integral under pullback

The integrals in the following are Riemann integrals, and the statement in the standard change of variables formula:

$$ \int\_{[a,b]} f = \int\_{\phi^{-1}([a,b])} (f\circ \phi)|\phi'| $$

Suppose $\phi$ is orientation preserving, then (and with differential form integrals in the middle expressions):

$$ \int\_{[a,b]} \alpha = \int\_{[a,b]} f = \int\_{\phi^{-1}([a,b])} (f\circ \phi)|\phi'| = \int\_{[c,d]}\phi^{\*}\alpha $$

Both the integral of differential $n$-forms, and the invariance of the pullback extend for $n\gt 1$.

Example:

$\omega\_0 = \frac{x dy-ydx}{x^2+y^2}$

We have already calculated its pullback along polar coordinates, so for $\gamma(t)=(\cos(t),\sin(t))$:

$$ \int\_{\gamma}\omega\_0 = \int\_0^{2\pi}\gamma^{\*}\omega\_0 = \int\_0^{2\pi} dt = 2\pi $$


### Closed and exact forms

If $d\alpha=0$, we say that $\alpha$ is closed. If $\alpha=d\beta$, we say that $\beta$ is exact. Think of closed forms as the kernel of $d$, and exact forms as the image of $d$ (note: actually $d$ is two different morphisms here, one into and one out of the relevant space).

By the fact that $d^2=0$ (see above), we know that any exact form is closed. The converse holds true on star shaped domains (domains where a point can be chosen such that every other point can be reached by a straight line). The [proof](http://math.stanford.edu/~eliash/Public/math177/177-diff-forms.pdf) (p118) is very nice and used a lot of elementary results

Exact forms are path-independent:

$$ \int\_{\gamma}df = \int\_{[a,b]} \gamma^{\*}df = \int\_{[a,b]} d(\gamma^{\*}f) = \int\_{[a,b]} d(f\circ\gamma) = f(\gamma(b))-f(\gamma(a))$$

The above is a simple version of Stokes' theorem, which is really just a generalization of the fundamental theorem of calculus.

An obvious consequence of the above is that integrals of exact forms over loops are $0$. This isn't in contradiction to the result that $\int\_{\gamma}\omega\_0=2\pi$ since $\omega\_0$ is not exact on this domain.

### Stokes' theorem

There is a nice theorem called Stokes' theorem, which says: $\int_{\partial A} \omega = \int_A d\omega$. Note that this expresses a sort of adjoint relationship between the boundary operator on manifolds and the exterior derivative on differential forms, which we might have guessed are related in light of the similar property described in the previous paragraph. Can be made precise, I think, but don't know details.

### Special cases of Stokes' theorem

Stokes' theorem is very general, and a number of common formulae turn out to just be special cases. The divergence theorem is one example, another is Green's theorem. The setting of Green's theorem is a bounded domain $B$ in $\RR^2$, with boundary $\Gamma$. Consider some $1$-form on the domain which must take the form $P_1dx_1+P_2dx_2$. Then, by Stokes' theorem:

$$\int\_B \left(\frac{\partial P\_2}{\partial x\_1} - \frac{\partial P\_1}{\partial x\_2} \right) = \int\_{\Gamma}P\_1dx\_1+P\_2dx_2$$

Very useful in science and engineering, since this lets you calculate an area integral by integrating around its boundary. Similarly the divergence theorem, but in 3D.

In fact, the fundamental theorem of calculus is itself a special case, where the domain is an interval, and the boundary is the two end points.

### Borsuk's theorem

For $D^2$ the 2D unit disk, suppose we have $f: D^2 \to \partial D^2$ with $x\in\partial D^2 \Rightarrow f(x)=x$. This is impossible. Proceeding by contradiction, first note that for $\omega\_0=\frac{x dy-ydx}{x^2+y^2}$:

$$ d\omega\_0 = 0$$

(by calculation above) so that $df^{\*}\omega\_0=f^{\*}d\omega\_0=0$, which means that $f^{\*}\omega\_0$ is closed, and since it is on a star-shaped domain, also exact. This, in turn, means that

$$ \oint\_{\partial D^2} f^{\*}\omega\_0 = 0 $$

Since it's the integral of an exact form on a loop, and therefore $0$.

But since integrals are invariant under pullbacks, this would mean that

$$ \oint\_{\partial D^2} \omega\_0 = 0 $$

in contradiction to

$$ \oint\_{\partial D^2} \omega\_0 = 2\pi $$

which is shown above.

### Brouwer's fixed point theorem

Suppose we had a function $f: D^2\to D^2$ with no fixed point. Then for any $x$, we could define $F(x)$ as the point on the boundary reached by continuing a straight line from $x$ through $f(x)$ until the boundary. But $F$ would then violate Borsuk's theorem. Contradiction.


### de Rham theorem

Consider a 1-form $\omega$ on the punctured plane. The de Rham theorem says that $\omega=\lambda\frac{x dy-ydx}{x^2+y^2}+df$

Consider $H^1(R^2/\{0\})$, the first de Rham cohomology group, defined as the space of closed forms on the punctured plane quotiented by their image. That is, two forms are equivalent in $H^1$ if their image is the same.

A consequence of de Rham theorem is that $H^1$ is 1D. To see this, choose $\omega\in ker d$ so that by de Rham, we have $\omega=\lambda\frac{x dy-ydx}{x^2+y^2}+df$. Then $df = \omega-\lambda\frac{x dy-ydx}{x^2+y^2}$, which means $\omega-\lambda\frac{x dy-ydx}{x^2+y^2}\in im~d$.

But that means that $[\omega]$, i.e. the equivalence class of $\omega$, which is an element of $H^1$, is in the span of $\frac{x dy-ydx}{x^2+y^2}$.
