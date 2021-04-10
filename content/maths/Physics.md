---
title: "Mechanics"
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
$\newcommand{\pd}[2]{\frac{\partial #1}{\partial #2}}$


Principles of Quantum Mechanics, by R. Shankar, is really great. It's accessible, but covers a lot of material. The author believes in separating out the mathematical and physical concerns, which I like a lot. It's even a good intro to classical mechanics, via chapter 2.


<!--
## Classical Mechanics

The central idea is to model the motion of an object through time by a solution to a differential equation. For a simple case, suppose we're modeling a particle  with mass $m$ moving through space, being acted on by force $F$. The simplest Classical model is:
$$
\frac{\partial^2}{\partial t^2}\phi(x_0,t) = \frac{F(\phi(x_0,t))}{m}
$$

The larger the mass is, the less the particle accelerates.

Some terminology: call the set of values of $\phi(x_0,t) \in \R^n$ the configuration space. Call the Cartesian product of the configuration space and the real line, representing times, the state space. A point in the state space should always represent a state of the system we want to model, in the classical setting.

Writing $a=\frac{\partial^2}{\partial t^2}\phi(x_0,t)$ and rearranging gives the standard format of the equation: $F=ma$.
 -->
<!-- ### Deriving kinetic energy

Assume the principle of least action. Then assume that we are in a frame in which space is shift-invariant (homogeneous), rotation invariant (isotropic) and time is shift invariant (homogeneous), i.e. an inertial frame.

In such a frame, the Lagrangian of a body which is not being acted on must cannot depend on position, or even on the direction of its movement. Therefore it can only depend on $x$ through $\dot{x}^2$.
 -->
<!-- Assume further than boosts take inertial frames to inertial frames (this is not physical, as shown by special relativity, but is the assumption classical mechanics is based on). Then consider an infinitesimal boost of the form $x\mapsto x+\epsilon t$. In other words, a boost of speed $\epsilon$. Then expanding $L(v^2)= -->


### Variational (Lagrangian) Formulation of Classical Mechanics

Rather than specify a second order ODE $F=ma$ (or more explicitly, $\frac{d^2x}{dt^2}=\frac{1}{m}F(x)$) that determines a physical system, we can instead specify a functional equation $dA=0$, where $A=\int\_{t_0}^{t_1}L(q(t),\dot{q}(t),t)dt$, and $L$ is the function called the Lagrangian. The classical inertial frame, Cartesian coordinate Lagrangian is $L(q(t),\dot{q}(t),t)=T-V=\frac{\dot{q}(t)^2}{2m}-V(q(t))$.

From variational calculus (see [these notes](/maths/analysis)) we can use the Euler-Lagrange equation to find a *function* $x$ which satisfies the equation. Intuitively, this is the curve in the state space which minimizes the action $A$. For the above value of $L$, we get back $F=ma$ from doing this. But the power of the above is that it's very easy to change coordinate frames, and introduce different Lagrangians.

We say that the *generalized momentum* $p = \frac{\partial L}{\partial \dot{q}}$. For the Lagrangian above and Cartesian coordinates, this gives $p=mv$, but in general it doesn't.

**Important**: if you using a Euclidean coordinate system, it turns out that $L=T-V$, for the standard kinetic and potential energies. But this *isn't* true in coordinate systems which aren't rotation and shift invariant. So for example, to express the behavior of a pendulum, you want to use $\theta$ as your degree of freedom, but write $T$ and $V$ in terms of the Cartesian coordinates (which you then differentiate wrt. $\theta$ and $p_{\theta}$).

**Also important**: $\pd{L}{t}$ and $\frac{dL}{dt}$ are totally different quantities, because $L$ depends on $t$ both directly, and through $q$ and $\dot{q}$.


### Hamiltonian Formulation of Classical Mechanics

Consider $H := p\_i\dot{q}\_i - L$. Here, I'm using Einstein notation to sum over different dimensions indexed by $i$, since $q$ and $p$ can be multidimensional.

To see why this quantity (which is the Legendre transform of the Lagrangian) is important, first note that, :

$$ \frac{dL}{dt} = \pd{L}{q\_i}\dot{q}\_i+\pd{L}{\dot{q}\_i}\ddot{q}\_i + \pd{L}{t} $$

Now, assuming that Euler-Lagrange is satisfied, $\pd{L}{q\_i} = \frac{d}{dt}\pd{L}{\dot{q}\_i} = \dot{p}\_i$, so

$$ \frac{dL}{dt} = \dot{p}\_i\dot{q}\_i + p\_i\ddot{q}\_i + \pd{L}{t} = \frac{dp\_i\dot{q}\_i}{dt} + \pd{L}{t}$$

Then $\frac{dH}{dt}=-\pd{L}{t}$, so $H$ is a time-conserved quantity (the Hamiltonian) if the Lagrangian is not explicitly dependent on time.

More interestingly:

$$ \dot{p}\_i = -\pd{H}{q\_i} $$

$$ \dot{q}\_i = \pd{H}{p\_i}$$

If we consider a space of all the $p$ and $q$ dimensions together (*phase space*), then this system of equations tells us how a point in that space evolves.

We know by [Liouville's theorem](/maths/ODEs) that a divergence-free flow is incompressible. $H$ gives a [divergence free flow](/maths/ODEs), so phase flow is incompressible.

### Angular Momentum

Angular momentum $L = r\times p$.

Torque $N=\frac{dL}{dt}$

<!-- , since (in the 2D phase space case, so I can avoid those pesky indices):

$$ -->



<!-- ### Solution of $x''(t) = -DV(x)$ exists for all time

In Classical mechanics, we have (ignoring units and assuming $m=1$) that $x''(t) = -DV(x)$, and that as $||x||\to \infty$, $V(x)\to\infty$. We then find, via some straightforward calculation, that $E(t)=\frac{||x'(t)||^2}{2} + V(x)$ is constant.

This implies that $V(x(t)) \leq E(t) = E(0)$, so $V(x(t))$ is finite and accordingly $||x(t)||$ must be finite. Using the fact (see ODEs.md) that TODO UNDERSTAND WHY NEED NOT PROVE CLOSED INTERVAL

if $||x(t)||$ is finite, the solution exists at all times, we obtain our desired result. -->
<!--
## Deriving Kepler's laws

Kepler formulated three laws of planetary motion from experimental data, all of which are derivable from Newton's theory of gravity and motion. The laws:

- The orbit of each planet is an ellipse with the sun at one focus
- The line segment from the sun to a planet sweeps out constant area per time
- The square of the period of the orbit is proportional to the cube of the major axis of the ellipse

Newton's theory:

Let's suppose we model a planet $x_1$ as a point with mass $m_1$, and the sun also as a point $x_0$ with mass $m_0$. We'll assume these terms dominate so that the force $F(x_1(t))=m_0m_1G\frac{x_0(t)-x_1(t)}{||x_0(t)-x_1(t)||^3}$. This cubic term is there so that $||F(x_1(t))||\propto ||x_0(t)-x_1(t)||^{-2}$. This inverse quadratic relationship between force and distance is a famous fact about the classical model of gravity.

Newton's second law dictates that the second derivative of position $x_1(t)$ is equal to $F(x_1(t))$.

Newton's third law dictates that  $F(x_0(t))=-m_0m_1G\frac{x_0(t)-x_1(t)}{||x_0(t)-x_1(t)||^3}$

The total momemtum $p(t)=m_1x_1'(t)+m_0x_0'(t)$ is conserved (constant):
$$
p'(t) = mx_1''(t)+Mx_0''(t) = F - F = 0
$$
Also the center of mass $X(t)=\frac{m_1x_1(t)+m_0x_0(t)}{m_1+m_0}$ is a linear function of time:
$$
X'(t) = \frac{mx_1'(t)+Mx_0'(t)}{m+M} \propto p(t)
$$
So $X(t)=p(0)t+X(0)$. Ergo the center of mass moves with constant speed.

### Preservation of angular momentum

Define $x(t)=x_1(t)-x_0(t)$. In other words, add this to the position of the sun, and you get the position of the planet. -->



<!-- Finally, note that the norm of the cross product $||u\times v||$ is the same as the area spanned by $u$ and $v$. To see this, first choose coordinates so that $u=(u_1,0,0)$ and $v=(v_1,v_2,0)$. Then $u\times v = (0,0,u_1v_2)$, so that $||u\times v||=|u_1v_2|$ which is precisely the area of the parallelogram spanned by $u$ and $v$.

Further, $\frac{d}{dt}x(t)\times x'(t) = x(t)\times x''(t)+x'(t)\times x'(t) = x(t)\times x''(t)=x(t)=K(x(t)\times x(t))=0$, so $x(t)$ and $x'(t)$ both remain orthogonal to $x(t)\times x'(t)$ for all time. The result is that the path stays in a plane, orthogonal to position relative position and velocity.

Then, if $A(t)$ is the area swept out by the orbit up to time $t$, $dA(t)=\frac{1}{2}||x(t)\times dx(t)||=\frac{1}{2}||x(0)\times x'(0)||$ so that $A(t)=\frac{t}{2}||x(0)\times x'(0)||$. This is Kepler's second law.
 -->

### Hamiltonian Formulation of Quantum Mechanics

TODO

experiments: general

uncertainty principle: derive from the general one

Qualitative results:

Bound states, where $\phi(x)\to 0$ for $|x|-> \infty$, have quantized eigenvalues.

The node theorem, which is a result from Sturm-Liouville theory, pertains to bound states and states that $E\_n$ has $n$ nodes. This makes sense: higher energy states are wigglier, because they have more curvature.


### Lagrangian Formulation of Quantum Mechanics

The probability $U(x,x',t,t')$ of a particle ending up at $(x',t')$ given that it's in $(x,t)$ is a unitary operator.

It can be broken into two pieces, which gives an integral over the middle piece.

Indeed, it can be broken into n pieces.

TODO: path integrals

### Conservation

Various measurables *generate* unitary operators, and when these operators commute with the Hamiltonian, we get a conservation law. Here's an example with the translation operator $T\_a$:

$$ (T\_a\psi)(x) = \psi(x-a) = \int\_{n=0}^{\infty} \frac{1}{n!}(-a)^n\frac{d^n}{dx^n}\psi(x) = \int\_{n=0}^{\infty} \frac{1}{n!}(\frac{a}{i\hbar}P)^n\psi(x) $$

$$ \Rightarrow T\_a = e^{\frac{a}{i\hbar}P} $$

We then know (basic fact about Lie groups) that $T\_a$ is unitary.

Suppose that $T\_a$ commutes with the Hamiltonian, in that sense that $\bra{\phi}H\ket{\phi}=\bra{T\_a\phi}H\ket{T\_a\phi}=\bra{\phi}T\_a^THT\_a\ket{\phi}$. In quantum physics, it means that $[H,T]=0$. Noting that when $a$ is small, this exponential tends towards $1+\frac{a}{i\hbar}P$:

$$
0 = [H,T] = [H,e^{\frac{a}{i\hbar}P}] \to\_{a\to 0} [H, 1+\frac{a}{i\hbar}P]
$$

$$ \Rightarrow [H,P] = 0 $$

By the Ehrenfest theorem, this means that $\langle P \rangle$ is conserved.

The argument goes through almost the same classically, with Poisson brackets, in which case $p$ turns out to be conserved.

Similar results apply for angular momentum $L$, parity $\Pi$, and even time-translation invariance (which yields energy conservation).

### Probability Flow

If you take the probability $P\_{ab}(t)$ that a particle's position is between $a$ and $b$, which we can express as

$$ \int\_a^b \psi^*(x,t)\psi(x,t)dx $$

and then differentiate it, move the derivative under the integral, use Schrodinger's equation to change $\partial{\psi(x,t)}{t}$ to a partial derivative of $x$, and integrate by parts, you end up with:

$$ \frac{dP\_{ab}}{dt} = J(a,t)-J(b,t) $$

where $J(x,t) = \frac{i\hbar}{2m} \left( \psi\pd{\psi^\*}{x} - \psi^\*\pd{\psi}{x} \right)$ is known as the *probability current*, by analogy to other local conversation laws.
