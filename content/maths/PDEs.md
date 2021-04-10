---

title: "Partial Differential Equations"
author: "Reuben Cohn-Gordon"
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


### Handwaving

$$ \pd{^2 f(x,y)}{x^2} = \lambda f(x,y) $$

Let $A=\frac{\partial^2}{\partial t^2}$. It turns out that a lot of finite dimensional results, like the spectral theorem, in which a Hermitian operator has an eigenbasis, apply here too, which is a bit mind-bending. So if an operator like $A$ were Hermitian (for the approprite inner product on function spaces), that would be good...

## Separation of variables

You have some PDE, and are solving for some function $V$. Say it's a function of two arguments, although the approach generalizes. The idea is to try to find a *separable* solution of the form V(x,y)=X(x)Y(y). This turns out to be much easier, but of course, there's no reason why a solution of this form should necessarily be able to satisfy your boundary conditions. What you can do, however, in some circumstances, is to consider a solution consisting of an infinite sum of separable solutions. If you're lucky, the separable solutions will form an orthogonal and complete set (roughly a basis, but I'm hedging because this is infinite dimensional) and then you can satisfy arbitrary boundary conditions.

Solving the wave equation is a typical example, as below.

### Wave Equation Solutions

$$\frac{\partial^2 f(x,t)}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 f(x,t)}{\partial t^2}$$

Note that any function of the form $f(x)=g(x+vt)$, for an arbitrary $g$, is a solution. This fact explains the choice of the term $\frac{1}{v^2}$, because then $v$ is the velocity of the solution, in the sense that a shift in time is multiplied by the velocity $v$ to yield a shift in space. (Typically, solutions to this PDE are thought of as waves, e.g. sound waves, light waves, etc).

We can consider separable solutions, of the form $f(x,t)=g(x)\cdot h(t)$. Then:

$$ \frac{\partial^2 g(x)h(t)}{\partial x^2} = h(t)\frac{\partial^2 g(x)}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 g(x)h(t)}{\partial t^2} = g(x) \frac{1}{v^2} \frac{\partial^2 h(t)}{\partial t^2} $$

$$ \Rightarrow \frac{\partial^2 g(x)}{\partial x^2}\frac{1}{g(x)} = \frac{1}{h(t)v^2} \frac{\partial^2 h(t)}{\partial t^2}  $$

Since $x$ and $t$ are independent, both sides must be constant, in order to satisfy this equality. Accordingly:

$$ \frac{\partial^2 g(x)}{\partial x^2} = Kg(x)  $$

$$ \frac{\partial^2 h(t)}{\partial t^2} = Kv^2h(t) $$

These eigenequations have solutions:

$$ g(x) = ae^{\sqrt{K}t} + be^{-\sqrt{K}t} $$

$$ h(t) = ce^{\sqrt{K}vt} + de^{-\sqrt{K}vt} $$

We might have some further constraints that help us solve the problem. For instance, a common boundary condition is that $\forall t: f(0,t)=0=f(L,t)$, where $L$ is some designated point, for instance the end of a string might be one physical interpretation.

Then we can solve exactly, as follows:

$$ 0 = g(0) = a+b \Rightarrow a = -b $$

$$ 0 = g(L) = ae^{\sqrt{K}L} + be^{-\sqrt{L}L} \Rightarrow (a=-b=b=0) \vee (e^{\sqrt{K}L}=0=e^{-\sqrt{K}L}) $$

Assuming the latter disjunct, since the former leads to a trivial solution, we consider the latter. In general, if $e^{x}=e^{-x}$, then $x=ni\pi$, for $n\in \Z$ (convince yourself this is true by thinking about complex exponentials as rotations in the complex plane). So $\sqrt{K}=i\frac{n\pi}{L}$.


constrain possible solutions by having $f(x,t)$ satisfy a separate equation:

$$
\frac{\partial^2 f(x,t)}{\partial t^2} = \lambda f(x,t)
$$

This implies that $\frac{\partial^2 f(x,t)}{\partial x^2} = \frac{1}{v^2}\lambda f(x,t)$ (the Helmholtz equation), so as above, we have an eigenvalue problem, and the solution, now $f(x,t)=C(t)e^{ikx}$ for $-k^2=\frac{1}{v^2}\lambda$ is periodic in $x$.

We can add *boundary conditions* to constrain the solutions to the PDE. In particular, say that $f(0)=0,\~ f(L)=0$. Then, since $e^{ik0}=1$, we have that $0=C(t)\cdot 1 \Rightarrow Re(C(t))=0$. On the other hand, $C(t)e^{ikL}=0$, so $e^{ikL}$ has to be $1$, which means that $k=\frac{n\pi}{L}$ for $n\in \N$. The result is that the eigenvalues of the solution are discrete (this turns out to be a reason for quantization of energy levels in quantum physics), so that the solutions (eigenvectors) are periodic with discrete frequencies.

### Spherical Laplacian

For problems involving spheres and Laplace's equation, you often end up with a separation of variables which leads to solutions consisting of sums of Legendre polynomials. For reasons probably to do with Sturm-Liouville theory (which I understand to be the study of certain Hermitian operators on function spaces), these are complete and orthogonal, just like the corresponding sine functions you get from separation of variables in Cartesian coordinates, so can satisfy fairly arbitrary boundary conditions. More concretely, assume (just for simplicity) that $V$ is only a function of $r,\theta$. Then, taking the Laplacian in spherical coordinates:

$$ \frac{1}{r^2}\pd{}{r}(r^2\pd{V}{r}) + \frac{1}{\sin\theta}\pd{}{\theta}(\sin\theta\pd{V}{\theta}) = 0 $$

Assuming a separation of variables, we get:

$$ \frac{1}{r^2}\pd{}{r}(r^2\pd{R}{r}) + \frac{1}{\sin\theta}\pd{}{\theta}(\sin\theta\pd{\Theta}{\theta}) = 0 $$

Then both terms must be constant. If the constant takes the form $l(l+1)$, then $R( r)= Ar^l+\frac{B}{r^{l+1}}$ and $\Theta(\theta) = P\_l(\cos\theta)$, where $P\_l$ are the Legendre polynomials.

Since the Legendre polynomials are a "basis", we can write a fairly arbitrary solution as:

$$ V(r,\theta) = \sum\_{l=0}^{\infty} (A\_lr^l+\frac{B\_l}{r^{l+1}})P\_l(\cos\theta) $$


### Diffusion Equation Solutions


For any choice of $t$, we first express $x\mapsto \rho(x,t)$ in the basis of complex exponentials (i.e. we express it as the inverse Fourier transform of its Fourier transform):

$$\rho\_t(x) = \int\_{\R} \mathcal{F}\rho\_t(k)e^{i2\pi xk}dk$$

Then $\frac{\partial \rho}{\partial t} = \int\_{\R} \frac{d}{dt}(\mathcal{F}\rho\_t)(k)e^{i2\pi xk}dk $

And  $\frac{\partial^2 \rho}{\partial x^2} = \int\_{\R} \mathcal{F}\rho\_t(k)e^{i2\pi xk}\cdot(-4\pi^2k^2)dk $

So, since $\frac{\partial \rho}{\partial t} = a\frac{\partial^2 \rho}{\partial x^2}$, it follows that

$$\int\_{\R} \frac{d}{dt}(\mathcal{F}\rho\_t)(k)e^{i2\pi xk}dk = \int\_{\R} \mathcal{F}\rho\_t(k)e^{i2\pi xk}\cdot(-a4\pi^2k^2)dk$$

Comparing terms, we have that:

$$ \frac{d}{dt}(\mathcal{F}\rho\_t)(k) = -a4\pi^2k^2\mathcal{F}\rho\_t(k) $$

which implies that $(\mathcal{F}\rho\_t)(k)=(\mathcal{F}\rho\_0)(k)e^{-a4\pi^2k^2t}$

That gives us:

$$\rho\_t(x) = \int\_{\R} (\mathcal{F}\rho\_0)(k)e^{-a4\pi^2k^2t}e^{i2\pi xk}dk$$

This tells us that as $t$ increases, only values of $k$ close to $0$ will matter, which means that $\rho\_t(x)$ will be increasingly uniform. As you'd expect for diffusion.

### Helmholtz theorem

Any vector field $F$ which is differentiable and goes to $0$ quicker than $\frac{1}{r}$ admits a decomposition:

$$ F(r ) = \frac{1}{4\pi} \left(\nabla\times\left( \int \frac{\nabla\_{r'}\times F(r')}{||r-r'||} \right) - \nabla\left( \int\frac{\nabla\_{r'}\cdot F(r')}{||r-r'||}  \right) \right)$$
