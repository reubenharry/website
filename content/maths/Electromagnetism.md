---
title: "Electromagnetism"
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
$\newcommand{\C}{\mathbb{C}}$
$\newcommand{\N}{\mathbb{N}}$
$\newcommand{\Z}{\mathbb{Z}}$
$\newcommand{\pd}[2]{\frac{\partial #1}{\partial #2}}$

Mostly summarizing David Griffiths' excellent and approachable *Introdution to Electrodynamics*.

Conventions: $\hat{r}$ for a unit vector, occasional use of bold for vectors, but mostly I'm too lazy.

Note: this is *classical* electromagnetism, so no special (or general) relativity, and no quantum. So it's a limited, but very effective model.

The relevant maths for this subject is mostly multivariable integration, so see e.g. [these notes](/notes/differentialforms). Those are probably more abstract than necessary, but the connection is that every imaginable manifestation of Stokes' generalized theorem comes up (the divergence theorem, the fundamental theorem for gradients, Stokes' (not so general) theorem, Green's theorem, etc).

One of the tricky things about this subject is that it consists of a mixture of simple theoretical ideas (e.g. the field resulting from a point charge), to real-world useful facts, which tend to be (at best) very hard to show analytically, or impossible in a classical model (e.g. magnetism in a material, why various materials are approximately Ohmic, etc). Since the things in the second camp are the ones that actually matter, you end up having to take a lot on faith and just get a general intuition. Which is fine, but contrasts with all the nice simple integral calculus of the simpler cases.

## Maxwell's equations

First, important to keep track of the types of the objects involved. $E$ and $B$ are vector fields, so functions $(\R^3, T) \to \R^3$, where $T=\R$ is time. These are objects of which you can take the curl and divergence.

Note that in presenting electromagnetism, there's some leeway in which direction you go. Griffiths, for example, starts with laws corresponding to easily verified experimental facts, like Coulomb's law and the Biot-Savart law, and works his way up to Gauss's law and Ampere's law, and then to Maxwell's equations in full. Here, I just stipulate Maxwell's equations and work down from them. Even more theoretical would be to stipulate a Lagrangian in terms of a vector potential, and derive Maxwell's equations from that. Anyway, Maxwell's 4 equations:

Gauss' law:

$$ \nabla \cdot E = \frac{\rho}{\epsilon\_0} $$

Then, Faraday's law.

$$ \nabla \times E + \pd{B}{t} = 0 $$

This law (Gauss' law for magnetism) prevents magnetic monopoles:

$$ \nabla \cdot B = 0 $$

<!-- This is a modification of Ampere's law, which holds only in magnetostatics, or is used approximately when currents change slowly (quasistatic approximation). Note that Ampere's law can't hold in general because $\nabla\cdot (\nabla\times B) = \mu\_0(\nabla\cdot J)$, and while the left must be $0$, the right needed be, outside of magnetostatics. But $\nabla\cdot J = -\pd{\rho}{t} = -\pd{}{t}(\epsilon\_0\nabla\cdot E) = -\nabla\cdt(\epsilon\_0\pd{E}{t})$, where $\epsilon\_0\pd{E}{t}$ is terms the displacement current, and added to the equation as follows: -->

This law (Ampere's law with Maxwell addition) related the time change of $B$ to the divergence of $E$:

$$ \nabla \times B - \mu\_0\epsilon\_0\pd{E}{t} = \mu\_0 J $$

What's $J$? If $I=\lambda v$ is a vector quantity representing current (change in charge over time) through a point, $J$ is the volume current density, in a direction. Say you integrate its magnitude over time and a flat surface, it gives the amount of charge to have flowed through that surface in that time. $J = \rho v$, where $\rho$ is the charge density and $v$ is its velocity.

Remarkably, it turns out that $\mu\_0\epsilon\_0 = \frac{1}{c}$, which comes straight out of *nowhere*.

A few more important facts which I'll assume throughout. Force in electromagnetics works as follows (Lorentz force law):

$$ F = Q(E+v\times B) $$

where $Q$ is the charge of the thing the force is acting on.


We'll also use the continuity equation, which is a pretty general fact about flows:

$$\nabla\cdot J = -\pd{\rho}{t}$$


Finally, $E$ and $B$ can be [Helmholtz decomposed](/maths/PDEs). E.g.

$$ E(r ) = \frac{1}{4\pi} \left(\nabla\times\left( \int \frac{\nabla\_{r'}\times E(r')}{||r-r'||} \right) - \nabla\left( \int\frac{\nabla\_{r'}\cdot E(r')}{||r-r'||}  \right) \right)$$

## Electrostatics

In general, the idea of electrostatics here is to find the electric field induced by some non-moving point charges or by a distribution of charge.

A simple but illustrative example is as follows. Suppose you have a rotationally symmetric charge distribution with total charge $q$, and you want the field $E$ outside it. In fact, say that it's a point distribution $q\delta^3$.

To find this, consider the flux through a spherical shell (known in this context as the Gaussian surface) surrounding the charge. We know that the total charge is $\int q\delta^3 = q$. Because the field points outward, and using Gauss' law and Stokes' theorem, we have that:


$$ \frac{q}{\epsilon\_0} = \int \frac{\rho}{\epsilon\_0} = \int \nabla\cdot E = \int E\cdot da = \int ||E|| da = ||E|| \int da = ||E||4\pi r^2 $$

$$ \Rightarrow ||E|| = \frac{q}{4\pi r^2\epsilon\_0} \Rightarrow E = \frac{q}{4\pi r^2\epsilon\_0}\hat{r}$$

This is Coulomb's law, the basis for electrostatics. Note, by the way, that we would have got the same result if the charge was any other rotationally symmetric distribution. This shows that the electric field from a sphere is the same as would be induced by a point charge at the center of the sphere. Something similar applies with gravity, which lets you treat planets as point masses, for the purposes of reasoning about the gravitational field they exert.

In one place, Coulomb's law is:

$$ E( r ) = \frac{1}{4\pi\epsilon_0}\frac{q}{||r-r'||^2}\hat{r-r'} $$

This is the notation (from Griffiths) that I'll use throughout. $r'$ is the position of the static charge, so that the field points in the direction from the charge to the point in question.

<!-- Although you can derive everything from a Lagrangian written in terms of the electromagnetic potential, you can also start from some more concrete assumptions instead. In particular, Coulomb's law, where $F$ is the force on a test charge $Q$, if there is only a single point charge $q$ that is at rest, where $r(q)$ is the position of $q$ and $s = r(Q)-r(q)$. (My understanding is that a test charge is taken to be a charge sufficiently small that we don't have to worry about the field it creates.) -->

<!-- $$ F = \frac{1}{4\pi\epsilon_0}\frac{qQ}{||s||^2}\hat{s} $$ -->


Importantly, another derivable assumption we make is that fields combine linearly, so that the field from two point particles at rest is the sum of the field from each separately. By that same linearity, the electric field from a volume with a charge *density* $\rho$ is:

$$ E( r ) = \frac{1}{4\pi\epsilon\_0} \int \frac{\hat{r-r'}}{||r-r'||^2}\rho(r')d\tau' $$

Often, it's useful to represent a field diagrammatically with *field lines*, which in the case of an electric field are directed lines orginating at a positive charge (or infinity) and terminating at a negative charge (or infinity), the density of which indicates the strength of the field.



### Techniques to tackle the problem

The following are some facts which help narrow down the problem of solving for $E$ a bit.

First, the electric field in electrostatics has the nice property that $\nabla \times E = 0$, which by Stokes' theorem means that $\int E\cdot dl = 0$, which means that the line integral of the electric field is path independent. This means that it makes sense to define:

$$ V( r ) := -\int\_{O}^r E\cdot dl $$

where $O$ is some standard reference point. Then, by another part of Stokes' theorem:

$$ \int\_a^b \nabla V\cdot l = V(b) - V(a) = -\int\_{O}^b E\cdot dl - \int^{O}\_a E\cdot dl = -\int\_{a}^b E\cdot dl $$

Then:

$$ \Rightarrow  E = -\nabla V $$

We can also get to $V$ directly from the Helmholtz decomposition and the assumptions of electrostatics ($\pd{B}{t}=0$, $J=0)$. If we do that, we see that the potential of a point charge:

$$ V( r) = \frac{1}{4\pi \epsilon\_0} \frac{q}{||r-r'||} $$

where $q$ is the amount of charge, and $r'$ is, as usual, the position of the charge. Similarly, for a charge distribution:

$$ V( r) = \frac{1}{4\pi \epsilon\_0} \int \frac{1}{||r-r'||}  dq $$

Where $dq$, in the case of volume, is the form $\rho d\tau$. To convince yourself of this, take the Laplacian, recalling that $\nabla\cdot\frac{\hat{x}}{||x||^2}=4\pi\delta^3$.

Importantly, potential in the electromagnetism sense is *not* potential energy. Rather, we have (in the static case) that $W = QV( r)$, where work $W$ is in units of energy. So potential is the potential energy per unit charge. Units of potential are *volts*.


### Gauss' law

The next important fact is Gauss' law:

$$ \int E \cdot da = \frac{Q\_{enc}}{\epsilon\_0} $$

This is one of Maxwell's equations, but to derive it instead from Coulomb's law, take the divergence of the electric field induces by a charge density:

$$ \nabla\cdot E( r) = \frac{1}{4\pi\epsilon\_0} \int \nabla\cdot\frac{\hat{r-r'}}{||r-r'||^2}\rho(r')d\tau' = K $$

and noting a nice fact from multivariable calculus + Fourier analysis, that $\nabla\cdot\frac{\hat{x}}{||x||^2}=4\pi\delta^3$, we have:

$$ K = \frac{1}{\epsilon\_0} \int \delta^3(r-r')\rho(r')d\tau' $$

$$ = \frac{1}{\epsilon\_0} \delta^3(r )\*\rho = \frac{\rho( r)}{\epsilon\_0}  $$

Which is (the differential form of) Gauss' theorem. Applying the divergence theorem adroitly:

$$ \frac{1}{\epsilon\_0} Q\_{enc} = \frac{1}{\epsilon\_0} \int \rho d\tau = \int\_V  \nabla\cdot Ed\tau = \int\_S E\cdot da $$

gives the integral form.

### Potential

Since $\nabla\cdot E = \frac{\rho}{\epsilon\_0}$, it follows that

$$ \nabla^2V = -\frac{\rho}{\epsilon\_0} $$

This is Poisson's equation, or when the right-hand side is $0$, Laplace's equation.

This is usually the thing we're trying to solve in electrostatics, since we might, for example, know the charge distribution, and $V$ on boundaries, and want to solve $V$ in some other space that has no charges in it.

Laplace's equation is amenable to the normal techniques that can be applied to PDEs, e.g. separation of variables.

In 3 dimensions (and in others, mutatis mutandis), solutions to Laplace's equation have the property:

$$ V( r) = \frac{1}{4\pi R^2} \int\_{S} Vda $$

where $S$ is a sphere of radius $R$ with its center at $r$. In other words, the value of $V$ at a point is the average of the surrounding points.

To see why this is true (there's presumably a more general proof, since I think this is a property of any n-dimensional Laplacian PDE), take the derivative of the average potential:

$$ \frac{dV\_{avg}( R)}{dR} = \frac{d}{dR}\frac{1}{4\pi R^2}\int VdS = \frac{1}{4\pi R^2} \int \frac{dV(\phi,\theta,R)}{dR} R^2 \sin\theta d\theta d\phi $$

$$ = \frac{1}{4\pi R^2} \int \nabla V \cdot dS\hat{r} = \frac{1}{4\pi R^2} \int \nabla^2V d\tau = 0  $$

The last three steps use the definition of the gradient in polar coordinates, the divergence theorem, and the fact that the potential satisfies the Laplace equation, respectively. This means that the sphere value is constant, so is the same in the limiting case of $R \to 0$, as desired.

As a corollary, $V$ can't have maxima or minima except on its boundaries, since then some sphere would witness a contradiction to the above.

Laplace's equation is also subject to quite useful uniqueness conditions. First, that the boundary conditions fully determine $V$. This proof is simple. Suppose that $V\_1$ and $V\_2$ are solutions with the same boundary conditions. Then $V\_3 := V\_1 - V\_2$ is $0$ on boundaries, and since $V\_3$ satisfies Laplace's equation ($\nabla^2V\_3 = \nabla^2(V\_1-V\_2)=0$), it cannot have maxima or minima, and so is $0$ everywhere.

As such, one technique to solve hard electrostatics problems is to find a simpler problem which has the same charge in the region of interest, and the same boundary conditions. For example, instead of finding the potential at a point, in the presence of an infinite conducting plane and a point charge above it, you can replace the plane by a point charge below it. Same boundary conditions, so uniqueness ensures that the ensuing potential and field are the same.

Also note that the Laplacian operator, $\nabla^2$, is Hermitian. As an example use of this, here is a simple proof of what is known as Green's reciprocity theorem:

$$ \int \rho\_1 V\_2 = \int (-\epsilon \nabla^2V\_1) V\_2 = -\epsilon\langle \nabla^2V\_1, V\_2 \rangle = -\epsilon\langle V\_1, \nabla^2V\_2 \rangle = \int \rho\_2 V\_1  $$

### Boundary discontinuity

When crossing a boundary, the electric field is discontinuous. A little informally, we can calculate the amount of discontinuity by locally linearizing, so that we're dealing with a plane with uniform charge density $\sigma$, and by using a Gaussian surface, in the form of a box around a small section of the plane. Then $\frac{\sigma A}{\epsilon\_0} = \int E\cdot da$, as the thickness of the box (height above and below the plane) tends to $0$, is $A(E\_{norm}^{above}-E\_{norm}^{below})$, where those terms are the upward pointing component of the field just above and just below the plane. The minus sign comes from the fact that the field below points in the opposite direction. So:

$$ E\_{norm}^{above}-E\_{norm}^{below} = \frac{\sigma}{\epsilon\_0} $$

### Multipole expansion

A single charge is a monopole. Two charges of opposite valencies near each other are a dipole.

As it turns out, there's a clever (approximate) expansion of the potential of a charge distribution at a far away point which separates it into terms that resemble the contribution of a monopole, dipole, quadropole, etc in the limit of a large distance from the n-pole.

$$ V( r ) = \frac{1}{4\pi \epsilon\_0} \sum\_{n=0}^{\infty} \frac{1}{||r||^{n+1}}\int r'^nP\_n(\cos\alpha)\rho(r')d\tau  $$

This is the *multipole* expansion. $r'$ is the vector to the volume element, $r$ is the vector to the point at which we are calculating $V$, $\alpha$ is the angle between them. $P\_n$ are the Legendre polynomials. To get this, we start with $ V( r) = \frac{1}{4\pi \epsilon\_0} \int \frac{\rho(r')}{||r'-r||^2}  d\tau$

and use the cosine rule to note that

$$||r'-r||^2 = ||r||^2 + ||r'||^2 - 2||r||||r'||\cos\alpha $$

$$ = r^2 \left( 1 + (\frac{||r'||}{||r||})^2 - 2\frac{||r'||}{||r||}\cos\alpha \right) = ||r||(1+\epsilon)$$

for the appropriate choice of $\epsilon$. Expanding this with the binomial theorem, grouping terms which share $(\frac{||r'||}{||r||})^n$ and simplifying gives the above formula. Useful to remember this:

$$ \frac{1}{||r-r'||} = \frac{1}{||r||}\sum\_{n=0}^{\infty}\left( \frac{||r'||}{||r||} \right)^nP\_n(\cos\alpha) $$

since it contains the "hard" part of the derivation. The first two terms of the multipole expansion can be written as:

$$ \frac{1}{4\pi \epsilon\_0} \left( \frac{1}{||r||}\int \rho(r')d\tau + \frac{\hat{r}}{||r||^2}\cdot\int r'\rho(r')d\tau \right) $$

The two integrals are called the monopole and dipole *moments* respectively. Note that the dipole moment, usually denoted $p$, is a vector. This works also for point charges, where the integral is a sum, so that $p=\sum\_iq\_ir\_i$. The *dipole contribution* to the potential is:

$$ V\_{dip}( r) = \frac{1}{4\pi\epsilon\_0}\frac{p\cdot \hat{r}}{||r||^2} $$

Also note that the potential of an actual dipole leads with the dipole term from the multipole expression above (the monopole term is $0$ since the net charge is $0$) but contains higher order terms. So a dipole refers either to a physical dipole, which contains higher order terms, or the idealized one with is just the dipole term. Also note that a physical monopole contains only the monopole term *only if* the monopole is at the origin.

Example (Griffiths, problem 3.30):

Suppose a sphere of radius $R$ carries a surface charge $k\cos\theta$. The symmetry means that the dipole moment must be aligned along the $z$ axis. In particular

$$ p\_z = \int (k\cos\theta) (R\cos\theta) R^2\sin\theta d\theta d\phi $$

$$ = 2k\pi R^3 \int\_0^{\pi} \cos^2\theta \sin\theta d\theta = -2k\pi R^3 \int\_0^{\pi} \cos^2\theta d(\cos\theta)   $$

$$ = -2k\pi R^3 \frac{1}{3}\cos^3\theta|\_0^{\pi} = \frac{4k\pi R^3}{3}  $$

The electric field of a dipole is best expressed in spherical coordinates. The convention is that the dipole moment $p$ is at the origin and points in the $\hat{z}$ direction. Then

$$ V\_{dip}( r,\theta) = \frac{1}{4\pi\epsilon_0}\frac{p\cos\theta}{||r||^2} $$

so all you have to do is take the gradient (in *spherical* coordinates), which gives:

$$ E\_{dip}(r,\theta) = \frac{p}{4\pi\epsilon\_0r^3}(2\cos\theta\hat{r}+\sin\theta\hat{\theta}) $$

For a single point charge $q$, the dipole moment is $qr$, where $r$ is the position vector.

*Example problem (Griffiths 3.47)*: show that the average field inside a sphere of radius R, due to all the charge within the sphere, is $E\_{ave} = -\frac{p}{4\pi\epsilon\_0R^3}$, where $p$ is the total dipole moment.


First note that the average field due to a single charge $q$ at point $r$ is $\frac{3}{4\pi R^3}\frac{q}{4\pi\epsilon\_0}\int \frac{\hat{l}}{||l||^2}   d\tau$, where $l$ points from $r$ to $d\tau$. Meanwhile, the field at $r$ of a uniformly charged sphere with charge $\rho$ is $\int \frac{\rho}{4\pi\epsilon\_0} \frac{\hat{-l}}{||l||^2} d\tau$. So setting $\rho = -\frac{3q}{4\pi R^3}$ makes the two integrals equal. But the second case, of the uniformly charged sphere is amenable to Gauss' theorem. That is, we can find the electric field at a radius $r$ by: $\epsilon\_0|E|\int da = \epsilon\_0\int E\cdot da = Q\_{enc} = -q$, so that $E\_{avg} = \frac{1}{\epsilon\_0}\rho\frac{4\pi r^3}{3}\frac{1}{4\pi r^2}\hat{r} = \frac{r\rho}{3\epsilon\_0}\hat{r} = -\frac{qr}{\epsilon\_04\pi R^3}\hat{r}$. But $p = qr\hat{r}$, so we have the result in the case the charge density is a point. But by linearity it generalizes to arbitrary distributions.


*Example problem (Griffiths 4.4)*

Find the force of attraction between a point charge and a neutral atom of polarizability $\alpha$.

We have that $F = (p\cdot \nabla)E = (\alpha E\cdot \nabla)E $. Also, $E = \frac{1}{4\pi\epsilon\_0}\frac{q}{r^2}\hat{r}$. So we get:

$$ \alpha \frac{q^2}{(4\pi\epsilon\_0)^2} \frac{1}{r^2} \pd{}{r}\frac{1}{r^2}\hat{r} = -\alpha \frac{2q^2}{(4\pi\epsilon\_0)^2} \frac{1}{r^5}\hat{r} $$

## Magnetostatics

The study of the regime in which $\nabla\cdot J = 0$ and $\pd{J}{t}=0$, which results in magnetic fields being constant in time. From Maxwell's equations, we get Ampere's law:

$$ \nabla \times B = \mu\_0J $$

Recalling the continuity equation, namely $\nabla\cdot J = -\pd{\rho}{t}$, it follows that in magnetostatics, where the divergence of $J$ is $0$, $\pd{\rho}{t}=0$.


The Lorentz force law is $F = Q(v \times B)$, where $v$ is the velocity of a charge $Q$. In the present case: $F = \int (v\times B)dq = \int (v \times B)\lambda dl = \int (I\times B)dl = \int I(dl\times B) $ . The final equation goes through if $I$ and $dl$ point in the same direction. And if $I$ is constant as position varies, then $ F = I \int dl\times B $.

Superposition applies, as in electrostatics, and we have an analogous law to Coulomb's, namely Biot-Savart, which we can get from the vector potential, which we get from the Helmholtz decomposition.

$$ B(r ) = \frac{\mu\_0}{4\pi}\int \frac{J(r')\times (r-r')}{||r-r'||^2}d\tau $$

<!-- First note that $\nabla\cdot B$, with $B$ as above, results in an integrand $\nabla \cdot \frac{J(r')\times (r-r')}{||r-r'||^2} = \frac{r-r'}{||r-r'||^2} \cdot (\nabla\times J(r')) - J(r')\cdot (\nabla\times \frac{r-r'}{||r-r'||^2})$. Both terms are $0$; $\nabla\times J(r')=0$ because $\nabla$ is in terms of the unprimed variables and $\nabla\times \frac{r-r'}{||r-r'||^2}=0$. So

$$ \nabla \cdot B = 0$$

and

$$ \int B\cdot a = \int \nabla \cdot B = 0 $$

Analogous to Gauss' law is Ampere's, derived as follows.

$$ \nabla \times B = \frac{\mu\_0}{4\pi}\int \nabla\times \frac{J(r')\times (r-r')}{||r-r'||^2}d\tau $$

$$ = \frac{\mu\_0}{4\pi}\left(\int J(r')\left( \nabla\cdot \frac{(r-r')}{||r-r'||^2}\right)d\tau - \int \left( J(r')\cdot\nabla\right) \frac{(r-r')}{||r-r'||^2}d\tau\right) $$

$$ = \frac{\mu\_0}{4\pi}\left(\int J(r')\left( 4\pi\delta^3(r-r')\right)d\tau + \int \left( J(r')\cdot\nabla'\right) \frac{(r-r')}{||r-r'||^2}d\tau\right)$$

The left-hand term gives us $\mu\_0 J( r)$ and the right-hand term evaluates to $0$ (there's a derivation in Griffiths, but it was just a lot of fiddly product rules for divergences and Stokes' theorem, so am not bothering to write it out). The result:


and therefore, by Stokes' theorem:

$$ \int (\nabla\times B) \cdot da = \int B\cdot dl = \mu\_0\int J\cdot da = \mu\_0I\_{enc} $$
 -->
Ampere's law has analogous applications to Gauss' law for electrostatics, i.e. making integrals easy. An example: first, finding $B$ around an infinite straight wire with steady current $I$. Then by Biot-Savart, we know that $B$ circles the wire, and is independent of angle. So at a distance $s$:

$$ \mu\_0I = \int B\cdot dl = B\int dl = B2\pi s \Rightarrow B = \frac{\mu\_0I}{2\pi s}$$


Analogous to the potential for electrostatics, we can introduce a *vector potential* $A$ such that $B = \nabla \times A$. (There is a theorem that a divergenceless field is the curl of another field).

Note that the curl of a gradient is $0$, so that $A$ is free to vary by $\nabla\lambda$. This varying is called a *gauge transformation*. Then supposing the original potential is $A\_0$, we can define $A = A\_0 + \nabla\lambda$ so that $\nabla\cdot A = \nabla A\_0 + \nabla^2\lambda$, and then solve Poisson's equation for $\lambda$ with  $\nabla^2\lambda=-\nabla\cdot A\_0$.

But then $\mu\_0J = \nabla \times B = \nabla \times (\nabla\times A) = \nabla(\nabla\cdot A) - \nabla^2A = -\nabla^2A$. We can solve this Poisson's equation to obtain, assuming $J\to 0$ at infinity:

$$ A(r ) = \frac{\mu\_0}{4\pi}\int \frac{J(r')}{||r-r'||}d\tau $$

Or more directly, we could get this from the Helmholtz decomposition of the magnetic field, along with the magnetostatic assumptions.

This allows its own multipole expansion, as with the electrostatic case, recalling that $\frac{1}{||r-r'||} = \frac{1}{r}\sum\_{n=0}^{\infty}\left( \frac{r'}{r} \right)^nP\_n(\cos\alpha)$, to obtain:

$$ \frac{\mu\_0I}{4\pi} \left( \frac{1}{||r-r'||}\int dl' + \frac{1}{||r-r'||^2}\int r'\cdot \hat{r}dl' ... \right)$$

The monopole integral vanishes. $m$ refers to the magnetic dipole integral.

Force on a dipole is $\nabla(m\cdot B)$. This means that the potential energy of a dipole is

$$ -\int\_{\infty}^r \nabla(m\cdot B) = -(m\cdot B(r ) - m\cdot B(\infty)) = -m\cdot B $$

(Similarly for an electric dipole.)






### Example: moving charge in a wire

Here's a nice example of a calculation. Suppose you have electrons moving through a cylindrical wire. Then $J=\rho\_{-}v\hat{x}$, the density of the electrons, and the total charge density is the sum of positive and negative: $\rho = \rho\_{-}+\rho\_{+}$. Then:

$$ B 2\pi s = \int B\cdot dl = \mu\_0I = \mu\_0 \pi s^2 J  \Rightarrow B = \frac{\mu\_0sJ}{2} = \frac{\mu\_0s\rho\_{-}v}{2} $$

$$ E 2\pi sd = \int E\cdot dl = \frac{\pi s^2d(\rho\_++\rho\_-)}{\epsilon\_0} \Rightarrow E = \frac{s(\rho\_+-\rho\_-)}{2\epsilon\_0} $$

At equilibrium, $E = -vB$, so

$$ \rho\_+ + \rho\_- = -\epsilon\_0\mu\_0\rho\_{-}v^2 \Rightarrow \rho\_+ = -\rho\_-(1-\frac{v^2}{c^2})  $$

## Relativity

If you imagine pulling a loop out of a zone with a uniform perpendicular magnetic field, you can see why a current would be generated, and indeed this is one case where $\int E\cdot dl = -\int \pd{B}{t}\cdot da$. But moving the magnetic field away has the same effect. This is obvious given relativity, but it was not obvious before Einstein that there wasn't just a unique reference frame in which you could talk about the movement of electric fields. So Faraday's law was an empirical surprise.

## Electromagnetism in the wild

### Conductors

The idealized model of a conductor assumes a charge distribution which moves to reach some equilibrium, under the influence of an electric field. So we're still dealing with electrostatics, in the sense that we're concerned with the resulting static state when you put a charge near a conductor, not how it gets there. In particular, a point charge near a conductor moves the charge distribution around on the conductor, which then induces a field of its own.

Conductors, under a field, reach an equilibrium, which means that they must have no electric field pointing in any direction that a charge could move in. That is, no electric field in the interior, and only a field normal to the surface on the surface. This is the basis for Faraday cages.

That means, by Gauss' law, that the internal charge must be $0$, and also that the potential at any two interior points must be the same. that would cause charge mass to move their charge on their boundaries.

#### Example

It's useful to see how you can avoid the complexity inherent in the fact that the electric field external to a conductor induces a charge which induces a field of its own. This example is Griffiths 3.8: an uncharged hollow conducting sphere of radius $R$ is placed in a uniform field $E\_0\hat{z}$. Find the resulting potential outside the sphere.

To formulate the boundary conditions, note that at large $z$, the effect from the sphere dies off, so that the field is just $E\_0\hat{z}$, meaning that the potential is $-E\_0z+C$. By symmetry (charge moves downwards and upwards in the same way), the x-y plane should retain the $0$ potential which we (can fairly assume) the sphere starts with. This forces $C=0$, and we get the boundary conditions: $V = 0$ for $r=R$ and $V \to -E\_0r\cos\theta$ for $r >> R$. Recalling the general solution

$$ V(r,\theta) = \sum\_{l=0}^{\infty} (A\_lr^l+\frac{B\_l}{r^{l+1}})P\_l(\cos\theta) $$

the first condition gives:

$$ A\_lR^l = -\frac{B\_l}{R^{l+1}} \Rightarrow B\_l = -AR^{2l+1}  $$

so that

$$ V(r,\theta) = \sum\_{l=0}^{\infty} A\_l(r^l-\frac{R^{2l+1}}{r^{l+1}})P\_l(\cos\theta) $$

and the second gives

$$ V(r,\theta) = \sum\_{l=0}^{\infty} A\_lr^lP\_l(\cos\theta) = -E\_0r\cos\theta $$

which means that $A\_l = -E\_0\delta\_{l=1}$

<!-- ### Energy and work

$$ dW = VdQ$$

Also, given here without a derivation:

$$ W = \frac{\epsilon\_0}{2}\int E^2 d\tau $$
 -->

### Dielectrics

In dielectric materials, charges are not free to move around as they are in a conductor, but are constrained. The simplest case to look at is just a single atom.

Here, dipoles turn out to be very important in practice, since the dipole contribution is often a good approximation for the field of an atom under an external field (which causes the nucleus and electron to form an effective dipole).

That is, an electric field on an atom induces a dipole moment, because the negatively charged electron cloud moves away from the field while the nucleus moves towards it. A rudimentary non-quantum model is still useful. In more complex molecules, there may already be an electric field, and this field will experience a torque turning it towards the external field. In general, the relationship between the external electric field and the dipole moment is linear, given via a *polarizability tensor* $\alpha$, with $p=\alpha E$.

*Example problem (Griffiths 4.2)*

A hydrogen atom, in quantum mechanics, has an electron charge distribution $\rho(r ) = \frac{q}{\pi a^3}e^{-2r/a}$. Find its polarization.

First note that, by Gauss' law, $\epsilon\_0\int E\cdot dr' = |E| \int dr' = 4\pi r^2 = Q\_{enc}( r) \Rightarrow E( r) = \frac{Q}{\epsilon\_04\pi r^2}\hat{r}$. Further

$$ Q\_{enc}( r) = \int \rho(r') = \frac{q}{\pi a^3} \int\_0^{2\pi}\int\_0^{\pi}\int\_0^r e^{-2r'/a} r'^2 sin\theta d\theta d\phi $$

$$ = \frac{4q}{a^3} \int\_0^r e^{-2r'/a} r'^2 = \frac{4qr^3}{3a^3} + O[\left(\frac{r}{a}\right)^4] $$

Then $E( r) = \frac{qr}{\epsilon\_03\pi a^3}\hat{r}$

But, understanding that $q$ represents the point charge of an electron at $r$, we can recognize this as a dipole, namely $\frac{p}{\epsilon\_03\pi a^3} \Rightarrow \alpha = \epsilon\_03\pi a^3$



For a dielectric material as a whole, a useful measure is the polarization $P$, which is the density of dipole moment per unit volume. We then can express the potential in terms of $P$:

$$ V( r) = \frac{1}{4\pi \epsilon\_0}\int \frac{P(r')\cdot (r'-r)}{(||r-r'||^2)} d\tau $$


The reason we can get away with this insane looking idealization of "dipole density per unit volume" is not obvious, since the actual microscopic field inside the dielectric is complex. What we really care about is the field that is averaged over some small area, so that the microscopic variations are smoothed. So $V$ above really refers to this field.

To see why the above equation is true (and here I'm paraphrasing Griffiths as usual, and am including this because it's a nice example of the toolkit, not because it's particularly enlightening to me), consider a small (relative to variation in $P$) sphere around a point $r$ in the dielectric. The average field at $r$ consists of the average over the sphere induced by charges outside and charges inside the sphere. The average from the outside charges is the same as the field produced at the center $r$ (a property of Laplace' equation, which is satisfied here), and $r$ is far enough away from these charges that the dipole moment approximately applies. Call this part of the potential

$$V\_{out}= \frac{1}{4\pi\epsilon\_0}\int\_{outside}\frac{P(r')\cdot (r'-r)}{||r'-r||^2}d\tau$$


Now note that the rest of this integral, i.e. the integral over the *inside* has $P$ effectively constant, since we chose the sphere to be small relative to $P$. As it turns out, the electric field produced by a uniformly polarized sphere is $-\frac{P}{3\epsilon\_0}$ inside the sphere (this is a boundary value problem you can solve).

But by the result from problem 3.47 that the average field from the *inside* charges is also $-\frac{p}{4\pi R^3\epsilon\_0}=-\frac{P}{3\epsilon\_0}$. This means that if we include both the inside and outside in the above integral, we're going to get the right result. Done.

#### Bound charges

Suppose you have an object with charge distributions of the form:

$$ \sigma\_b := P\cdot \hat{n} $$

$$ \rho\_b := -\nabla\cdot P $$

Then, the potential you would get from the whole object would be:

$$ V( r) = \frac{1}{4\pi \epsilon\_0}\left(\int\_{S}\frac{\sigma\_b}{||r-r'||}da + \int\_{V}\frac{\rho\_b}{||r-r'||} \right) $$

$$ =  \frac{1}{4\pi \epsilon\_0}\left(\int\_{V}\nabla\cdot\frac{\sigma\_b}{||r-r'||}da + \int\_{V}\frac{\rho\_b}{||r-r'||} \right)$$

$$ = \frac{1}{4\pi \epsilon\_0}\left(\int\_{V}\nabla\cdot\frac{P\cdot \hat{n}}{||r-r'||}da + \int\_{V}\frac{-\nabla\cdot P}{||r-r'||} \right)$$

which by a version of the product rule for divergences

$$ = \frac{1}{4\pi \epsilon\_0} \int\_V P\cdot\nabla(\frac{1}{||r-r'||})d\tau = \frac{1}{4\pi \epsilon\_0} \int\_V P\cdot(\frac{\hat{r-r'}}{||r-r'||^2})d\tau  $$

which is the potential of a dielectric with dipole moment density per unit volume $P$. We call $rho\_b$ and $\sigma\_b$ the *bound charges*, and use this equivalence to make our lives easier.

We go further, and say that the total charge is $\rho = \rho\_b + \rho\_f$, where $f$ stands for "free". Here I've swept $\sigma\_b$ into $\rho\_b$. In other words, we can think of a polarized dielectric as having bound charge and maybe also some free charge.

Defining electric displacement as $D = \epsilon\_0E+P$, we have that

$$ \nabla\cdot D = \nabla \cdot \epsilon\_0E + \nabla \cdot P = \rho - \rho\_b = \rho\_f $$

so that $\int D \cdot da$ is the total free charge enclosed in the dielectric. A linear dielectric is one where the polarization is proportional to the field: $P = \epsilon\_0\chi\_eE$, with $\chi\_e$ known as the *electric susceptibility*. In this linear case, $D = \epsilon E$, for the *permittivity* $\epsilon := \epsilon\_0(1+\chi\_e)$. The dielectric constant $\epsilon\_r := \frac{\epsilon}{\epsilon\_0}$. The generalization is a linear relation: $P = \epsilon\_0X E$, for a linear map $X$ which is, for reasons I don't yet understand, viewed as a bilinear map, i.e. by calling its representation in coordinates the susceptibility *tensor*.

Because $D$ has the above property, we can use it to avoid tricky parts of problems. For example (Ex 4.5, Griffiths) suppose you have a metal sphere of radius $a$ with charge $Q$ surrounded out to radius $b$ by linear dielectric of permittivity $\epsilon$. Then, the symmetry of the setup gives us $|D|\int da = \int D\cdot da = Q \Rightarrow D = \frac{Q\hat{r}}{4\pi r^2}$ for any $r > a$. Then for $a < r < b$, $E = \frac{Q\hat{r}}{4\pi r^2\epsilon}$ and $\frac{Q\hat{r}}{4\pi r^2\epsilon\_0}$ for $r > b$. So the potential is $V = -\int\_{\infty}^b\frac{Q\hat{r}}{4\pi r^2\epsilon\_0}dr - \int\_a^b \frac{Q\hat{r}}{4\pi r^2\epsilon}dr = \frac{Q}{4\pi}\left( \frac{1}{\epsilon\_b} + \frac{1}{\epsilon a} - \frac{1}{\epsilon b} \right)$

### Magnetic fields in matter

For reasons that seem but are not fairly simple (namely that electrons have a dipole moment and an external electric field applies a torque $N=m\times B$ which aligns them), materials with unpaired electrons tend to have a paramagnetic response to an external magnetic field, which is to say that these dipoles align to effect a net magnetization $M$ (density of dipoles per volume).

Other materials, for reasons which neither seem nor are simple, exhibit a diamagnetic response, where the dipoles point in the opposite direction to the external field.

Finally, other materials are such that neighbouring dipoles like to align, as in an Ising model. Iron being an exemplar. In this case, exposure to a magnetic field can have an effect even after the field is removed. See [these notes](/maths/statisticsmechanics).

The actual reasons for para/dia/ferromagnetism [necessarily](https://en.wikipedia.org/wiki/Bohr%E2%80%93van_Leeuwen_theorem) involve quantum mechanics, apparently. Cool.

At this point, there are many parallels to electrostatics. We have bound currents $ J\_b = \nabla \times M $ and $ K\_b = M \times \hat{n}$.

Parallel to $D$ is $H = \frac{B}{\mu\_0}-M$, so that $\nabla\times H = J\_f$. In linear media, for magnetic susceptibility $\chi\_{\mu}$, $M = \chi\_{\mu}H$ and for permeability $\mu = \mu\_0(1+\chi\_{m})$, $B=\mu H$.

$H$ tends to be more useful that $B$, because in the lab you normally control the free current, which is related to $H$.

## Electrodynamics

### Ohm's law

A large class of materials are approximately Ohmic, that is, satisfy:

$$ J = \sigma F$$

for fixed $\sigma$, the conductivity, which in a conductor tends to $\infty$, and in a resistor tends to $0$.

The reason for this behavior is complicated, and statistical in nature.

For steady currents in Ohmic materials, $ \nabla\cdot E = \frac{1}{\sigma}\nabla\cdot J = 0$. This gives Laplace's equation ($\nabla^2V=0$), which has a unique solution given boundary conditions. That's useful. For example, consider a cylinder of length $L$ and radius $d$ with a fixed potential $0$ at the left and $V\_0$ at the right. Assuming this as a boundary condition, and also that $J\cdot \hat{n} = 0 \Rightarrow E\cdot \hat{n} = 0 \Rightarrow \pd{V}{n} = 0$ around the other edges, a solution $V(x) = \frac{V\_0x}{L}$ exists and must therefore be unique. Then $E = -\nabla V = -\frac{V\_0\hat{x}}{L}$. So the electric field is uniform, and so too must be the current density. Then $I = J\pi d^2 = \sigma E \pi d^2 = \frac{\sigma \pi d^2 V\_0}{L}\hat{x}$.

Note that $I$ and $V$ are proportional, with a constant known as the resistivity $R$.

### Circuits

In a circuit, all the driving force is exerted in one region, e.g in a battery. But the accumulation of charge this causes leads to electrostatic force, which evens the current, so that it is effectively constant everywhere. This happens fast.

If $f\_s$ is the driving force per unit charge and $f$ is the total force per unit charge, then $f = f\_s + E$ and the emf (which stands for electromotive force, but is not a force) is $\mathcal{E} = \int f\cdot dl = \int f\_s \cdot dl$.

In a resistanceless source, the net force for a current $J$ is $0$, so $E = -f\_s$ in this source, and $V = -\int\_a^bE\cdot dl = \int\_a^bf\_s = \int f\_s \cdot dl = \mathcal{E}$. $a$ and $b$ denote the boundaries of the source.

Let the *magnetic flux* be $\Phi := \int B \cdot da$. Then, with a resistanceless source, $\mathcal{E} = \int f\_s \cdot dl = -\int E\cdot dl = -\int \nabla\times E da = \int \pd{B}{t} da = -\frac{d\Phi}{dt}$.

*Example: Spinning disk (Griffiths, example 7.4)*

Suppose you have a conductive disk of radius $a$ spinning with angular velocity $\omega$. A wire from one edge to the center forms a loop. $\mathcal{E} = \int\_0^a v\times B ds = \omega B\int\_0^bsds = \frac{\omega Ba^2}{2}, and $I = \frac{\mathcal{E}}{R}$.

*Example: LR circuit (Griffiths example 7.12)*

If a source provides emf $\mathcal{E}\_0$ to an LR circuit, that is, a circuit with an inductor and resistor in series and a source, and nothing else, then we have $IR = V = \mathcal{E} = \mathcal{E}\_0 - L\frac{dI}{dt}$, so solving the ODE, $I(t) = \frac{\mathcal{E}\_0}{R}(1-e^{-\frac{R}{L}t})$

### Waves

Suppose we are in free space, that is to say, there is no current or charge. Then:

$$ \nabla^2E = \nabla(\nabla\cdot E) - \nabla^2E = \nabla\times\nabla\times E $$

$$ = \nabla\times (-\pd{B}{t}) = -\pd{}{t}(\nabla\times B) = - \frac{1}{c^2}\pd{^2E}{t^2}$$

Likewise $\nabla^2B=\frac{1}{c^2}\pd{^2B}{t^2}$. Wave equations!

Recall that solutions to the wave equation $\pd{^2f}{z^2} = \frac{1}{v^2}\pd{^2f}{t^2}$ admit all solutions $f(z,t)=g(z-vt)=f(z-vt,0)$ or $f(z,t)=h(z+vt)=f(z+vt,0)$ and any solution is a sum of the form $g(z-vt)+h(z+vt)$.

For $f(z,t)=A\cos(k(z-vt)+\delta)$, $\lambda := \frac{2\pi}{k}$ is the wave length and $k$ is the wavenumber. At a fixed $z$, the system is a harmonic oscillator, with period $T=\frac{2\pi}{kv}$. More generally, the wave is the real part of $e^{i(kz-\omega t)}$ for $\omega=kv$. Solutions form a vector space, and complex exponentials span, so we study these to understand the general problem.

We say that the wave travels in a direction, since as you increase $t$, the whole graph of the function is translated left or right. Adding more dimensions gives more possible behaviors. The wave may oscillate in  $x$ and $y$ and $z$ separately, and could do so in or out of phase. In phase, the wave is linearly polarized. If it's out of phase such that at a fixed point, the wave moves in a circle, that's a circular polarization. The direction of propagation is then given by a vector (the wave vector).

Returning to the wave equation for $E$ and $B$, consider plane wave solutions $E(z,t) = Re[E\_0e^{i(kz-\omega t)}]$, where $k$ is the wave-vector. Because $\nabla\cdot E$ and $\nabla\cdot B$ are both $0$, both point orthogonally to the wave vector. They are also perpendicular to each other, from $\nabla\times E = -\pd{B}{t}$. (See [the section on fields of these notes](/maths/analysis) for curls and divergences of complex exponentials).

This all being the case, we can think of the wave as an object moved in the direction of the wave vector. This "particle" view then extends to thinking about things like the reflection, refraction and diffraction of waves.

## Other physical concepts

### Capacitance

Capacitance is a property of pairs of conductors. Since conductors are equipotentials, so can talk over the potential difference between two conductors. The specific setup where capacitance makes sense is this: we have a pair of conductors, one with charged $Q$ and one with $-Q$. As it turns out, potential difference, and also electric field, scale with $Q$. The constant of proportionality $C=\frac{Q}{V}$ is the capacitance.

For example, in a parallel plate capacitor, when the area $A$ is large relative to the distance between them, the charge density is $\sigma=\frac{Q}{A}$, so that the field is $\frac{Q}{\epsilon\_0A}$, and via a line integral, we find that $V = d\frac{Q}{\epsilon\_0A}$, so that $C = \frac{A\epsilon\_0}{d}$.

Charging a capacitor is the act of moving electrons from one plate (which becomes positive) to the other (which becomes negative). The work is $\int\_0^Q dW = \int\_0^Q Vdq =  \int\_0^Q (\frac{q}{C})dq = \frac{1}{2}CV^2$.

### Inductance

Given two parallel loops, a current in one induces a field $B\_1$, which induces a current in the other. The flux through the second loop, $\Phi\_2$, is proportional to $B\_1$, which is proportional to $I\_1$, the original current. The constant of proportionality is the inductance $M$, so that $\Phi\_2 = M I\_1$.

If we change the current in loop 1, but slowly enough for a quasistatic approximation (to allow the use of Bio-Savart), the change in $\Phi\_2$ induces a current in loop 2. In fact, it also induces a current in loop 1, with $\Phi\_1 = L I\_1$, with $L$ the self-inductance. Then $\mathcal{E} = -L\frac{dI}{dt}$. This is the back-emf, which opposes a change in current.

### Solenoids

A solenoid generates a uniform magnetic field up (or down) inside the cylinder, and nothing outside. Capacitors and solenoids are respective mechanisms for producing strong uniform electric and magnetic fields.



### The Hall effect

(Not to be confused with the Monty Hall "effect")

When a current runs through a sheet of a conducting material, and a magnetic field runs perpendicular to that current, charge moves to the top or bottom of the sheet, but which one depends on whether the charged particles that are moving are positively or negatively charged, so this setup allows you to distinguish between the two.

In particular, a current of positively charged particles moving through the sheet to the right, with the magnetic field pointing into the page, will be pushed up. (The deflection will continue until the electric force of the accumulated positive charge balances the magnetic one, so $QvB=QE$. So $\Delta V = \int E = \int vB = vBt$ for the thickness $t$ of the sheet). But if the current is made up of negatively charged particles, then if the current is right-flowing, the particles are left-flowing, and being negative, experience a force up too. So in that case, the top of the sheet will be negatively charged.


### Superconductivity

In a perfect conductor, $E = 0$ inside, so $\pd{B}{t} = -\nabla\times E = 0$ inside. So the magnetic field inside is some constant $K$. If $K=0$, the material is a superconductor. In this case, any loop inside has $\mu\_0I = \int B\cdot dl = 0$, so there are no currents inside.

<!--
### Problem 4.34
Find the bound charge in a capacitor filled with dielectric with dielectric constant varying linearly from $1$ to $2$.

We know that $D = \sigma\_f$ (consider a pillbox, as usual). Then $E = \frac{D}{\epsilon} = \frac{D}{\epsilon\_0\epsilon\_r} = \frac{\sigma\_f}{\epsilon\_0(1+\frac{x}{d})}$

We then relate $E$ and $V$, since $V$ is fixed across the plates:

$$ V = -\int\_d^0 \frac{\sigma\_f}{\epsilon\_0(1+\frac{x}{d})} dx = -\frac{d\sigma\_f}{\epsilon\_0} \int \frac{1}{1+\frac{x}{d}} d(1+\frac{x}{d}) = -\frac{d\sigma\_f}{\epsilon\_0} \log (1+{\frac{x}{d}})|\_d^0 = \frac{d\sigma\_f}{\epsilon\_0} \log 2$$

$$ \Rightarrow \sigma\_f = \frac{V\epsilon\_0}{d\log 2}$$

Then $P = \epsilon\_0\chi\_e E = \epsilon\_0\chi\_e \frac{\sigma\_f}{\epsilon\_0(1+\frac{x}{d})}$

$$ = \epsilon\_0\chi\_e \frac{\frac{V\epsilon\_0}{d\log 2}}{\epsilon\_0(1+\frac{x}{d})} $$

$$ = \epsilon\_0(1-\epsilon\_r) \frac{\frac{V}{d\log 2}}{(1+\frac{x}{d})} = \epsilon\_0 \frac{\frac{V}{d\log 2}}{(1+\frac{x}{d})} - \epsilon\_0 \frac{V}{d\log 2} = \epsilon\_0 \frac{V}{d\log 2} (1 - \frac{1}{1+\frac{x}{d}})  $$

That means that $\rho\_b = -\nabla\cdot P = -\pd{}{x}\epsilon\_0 \frac{V}{d\log 2} (1 - \frac{1}{1+\frac{x}{d}}) =  -\epsilon\_0 \frac{V}{d^2\log 2} \frac{1}{(1+\frac{x}{d})^2} $

so that the total bound volume charge is

$$ -\epsilon\_0 \frac{V}{d^2\log 2}\int\_0^d S \frac{1}{(1+\frac{x}{d})^2} dx $$

: round off -->
