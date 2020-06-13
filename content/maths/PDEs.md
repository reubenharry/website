---

title: "Partial Differential Equations"
author: "Reuben Cohn-Gordon"
date: 2020-02-26T17:07:24+01:00
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

### Eigenequations

$$ \frac{d^2 f(t)}{d t^2} = \lambda f(t) $$

Let $A=\frac{\partial^2}{\partial t^2}$, and note that it is a self-adjoint linear operator (on a space of functions). Then the above equation is an eigenequation, in the sense that the solution $f$ is an eigenvector with eigenvalue $\lambda$.

TODO: what about: Ce^blah +De^-blah, C, D in \C?. also the following is just wrong: i shouldn't be there. and is the equation self-adjoint? show, if true

Note that the solution takes the form $Ce^{i\omega t}$, for $-\omega^2=\lambda$ and $C\in R$. This means that the solution is a periodic function with period $\frac{2\pi}{\omega}$, so that the period of the eigenfunction depends on the eigenvalue.

From [these notes](/maths/fourier) recall that the complex exponentials form a basis for the space of periodic functions. They are in fact the eigenbasis of $A$, which we know exists by a spectral theorem. This is really nice.

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

$$ h(t) = ce^{\sqrt{K}v} + de^{-\sqrt{K}v} $$

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

TODO: FIX AND ADD REMARKS ON SEPARATION OF VARIABLES

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
