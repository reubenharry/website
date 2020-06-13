---
title: "Calculus"
date: 2020-01-26T17:07:24+01:00

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

## Analysis

Analysis is the careful building up of the concepts needed to talk about infinitesimal change. Often, calculus can be used without diving into analytic details, but it's often useful.

### Sequence

A function $S : \N\to B$ for some set $B$ such as $\R$ or $\C^n$

### Series

A sequence T of the form $T(n) = \sum\_i^nS(i)$. Intuitively: the $n$th term of $T$ is the sum of the first $n$ terms of $S$.

### Cauchy Sequences, Convergent Sequences, and Completeness

A sequence $S$ is *Cauchy* if $\forall \epsilon>0:\exists k: \forall n,m > k: d(S(n),S(m))<\epsilon $

A sequence $S$ converges to a point $p$ if $\forall\epsilon>0:\exists k: \forall n>k: d(p,S(n))<\epsilon$

A space is complete if all Cauchy sequences converge. Note: the reals, for example, are complete. The spaces in question can be more abstract - for example, the space of all Lebesgue integrable functions is complete. Here, we need a metric on functions.

### Continuity:

Continuous function $f: A\to B$ at a point $x\in A$ is defined by:

$$\forall \epsilon >0: \exists \delta>0: \forall y\in A: (d(x,y)<\delta)\to (d(f(x),f(y))<\epsilon)$$

**Equivalently**: a function $f$ is continuous at a point $x$ if $\lim\_{y\to x}f(y)$ exists.

Uniformly continuous function is defined as follows and is different from being continuous at every point:

$$\forall \epsilon >0: \exists \delta>0: \forall x,y\in A: (d(x,y)<\delta)\to (d(f(x),f(y))<\epsilon)$$

### Integrals

An integral is like a continuous analog of a sum, where the summands (the things you sum together) are infinitesimally small and infinitely many. You integrate over a volume (in 1 dimension an interval of the real line, in 2, an area in $\R^2$, etc).

The Riemann integral is one definition of integration (which coincides with the more general Lebesgue integration where both are defined). Take a function $f:\R\to\R$ and consider an interval $[a,b]\subset\R$. Goal of integral is to find the area under the curve produced by $f$. Consider any partition of $[a,b]$, i.e. a splitting up of $[a,b]$ into consecutive sub-intervals $P\_i$. You can define a piecewise constant function, $g\_P$, such that if $x\in P\_i$, $g\_P(x)=\inf\_{y\in P\_i}f(y)$, i.e. the lower bound of points in this stretch of $[a,b]$. It's easy to calculate the area under $g$, because it's piecewise constant. Then you can try to find the partition $P$ such that $g\_P$ has the largest area under the curve. The upper bound on how well you can do is $L(f)=\sup\_P \int\_{[a,b]}g\_P$. Note that this will result in your making your partition arbitrarily fine. Conversely we can dualize and consider $U(f)=\inf\_P \int\_{[a,b]}h\_P$, where $h\_P(x)=\sup\_{y\in P\_i}f(y)$. If $U(f)$ and $L(f)$ coincide, we say that $f$ is Riemann integrable on $[a,b]$.

Note that $L(f)\leq U(f)$, so showing the opposite inequality establishes equality and thus integrability.

All continuous functions are Riemann integrable.

Integration is a linear operator.

### Lipschitz Functions

Uniformly Lipschitz:

$\exists k > 0 : \forall x\forall y : d(f(x),f(y)) \leq k\cdot d(x,y) $

This implies continuity.

Locally Lipschitz function is uniformly Lipschitz but for a compact set. That is, first choose any compact set $K$, and then have that $x$ and $y$ from above are in $K$.

A continuously differentiable function $f$ is locally Lipschitz. To prove this, we want to show that around any point $p$, there's a (compact) neighborhood in which $f:U\to\R^n$ is uniformly Lipschitz.

Strategy: we'll make use of the fact that $Df$ at any point $x\in S$ for $S\subset U$  a ball around $p$ is bounded, i.e. $\sup\_{x\in S}||D\_xf(x)||\_{op} = \sup\_{x\in S}sup\_{h\neq 0} \frac{D\_xf(x)(h)}{|h|} \leq K$. For this last inequality, we're using the fact that continuous functions on compact sets are bounded and that $Df$ is continuous (by assumption). Then we'll define a function that interpolates between two points in $S$, $x$ and $y$, i.e. $z(t) = x + t(y-x)$. Note how $z(0)=x$ and $z(1)=y$. Finally note that a ball is convex, so $\forall t: z(t)\in S$.

Here's the calculation that yields the result:

$$||f(y) - f(x)|| = ||\int\_0^1 \frac{d}{ds}f(z(s))ds|| = |\int\_0^1 Df\_{z\_s}(z(s))(y-x)| \leq \int\_0^1 ||Df\_{z\_s}(z(s))||\_{op}\cdot |(y-x)| \leq K|y-x|$$

First step uses fundamental theorem of calculus, second uses chain rule, third uses that absolute value of integral is less than integral of absolute value, and penultimate step uses the fact that the operator norm has the property that $||Av|| \leq ||A||\_{op}||v||$.

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

The proof is nice and constructive. We simply consider the sequence $x\_n=f(x\_{n-1})$, with $x\_0$ chosen arbitrarily. $\lim\_{n\to\infty}x\_n$ must be a fix point if it exists, it exists if the sequence converges, and the sequence converges if it is Cauchy.

### Arzela-Ascoli:

Good example of fiddly analysis result.

**Statement**: every equicontinuous, sequence of uniformly bounded functions $f: J\to R^n$, for $J$ compact, converges uniformly.

**Proof**: Let $A$ be a countable dense subset of $J$, enumerable as $t\_1\cdots t\_n\cdots$. Then by Bolzano-Weierstrass, we can find a subsequence $x\_{k\_(l,1)}(t\_1)$ (varying $l$). Similarly, we can find a subsequence of \emph{that} sequence, $x\_{k\_(l,2)}(t\_1)$. Diagonalizing, $x\_{k\_{(l,l)}}$ must converge for every $t$.

Now we want to show that $x\_{k\_{(l,l)}}$ converges uniformly for $J$. To do so, we are going to first consider a finite set of points in $A$, which are contained in open intervals whose union contains $J$. We can do this because $J$ is compact.

Since $E$ is finite, and $x\_{k\_{l,l}}$ at any $s\in E$ is convergent hence Cauchy, we can pick $l,l'$ st. $max\_{s\in E} |x\_{k\_{(l,l)}}(s)-x\_{k\_{(l',l')}}(s)| < \epsilon$.

Then, for any $y\in J$, $|x\_{k\_{(l,l)}}(y)-x\_{k\_{(l',l')}}(y)| \leq |x\_{k\_{(l,l)}}(y)-x\_{k\_{(l,l)}}(s)| + |x\_{k\_{(l,l)}}(s)-x\_{k\_{(l',l')}}(s)| + |x\_{k\_{(l',l')}}(s)-x\_{k\_{(l',l')}}(y)|$. This shrinks as small as we want, by equicontinuity for the first and last terms on the right of the inequality and the above for the middle.



## Calculus

Calculus is the tool used to understand continuous change. Since the world is full of things which are either continuous, or approximately continuous, it is pretty much the central tool of applied maths.


### Little o-notation

The statement $f(x)=o(g(x))$ is a shorthand for: $\lim\_{x\to\infty}\frac{f(x)}{g(x)}=0$. This is very handy notation for discussing derivatives.

For example, consider $f(x)=x^2$, and

$$\frac{d}{dx}f(x)=\lim\_{h\to0}\frac{f(x+h)-f(x)}{h}=\lim\_{h\to0}\frac{(x+h)^2-x^2}{h}=\lim\_{h\to0}\frac{2xh+h^2}{h}$$

$$=\lim\_{h\to0}\frac{2xh}{h}+\lim\_{h\to0}\frac{h^2}{h}=\lim\_{h\to0}2x+\lim\_{h\to0}h = 2x+0=2x$$

Note that $h^2$ in the numerator was not a linear function of $h$, in particular, using little-o notation, we can say that $h^2$ is $o(h^n)$ for $n>2$, and as such drops out.

This pattern crops up all the time, where to find the derivative of a function, you can drop all terms that are $o(h^n)$ for $n>2$. In particular, it's used in the context of Taylor series expansions, e.g. you could write: $e^x=1+x+o(x^3)$.


### Taylor Series

A power series representation of $f(x)$ takes the form  $\sum\_{i=0}^{\inf} c\_i(x-a)^i$. What's cool is that if such a series exists for an infinitely differentiable function $f$, we can recover the "basis coefficients" $c\_i$ by noting that: (1) $f(a) = c\_0$ and (2) that $f'(x) = \sum\_{i=1}^{\inf} ic\_i(x-a)^{i-1}$, so that $c\_1 = f'(x)/1$. Continuing in this vein with $n$th derivatives, we find that $c\_i = \frac{d^{(i)f(x)}}{dx^{(i)}}(a)\frac{1}{i!}$. Substituting in these values for $c\_i$ into the series gives us the Taylor series.

$$
T : (\R\to\R)\to\R\to\R\to(\R\to\R) \\
T(f)(t\_0)(t) = \sum\_{i=0}^{\infty}\frac{f^{(i)(t\_0)}}{i!}(t-t\_0)^i
$$
The intuition is that for a point $x$, we're approximating $f$ locally by a sum (which when infinite may converge to a perfect approximation) of the derivatives of $f$ around that point. This makes sense: the derivatives give you local context: first derivative is what the function is doing nearby, second derivative is what the first derivative is doing nearby, etc.

**Example**

Write $f(x+a)=f(x)+af'(x)+\frac{a^2}{2}f''(x)...$. Then note that to find the second derivative, we can write:

$$f(x+a)+f(x-a)\approx f(x)+af'(x)+\frac{a^2}{2}f''(x)+f(x)-af'(x)+\frac{a^2}{2}f''(x)$$
$$=2f(x)+a^2f''(x) \Rightarrow f''(x)\approx\frac{f(x+a)+f(x-a)-2f(x)}{a^2}$$

Here the approximation becomes increasingly precise in small $a$, i.e. the error is $o(a^2)$.

A natural extension to $\C$, $\R^n$ and $\C^n$ exists. The Taylor series up to term $n$ is the $n$th order approximation of $f$, which is a polynomial. Write it as $T\_n(f)(t\_0)$.

It is often useful to ask about the *remainder* $R\_n(f)(t\_0)=T\_n(f)(t\_0)$.

Taylor's theorem states that $R\_n(f)(t\_0)(t)=o(|t-t\_0|^n)$ as $t\_0\to t$. In other words, for $t\_0$ sufficiently close to $t$, the error is dominated by a polynomial of order $n$.

We can also give explicit formulas for the remainder, such as the integral form:
$$
R\_n(f)(t\_0)(t)=\int\_{t\_0}^t\frac{f^{(n+1)}(s)}{(n+1)!}(t-s)^{n+1}ds
$$
From which the mean value theorem gives us that:
$$
\exists t': R\_n(f)(t\_0)(t) = \frac{f^{(n+1)(t')}}{(n+1)!}(t-t\_0)^{n+1}
$$
Here $t'$ is known to exist by the mean value theorem.


### Fundamental Theorem of Calculus and Leibniz' Rule

$$f(x)=\frac{d}{dx}\int\_a^xf(s)ds$$

In other words, the integral, as a way of measuring volume, is the inverse of the derivative.

Now suppose that we want to take the derivative of an integral with respect to a variable inside the integrand. For example, suppose $\phi(y)=\int\_a^bf(s,y)ds$. Then $\frac{d}{dy}\phi(x,y)=\frac{d}{dy}\int\_a^bf(s,y)ds=\int\_a^b\frac{d}{dy}f(s,y)ds$.

But now suppose that $a$ and $b$ are functions of $y$. Then, using the multivariable chain rule, with $\phi(y,a(y),b(y))=\int\_{a(y)}^{b(y)}f(s,y)ds$, we have that $\frac{d}{dy}\phi(y,a(y),b(y))=\frac{\partial \phi(y,a(y),b(y))}{\partial y}+\frac{\partial \phi(y,a(y),b(y))}{\partial a(y)}\frac{da(y)}{dy}+\frac{\partial \phi(y,a(y),b(y))}{\partial b(y)}\frac{db(y)}{dy}$.

Using the fundamental theorem of calculus, as above, and flipped one of the integrals, we get  $\frac{d}{dy}\phi(y,a(y),b(y))=\int\_{a(y)}^{b(y)}\frac{\partial}{\partial y}f(s,y)ds-f(a(y),y)a'(y)+f(b(y),y)b'(y)$. This is Leibniz' rule.

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
\lim\_{x\to a}\frac{||f(x)-f(a)-Df(a)(x-a)||}{||x-a||} = 0
$$
or equivalently
$$
\lim\_{x\_0\to 0}\frac{||f(a+x\_0)-f(a)-Df(a)(x\_0)||}{||x\_0||} = 0
$$
So basically the idea is: the total derivative $Df(a)$ is the limiting linearization of $f$ around $a$.

The following is also true (using index notation):

$$ Df(x)\_{ij} = \frac{\partial f(x)\_i}{\partial x\_j}$$

## Chain rule


$$D\_x(f(g(x)))\_{ij} = \sum\_k \frac{\partial f(g(x))\_i}{\partial g(x)\_k}\frac{\partial g(x)\_k}{\partial x\_k} $$

Or without index notation:

$$D : (\R^n\to\R^n)\to\R^n\to L(\R^n\to\R^n)$$
$$D(f\circ g)(x)=[(Df)(g(x)][(Dg)(x)]$$

## Gradient $\nabla$ and Hessian $H$

$$ \nabla\_x{f(x)}\_i = \dfrac{df(x)}{dx\_i}$$

$$ H\_xf(x)\_{ij} = \dfrac{df(x)}{dx\_idx\_j}$$

## Examples:

$$ (D\_x Ax)\_{ij} = \frac{d(Ax)\_{i}}d{x\_j} = \frac{dA\_{ik}x\_k}d{x\_j} = A\_{ij} $$

$$ (D\_Ax^TAx)\_{ij} = \frac{dxAx}{A\_{ij}} = \frac{dx\_aA\_{ab}x\_b}{A\_{ij}} = x\_ix\_j \Rightarrow D\_Ax^TAx = xx^T $$

$$ \nabla\_x{f(Ax)} = A^T\nabla\_{Ax}(f(Ax))$$
$$ \nabla\_{A^{-1}x}f(x) = \nabla\_k{f(Ak)} = A^T\nabla\_{Ak}f(Ak) = A^T\nabla\_{x}f(x)$$

$$ H\_xf(Ax) = A^T(H\_xf(Ax))A $$
$$ H\_{A^{-1}x}f(x) = H\_{k}f(Ak) = A^TH\_{Ak}f(Ak)A = A^TH\_xf(x)A $$




### Change of variables

OK, the idea is that instead of integrating $f$ with respect to its input $x$ (i.e. calculating $\int_Af(x)dx$), we can view $x$ as a function of $u$ (i.e. $x=g(u)$) and then pull back to an integral over $u$ (i.e. $\int\_{g^{-1}(A)}f(g(u))du$). But this is a differently valued integral. So this new integral requires a term to offset the change, which rather nicely happens to be $|Det(D\_ug(u))|$. Intuition is that we account for the change in area of the differential (as it approaches the limit). The absolute value is because the sign of the determinant only measures the order of the dimensions and we don't care about this here. The equation looks as follows:

$$\int\_{g(A)} (f\circ g)(x)dg(x) = \int\_{A} (f\circ g)(x)\cdot |Dg(x)|dx $$ where $Dg(x)$ is the determinant of the matrix of partial derivatives of $g(x)$ wrt. $x$.

### Arguments with differentials

It's often very handy to reason in terms of small elements, which you then take to $0$ in the limit. For example, suppose $y(x)$ is the height of a curve. Then consider a section of width $\Delta x$ which starts at a point $x$, and note that its length is $((\Delta x)^2+(y(x+\Delta x)-y(x))^2)^{\frac{1}{2}}$. Dividing by $\Delta x$, we obtain:

$$ \frac{((\Delta x)^2+(y(x+\Delta x)-y(x))^2)^{\frac{1}{2}}}{\Delta x} =((\Delta x)^2+(y(x+\Delta x)-y(x))^2)^{\frac{1}{2}}((\Delta x)^{-2})^{\frac{1}{2}}=(\frac{(\Delta x)^2}{(\Delta x)^2}+(\frac{y(x+\Delta x)-y(x)}{\Delta x})^2)^{\frac{1}{2}}$$

Because limits can go inside continuous functions, we can say that:

$$\lim\_{\Delta x\to 0} (\frac{(\Delta x)^2}{(\Delta x)^2}+(\frac{y(x+\Delta x)-y(x)}{\Delta x})^2)^{\frac{1}{2}}=(1+(\lim\_{\Delta x\to 0}\frac{y(x+\Delta x)-y(x)}{\Delta x})^2)^{\frac{1}{2}}=(1+(\frac{dy}{dx})^2)^{\frac{1}{2}}$$


### Derivative of the determinant

$$
D\det(A)(I) = \lim\_{h\to0}\frac{\det(I+hA)-\det(I)}{h} = \lim\_{h\to0}\frac{(\prod\_i(1+h\lambda\_i))-1}{h}$$

$$ = \lim\_{h\to0}\frac{(1+h\sum\_i\lambda\_i + o(h^3))-1}{h}=\sum\_i\lambda\_i=tr(A)$$

### Existence and Differentiability of the Matrix Exponential

$e^{t\psi}=\sum\_{i=0}^{\infty}\frac{t^i\psi^i}{i!}$. The series is Cauchy, since $||\sum\_{i=0}^{m+1}\frac{t^i\psi^i}{i!}-\sum\_{i=0}^{m}\frac{t^i\psi^i}{i!}||=||\frac{t^{m+1}\psi^{m+1}}{(m+1)!}\leq \frac{t^{m+1}}{(m+1)!}||\psi||^{m+1}$, which is dominated by the factorial term. Thus the sequence converges (the space of linear operators being complete).

Differentiability of $f(t)= e^{t\psi}$:

$\frac{d}{dt}f(t)=\lim\_{h\to0}\frac{1}{h}(e^{(t+h)\psi}-e^{t\psi})=\lim\_{h\to0}(e^{h\psi}+I)e^{t\psi}$

So all that it needed is to show that $\lim\_{h\to0}(e^{h\psi}+I)=\psi$.
$$
e^{t\psi}=\sum\_{i=0}^{\infty}\frac{t^i\psi^i}{i!}=I+t\sum\_{i=1}^{\infty}\frac{t^{i-1}\psi^i}{i!}\Rightarrow \frac{1}{t}(e^{t\psi}-I)=\sum\_{i=1}^{\infty}\frac{t^{i-1}\psi^i}{i!}
$$
We can then rather cleverly observe that the this final sum goes to $\psi$ as we take $t$ to $0$, because the term of the sum with $i=0$ is $\frac{0^0\psi}{0!}=\psi$.

## Calculus of variations

There's a kind of calculus where instead of varying a number or a vector, you vary a function $f$ itself, which is the input to some functional $F$. You have to be careful with types here. $f : \R\to\R$ and $F : (\R\to\R)\to\R$. Note that the word *variational*, as in *variational bound* or *variational inference* refers to the calculus of variations.

But here's a helpful perspective. View a vector as a function $A\to\R$ for $A\subset \Z$, i.e. a map from indices of the ``array'' to the value at that index. Then the continuous version is a natural extension.

Roughly, the first *functional* derivative, analogous to the first derivative for ordinary calculus, where $\eta$ is some other function with the same support, looks like:

$$\partial F = \lim_{\epsilon\to 0} \frac{F(f+\epsilon \eta)-F(f)}{\epsilon}$$

A particularly important type of functional in physics and elsewhere takes the following form, for $L : \R\to\R\to\R\to\R$:

$$A_L(x) = \int_a^b L(t,x(t),x'(t)) dt$$

It turns out that minimizing such a functional (or more generally finding values of the function $x$ for which $\partial A\_L(x)=0$), which you might imagine to be totally totally intractable, is not so hard (terms and conditions apply). This is because whenever $x$ is such that $\partial A\_L(x)=0$, the following partial differential equation (called the Euler-Lagrange equation) is also true:

$$0 = \frac{\partial L}{\partial y(x)} - \frac{d}{dt}\frac{\partial L}{\partial y'(x)}  $$

### Derivation of Euler-Lagrange: 1

We can justify (and informally derive) this equation by looking at a discretization, where the curve $y$ is replaced with a piecewise linear curve defined by a sequence of points at time points $\\{t\_i\\}\_{i=0}^n$ spaced $\Delta$ apart, so that $t\_{i+1}=t\_i+\Delta$. This looks like:

$$ A\_D = \sum\_i^n L(t,x(t\_i),(\frac{x(t\_{i+1})-x(t\_i)}{\Delta}))\Delta$$

Then

$$ \frac{\partial A\_D}{\partial x(t\_i)}$$

$$= D_2L(t\_i,x(t\_i),(\frac{x(t\_{i+1})-x(t\_i)}{\Delta}))\Delta + \frac{-1}{\Delta}D_3L(t\_i,x(t\_i),(\frac{x(t\_{i+1})-x(t\_i)}{\Delta}))\Delta + \frac{1}{\Delta}D_3L(t\_{i-1},x(t\_{i-1}),(\frac{x(t\_{i})-x(t\_{i-1})}{\Delta}))\Delta  $$

$$ = D_2L(t\_i,x(t\_i),(\frac{x(t\_{i+1})-x(t\_i)}{\Delta}))\Delta + (D_3L(t\_{i-1},x(t\_{i-1}),(\frac{x(t\_{i})-x(t\_{i-1})}{\Delta})) - D_3L(t\_i,x(t\_i),(\frac{x(t\_{i+1})-x(t\_i)}{\Delta})) ) $$

We now divide $\frac{\partial A\_D}{\partial x(t\_i)}$ by $\frac{1}{\Delta}$:

$$\frac{1}{\Delta}\frac{\partial A\_D}{\partial x(t\_i)}$$

$$ =  D_2L(t\_i,x(t\_i),(\frac{x(t\_{i+1})-x(t\_i)}{\Delta})) - \frac{1}{\Delta}(D_3L(t\_i,x(t\_i),(\frac{x(t\_{i+1})-x(t\_i)}{\Delta}))-D_3L(t\_{i-1},x(t\_{i-1}),(\frac{x(t\_{i})-x(t\_{i-1})}{\Delta}))) $$

$$ =  D_2L(t\_i,x(t\_i),(\frac{x(t\_{i}+\Delta)-x(t\_i)}{\Delta})) - $$

$$\frac{1}{\Delta}(D_3L(t\_i,x(t\_i),(\frac{x(t\_{i}+\Delta)-x(t\_i)}{\Delta}))-D_3L(t\_{i-1},x(t\_{i-1}),(\frac{x(t\_{i-1}+\Delta)-x(t\_{i-1})}{\Delta}))) $$

Taking $\Delta$ to $0$, this gives us the Euler-Lagrange equation in the limit.

### Derivation of Euler-Lagrange: 2

Landau and Lifschitz provide a more abstract derivation, as follows. For a function $f$, let $\delta f$ denote a variation of the function. Note that linearity and the chain rule operate in a normal sort of way. As before, $A_L(x) = \int_a^b L(t,x(t),x'(t)) dt$.

$$
\delta A\_L(x) = \int\_a^b \frac{\partial L}{\partial x}\delta x + \frac{\partial L}{\partial x'}\delta x'  dt = \int\_a^b \frac{\partial L}{\partial x}\delta x + \frac{\partial L}{\partial x'}\frac{d}{dt} \delta x dt
$$

$$
= \int\_a^b \frac{\partial L}{\partial x}\delta x dt + \int\_a^b \frac{\partial L}{\partial x'}\frac{d}{dt} \delta x dt
$$

We now integrate the second term by parts, noting that $\delta x(a)=\delta x(b)=0$ (this is part of the definition of a variation), to obtain:

$$
\delta A\_L(x) = \int\_a^b \frac{\partial L}{\partial x}\delta x + [\frac{d}{dt}\frac{\partial L}{\partial x'}\delta x]\_b^a - \int\_a^b \frac{d}{dt}\frac{\partial L}{\partial x'} \delta x dt = \delta A\_L(x) = \int\_a^b (\frac{\partial L}{\partial x} - \frac{d}{dt}\frac{\partial L}{\partial x'}) \delta x dt
$$

If $\delta A\_L=0$, then $\frac{\partial L}{\partial x} - \frac{d}{dt}\frac{\partial L}{\partial x'}$ must also be $0$ (since anywhere where it was not $0$, you could choose $\delta x$ to be non-zero in only that region, and then $A\_L$ would no longer be $0$).


Example of use of Euler-Lagrange equation:

$L(x,y(x),y'(x)) = \sqrt{1+y'(x)^2} $

Arc length: $F\_L(f) = \int\_a^b L$

The Euler-Lagrange equation gives us:

$$0 = - \frac{d}{dx}\frac{\partial\sqrt{1+y'(x)^2}}{\partial y'(x)} = \frac{d}{dx} \frac{y'(x)}{\sqrt{1+y'(x)^2}} $$
So

$$ \frac{y'(x)}{\sqrt{1+y'(x)^2}} = C \Rightarrow y'(x) =  C\cdot \sqrt{1+y'(x)^2} \Rightarrow y'(x)^2 =  C^2\cdot (1+y'(x)^2) $$

$$ \Rightarrow \frac{y'(x)^2}{(1+y'(x)^2)} =  C^2 \Rightarrow \frac{(1+y'(x)^2)}{y'(x)^2} = \frac{1}{C^2} = \frac{1}{y'(x)^2} + 1$$

$$ \Rightarrow \frac{1}{y'(x)^2} = \frac{1}{C^2} - 1 = \frac{1-C^2}{C^2} \Rightarrow y'(x)^2 = \frac{C^2}{1-C^2} \Rightarrow y'(x) = \sqrt{\frac{C^2}{1-C^2}}$$

For $A := \sqrt{\frac{C^2}{1-C^2}}$, $y'(x) = A$, so that $y(x)=Ax+B$.

What we have shown: the function which minimizes arc length is a straight line. Good to know...

Technically we also have to impose some conditions on the second derivative, as in the normal case of minimization.

## Differential Forms

In general, we want to do calculus on spaces which are locally Euclidean, but perhaps not globally. These are (smooth) manifolds.

A differential $k$-form on $\RR^n$, $\alpha \in \Omega^{k}(\RR^n)$, has type: $\RR \to \Lambda^k(\RR^n)$, where $\Lambda^k(V)$ is the vector space of antisymmetric multilinear maps on $V$.

There is a nice theorem called Stokes' theorem, which says: $\int_{\partial A} \omega = \int_A d\omega$
