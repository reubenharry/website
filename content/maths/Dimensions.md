---
title: "Dimensions"
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
$\newcommand{\pd}[2]{\frac{\partial #1}{\partial #2}}$

https://www.damtp.cam.ac.uk/user/tong/relativity/three.pdf are good notes.

## Dimensions

Dimensions are a "type system" for the natural world. Just like in functional programming, understanding the types of the values being manipulated both avoids simple bugs and gets you surprisingly far in solving problems. As always for types, there's a danger of confusing the type level and the value level (see in particular below on the vector space of dimensions, which is *not* the vector space of values).

Units, like meters, are values which have a dimension.  For example:

- mass: M
- length: L
- time: T
- speed: $LT^{-1}$
- acceleration: $LT^{-2}$
- force: $LDT^{-2}$
- energy: $ML^2T^{-2}$

Quantities whose dimension is $M^0L^0T^0$ or similar are *dimensionless*. I'll write $x : 0$ to indicate that.

For various common operations and objects, we can say useful things about their dimensions:

You can't exponentiate a dimensional quantity, because, by the power series expansion of the exponential, you can see that you would be adding incommensurate quantities, like $M+M^2...$ for example.

**Angles** are dimensionless - to see that, note that you can add $2\pi$, a dimensionless quantity, to an angle.

**Probabilities** are dimensionless.  Probability densities have dimensions such that integrating over them gives a dimensionless quantity. So for example, a distribution over a physical area will have a density with dimensions $L^{-2}$.

**Calculus** If $x$ has some dimension, an infinitesimal $dx$ has the same dimension. If $x$ has dimension $X$ and $y$ has dimension $Y$, then $\frac{dx}{dy}$ has dimension $XY^{-1}$. Thinking about this is very helpful in thinking about what sort of thing a derivative is.

### The type system is a vector space

What sort of thing is a dimension? It can be written as $M^{\alpha}L^{\beta}T^{\gamma}$ (if those are our fundamental dimensions, but there could be others, depending on the problem), where $\alpha,\beta,\gamma$ are rational. So what a dimension really is is a point in an $m$ dimensional vector space over the rational field.

Multiplying $x : D\_1$ and $y : D\_2$ gives $xy : D\_1+D\_2$. Multiplying $x : D\_1$ by a nondimensional quantity $y$ (i.e. a quantity whose dimension is the $0$ vector) gives, as we would expect, $xy : D\_1+0 = D\_1$. Raising $x : D\_1$ to a rational dimensionless quantity $y$ gives $x^y :: yD\_1$.

### Buckingham Pi Theorem

Suppose you have a value you want to calculate and you know it's a function of $n$ variables, each with their own dimension. You could consider a different vector space, spanned by these $n$ variables. Your first sanity check should be that the dimension of the value you want to produce is in the span of the variables.

Further, note that there's a full rank transformation from your new $n$ dimensional ("dimension" in the vector space sense) vector space to the $m$ dimensional vector space of fundamental dimensions that you care about (e.g. M, L, T). By rank-nullity, the dimension of the kernel is $n-m$.

What does that mean? It means that there are $n-m$ orthogonal (so they can't be written in terms of each other) quantities ("dimension" in the type sense) which all become dimensionless under the transformation. So you can *nondimensionalize* your system and write it in $p$ groups, each of which is a dimensionless quantity.

### Dimensional analysis

Suppose you know that quantity (x : X) is a function of (y : Y) and (z: Z). You could have it be a function of more things, it wouldn't change the basic idea. Then you know that the relation, if it exists, takes the form $x = C(t : 0)y^{\alpha}z^{\beta}$ such that $X = Y^{\alpha}Z^{\beta}$.

Expressing $X$ in terms of $Y, Z$ is a linear algebra exercise. First write the matrix with columns expressing $Y$ and $Z$ in your fundamental dimensions (in the unit sense of "dimension"). Invert it and apply to $X$ to get $Y^{\alpha}Z^{\beta}$.

<!-- For example: in a system where energy is a function of $g, m, h$, you have:

$$\begin{matrix} \alpha & 0 \\ 0  & - \beta  \\ end{matrix} $$

Then

$$ Inv(B)(dim(E)) = vector $$

which means that $m^{}g^{}h^{} : dim(E)$
 -->
