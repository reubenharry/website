---
title: "Calculus"
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

## Overview

The core intution of calculus is that given a "nice" (analytic) function $f$, if I know it's value at some input $x$, namely I know $y$ for $y := f(x)$, then I often want to know its value at $f(x+\Delta)$, where $\Delta$ is some very small number. If $f$ were linear, this would be easy, because adding $\Delta$ commutes with $f$ in that case, but for a general $f$, where we have no such commutativity, we can still say something, namely:

$$ f(x+\Delta) = f(x)+\Delta f'(x)+\frac{\Delta^2}{2}f''(x)... $$

This is the Taylor series, and the second term is the linear approximation of $f$ at $x$. The smaller $\Delta$ is, the less the terms beyond the second one matter, which is to say that for small perturbations of the input, a locally linear approximation of $f$ suffices for the correction term.

<!-- Parenthetically, I really like the following way of putting things. It requires viewing $\frac{d}{dx}$ as a linear operator on function spaces, and exponentials of operators by their Taylor series:

$$ (e^{x_0\frac{d}{dx}}\phi)(x) = \phi(x+x_0) $$

Or, even more abstractly:

$$ e^{x_0\frac{d}{dx}} = T_{x_0} $$ -->



## Analysis

Analysis is the careful building up of the concepts needed to talk about infinitesimal change. Not always a requisite for actually using calculus.

### Sequence

A function $S : \N\to B$ for some set $B$ such as $\R$ or $\C^n$

### Series

A sequence T of the form $T(n) = \sum_i^nS(i)$. Intuitively: the $n$th term of $T$ is the sum of the first $n$ terms of $S$.

### Cauchy Sequences, Convergent Sequences, and Completeness

A sequence $S$ is *Cauchy* if $\forall \epsilon>0:\exists k: \forall n,m > k: d(S(n),S(m))<\epsilon $

A sequence $S$ converges to a point $p$ if $\forall\epsilon>0:\exists k: \forall n>k: d(p,S(n))<\epsilon$

A space is complete if all Cauchy sequences converge. Note: the reals, for example, are complete. The spaces in question can be more abstract - for example, the space of all Lebesgue integrable functions is complete. Here, we need a metric on functions.

### Continuity:

Continuous function $f: A\to B$ at a point $x\in A$ is defined by:

$$\forall \epsilon >0: \exists \delta>0: \forall y\in A: (d(x,y)<\delta)\to (d(f(x),f(y))<\epsilon)$$

**Equivalently**: a function $f$ is continuous at a point $x$ if $\lim_{y\to x}f(y)$ exists.

Uniformly continuous function is defined as follows and is different from being continuous at every point:

$$\forall \epsilon >0: \exists \delta>0: \forall x,y\in A: (d(x,y)<\delta)\to (d(f(x),f(y))<\epsilon)$$

### Integrals

An integral is like a continuous analog of a sum, where the summands (the things you sum together) are infinitesimally small and infinitely many. You integrate over a volume (in 1 dimension an interval of the real line, in 2, an area in $\R^2$, etc).

The Riemann integral is one definition of integration (which coincides with the more general Lebesgue integration where both are defined). Take a function $f:\R\to\R$ and consider an interval $[a,b]\subset\R$. Goal of integral is to find the area under the curve produced by $f$. Consider any partition of $[a,b]$, i.e. a splitting up of $[a,b]$ into consecutive sub-intervals $P_i$. You can define a piecewise constant function, $g_P$, such that if $x\in P_i$, $g_P(x)=\inf_{y\in P_i}f(y)$, i.e. the lower bound of points in this stretch of $[a,b]$. It's easy to calculate the area under $g$, because it's piecewise constant. Then you can try to find the partition $P$ such that $g_P$ has the largest area under the curve. The upper bound on how well you can do is $L(f)=\sup_P \int_{[a,b]}g_P$. Note that this will result in your making your partition arbitrarily fine. Conversely we can dualize and consider $U(f)=\inf_P \int_{[a,b]}h_P$, where $h_P(x)=\sup_{y\in P_i}f(y)$. If $U(f)$ and $L(f)$ coincide, we say that $f$ is Riemann integrable on $[a,b]$.

Note that $L(f)\leq U(f)$, so showing the opposite inequality establishes equality and thus integrability.

All continuous functions are Riemann integrable.

Integration is a linear operator.

### Lipschitz Functions

Uniformly Lipschitz:

$\exists k > 0 : \forall x\forall y : d(f(x),f(y)) \leq k\cdot d(x,y) $

This implies continuity.

Locally Lipschitz function is uniformly Lipschitz but for a compact set. That is, first choose any compact set $K$, and then have that $x$ and $y$ from above are in $K$.

A continuously differentiable function $f$ is locally Lipschitz. To prove this, we want to show that around any point $p$, there's a (compact) neighborhood in which $f:U\to\R^n$ is uniformly Lipschitz.

Strategy: we'll make use of the fact that $Df$ at any point $x\in S$ for $S\subset U$  a ball around $p$ is bounded, i.e. $\sup_{x\in S}||D_xf(x)||_{op} = \sup_{x\in S}sup_{h\neq 0} \frac{D_xf(x)(h)}{|h|} \leq K$. For this last inequality, we're using the fact that continuous functions on compact sets are bounded and that $Df$ is continuous (by assumption). Then we'll define a function that interpolates between two points in $S$, $x$ and $y$, i.e. $z(t) = x + t(y-x)$. Note how $z(0)=x$ and $z(1)=y$. Finally note that a ball is convex, so $\forall t: z(t)\in S$.

Here's the calculation that yields the result:

$$||f(y) - f(x)|| = ||\int_0^1 \frac{d}{ds}f(z(s))ds|| = |\int_0^1 Df_{z_s}(z(s))(y-x)| \leq \int_0^1 ||Df_{z_s}(z(s))||_{op}\cdot |(y-x)| \leq K|y-x|$$

First step uses fundamental theorem of calculus, second uses chain rule, third uses that absolute value of integral is less than integral of absolute value, and penultimate step uses the fact that the operator norm has the property that $||Av|| \leq ||A||_{op}||v||$.

### Contraction Mapping Principle

One of a class of fix point theorems. It states that if a function $f:D\to D$ is a contraction on a metric space $D$, in the sense that for some $0 < q < 1$:
$$
d(f(x)-f(y)) \leq q\cdot d(x,y)
$$
then $f$ has a fix point, i.e. $\exists x: f(x)=x$. **Note**: the use of $q$ is crucial. This is **not** equivalent to the property
$$
d(f(x)-f(y)) < d(x,y)
$$
because then the contraction could be arbitrarily small.

The proof is nice and constructive. We simply consider the sequence $x_n=f(x_{n-1})$, with $x_0$ chosen arbitrarily. $\lim_{n\to\infty}x_n$ must be a fix point if it exists, it exists if the sequence converges, and the sequence converges if it is Cauchy.

### Arzela-Ascoli:

Good example of fiddly analysis result.

**Statement**: every equicontinuous, sequence of uniformly bounded functions $f: J\to R^n$, for $J$ compact, converges uniformly.

**Proof**: Let $A$ be a countable dense subset of $J$, enumerable as $t_1\cdots t_n\cdots$. Then by Bolzano-Weierstrass, we can find a subsequence $x_{k_(l,1)}(t_1)$ (varying $l$). Similarly, we can find a subsequence of \emph{that} sequence, $x_{k_(l,2)}(t_1)$. Diagonalizing, $x_{k_{(l,l)}}$ must converge for every $t$.

Now we want to show that $x_{k_{(l,l)}}$ converges uniformly for $J$. To do so, we are going to first consider a finite set of points in $A$, which are contained in open intervals whose union contains $J$. We can do this because $J$ is compact.

Since $E$ is finite, and $x_{k_{l,l}}$ at any $s\in E$ is convergent hence Cauchy, we can pick $l,l'$ st. $max_{s\in E} |x_{k_{(l,l)}}(s)-x_{k_{(l',l')}}(s)| < \epsilon$.

Then, for any $y\in J$, $|x_{k_{(l,l)}}(y)-x_{k_{(l',l')}}(y)| \leq |x_{k_{(l,l)}}(y)-x_{k_{(l,l)}}(s)| + |x_{k_{(l,l)}}(s)-x_{k_{(l',l')}}(s)| + |x_{k_{(l',l')}}(s)-x_{k_{(l',l')}}(y)|$. This shrinks as small as we want, by equicontinuity for the first and last terms on the right of the inequality and the above for the middle.



## Calculus

Calculus is the tool used to understand continuous change. Since the world is full of things which are either continuous, or approximately continuous, it is pretty much the central tool of applied maths.


### Little o-notation

The statement $f(x)=o(g(x))$ is a shorthand for: $\lim_{x\to\infty}\frac{f(x)}{g(x)}=0$. This is very handy notation for discussing derivatives.

For example, consider $f(x)=x^2$, and

$$\frac{d}{dx}f(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}=\lim_{h\to0}\frac{(x+h)^2-x^2}{h}=\lim_{h\to0}\frac{2xh+h^2}{h}$$

$$=\lim_{h\to0}\frac{2xh}{h}+\lim_{h\to0}\frac{h^2}{h}=\lim_{h\to0}2x+\lim_{h\to0}h = 2x+0=2x$$

Note that $h^2$ in the numerator was not a linear function of $h$, in particular, using little-o notation, we can say that $h^2$ is $o(h^n)$ for $n>2$, and as such drops out.

This pattern crops up all the time, where to find the derivative of a function, you can drop all terms that are $o(h^n)$ for $n>2$. In particular, it's used in the context of Taylor series expansions, e.g. you could write: $e^x=1+x+o(x^2)$.


### Taylor Series

A power series representation of $f(x)$ takes the form  $\sum_{i=0}^{\inf} c_i(x-a)^i$. What's cool is that if such a series exists for an infinitely differentiable function $f$, we can recover the "basis coefficients" $c_i$ by noting that: (1) $f(a) = c_0$ and (2) that $f'(x) = \sum_{i=1}^{\inf} ic_i(x-a)^{i-1}$, so that $c_1 = f'(x)/1$. Continuing in this vein with $n$th derivatives, we find that $c_i = \frac{d^{(i)f(x)}}{dx^{(i)}}(a)\frac{1}{i!}$. Substituting in these values for $c_i$ into the series gives us the Taylor series.

$$
T : (\R\to\R)\to\R\to\R\to(\R\to\R) \\
T(f)(t_0)(t) = \sum_{i=0}^{\infty}\frac{f^{(i)(t_0)}}{i!}(t-t_0)^i
$$
The intuition is that for a point $x$, we're approximating $f$ locally by a sum (which when infinite may converge to a perfect approximation) of the derivatives of $f$ around that point. This makes sense: the derivatives give you local context: first derivative is what the function is doing nearby, second derivative is what the first derivative is doing nearby, etc.

**Example**

Write $f(x+a)=f(x)+af'(x)+\frac{a^2}{2}f''(x)...$. Then note that to find the second derivative, we can write:

$$f(x+a)+f(x-a)\approx f(x)+af'(x)+\frac{a^2}{2}f''(x)+f(x)-af'(x)+\frac{a^2}{2}f''(x)$$
$$=2f(x)+a^2f''(x) \Rightarrow f''(x)\approx\frac{f(x+a)+f(x-a)-2f(x)}{a^2}$$

Here the approximation becomes increasingly precise in small $a$, i.e. the error is $o(a^2)$.

A natural extension to $\C$, $\R^n$ and $\C^n$ exists. The Taylor series up to term $n$ is the $n$th order approximation of $f$, which is a polynomial. Write it as $T_n(f)(t_0)$.

It is often useful to ask about the *remainder* $R_n(f)(t_0)=T_n(f)(t_0)$.

Taylor's theorem states that $R_n(f)(t_0)(t)=o(|t-t_0|^n)$ as $t_0\to t$. In other words, for $t_0$ sufficiently close to $t$, the error is dominated by a polynomial of order $n$.

We can also give explicit formulas for the remainder, such as the integral form:
$$
R_n(f)(t_0)(t)=\int_{t_0}^t\frac{f^{(n+1)}(s)}{(n+1)!}(t-s)^{n+1}ds
$$
From which the mean value theorem gives us that:
$$
\exists t': R_n(f)(t_0)(t) = \frac{f^{(n+1)(t')}}{(n+1)!}(t-t_0)^{n+1}
$$
Here $t'$ is known to exist by the mean value theorem.


### Fundamental Theorem of Calculus and Leibniz' Rule

$$f(x)=\frac{d}{dx}\int_a^xf(s)ds$$

In other words, the integral, as a way of measuring volume, is the inverse of the derivative.

Now suppose that we want to take the derivative of an integral with respect to a variable inside the integrand. For example, suppose $\phi(y)=\int_a^bf(s,y)ds$. Then $\frac{d}{dy}\phi(x,y)=\frac{d}{dy}\int_a^bf(s,y)ds=\int_a^b\frac{d}{dy}f(s,y)ds$.

But now suppose that $a$ and $b$ are functions of $y$. Then, using the multivariable chain rule, with $\phi(y,a(y),b(y))=\int_{a(y)}^{b(y)}f(s,y)ds$, we have that $\frac{d}{dy}\phi(y,a(y),b(y))=\frac{\partial \phi(y,a(y),b(y))}{\partial y}+\frac{\partial \phi(y,a(y),b(y))}{\partial a(y)}\frac{da(y)}{dy}+\frac{\partial \phi(y,a(y),b(y))}{\partial b(y)}\frac{db(y)}{dy}$.

Using the fundamental theorem of calculus, as above, and flipped one of the integrals, we get  $\frac{d}{dy}\phi(y,a(y),b(y))=\int_{a(y)}^{b(y)}\frac{\partial}{\partial y}f(s,y)ds-f(a(y),y)a'(y)+f(b(y),y)b'(y)$. This is Leibniz' rule.

### Some examples of integrals

$$ \int \frac{1}{\sqrt{x^2-a^2}}dx$$

First note that $d(a\cosh y)=a\sinh y dy$ and that $\cosh^2 y-1=\sinh^2 y$. Then make the substitution in the integrand: $x=a\cosh y$. Simplifying:

$$ \frac{1}{\sqrt{x^2-a^2}}dx = \frac{a\sinh y dy}{\sqrt{a^2\cosh^2 y-a^2}}$$

$$ = \frac{a\sinh y dy}{a\sqrt{\cosh^2 y-1}} = \frac{a\sinh y dy}{a\sqrt{\sinh^2 y}}  $$

$$ = dy \Rightarrow \int \frac{1}{\sqrt{x^2-a^2}}dx = \int dy $$


## Multivariate Calculus

These are results at the intersection of linear algebra and calculus.

One of the really important ideas is that the differential $(Df)(x)$ of a function $f$ $\R^n\to\R^n$ is *a linear map*. This is one of the reasons why linear algebra is so important.

The derivative of $f:\R^n\to\R^n$ at a point $p$ is the limiting linear approximation of $f$  given by the line between $p$ and $q$ as $q$ nears $p$. In the general multivariate case, the differential $Df:\R^n\to L(\R^n\to\R^n)$, if it exists, is a linear map characterized by:
$$
\lim_{x\to a}\frac{||f(x)-f(a)-Df(a)(x-a)||}{||x-a||} = 0
$$
or equivalently
$$
\lim_{x_0\to 0}\frac{||f(a+x_0)-f(a)-Df(a)(x_0)||}{||x_0||} = 0
$$
So basically the idea is: the total derivative $Df(a)$ is the limiting linearization of $f$ around $a$.

The following is also true (using index notation):

$$ Df(x)_{ij} = \frac{\partial f(x)_i}{\partial x_j}$$

## Chain rule


$$D_x(f(g(x)))_{ij} = \sum_k \frac{\partial f(g(x))_i}{\partial g(x)_k}\frac{\partial g(x)_k}{\partial x_k} $$

Or without index notation:

$$D : (\R^n\to\R^n)\to\R^n\to L(\R^n\to\R^n)$$
$$D(f\circ g)(x)=[(Df)(g(x)][(Dg)(x)]$$

## Gradient $\nabla$ and Hessian $H$

$$ \nabla_x{f(x)}_i = \dfrac{df(x)}{dx_i}$$

$$ H_xf(x)_{ij} = \dfrac{df(x)}{dx_idx_j}$$

## Examples:

$$ (D_x Ax)_{ij} = \frac{d(Ax)_{i}}{dx_j} = \frac{dA_{ik}x_k}{dx_j} = A_{ij} $$

$$ (D_Ax^TAx)_{ij} = \frac{dxAx}{A_{ij}} = \frac{dx_aA_{ab}x_b}{A_{ij}} = x_ix_j \Rightarrow D_Ax^TAx = xx^T $$

$$ \nabla_x{f(Ax)} = A^T\nabla_{Ax}(f(Ax))$$
$$ \nabla_{A^{-1}x}f(x) = \nabla_k{f(Ak)} = A^T\nabla_{Ak}f(Ak) = A^T\nabla_{x}f(x)$$

$$ H_xf(Ax) = A^T(H_xf(Ax))A $$
$$ H_{A^{-1}x}f(x) = H_{k}f(Ak) = A^TH_{Ak}f(Ak)A = A^TH_xf(x)A $$

### Change of variables

OK, the idea is that instead of integrating $f$ with respect to its input $x$ (i.e. calculating $\int_Af(x)dx$), we can view $x$ as a function of $u$ (i.e. $x=g(u)$) and then pull back to an integral over $u$ (i.e. $\int_{g^{-1}(A)}f(g(u))du$). But this is a differently valued integral. So this new integral requires a term to offset the change, which rather nicely happens to be $|Det(D_ug(u))|$. Intuition is that we account for the change in area of the differential (as it approaches the limit). The absolute value is because the sign of the determinant only measures the order of the dimensions and we don't care about this here. The equation looks as follows:

$$\int_{g(A)} (f\circ g)(x)dg(x) = \int_{A} (f\circ g)(x)\cdot |Dg(x)|dx $$ where $Dg(x)$ is the determinant of the matrix of partial derivatives of $g(x)$ wrt. $x$.

### Arguments with differentials

It's often very handy to reason in terms of small elements, which you then take to $0$ in the limit. For example, suppose $y(x)$ is the height of a curve. Then consider a section of width $\Delta x$ which starts at a point $x$, and note that its length is $((\Delta x)^2+(y(x+\Delta x)-y(x))^2)^{\frac{1}{2}}$. Dividing by $\Delta x$, we obtain:

$$ \frac{((\Delta x)^2+(y(x+\Delta x)-y(x))^2)^{\frac{1}{2}}}{\Delta x} =((\Delta x)^2+(y(x+\Delta x)-y(x))^2)^{\frac{1}{2}}((\Delta x)^{-2})^{\frac{1}{2}}=(\frac{(\Delta x)^2}{(\Delta x)^2}+(\frac{y(x+\Delta x)-y(x)}{\Delta x})^2)^{\frac{1}{2}}$$

Because limits can go inside continuous functions, we can say that:

$$\lim_{\Delta x\to 0} (\frac{(\Delta x)^2}{(\Delta x)^2}+(\frac{y(x+\Delta x)-y(x)}{\Delta x})^2)^{\frac{1}{2}}=(1+(\lim_{\Delta x\to 0}\frac{y(x+\Delta x)-y(x)}{\Delta x})^2)^{\frac{1}{2}}=(1+(\frac{dy}{dx})^2)^{\frac{1}{2}}$$


### Derivative of the determinant

$$
D\det(A)(I) = \lim_{h\to0}\frac{\det(I+hA)-\det(I)}{h} = \lim_{h\to0}\frac{(\prod_i(1+h\lambda_i))-1}{h}$$

$$ = \lim_{h\to0}\frac{(1+h\sum_i\lambda_i + o(h^3))-1}{h}=\sum_i\lambda_i=tr(A)$$

### Existence and Differentiability of the Matrix Exponential

$e^{t\psi}=\sum_{i=0}^{\infty}\frac{t^i\psi^i}{i!}$. The series is Cauchy, since $||\sum_{i=0}^{m+1}\frac{t^i\psi^i}{i!}-\sum_{i=0}^{m}\frac{t^i\psi^i}{i!}||=||\frac{t^{m+1}\psi^{m+1}}{(m+1)!}\leq \frac{t^{m+1}}{(m+1)!}||\psi||^{m+1}$, which is dominated by the factorial term. Thus the sequence converges (the space of linear operators being complete).

Differentiability of $f(t)= e^{t\psi}$:

$\frac{d}{dt}f(t)=\lim_{h\to0}\frac{1}{h}(e^{(t+h)\psi}-e^{t\psi})=\lim_{h\to0}(e^{h\psi}+I)e^{t\psi}$

So all that it needed is to show that $\lim_{h\to0}(e^{h\psi}+I)=\psi$.
$$
e^{t\psi}=\sum_{i=0}^{\infty}\frac{t^i\psi^i}{i!}=I+t\sum_{i=1}^{\infty}\frac{t^{i-1}\psi^i}{i!}\Rightarrow \frac{1}{t}(e^{t\psi}-I)=\sum_{i=1}^{\infty}\frac{t^{i-1}\psi^i}{i!}
$$
We can then rather cleverly observe that the this final sum goes to $\psi$ as we take $t$ to $0$, because the term of the sum with $i=0$ is $\frac{0^0\psi}{0!}=\psi$.

### Vector fields

These are functions $\R^n\to\R^n$. Divergence, gradient, and curl are generally used in the case $n=3$, which comes up a lot in applications. Some facts:

$$ \nabla \times e^{-ik\cdot x} = -ik \times e^{-ik\cdot x} $$

$$ \nabla \cdot e^{-ik\cdot x} = -ik \cdot e^{-ik\cdot x} $$

This gives rise to a Fourier transform relationship between curl and cross product, and between divergence and dot product.

Also (and see the section on div, grad and curl in [these notes](/maths/differentialforms) for why):

$$ \nabla \cdot (\nabla \times F) = \nabla \times (\nabla f) = 0 $$

## Functional derivatives

Particularly in physics, the word *functional* is used to mean a function of type $(\R^n \to \R^n) \to \R$. Why they need a special word for this (or square brackets for its arguments) is unclear. At any rate, one can define derivatives of functionals as:

$$
\langle \frac{\partial F(f)}{f}, g \rangle = \int \frac{\partial F{f}}{\partial f}(x)g(x) = \lim_{\epsilon \to 0}\frac{F(f+\epsilon g) - F(f)}{\epsilon}
$$

To see that the types make sense, view $f$ as an infinite dimensional vector; as in the finite case, for $F : \R^n \to R$, we have $\frac{\partial F(f)}{f} : \R^n$. So for $n=\infty$, $\frac{\partial F(f)}{f}$ is itself a function.

Note that we characterize $\frac{\partial F(f)}{f}$ by its inner product, or action on $g$. This is much like the theory of distributions in Fourier analysis.

Two common cases. First:

$$
F(f) := \int f(x)^2dx
$$

$$
\lim_{\epsilon \to 0}\frac{F(f+\epsilon g) - F(f)}{\epsilon} = \frac{1}{\epsilon} \int (f(x)+\epsilon g(x))^2 - f(x)^2 dx
$$

$$
= \frac{1}{\epsilon} \int f(x)^2 + 2f(x)\epsilon g(x) - f(x)^2 = \int 2f(x)g(x)
$$

$$
\Rightarrow \frac{\partial F(f)}{f} = 2f
$$

And second:

$$
F(f) := \int |\nabla f(x)|^2dx
$$

$$
\lim_{\epsilon \to 0}\frac{F(f+\epsilon g) - F(f)}{\epsilon} = \frac{1}{\epsilon} \int |\nabla f(x)+\epsilon \nabla g(x)|^2 - |\nabla f(x)|^2 dx
$$

$$
= \int 2\nabla f(x)\nabla g(x) dx = [\cdots]_\infty^\infty - \int 2\nabla^2 f(x)g(x) dx 
$$

$$
= \int 2\nabla^2 f(x)g(x) dx
$$

$$ \Rightarrow \frac{\partial F(f)}{f} = 2\nabla^2 f
$$


## Calculus of variations

A subdomain of functional analysis concerns finding minimal functions, and predates the more general field by quite some time (i.e. goes back to Newton).

Note that the word *variational*, as in *variational bound* or *variational inference* refers to the calculus of variations.

Here's a helpful perspective. View a vector as a function $A\to\R$ for $A\subset \Z$, i.e. a map from indices of the ``array'' to the value at that index. Then the continuous version is a natural extension.

Roughly, the first *functional* derivative, analogous to the first derivative for ordinary calculus, where $\eta$ is some other function with the same support, looks like:

$$\partial F = \lim_{\epsilon\to 0} \frac{F(f+\epsilon \eta)-F(f)}{\epsilon}$$

A particularly important type of functional in physics and elsewhere takes the following form, for $L : \R\to\R\to\R\to\R$:

$$A_L(x) = \int_a^b L(t,x(t),x'(t)) dt$$

It turns out that minimizing such a functional (or more generally finding values of the function $x$ for which $\partial A_L(x)=0$), which you might imagine to be totally totally intractable, is not so hard (terms and conditions apply). This is because whenever $x$ is such that $\partial A_L(x)=0$, the following partial differential equation (called the Euler-Lagrange equation) is also true:

$$0 = \frac{\partial L}{\partial y(x)} - \frac{d}{dt}\frac{\partial L}{\partial y'(x)}  $$

### Derivation of Euler-Lagrange: 1

We can justify (and informally derive) this equation by looking at a discretization, where the curve $y$ is replaced with a piecewise linear curve defined by a sequence of points at time points $\\{t_i\\}_{i=0}^n$ spaced $\Delta$ apart, so that $t_{i+1}=t_i+\Delta$. This looks like:

$$ A_D = \sum_i^n L(t,x(t_i),(\frac{x(t_{i+1})-x(t_i)}{\Delta}))\Delta$$

Then

$$ \frac{\partial A_D}{\partial x(t_i)}$$

$$= D_2L(t_i,x(t_i),(\frac{x(t_{i+1})-x(t_i)}{\Delta}))\Delta + \frac{-1}{\Delta}D_3L(t_i,x(t_i),(\frac{x(t_{i+1})-x(t_i)}{\Delta}))\Delta + \frac{1}{\Delta}D_3L(t_{i-1},x(t_{i-1}),(\frac{x(t_{i})-x(t_{i-1})}{\Delta}))\Delta  $$

$$ = D_2L(t_i,x(t_i),(\frac{x(t_{i+1})-x(t_i)}{\Delta}))\Delta + (D_3L(t_{i-1},x(t_{i-1}),(\frac{x(t_{i})-x(t_{i-1})}{\Delta})) - D_3L(t_i,x(t_i),(\frac{x(t_{i+1})-x(t_i)}{\Delta})) ) $$

We now divide $\frac{\partial A_D}{\partial x(t_i)}$ by $\frac{1}{\Delta}$:

$$\frac{1}{\Delta}\frac{\partial A_D}{\partial x(t_i)}$$

$$ =  D_2L(t_i,x(t_i),(\frac{x(t_{i+1})-x(t_i)}{\Delta})) - \frac{1}{\Delta}(D_3L(t_i,x(t_i),(\frac{x(t_{i+1})-x(t_i)}{\Delta}))-D_3L(t_{i-1},x(t_{i-1}),(\frac{x(t_{i})-x(t_{i-1})}{\Delta}))) $$

$$ =  D_2L(t_i,x(t_i),(\frac{x(t_{i}+\Delta)-x(t_i)}{\Delta})) - $$

$$\frac{1}{\Delta}(D_3L(t_i,x(t_i),(\frac{x(t_{i}+\Delta)-x(t_i)}{\Delta}))-D_3L(t_{i-1},x(t_{i-1}),(\frac{x(t_{i-1}+\Delta)-x(t_{i-1})}{\Delta}))) $$

Taking $\Delta$ to $0$, this gives us the Euler-Lagrange equation in the limit.

### Derivation of Euler-Lagrange: 2

Landau and Lifschitz provide a more abstract derivation, as follows. For a function $f$, let $\delta f$ denote a variation of the function. Note that linearity and the chain rule operate in a normal sort of way. As before, $A_L(x) = \int_a^b L(t,x(t),x'(t)) dt$.

$$
\delta A_L(x) = \int_a^b \frac{\partial L}{\partial x}\delta x + \frac{\partial L}{\partial x'}\delta x'  dt = \int_a^b \frac{\partial L}{\partial x}\delta x + \frac{\partial L}{\partial x'}\frac{d}{dt} \delta x dt
$$

$$
= \int_a^b \frac{\partial L}{\partial x}\delta x dt + \int_a^b \frac{\partial L}{\partial x'}\frac{d}{dt} \delta x dt
$$

We now integrate the second term by parts, noting that $\delta x(a)=\delta x(b)=0$ (this is part of the definition of a variation), to obtain:

$$
\delta A_L(x) = \int_a^b \frac{\partial L}{\partial x}\delta x + [\frac{d}{dt}\frac{\partial L}{\partial x'}\delta x]_b^a - \int_a^b \frac{d}{dt}\frac{\partial L}{\partial x'} \delta x dt = \delta A_L(x) = \int_a^b (\frac{\partial L}{\partial x} - \frac{d}{dt}\frac{\partial L}{\partial x'}) \delta x dt
$$

If $\delta A_L=0$, then $\frac{\partial L}{\partial x} - \frac{d}{dt}\frac{\partial L}{\partial x'}$ must also be $0$ (since anywhere where it was not $0$, you could choose $\delta x$ to be non-zero in only that region, and then $A_L$ would no longer be $0$).


Example of use of Euler-Lagrange equation:

$L(x,y(x),y'(x)) = \sqrt{1+y'(x)^2} $

Arc length: $F_L(f) = \int_a^b L$

The Euler-Lagrange equation gives us:

$$0 = - \frac{d}{dx}\frac{\partial\sqrt{1+y'(x)^2}}{\partial y'(x)} = \frac{d}{dx} \frac{y'(x)}{\sqrt{1+y'(x)^2}} $$
So

$$ \frac{y'(x)}{\sqrt{1+y'(x)^2}} = C \Rightarrow y'(x) =  C\cdot \sqrt{1+y'(x)^2} \Rightarrow y'(x)^2 =  C^2\cdot (1+y'(x)^2) $$

$$ \Rightarrow \frac{y'(x)^2}{(1+y'(x)^2)} =  C^2 \Rightarrow \frac{(1+y'(x)^2)}{y'(x)^2} = \frac{1}{C^2} = \frac{1}{y'(x)^2} + 1$$

$$ \Rightarrow \frac{1}{y'(x)^2} = \frac{1}{C^2} - 1 = \frac{1-C^2}{C^2} \Rightarrow y'(x)^2 = \frac{C^2}{1-C^2} \Rightarrow y'(x) = \sqrt{\frac{C^2}{1-C^2}}$$

For $A := \sqrt{\frac{C^2}{1-C^2}}$, $y'(x) = A$, so that $y(x)=Ax+B$.

What we have shown: the function which minimizes arc length is a straight line. Good to know...

Technically we also have to impose some conditions on the second derivative, as in the normal case of minimization.
