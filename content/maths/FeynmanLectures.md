---

title: "Feynman Lectures"
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
$\newcommand{\RR}{\mathbb{R}}$
$\newcommand{\C}{\mathbb{C}}$
$\newcommand{\N}{\mathbb{N}}$
$\newcommand{\Z}{\mathbb{Z}}$

# Feynman Lectures

## Volume 1

### Chapter 1

### Chapter 2

Feynman sees science as the process of making falsifiable compositional theories of nature.

He outlines the 1920s understanding of physics.

- Atoms are made of a nucleus of positively charged neutrons and protons, surrounded by negatively charged electrons.

- particles are subject to two kinds of forces: gravitation, which is very weak, and electromagnetic force, which is really very strong indeed.

The reason electromagnetic force does not dominate all interactions is that there are positive and negative charges, and charges repeal if of like sign, and attract otherwise. This means that a particle of balanced charge exerts almost no force on a far away particle (but it's different for things that are close).

Magnetism, a force which arises from changing the electric field, is then discussed. The analogy of moving a cork in a pool by moving a second cork, which causes an oscillation in the water, is given. This has only short range effectiveness. But periodic motion of the first cork can have long range effectiveness.

Quantum physical, non-classical behavior of particles is then discussed, and the uncertainty principle, which provides an explanation for why electrons don't simply collapse to the nucleus, and why things move even near absolute $0$.

Nuclear forces are between particles in the nucleus.

Feynman then goes into a lot of messy detail about the state of understanding of nuclear (i.e. in atomic nucleus) particles and forces. His point is that it's still pretty messy.

### Chapter 3

Probably the sort of material that gives physicsts their reputation for being insufferably arrogant, and Feynman for being sexist. An overview of the core fields of scientific inquiry.

### Chapter 4

The plot thickens. Feynman starts with the postulate that there is no perpetual motion, which he equates to the conservation of energy.

He then considers simply weight lifting machines, in particular a machine which drops an object $o_1$ of mass $m_1$ a length of $l_1$ and raises an object $o_2$ of mass $m_2$ a length of $l_2$. Think of this as a state transition which can be performed when the objects are in the right positions. He notes that a certain class of machines is reversible, in the sense that they can do the same thing backwards too. Of course, if this existed physically, we'd have perpetual motion, by just doing the transitions back and forth: the point is that this reversible machine will be an upper bound.

He then observes that no machine exists which can lift $m_2$ higher (given the same $m_1, l_1$). This because such a machine would allow $o_2$ to be lowered to $l_2$, at which point the reversible machine could return to the original state, but with some other process having been moved along by this dropping of $o_2$ to $l_2$. This would enable perpetual motion. So reversible machines represent the theoretical optimum here.

The next question is what the relationship between the two masses and lengths. Feynman shows an argument that suggests an answer, and comments that nature indeed supports this experimentally. It goes as follows.

Assume that $o_2$ is actually $3$ stacked balls. Now further assume that $3m_1=m_2$. Then $l_2$, the height a reversible machine can lift $o_2$, must be the same as the height of $o_2$, since if this is the case, then a single ball has effectively been lifted $l_1$ height, and at no energy the original position can be restored, reversing the operation. So $l_2=\frac{l_1}{n}$.

WAIT NOT QUITE RIGHT

 So in raising by $l_2$, the stack has effectively shifted one ball up by $l_2n$,  Then the top ball of the stack is at the appropriate height to be dropped, so the experiment can repeat.

General perspective Feynman wants to convey is that physics is a process of *decompiling* nature (my words, not his), in the sense of taking sense data and finding rules (theories) which explain parts of it. Unifying theories is desirable, and often possible. Debugging theories, by making predictions with them, gathering experimental data, and refining the theories (Box's loop) is the essence of scientific inquiry.

Most differential equations (and other tools) useful for predicting nature are neither solvable analytically nor tractable to numerical approximate. As such, we need a third method: reasoning about invariant quantities.

$F=ma$ really applies in each direction separately, and this separability, while sort of obvious, is very important.

Equal and opposite reaction, namely that a particle exerting a force one another particle in one direction, has the opposite force exerted on it, yields that the sum of the two forces is constant. Further, since $F=\dot{p}$, the total momentum is constant, in the absence of external forces. And we'll be able to view external forces in the same way as internal ones.

### 12

Feynman points out that if force is just defined as mass times acceleration, then $F=ma$ is true by definition. So really, the import of Newton's claim that $F=ma$ is based on an expectation that we can make independent statements about the nature of forces, for example that they have material origins.

In fact, Feynman is saying that, insofar as it is a physical law, $F=ma$ is contingent and could be false.

### 13

Conservation of energy in free fall:

$$ E = T + U = \frac{mv^2}{2} + mgh $$

$$ \frac{dT}{dt} = mv\frac{dv}{dt} = vF = -\frac{dh}{dt}mg = -\frac{d(mgh)}{dt} = -\frac{dU}{dt} $$

This generalizes. In particular, for 3D motion, $\frac{dT}{dt} = F\cdot v = F \cdot \frac{ds}{dt}$, so that, by integrating both sides, $\Delta T = \int F\cdot ds$.

Various examples are given, including:

- the gravitational (or electrical) force exerts on a particle by an infinite sheet with constant mass (or charge).


### 14

Work:

$$ W = \int F\cdot ds $$

Power is work done per second.

For intuition, a table does no work in holding up a book that is on it.

$$ \frac{dE}{dt} = F\cdot v $$

Here take $E$ to be kinetic energy. Then easy to derive. The work done on a particle is the change in kinetic energy. Integrate the above to see that.


Conservative forces are such that $W=F\cdot ds$ is an exact one-form, and hence path-independent.

For a conservative force, the work is the negative of the change in potential energy. Take this as a definition of potential energy, i.e.:

$$ \int\_1^2 F\cdot ds = U(1)-U(2) $$

So for a system with conservative forces acting only, the change in the sum of kinetic and potential energy cancels, i.e. is $0$.

Example of voltage:

- consider two charged sheets (charged oppositely), some distance apart. This is called a parallel plate capacitor. We can consider the work in taking a charge from one to the other. If $U=q\phi$, then $W = \int F\cdot ds = q(\phi_1-\phi_2)$, and we call $(\phi_1-\phi_2)$ the voltage.

### 15

Let $m\_0$ be rest mass.

$$ m = \frac{m\_0}{\sqrt{1-\frac{v^2}{c^2}}} $$

Intuition: mass increases at high speeds. Fast electrons require a lot of force to alter their path.

Similarly, a gas at higher temperature has molecules at a higher speed, and thus, higher mass. To approximate how much, we use the generalized binomial theorem:

$$ m\_0(1-\frac{v^2}{c^2})^{-\frac{1}{2}} \approx m\_0 (1+\frac{v^2}{2c^2}) $$

What this suggests is that energy and mass are effectively the same. In fact this turns out to be the case, with:

$$ E = mc^2 $$

for an object at any velocity. Intuition: if you increase the velocity of an object, you increase not only its energy, but its mass.

The Michelson-Morley experiment investigates the theory that the absolute velocity of an object is determinable by how light behaves in the frame of that object. The idea is to split a beam of light into two perpendicular ones, one of which is pointing in the direction in which the earth spins, which is much faster than the other. The beams are reflected and then recombined and their phase difference is examined. The hypothesis is that this difference should vary as the orientation of the machine changes. This doesn't happen. Canonical example of interferometry.

### 16

"These philosophers are always with us, struggling in the periphery to try to tell us something, but they never really understand the subtleties and depths of the problem."

"That is a shocking fact to them; the very ones who claim it is obvious find, when you give them a specific fact, that it is not obvious."

$$ E^2 - P^2c^2 = m\_0^2c^4 $$

The above is seen by considering a frame in which motion relative to the particle in question is $0$. Since energy-momentum is a 4-vector, $E^2-P^2c^2$ is a scalar, so is the same in all frames. In this particular frame, $p=0$ so $E^2 - P^2c^2 = m\_0^2c^4$.

$$ Pc = E\frac{v}{c} $$

### 17

For a photon:

$$ E = h\nu $$

$$ p = \frac{h}{\lambda} $$

Where $\nu$ is frequency and $\lambda$ is wavelength, and $\nu = \frac{c}{\lambda}$.

Go back and read through this chapter again. Understand the derivations in more general linear algebraic terms.

### 18

The rate of change of the angular momentum is the torque.

$$ I = \sum\_im\_ir\_i^2 $$

$I$ is the moment of inertia. In the above, we imagine a rigid body consisting of particles indexed by $i$.

For angular momentum $L$, $L=I\omega$, where $\omega$ is angular velocity.
