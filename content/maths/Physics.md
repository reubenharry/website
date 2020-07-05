---
title: "Physics"
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

# Physics

## Dimensions

This is a type system for the natural world. For example:

- mass: M
- length: L
- time: T
- speed: $LT^{-1}$
- acceleration: $LT^{-2}$
- force: $LDT^{-2}$
- energy: $ML^2T^{-2}$

For various common operations and objects, we can say useful things about their dimensions:

Probabilities are dimensionless.

Probability densities have dimensions such that integrating over them gives a dimensionless quantity. So for example, a distribution over a physical area with have a density with dimensions $L^{-2}$.

You can't exponentiate a dimensional quantity, because, by the power series expansion of the exponential, you can see that you would be adding incommensurate quantities, like $M+M^2...$ for example.

If $x$ has some dimension, an infinitesimal $dx$ has the same dimension.

If $x$ has dimension $X$ and $y$ has dimension $Y$, then $\frac{dx}{dy}$ has dimension $XY^{-1}$. Thinking about this is very helpful in thinking about what sort of thing a derivative is.

## Dimensional Analysis

## Classical Mechanics

The central idea is to model the motion of an object through time by a solution to a differential equation. For a simple case, suppose we're modeling a particle  with mass $m$ moving through space, being acted on by force $F$. The simplest Classical model is:
$$
\frac{\partial^2}{\partial t^2}\phi(x_0,t) = \frac{F(\phi(x_0,t))}{m}
$$
Note that I've written this in a slightly idiosyncratic way, consistent with ODEs.md. It says that the larger the mass is, the less the particle accelerates.

Some terminology: call the set of values of $\phi(x_0,t) \in \R^n$ the configuration space. Call the Cartesian product of the configuration space and the real line, representing times, the state space. A point in the state space should always represent a state of the system we want to model, in the classical setting.

Writing $a=\frac{\partial^2}{\partial t^2}\phi(x_0,t)$ and rearranging gives the standard format of the equation: $F=ma$.

### Deriving kinetic energy

Assume the principle of least action. Then assume that we are in a frame in which space is shift-invariant (homogeneous), rotation invariant (isotropic) and time is shift invariant (homogeneous), i.e. an inertial frame.

In such a frame, the Lagrangian of a body which is not being acted on must cannot depend on position, or even on the direction of its movement. Therefore it can only depend on $x$ through $\dot{x}^2$.

<!-- Assume further than boosts take inertial frames to inertial frames (this is not physical, as shown by special relativity, but is the assumption classical mechanics is based on). Then consider an infinitesimal boost of the form $x\mapsto x+\epsilon t$. In other words, a boost of speed $\epsilon$. Then expanding $L(v^2)= -->

### Choice of coordinate frame

There is any number of consistent ways to uniquely pick out a point $s$ in the state space with $n+1$ numbers. And to be clear: not just by using a basis set. For example, polar coordinates don't work by taking a sum of linearly independent vectors.

Classical mechanics starts with the intuition that certain changes of coordinates should **not** change the laws of motion. Others should. Ones that shouldn't are:

- shifting in space: $(x,t) \mapsto (x+x',t)$
-  shifting in time: $(x,t)\mapsto (x,t+t')$
- rotation:
- boosting:



Further, we should always expect that any set of coordinate frame transforms form a group: that is, any two can be composed, any one can be inverted, and there's a transform which does nothing (the identity).

*Inertial* coordinate frames in ones in which $F=ma$ (Newton's second law, but essentially implies the others) is satisfied. If a frame is inertial, then the frame obtained by translating, rotation, shifting in time, or boosting (moving away at a constant velocity) is also inertial.

To see this, consider the transformation $K$ between frames, such that a position $r_1$ in $f_1$ becomes $r_2=r_1-Vt_1$ in $K(f_1)=f_2$. $K$ is a boosting transformation.

Then, taking the derivative, $v_2=v_1-V$ and $a_2=a_1$ so that $F_1=F_2$: force is preserved.

Useful to imagine this is saying: if you take observations on a train moving at constant velocity, you can't tell that it's moving. But if it's accelerating, you can tell.

### Variational (Lagrangian) Formulation of Mechanics

Rather than specify an ODE that determines a physical system, we can instead specify a functional equation $\dA=0$, where $A=\int\_{t_0}^{t_1}L(q(t),q'(t),t)dt$, and $L$ is the function called the Lagrangian. The classical inertial frame Lagrangian is $L(q(t),q'(t),t)=\frac{q'(t)^2}{2m}-V(q(t))$.

From variational calculus, we can use the Euler-Lagrange equation to find a *function* $x$ which satisfies the equation. Intuitively, this is the curve in the state space which minimizes the action $A$. For the above value of $L$, we get back $F=ma$ from doing this. But the power of the above is that it's very easy to change coordinate frames, and introduce different Lagrangians.

We say that the *generalized momentum* $p = \frac{\partial L}{\partial \dot{x}}$. For the classical Lagrangian above, this gives $p=mv$, but in general it doesn't.

**Important**: if you using a Euclidean coordinate system, it turns out that $L=T-V$, for the standard kinetic and potential energies. But this *isn't* true in coordinate systems which aren't rotation and shift invariant. So for example, to express the behavior of a pendulum, you want to use $\theta$ as your degree of freedom, but write $T$ and $V$ in terms of the Cartesian coordinates (which you then differentiate wrt. $\theta$ and $p_{\theta}$).

TODO: write out pendulum example.

### Hamiltonian Formulation of Mechanics

Consider $H=\sum\_ip\dot{q} - L$.

Then on the one hand:

BLAH

But on the other:

$$\frac{d}{dt}H = \sum\_i \dot{q\_i}\frac{d}{dt}p\_i+p\_i\frac{d}{dt}\dot{q}\_i - \frac{\partial L}{\partial q\_i}\frac{dq\_i}{dt} - \frac{\partial L}{\partial \dot{q}\_i}\frac{d\dpt{q}\_i}{dt}$$

$$ = $$

So, equating terms:

$$ BLAH $$

Also note that

### Solution of $x''(t) = -DV(x)$ exists for all time

In Classical mechanics, we have (ignoring units and assuming $m=1$) that $x''(t) = -DV(x)$, and that as $||x||\to \infty$, $V(x)\to\infty$. We then find, via some straightforward calculation, that $E(t)=\frac{||x'(t)||^2}{2} + V(x)$ is constant.

This implies that $V(x(t)) \leq E(t) = E(0)$, so $V(x(t))$ is finite and accordingly $||x(t)||$ must be finite. Using the fact (see ODEs.md) that TODO UNDERSTAND WHY NEED NOT PROVE CLOSED INTERVAL

if $||x(t)||$ is finite, the solution exists at all times, we obtain our desired result.

# Waves

## Deriving the wave equation

# Mechanics

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

Define $x(t)=x_1(t)-x_0(t)$. In other words, add this to the position of the sun, and you get the position of the planet.

The cross product is an operation specific to three dimensions, but it is extremely handy in physics.

The cross product $(u\times v)^i=\epsilon_{ijk}u^jv^k$

Note that $(u\times v)^iu^i = \epsilon_{ijk}u^jv^ku^i=u^1u^2v^3-u^1u^3v^2+u^2u^3v^1-u^2u^1v^3+u^3u^1v^2-u^3u^2v^1=0$

Also note that $(u\times u)^i=u^ju^k-u^ku^j=0$

So the cross product of a two vectors $u\times v$ is orthogonal to $u$ and $v$, and the cross product of a vector with itself is $0$.

Finally, note that the norm of the cross product $||u\times v||$ is the same as the area spanned by $u$ and $v$. To see this, first choose coordinates so that $u=(u_1,0,0)$ and $v=(v_1,v_2,0)$. Then $u\times v = (0,0,u_1v_2)$, so that $||u\times v||=|u_1v_2|$ which is precisely the area of the parallelogram spanned by $u$ and $v$.

Further, $\frac{d}{dt}x(t)\times x'(t) = x(t)\times x''(t)+x'(t)\times x'(t) = x(t)\times x''(t)=x(t)=K(x(t)\times x(t))=0$, so $x(t)$ and $x'(t)$ both remain orthogonal to $x(t)\times x'(t)$ for all time. The result is that the path stays in a plane, orthogonal to position relative position and velocity.

Then, if $A(t)$ is the area swept out by the orbit up to time $t$, $dA(t)=\frac{1}{2}||x(t)\times dx(t)||=\frac{1}{2}||x(0)\times x'(0)||$ so that $A(t)=\frac{t}{2}||x(0)\times x'(0)||$. This is Kepler's second law.
