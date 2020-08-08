---

title: "Ordinary Differential Equations"
author: "Reuben Cohn-Gordon"
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

These notes are my own summary of [Brendle](http://math.stanford.edu/~ryzhik/STANFORD/STANF63CM-20/ode-brendle)'s notes on ODEs, and Stanford Math 63. Definitions can be a little idiosyncratic, especially the use of higher-order functions.

We consider first order ordinary differential equations equations of the following form, fixing $x\_0$:
$$
\frac{d\phi(x\_0)(t)}{dt} = F(\phi(x\_0)(t),t)
$$
where $F$ is some particular function that we fix, and the goal is to find a function $\phi(x\_0)$ which satisfies the equation and also satisfies $\phi(x\_0)(0)=x\_0$. All $n$th order differential equations (featuring higher derivatives) can be reduced to first order equations of multiple variables, so that's why we focus on equations of the first order. In general
$$
\phi \in (\R^n\to(\R\to\R^n)),\\ t \in \R,\\ F \in ((\R^n, \R)\to\R^n)
$$
Often we consider the subset of *autonomous* cases:
$$
\frac{d\phi(x\_0)(t)}{dt} = F(\phi(x\_0)(t))
$$
Often we write the above as:
$$
\phi(x\_0)' (t) = F(\phi(x\_0)(t))
$$
or even:
$$
\phi(x\_0)' = F(\phi(x\_0))
$$
Note that we are assuming that the initial time $t$ is $0$ without loss of generality, because given an ODE where $\psi(x\_0)(t\_0)=x\_0$:
$$
\psi(x\_0)' (t) = F(\psi(x\_0)(t),t)
$$
We can obtain a new ODE of the same form for $\phi(x\_0)(t)=\psi(x\_0)(t+t\_0)$.

I'll write $\phi\_F$ to refer to the solution to the ODE defined in terms of some $F$, i.e. the unique maximal solution (when it exists). We can also uncurry $\phi$, and write an ODE as:
$$
D\_2\phi\_F(x\_0,t) = F(\phi\_F(x\_0,t),t)
$$
Also note that when $F(x(t),t)=F(x(t),t')$ for any $t$, we say that the corresponding ODE is autonomous and abuse notation by writing $F(x(t))$, omitting the second argument.

## Existence and uniqueness theorems:

Peano existence theorem: If $F$ is continuous, a solution exists. We can prove this by constructing it from a series of linear interpolations, and using the Arzela-Ascoli theorem to show that this series of functions converges, and moreover converges to a solution. This is boring and fiddly to prove, so I'll omit it.

Picard existence theorem: If $F$ is continuous in both arguments and locally Lipschitz in $t$, $\phi\_F(x,t)$ exists in an interval around $0$ and is continuously differentiable in $t$. We prove this by considering the
$$
\phi(x\_0)'(t)=F(\phi(x\_0)(t),t)\Rightarrow \phi(x\_0)(t) = x\_0 + \int\_0^t F(\phi(x\_0)(t),t)dt
$$
Let $A : C\_1\to C\_1$ be an operator mapping defined as $ A[y] = \int\_0^t F(y(t),t)dt $

If $A$ has a fix point, then that fix point is a solution to the ODE defined by $F$. If $A$ is a contraction map on the metric space of $C\_1$ then it has a fix point. So we need only show it is a contraction map. This can be done with some careful analytic argumentation which is omitted here.

Note that this also gives a method (called Picard iteration) for constructing the solutions to particular differential equations, by analysing the sequence produced by repeated applications of $A$.

 Now consider a solution like:
$$
\phi\_{F}(x)(t)
$$
Think of this as a path through the space, with the first input representing the initial condition and the second representing the time. Note that $\phi\_F$ is a semigroup in $t$ (and if $F$ is uniformly Lipschitz, then it's even a group):
$$
\phi\_F(t+s,x)=\phi\_F(t,x)\circ\phi\_F(s,x);\quad \phi\_F(0,x)=x
$$
**Note**: this path cannot intersect any other path representing a solution with a different initial condition. The proof of this follows from a more specialized case: if $x\_0=y\_0$, then for $F:U\to\R^n$ then $\forall t: \phi\_F(x\_0)(t)=\phi\_F(y\_0)(t)$ at least where the domains of definition agree. The proof illustrates some useful tools, so I'll include it:

First suppose that $\phi\_F(x\_0):I\to \R^n$ and $\phi\_F(y\_0)(t):J\to \R^n$ for open intervals $I$ and $J$ both containing $0$. Then suppose that $\phi\_F(x\_0):I\cap J$ and $\phi\_F(y\_0)(t):I\cap J$ are not equal  Then for  $\tau = \inf\{t \in I\cap J : \phi\_F(x\_0)(t)\neq \phi\_F(y\_0)(t) \}$, $\phi\_F(x\_0)(\tau)=\phi\_F(y\_0)(\tau)$. Let $\bar{x}=\phi\_F(x\_0)(\tau)$. Then for a ball $B\_r(\bar{x})\subset U$, we can find $\delta>0$ such that for $t$, $\phi\_F(x\_0)(t)\in B\_r(\bar{x})$ and $\phi\_F(y\_0)(t)\in B\_r(\bar{x})$ .

We then set $L$ as $\sup\_{x\in B\_r(\bar{x})}||DF(x)||$, which gives us that $\forall t\in [\tau,\tau+\delta]: ||F(\phi\_F(x\_0)(t))-F(\phi\_F(y\_0)(t))||\leq L ||\phi\_F(x\_0)(t)-\phi\_F(y\_0)(t)||$

We now note that if $||F(z(t))||\leq L||z(t)||$ then:
$$ \frac{d}{dt}||z(t)||^2 = \frac{d}{dt}z(t)^Tz(t) $$
$$ = 2z(t)^T\frac{d}{dt}z(t) $$  
$$ = \langle 2z(t),F(z(t)) \rangle \leq 2||z(t)||\cdot ||F(z(t))||$$
$$ \leq 2||z(t)||\cdot L ||z(t)|| = 2L||z(t)||^2$$

We can now be rather clever, and note that $\frac{d}{dt}(e^{-2Lt}||z(t)||^2)\leq 2Le^{-2Lt}||z(t)||^2-2Le^{-2Lt}||z(t)||^2=0$, so  $e^{-2Lt}||z(t)||^2$ is monotone decreasing.

With $z(t)=\phi\_F(x\_0)(t)-\phi\_F(y\_0)(t)$, we have that $e^{-2Lt}||z(t)||^2$ is montone decreasing, which means that, since $e^{-2L\tau}||\phi\_F(x\_0)(\tau)-\phi\_F(y\_0)(\tau)||^2=0$, $\phi\_F(x\_0)(t)=\phi\_F(y\_0)(t)$ for $t\in[\tau,\tau+\delta]$, since otherwise the expression would be positive (norms are positive).

The fact that paths can never intersect is useful because it means we can often constrain the movement of a path. For example:

**Problem**: Show that for $x\in\R$, $F(x(t),t)=a(t)x(t)$, and $x_0>0$, $\forall t: \phi_F(x_0,t) >0$.

**Solution**: By assumption, $\phi(x\_0,0)=x_0>0$. If there exists a $t$ such that $\phi(x_0,t)<0$, then by the intermediate value theorem, $\exists t': \phi(x\_0,t')=0$. But $\phi(0,0)=0$, so $\forall t: \phi(0,t)=0$. This would be a contradiction. **Intuition**: to get to a negative value, you'd have to cross $0$, but then you'd cross another solution, namely the $0$ solution.

We can now introduce some powerful results about the domain of solutions of ODEs. For continuously differentiable (hence locally Lipschitz) $F : U\to \R^n$, solutions $\phi\_F(x,t)$ where $F$ is autonomous which are defined for $t\in (\alpha,\beta)$ for $\beta$ finite, $||\phi\_F(x,t)||$ either goes to infinity in finite time $t$, or

$d(U,\phi\_F(x,t))$ converges to $0$, i.e. the path converges to the boundary of $U$. Note that we assume $U$ is open, and that $d(U,y)$ for a set $U$ and a point $y$ is $\inf\_{z\in U}d(y,z)$.

That's a mouthful. The idea is that if the path doesn't continue for infinite time, the solution must either converge onto the boundary of the (finite) open domain, or go to infinity in finite time.

The contrapositive is equally useful: if $\phi\_F(x,t)$ stays within a closed set, or equivalently $||\phi\_F(x,t)||$ stays within a closed interval, then the solution exists for all $t >0$.

## Some Simple ODEs and their solutions

For some simple forms of $F$, we can derive a general solution. For example, suppose:
$$
F(x,t) = ax,\quad a\in \R
$$
Then, to find a general solution, first note
$$
\frac{d}{dt}(e^{-at}\phi(x\_0,t)) = -ae^{-at}\phi(x\_0,t) + e^{-at}\frac{d}{dt}\phi(x\_0,t)$$
$$ = e^{-at}(\frac{d}{dt}\phi(x\_0,t) - a\phi(x\_0,t)) = 0
$$
This means that $e^{-at}\phi(x\_0,t)=c$ for some constant $c$, so $\phi(x\_0,t) = ce^{at}$. Then $x\_0 = \phi(x\_0,0) = c$.

Now consider a more general case:

$$
F(x,t) = a(t)x(t)+f(t)
$$

for $a$ and $f$ continuous. We can apply a similar approach to before:

$$ \frac{d}{dt}(e^{-\int\_{0}^ta(s)ds}\phi(x\_0,t)) = -a(t)e^{-\int\_{0}^ta(s)ds}\phi(x\_0,t)  + e^{-\int\_{0}^ta(s)ds}\cdot (a(t)\phi(x,t)+f(t)) $$

$$ = e^{-\int\_{0}^ta(s)ds} = (a(t)\phi (x,t)+f(t) = - a(t)\phi(x\_0,t)) = e^{-\int\_{0}^ta(s)ds}f(t) $$

$$\Leftrightarrow e^{-\int\_{0}^ta(s)ds}\phi(x\_0,t) = \int\_{0}^t e^{-\int\_{0}^ta(s)ds}f(t) + c $$

$$\Leftrightarrow \phi(x\_0,t) = e^{\int\_{0}^ta(s)ds}(\int\_{0}^t e^{-\int\_{0}^ta(s)ds}f(t) + c)$$

Further:

$$
x\_0 = \phi(x\_0,0) = c
$$
Now for one final class of cases:
$$
F(x(t),t) = f(x(t))\cdot g(t)
$$
where both $g$ and $f$ are continuous, and $f$ has an open domain without $0$. Then suppose there exists a $\tau$ such that $\tau'(k)=\frac{1}{f(k)}$. What $\tau$ is may depend on the $F$, of course - that is, I don't think there's a general expression for it. Then:
$$
\frac{d}{dt}\tau(\phi(x\_0,t)) = \frac{1}{f(\phi(x\_0,t))}D\_2\phi(x\_0,t) = g(t)$$

$$\Rightarrow \tau(\phi(x\_0,t)) = \int g(t)dt + c $$

$$\Rightarrow \phi(x\_0,t) = \tau^{-1}(\int g(t)dt + c) $$

This approach is known as separation of variables. As an example, suppose you see $\frac{\partial}{\partial t}\phi(x\_0,t)=t(1+\phi(x\_0,t)^2)$. Then you can identify $f(x)=1+x^2,g(t)=t$. Further, you can remember from your trigonometry that $\int tan^{-1}(x)dx = \frac{1}{1+x^2}$. Using the above, $\frac{d}{dt}\tan^{-1}x(t)=\frac{1}{1+x(t)^2}x'(t) = t \Rightarrow x(t)=\tan(\frac{t^2}{2}+c)$

## Duhamel's Principle

For a linear operator $\psi$, consider $F\_1(x)=\psi(x)$ and $F\_2(x,t)=F\_1(x(t))+g(t)$. Duhamel's principle (also known as the Variation of Parameters principle) provides a connection between $\phi\_{F\_1}$ and $\phi\_{F\_2}$. In particular:
$$
\phi\_{F\_2}(x\_0,t) = \phi\_{F\_1}(x\_0,t) + \int\_{t\_1}^{t}\phi\_{F\_1}(g(s),t\_2-s)ds
$$
We can verify this by differentiating, taking care to use Leibniz' rule to differentiate under the integral:

$$ D\_2\phi\_{F\_2}(x\_0,t) = D\_2\phi\_{F\_1}(x\_0,t)+\int\_{t\_1}^{t}D\_1\phi\_{F\_1}(g(s),t-s)ds + \phi\_{F\_1}(g(t),0) $$
$$= \psi(\phi\_{F\_1}(x\_0,t))+\int\_{t\_1}^{t}\psi(\phi\_{F\_1}(g(s),t-s))ds + g(t) $$
$$ = \psi(\phi\_{F\_1}(x\_0,t))+\int\_{t\_1}^{t}\phi\_{F\_1}(g(s),t-s)ds) + g(t) $$
$$ = \psi(\phi\_{F\_1}(x\_0,t)+\int\_{t\_1}^{t}\phi\_{F\_1}(g(s),t-s)ds) + g(t) $$
$$= \psi(\phi\_{F\_2}(x\_0,t)) + g(t) $$


## The partial derivatives of $\phi$ :

Now consider:
$$
D\_2\phi\_F(x,t) = \frac{\partial \phi\_F(x,t)}{\partial t}
$$

$$
D\_2\phi\_F(x,t) = F(\phi(x,t))
$$



The derivative with respect to initial condition can be proven to exist as well, and moreover to be continuous, (I don't prove either here).
$$
D\_1\phi\_F(x,t)\_{ij} = \frac{\partial \phi\_F(x\_i,t)}{\partial x\_j}
$$


Intuitively, this is asking: how does the whole path change if I vary the initial condition by just a tiny bit.  This would seem reminisicent of functional analysis.

What can we say about this derivative? Well:
$$
D\_2D\_1\phi\_F(x,t)\_{ij} = \frac{\partial}{\partial t}\frac{\partial \phi\_F(x\_i,t)}{\partial x\_j} =$$
$$ \frac{\partial}{\partial x\_j}\frac{\partial \phi\_F(x\_i,t)}{\partial t} = \frac{\partial}{\partial x\_j}F\_i(\phi(x,t)) = DF(\phi(x,t))\_{ik} \cdot D\_1\phi\_F(x,t)\_{kj}
$$
This itself is a differential equation. To make this clear, write $H(t)=D\_1\phi\_F(x,t)\_{ij}$ and $A(t)=DF(\phi(x,t))$. Then:
$$
H'(t) = A(t)H(t)
$$
To solve this in closed form, we need to use some linear algebra; cue the next section.



## Linear Differential Equations

Linear differential equations have an $F$ of the following form, where $\psi(t)$ is a linear operator, and $f$ is continuous:
$$
F(x(t),t) = \psi(t)(x(t))+f(t);\quad x(0)=x\_0
$$
The approach to solving these is to use matrix exponentials ([see notes on linear algebra](/maths/linearalgebra)).

For a simple example, suppose $F(x(t),t)=\psi(x(t))$. Then, with some more analysis, we can show that $\phi\_F(x,t)=xe^{t\psi}$ is the unique solution as we'd expect.

For a harder example, consider an ODE deriving from $F(x,t)=\psi(x)+f(t)$. We can derive a solution by:
$$
\frac{d}{dt}(e^{-t\psi}\phi(x\_0,t)) = e^{-t\psi}(D\_2\phi(x\_0,t)-\psi(\phi(x\_0,t)))=e^{-t\psi}f(t) $$
$$\Rightarrow \phi(x\_0,t) = e^{t\psi} (\int\_{0}^te^{-s\psi}f(s)ds + x\_0)$$
Now returning to $H'(t) = A(t)H(t)$, the solution, analogous to the scalar case, is $e^{\int\_0^t A(s)ds}$, which means that $D\_1\phi\_F(x,t)= e^{\int\_0^t DF(\phi(x,s))ds}$

### Unitary Flow

Suppose that $\psi$ is skew-self-adjoint, i.e. $\psi^*=-\psi$. This might arise, for instance, if $\psi=i\tau$ and $\tau$ is self-adjoint. Then suppose $F(x)=\psi x$. Then $||\phi\_F(x,t)||$ is constant in $t$. This is because $\phi\_F(x,t)=e^{t\psi}x$ and $e^{t\psi}$ is unitary. It is unitary because $(e^{t\psi})^\*=e^{-t\psi}$, so $e^{t\psi}e^{-t\psi}=I$.

## Differential Flow

We can view $\phi$ as defining a flow in $\R^n$, and ask questions like: does the image of a set of some volume in $\R^n$ under $\phi$ have the same volume? In fluid dynamics, this is the question of compressability. So we are asking: what are the conditions for an incompressible flow? More formally, given a set $X$ and abusing notation so that $\phi(X,t)$ is the image of $X$ under $\lambda x \to \phi(x,t)$:
$$
Vol(\phi(x,t)) = \int\_{\phi(X,t)} 1 dx = \int\_{X} |\det D\_1\phi(x,t) | dx
$$


So what we want to know is the rate of change of the Jacobian $J(x,t)$=$\det D\_1\phi(x,t)$ that is, $\frac{d}{dt}\det D\_1\phi(x,t) $. If this is $0$, then the volume never changes.

Once again, let's define $H\_x(t)=D\_1\phi(x,t)$. Then:
$$
H\_x'(t)\_{ij} = DF(\phi(x,t))\_{ik} \cdot H\_x(t)\_{kj}
$$
First, $H\_x(0)\_{ij} = D\_1\phi(x,0)\_{ij}=\frac{dx\_i}{dx\_j}=\delta\_{i=j}$. This means that the initial value of $H$ is the identity matrix $I$. So know we know that if $\frac{\partial}{\partial t}J(x,t)$ is $0$, then the phase flow is incompressible and thus a volume of the space never changes under the flow.

OK, so now we would like to analyze $\frac{\partial}{\partial t}J(x,t)$ further.

Jacobi's formula (not derived here) is: $\frac{d}{dt}\det \phi = tr(\det(\phi)\phi^{-1}\frac{d\phi}{dt})$

This means that $\frac{d}{dt}\det H\_x(t) = tr(\det(H\_x(t))H\_x(t)^{-1}DF(x,t)\cdot H\_x(t))=tr(DF(x,t))\cdot det(H\_x(t))$. Or:
$$
\det H\_x(t) = \det H\_x(0)e^{\int\_0^ttr(DF(x(s)))ds}
$$
In other words, if the differential of $F$ is traceless, or in physics terminology, the divergence (trace of differential of $F$) is $0$, then the phase flow is incompressible.

Note for example that in a Hamiltonian system, divergence is $0$. To see this:

**Problem**: Let $F(x)=(DH(x)_1,-DH(x)_2)$. Show that $\nabla\cdot F=0$

**Solution**: $\nabla\cdot F = D_1D_2H(x)-D_2D_1H(x)=D_1D_2H(x)-D_1D_2H(x)=0$.

## Stability Theory

An equilibrium point $p$ satisfies $F(p)=0$.

We can then ask questions like: do points near a given equilibrium point stay near it over time (stability)? Do they converge to it when nearby (asymptotic stability)?

Formally, an equilibrium point $p$ is stable if  $\forall \epsilon>0,\exists\delta>0: \forall x\in B\_{\delta}(p) : (\forall t: \phi\_F(x,t)\in B\_{\epsilon}(p))$ . Here, I use $B\_{\alpha}(x)$ to denote the open ball in $\R^n$ of radius $\alpha$ centered at $x$.

An equilibrium point $p$ is asymptotic if $\exists \delta: \forall x\in B\_{\delta}(p): \lim\_{t\to\infty}\phi(x,t)=0$. In other words, if there's an open ball around $p$ such that all points in that ball get sucked to $p$.

There is no entailment in either direction between being asymptotic and being stable. For example, a flow which is composed of circular paths orbiting $p$ results in $p$ being stable, but not asymptotic. Conversely, there may be a flow in which some paths in any ball always go far away before converging to $p$.

 Note that a equilibrium point at $0$ also a solution, namely $\phi\_F(0,t)=0$. This is a nice perspective, because later we'll see convergence of ODE solutions not just to points, but to other solutions, so we can take convergence to equilibrium points as a simple case which we generalize.

We can first establish a number of useful and intuitive results about the behaviour of $e^{t\psi }$ when the eigenvalues of the linear operator $\psi$ have certain properties. For instance, suppose they all have negative real part. Then, making use of the $\Lambda N$ decomposition:
$$
\lim\_{t\to\infty}||e^{t\psi}x|| = \lim\_{t\to\infty}|e^{t\lambda\_i}|\cdot ||\sum\_{k=0}^{n-1}\frac{t^k(\psi-\lambda\_iI)^k}{k!}|| = \lim\_{t\to\infty}e^{tRe(\lambda\_i)}\cdot ||\sum\_{k=0}^{n-1}\frac{t^k(\psi-\lambda\_iI)^k}{k!}|| = 0
$$
The exponential term dominates, and this shrinks to $0$ with $t$. So $\lim\_{t\to\infty}e^{t\psi}=0$ for this $\phi$. Similarly, if all the eigenvalues have positive real part, the size grows exponentially.

This means that for $F(x,t)=\psi(x(t))$, $\phi\_F(x,t)$ is asymptotically stable.

Now consider an arbitrary linear operator $\psi: \C^n\to\C^n$ such that every eigenvalue has non-zero real part. Recall the generalized eigendecomposition, namely that $\C^n$ is a direct sum of eigenspaces. Consider the sum of only the subspaces which have negative eigenvalues, and call this subspace $\Phi\_{-}$. Similarly for $\Phi^{+}$. We call the projection maps into these two subspace $P\_{-}$ and $P\_{+}$ respectively. Further, $\ker P\_{-}\bigoplus\ker P\_{+}=\C^n$. And as we've already established: $\lim\_{t\to\infty}e^{t\phi}P\_{-} = 0 $ and $\lim\_{t\to-\infty}e^{t\phi}P{+} = 0 $.

We can interpret these as saying: if you go forward in time in $\Phi\_{-}$ or backward in time in $\Phi\_{+}$, you'll hit the $0$ equilibrium.

In fact, we can make the stronger statements that for $\alpha > 0$ such that $\forall i: \alpha <|Re(\lambda\_i(\psi))|$, it is the case that  $\lim\_{t\to\infty}e^{\alpha t}e^{t\phi}P\_{-} = 0 $ and $\lim\_{t\to-\infty}e^{-\alpha t}e^{t\phi}P{+} = 0 $. These are statements about the rate of the convergence. They're intuitive: the convergence happens at an exponential rate greater dominated by the largest (in absolute value) eigenvalue.

Now consider ODEs defined by $F(x(t),t)=\psi(x(t))+f(t)$ where $f$ is continuous and $\tau$-periodic. Again, eigenvalues of $\psi$ have negative real parts). We know from our exploration of linear ODEs that the general solution is:
$$
\phi(x\_0,t) = e^{t\psi} (\int\_{0}^te^{-s\psi}f(s)ds + x\_0)
$$
Now consider shifting the input by $\tau$:
$$
\phi(x\_0,t+\tau) = e^{(t+\tau)\psi} (\int\_{0}^{t+\tau}e^{-s\psi}f(s)ds + x\_0) = e^{(t+\tau)\psi} (\int\_{\tau}^{t+\tau}e^{-s\psi}f(s)ds + \int\_{0}^{\tau}e^{-s\psi}f(s)ds + x\_0) $$
$$ = e^{(t+\tau)\psi} (\int\_{0}^{t}e^{-(s+\tau)\psi}f(s+\tau)ds + \int\_{0}^{\tau}e^{-s\psi}f(s)ds + x\_0)$$
$$ = e^{(t+\tau)\psi} (e^{-\tau \psi}\int\_{0}^{t}e^{-s\psi}f(s)ds + \int\_{0}^{\tau}e^{-s\psi}f(s)ds + x\_0)$$

If we look at this last equation, we can see that if:
$$
\int\_{0}^{\tau}e^{-s\psi}f(s)ds + x\_0 = e^{-\tau\psi}x\_0
$$
then
$$
\phi(x\_0,t+\tau) = e^{t\psi} (\int\_{t\_0}^te^{-s\psi}f(s)ds + x\_0) = \phi(x\_0,t)
$$
So let's set $x\_0$ such that it satisfies this property:
$$
\int\_{0}^{\tau}e^{-s\psi}f(s)ds + x\_0 = e^{-\tau\psi}x\_0 \Leftrightarrow \int\_{0}^{\tau}e^{-s\psi}f(s)ds = (e^{-\tau\psi}-I)x\_0 \Leftrightarrow x\_0 = (e^{-\tau\psi}-I)^{-1}\int\_{0}^{t}e^{-s\psi}f(s)ds
$$
Finally, we know that $\xi=(e^{-\tau\psi}-I)$ exists because if the kernel of $\xi$ were not empty, then $1$ would be an eigenvalue of  $e^{-\tau k\psi}$ for every $k\in \Z$. But since we know that $\forall i:Re(\lambda\_i(\psi))<0$, $\lim\_{k\to\infty} e^{-\tau k\psi} = 0$. So the kernel of $\xi$ is empty, meaning that it is invertible.

Further, we can show that $\phi(x\_0,t)$, for this value of $x\_0$, is an *asymptotic* solution, in the sense that all other solutions converge to it in large positive time. There's a lovely way to show this. Just consider the behavior of $\chi(t)=  \phi(x\_0,t)-\phi(x\_1,t)$, where $x\_1$ is the initial condition corresponding to some other solution:
$$
\chi'(t) = \psi(\phi(x\_0,t)-\phi(x\_1,t))
$$
We can *solve* this (note the tool we're employing: consider the derivative of a function we want to analyze, obtain a differential equation, solve it using existing techniques) to obtain $\chi'(t)=(x\_0-x\_1)e^{t\psi}$ which we know from above converges to $0$.

Next, we can prove results about equilibrium points based on information about $DF$. The idea is to use knowledge about the linearization of the system at the $0$ equilibrium (obtained by taking the first order Taylor expansion, i.e. the derivative) to gain knowledge about the system as a whole. This turns out to be a very profitable approach. To see this, suppose $\phi(x,t)=0$ is a solution (i.e. $0$ is an equilibrium point). Further suppose that $\forall i: Re(\lambda\_i(DF(0)))<0$. That is, all real parts of the Jacobian's eigenvalues are negative. We can then prove asymptotic stability as follows:

Since $DF(0)$ has all real parts of its eigenvalues negative, $e^{tDF(0)}$ tends to $0$ with large $t$, and so for some $\tau$, $||D\_1\phi\_F(x,\tau)||\_{op}<\frac{1}{2}$

Further, because $\phi$ is continuously differentiable in both argument, we can find an $\eta$ such that $\forall y \in B\_{\eta}: \sup\_{t\in[0,\tau]}||\phi(y,t)||<\epsilon$. In other words, $\phi(y,t)$ stays in $B\_{\epsilon}$ until time $\tau$.

OK now we invoke the fact that any continuously differentiable $f$ with an open domain is locally Lipschitz in a sufficiently small ball around any point, and note that $\frac{1}{2}$ is the Lipschitz constant for points in $B\_{\eta}(0)$. This means that $||\phi(x,\tau)||\leq\frac{1}{2}||x||$ for $x\in B\_{\delta}(0)$ where $\delta$ is a positive number smaller than $\eta$.

OK, now we've shown that if you start inside $B\_{\delta}(0)$, the flow takes you closer. It's now just an inductive argument (omitted) which shows that $0$ is asymptotically stable.

The next result is called the stable manifold theorem. The idea is to note that for linear ODEs, there exists a stable subspace relative to the equilibrium point $0$, such that all points on this subspace converge to $0$ under the differential flow. For non-linear ODEs, things are not so simple, but delightfully, there is a stable *submanifold* of the space with the same property that the flow converges to the equilbrium (and exponentially fast), which is tangential to the stable subspace at the origin.

We now investigate what this stable submanifold $W\_{-}$ looks like. The approach is to define $g(t)=F(\phi\_F(x\_0,t))-\psi(\phi\_F(x\_0,t))$,  so that our non-linear equation can be written as a perturbation from a linear approximation: $D\_2\phi(x\_0,t)=\psi(\phi(x\_0,t))+g(t)$.

This allows us to use Duhamel's principle, to obtain: $\phi\_{F}(x\_0,t) = e^{t\psi}x\_0 + \int\_{t\_0}^{t}e^{(t-s)\psi}g(s)ds$. Recall that $P\_{-}$ and $P\_{+}$ refer to the projections into the stable and unstable subspaces respectively, which together "span" the space. What we now show is that we can derive an integral equation for which the solution is also a solution to $\phi\_F(x,t)$, and moreover which being a solution for is both a necessary and sufficient condition of being on the stable manifold.



Assume $x\_0$ lies on the stable manifold. Then project  $\phi\_{F}(x\_0,t) = e^{tA}x\_0 + \int\_{t\_0}^{t}e^{(t-s)A}g(s)ds$ onto the stable subspace, setting $t\_0=0$:
$$
P\_{-}\phi\_{F}(x\_0,t) = e^{tP\_{-}\psi}P\_{-}x\_0 + \int\_{0}^{t}e^{(t-s)P\_{-}\psi}P\_{-}g(s)ds
$$
Similarly, we can project onto the unstable subspace, here taking $t\_0\to\infty$ and noting that the first term on the right of the equation will vanish, given our assumption that $x\_0$ lies on the stable manifold (which consists of points destined for the origin):
$$
P\_{+}\phi\_{F}(x\_0,t) = -\int\_{t}^{\infty}e^{(t-s)P\_{+}\psi}P\_{+}g(s)ds
$$
Summing these two equations gives our desired integral equation, namely:
$$
\phi\_{F}(x\_0,t) = e^{tP\_{-}\psi}P\_{-}x\_0 + \int\_{0}^{t}e^{(t-s)P\_{-}\psi}P\_{-}g(s)ds -\int\_{t}^{\infty}e^{(t-s)P\_{+}\psi}P\_{+}g(s)ds
$$
Eyeballing this informally suggests that with $t\to\infty$,  $\phi\_{F}(x\_0,t)\to0$, if $x\_0$ is sufficently close in norm to $0$, which is true (after some careful argumentation) and shows that solutions to the above integral equation lie on the stable manifold. Note that this is a *new* equation. That is, it is not simply a rejigging of $\phi\_F(x\_0,t)=\psi(\phi(x\_0,t))+g(t)$, since to get it, we **assumed** that the solution lay on the stable manifold. In other words, it is not the case that all solutions of $\phi\_F(x\_0,t)$ are solutions of the above integral equation. However, it is true that a solution of the above integral equation is a solution $\phi\_F$ which preserves the stable manifold. Fortunately, we can construct solutions to this integral equation much in the same way as Picard iteration, i.e. by finding a fix point of the appropriate functional.

Moreover, for every point in the stable subspace $P\_{-}x\_0$, there's a corresponding version of the above integral equation and also a corresponding solution $\phi\_F$ with $P\_{-}x\_0+P\_{+}\phi(x\_0,0)$ lying on the stable manifold. So this determines the stable manifold: for every point in the stable subspace, solve the corresponding integral equation, and that gives you a point $x$ which is on the stable manifold.

This is all very informal, because the maths starts getting to be a bit of a trudge at this point, and honestly, you get the general idea.

A final note is that the tangent space to the stable manifold at $0$ is the stable subspace.

### Lyapunov Functions and Gradient Systems:

Suppose that there is a smooth function $L$ that is convex and attains a local minimum among points in some $B\_r(p)$, for $r>0$ and $p$ an equilibrium point.

We proceed by first choosing a positive $\epsilon \leq r$ and noting that $L(p)< \inf\_{x\in\partial B\_e(p)}L(x)$, where $\partial A$ is the boundary of a set $A$. We then use the continuity of $L$ to establish that there must exist a positive $\delta<\epsilon$ such that $\sup\_{x\in B\_{\delta}(p)}L(x)< \inf\_{x\in\partial B\_e(p)}L(x)$.

By way of contradiction, suppose that for some point $x\_0\in B\_{\delta}(p)$, $\exists t: \phi(x,t) \notin B\_{\epsilon}(p)$. Then for $\tau=\inf\{t\geq 0: \phi(x\_0,t)\notin B\_{\epsilon}(p)\}$, $\phi(x\_0,\tau) \in \partial B\_{\epsilon}(p)$ and for positive $t\leq \tau$, $\phi(x\_0,t) \in B\_{\epsilon}(p)$.

That means that  $\inf\_{x\in\partial B\_e(p)}L(x) \leq L(\phi(x\_0,\tau))$. But by the local convexity of $L$, we also know that $L(\phi(x\_0,0))=x\_0\leq \sup\_{x\in B\_{\delta}(p)}L(x)$.

If $L(\phi(x\_0,\tau))$ were less than or equal to $L(\phi(x\_0,0))$, then chaining together these inequalities would yield a contradiction, since we assumed that $\sup\_{x\in B\_{\delta}(p)}L(x)< \inf\_{x\in\partial B\_e(p)}L(x)$, and it would follow that $p$ must be stable (since the path cannot leave $B\_{\epsilon}$.

A sufficient condition for $L(\phi(x\_0,\tau)) \leq L(\phi(x\_0,0))$ is that $\langle \nabla L x, F(x) \rangle \leq 0$ for $x\in B\_r(p)$,since $\frac{d}{dt}L(\phi(x\_0,t)=\langle \nabla L \phi(x\_0,t), F(\phi(x\_0,t)) \rangle$. This condition (along with the local convexity), makes $L$ a Lyapunov function.

So if $L$ is a Lyapunov function for $p$, then we can then prove that $p$ is stable. If, additionally, $\langle \nabla L x, F(x) \rangle \neq 0$, $p$ is asymptotically stable. To see this further point

An extremely useful corollary is that if $F=-\nabla V$, for some real-valued $V$, and $V$ attains a minimum at $p$, then $V$ is a Lyapunov function, since $\langle \nabla Vx, F(x)\rangle = \langle \nabla Vx, -\nabla V(x)\rangle=-||V(x)||^2\leq 0$.

<!-- Also it happens that $F$ is a gradient field if and only if it has a self-adjoint differential, because $(D \nabla  V)\_{ij}=\frac{\partial V(x)\_i}{}$ TODO -->

### Lotka-Volterra Equation

This is an ODE used to model two populations, one of a predator, one of a prey. Let $x\_1$ be the number of prey, and $x\_2$ be the number of predators.

We start with the assumption that the prey has a positive growth rate (the result of reproduction rate minus death rate) without any interaction with the predactor. Call that rate $\alpha$.

$$\frac{d}{dt}x\_1(t)=\alpha x\_1 $$

The predator, on the other hand, without the prey, shrinks at rate $\beta$:

$$\frac{d}{dt}x\_2(t)=-\beta x\_2 $$

At this stage, the whole system is $\phi_F$, for $F(x\_1,x\_2)=(\alpha x\_1, -\beta x\_2)$

Now we add interaction terms. Assume that $N(t)$ is the interaction rate (number of interactions per time). Then we say:

$$\frac{d}{dt}x_1(t)=\alpha x\_1 - n\_1 N(t)$$
$$\frac{d}{dt}x_2(t)=-\beta x\_2 + n\_2 N(t)$$

Note that we assume both $\alpha$ and $\beta$ are positive. The idea here is that the predator population increased with interactions, and the prey decreases, each at their own rate. Note that we have already made an interesting assumption, which is that the rate of population growth of either predator or prey depends on their current population, rather than say, their mass. But $n\_1$ and $n\_2$ are really coming from the relative sizes of predator and prey (or another factor).

Now we add one more assumption, after which we will obtain the Lotka-Volterra equations. To wit:

$$N(t)=n\_3 x\_1(t)x\_2(t)$$

Defining $\gamma$ and $\delta$ appropriately, this gives us:

$$F(x\_1,x\_2)=(\alpha x\_1 - \gamma x\_1x\_2, -\beta x\_2 + \delta x\_1x\_2)=(x\_1(\alpha - \gamma x\_2),x\_2( \delta x\_1-\beta))$$

We can see that the upper quadrant (i.e. $\\{x\_1,x\_2: x\_1>0,x\_2>0\\})$ is invariant under the flow $\phi_F$. The easiest way to see this is to note that $\phi\_F((0,x\_2))$ lies along the y-axis and $\phi\_F((x\_1,0))$ lies along the x-axis, so no solutions can cross these.

Now consider the equilibria. By examination of $F$, $(\frac{\beta}{\delta},\frac{\alpha}{\gamma})$ and $(0,0)$ are the two equilibria. In general:


$$DF(x\_1,x\_2) = \begin{bmatrix}\frac{\partial F(x)\_1}{\partial x\_1}&\frac{\partial F(x)\_1}{\partial x\_2} \\\\\\ \frac{\partial F(x)\_2}{\partial x\_1}&\frac{\partial F(x)\_2}{\partial x\_2} \\\\\\end{bmatrix} = \begin{bmatrix} \alpha-\gamma x\_2 & -\gamma x\_1 \\\\\\ \delta x\_2  & \delta x\_1 - \beta  \\\\\\end{bmatrix} $$

So

$$ DF((0,0)) = \begin{bmatrix} \alpha & 0 \\\\\\ 0  & - \beta  \\\\\\end{bmatrix}  $$

Since $\alpha$ and $\beta$ are both positive, $DF((0,0))$ has one positive and one negative eigenvalue, and as such, is an unstable equilibrium. In fact, since this is a hyperbolic equilibrium, we can apply the stable manifold theorem, and in this simple case, it's unsurprising that the y-axis here is the stable manifold and the x-axis is the unstable manifold.

By contrast:

$$DF((\frac{\beta}{\delta},\frac{\alpha}{\gamma})) = \begin{bmatrix} 0 & -\frac{\gamma\beta}{\delta} \\\\\\ \frac{\alpha\delta}{\gamma}  & 0  \\\\\\end{bmatrix} $$

Solving for the eigenvalues gives: $\lambda^2 = -\frac{\gamma\beta}{\delta}\frac{\alpha\delta}{\gamma}$, so the eigenvalues are $\pm i\sqrt{ab}$.

We don't have any useful stability theorems when all eigenvalues are purely imaginary (although the linearized system will be periodic), so instead we'll use a different approach, which is to find a conserved quantity $L(x,y)$. In particular, we can find such a quantity which is convex which a strict minimum at the equilibrium. It then follows that solution paths must be level sets preserving $L$.

To obtain $L$, first note a sufficient condition for $L$ being invariant is that $\langle\nabla L(x), F(x)\rangle\frac{d}{dt}L(x)=0$. We have that $F(x)=(x\_1(\alpha - \gamma x\_2),x\_2( \delta x\_1-\beta))$, so $(x\_2( \delta x\_1-\beta),-x\_1(\alpha - \gamma x\_2))$ is orthogonal (just take the dot product to see that $[a,b]$ and $[b-a]$ are orthogonal).

This means that if we set $\nabla L(x) = \frac{1}{x\_1x\_2}(x\_2( \delta x\_1-\beta),-x\_1(\alpha - \gamma x\_2))=(\delta-\frac{\beta}{x\_1},\gamma-\frac{\alpha}{x\_2})$, then $L(x)=\delta x\_1 - \beta\log x\_1 + \gamma x\_2 - \alpha\log x\_2$, and furthermore, the equilibrium point $(\frac{\beta}{\delta},\frac{\alpha}{\gamma})$ is the only critical point (point where the total derivative is $0$) of $L$.

Applying Lyapunov's theorem for $L$ the Lyapunov function, we know that this equilibrium is stable. Informally, you can see that this means that the paths, which preserve $L$, have to be closed, bounded loops around the equilibrium.
