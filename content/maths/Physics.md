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

## Special Relativity

This subject goes hand in hand with understanding coordinate frames.

Relativistic units are ones in which the speed of light is $1$,

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

# Relativity

Newton's first law is that there is a set of so-called *inertial* reference frames under which the laws of physics don't change, in the sense that the same differential equation determines them.

Inertial transforms are ones which switch between inertial reference frames. One particular kind of switch is called a Galilean transform, and is the switch between one reference frame, and the reference frame determined by a particle moving at a constant speed relative to that frame.

To make that clear, imagine that I'm standing at a point one a railroad. I measure distances along the railroad relative to myself. But a passenger on a train moving away from me at a constant speed might also measure positions relative to themselves, and their measurements would be different.

The transform can be expressed as: $(x,t)\mapsto(x-vt,t)$. That is, the position (here in 1 dimension) that I call $x$, the train passenger calls $x-vt$. Here, $v$ is the velocity of the train.

Einstein notes that this the assumption that this Galilean transform preserves inertial frames contradicts a second principle, that the speed of light is invariant across frames. The problem is pretty clear: if I perceive the speed of light moving away from me as $c$, then surely you should perceive it as $c-v$. But then the speed of light is relative.

The key idea of special relativity is to postulate that Galilean transforms do not preserve inertial frames, but rather a new kind of transform, Lorentzian transforms, do.

## Deriving the Lorentz transform


## Quantum Mechanics

The fundamental feel of quantum mechanics is that linear algebra is the "operating system". Roughly, the maths takes place in a category of vector spaces rather than of sets. This change is responsible for most of the fundamental, weird seeming differences, like the importance of measurement, and entanglement.

Here are the rules:

- A state is a *2-normalized* vector in some vector space over the complex field. In other words, its Euclidean norm is 1.
- A measurable is a self-adjoint (Hermitian) operator over that vector space.
- A measurement of a measurable results in a distribution over eigenvalues (all real because of the spectral theorem) of that measurable, each with probability given by the projection of the state onto the corresponding eigenvector.
- The new state after time $t$ is given by a unitary matrix $U(t)$. This unitarity means the past is predictable from the present.
- A mixed state is a probability distribution over pure states.


The expectation of a measurable $M$ given a state $s$ comes out to be $<s|M|s>$.

### Bra-ket notation:

Kets are vectors in the state space, bras are dual vectors, i.e. linear functionals from the space to $C$. The notation is basically a convenient visual pun, so that a bra and ket combine to give the inner product (or the outer product in the other direction).

### Time Evolution

An infinitesimal time change $(I - i\epsilon H)$ must also be unitary, so $I = (I - i\epsilon H)(I - i\epsilon H)^\* = (I - i\epsilon H)(I + i\epsilon H^\*) = I - i\epsilon H + i\epsilon H^\* \Rightarrow H^\* = H $. This means $H$ is self-adjoint, so is measurable. We call it the Hamiltonian, as it acts analogously to the classical Hamiltonian. Most notably, using the definition of a derivation and taking a limit of small $\epsilon$, $\hbar\frac{d\phi(t)}{dt}=-iH\phi$. $\hbar$, the reduced Planck's constant, is for the dimensions.

A more direct way to understand this is to recall that if $\frac{d\phi(t)}{dt}=H\phi$, then $\phi(t)=e^{tH}$ (a linear differential equation with a matrix exponential) so this is how the Hamiltonian evolves through time ($e^{tH}$ is unitary if $H$ is skew-self-adjoint, see [ODE notes](/maths/odes)).

Time evolution is particularly easy to solve in the basis of eigenvectors of the Hamiltonian, since then $H$ is diagonal.

### Composing systems

If you want states with multiple things, e.g. two particles, you need a tensor product of vector spaces. The key feature of the monoidal product in a category of vector spaces is that it is *not the categorical product* (in the category of Hilbert spaces that we are implicitly working in). You can't get the parts out of the whole. So if you have a fully specified state in the tensor product space, that need not give you any information about the subspace corresponding to one of your qubits.

Alternatively, using the trace trick, we can form from a state $\phi$ the projection operator $|\phi\rangle\langle\phi|$ (remember that $\phi$ is normalized), and note that $Tr|\phi\rangle\langle\phi|M$ is the expectation of $M$ in state $\phi$. More generally, a density matrix $\sum_ia_ie_ie_i^T$ gives you a *mixed* state.

The simplest non-trivial system is a 2D state space called a qubit or spin. It's called a spin cause the measurables themselves form a vector space isomorphic to real 3-space, and with a certain Hamiltonian, it acts like a classical particle with angular momentum. This is weird but nice.

Quantization is the act of taking a classical system and designing a quantum system that behaves like the classical system in the limit of $h\to 0$ (roughly). To quantize the motion of a classical particle, we need to upgrade to infinite dimensional Hilbert spaces.

In particular, take the space of functions which are normalizable (when you integrate them multiplied by their complex conjugate from $-\infty$ to $\infty$, you get a finite number).

Position is the operator: $X \phi x = x\phi(x)$. Momentum is the operator: $P \phi x = -ih\nabla_x\phi(x)$ (or $-ih\frac{d}{dx}$ for 1D case). n.b. Using $h$ for reduced Planck's constant - not really clear on what dimensions do yet.

Eigenfunction/eigenvalue pairs for $X$ are $\delta(x-k),k$. Eigenfunction/eigenvalue pairs for $P$ are $e^{-ihx}$.

This assumes $\phi$ is being expressed in the position basis (i.e. is a function of $x$). To make $\Phi$ (using capitals for the element in the vector space, rather than any concrete function) represented in the momentum basis, we do a Fourier transform.
