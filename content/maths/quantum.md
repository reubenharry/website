---
title: "Quantum"
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


$\newcommand{\RR}{\mathbb{R}}$
$\newcommand{\R}{\mathbb{R}}$
$\newcommand{\C}{\mathbb{C}}$
$\newcommand{\N}{\mathbb{N}}$
$\newcommand{\Z}{\mathbb{Z}}$
$\newcommand{\pd}[2]{\frac{\partial #1}{\partial #2}}$
$\newcommand{\ket}[1]{| #1 \rangle}$
$\newcommand{\bra}[1]{\langle #1 |}$
$\newcommand{\inner}[2]{\langle #1 | #2 \rangle}$
<!-- $\newcommand{\expectation}[3]{\langle #1 | #2 | #3 \rangle}$ -->


Absolute basics of quantum physics. Mostly from "Quantum Mechanics: The Theoretical Minimum", which I liked very much.

The fundamental feel of quantum physics is that linear algebra is the "operating system". Roughly, the maths takes place in a category of Hilbert spaces rather than of sets. This change is responsible for most of the fundamental, weird seeming differences, like the importance of measurement, and entanglement.

Most quantum physics courses (at least this is my impression) focus on the PDEs which arise when you use the principles of quantum physics to model e.g. a particle, or on the experiments which gave rise to the theory. It's nice to separate that from the abstract principles though, which is what these notes are about. That's the spirit of "Quantum Mechanics: The Theoretical Minimum".

<!-- Notes on actually using the principles of quantum physics to model e.g. particle mechanics are in [these notes](/maths/Experiments.md). The focus there is on the PDEs and Fourier analysis that arise from things like position and momentum operators on the Hilbert spaces of functions, but the general principles are more abstract. -->

Here are the rules:

- A state is a vector in some (dimension could be finite or infinite, depending on what's being modeled) vector space over the complex field whose Euclidean norm is 1.
- A measurable is a self-adjoint (i.e. Hermitian) operator over that vector space.
- A measurement of a measurable results in a distribution over the spectrum, i.e. the eigenvalues of that measurable (all real because of the spectral theorem), each with probability proportional to the square norm of the projection of the state onto the corresponding eigenspace (this last part is the Born rule).
- importantly, the measurement causes the state to change to the projection of the previous state onto the eigenvector corresponding to the observed eigenvalue. Or if you prefer, a measurement induces a distribution over states which you can then propagate onwards to the next measurement
- measurement is idempotent: if you measure, it collapses the state, and measuring again gives the same result
- The new state after time $t$ is given by a unitary matrix $U(t)$. This unitarity means the past is determinable from the present (if you know the present).
- A mixed state is a probability distribution over pure states, and can be represented by an operator with a corresponding matrix called the density matrix.

In general, things which classically are states correspond to eigenvalues of measurables in the quantum setting. So a quantum bit (qubit) has two eigenvalues, and a quantum particle (in 1D) has eigenvalues in $\RR$.

Useful to think of actually performing a measurement as like running an unsafe IO operation in Haskell to go from a distribution to a value.

### Expectation:

$$ \langle a | L | a \rangle = \sum\_i a^{\*}\_i (La)\_i = \sum\_i a^{\*}\_i a\_i \lambda\_i = \langle S(L) \rangle\_{a} $$

Where $\langle S(L) \rangle_{a}$ is the expectation of the spectrum of $L$ under the probability distribution induced by $a$.

### Bra-ket notation:

Kets are (normalized) vectors in the state space, bras are dual vectors, i.e. linear functionals from the space to $\C$. The notation is basically a convenient visual pun, so that a bra and ket combine to give the inner product (or the outer product in the other order).

What is important about the notation is that it's used across finite and infinite dimensional settings, and emphasizes the things that generalize between these settings. In particular, note that a bra or ket is *basis independent*, and is put into a basis by projection.

Another useful convention is that, e.g. $\bra{p}$ denotes the eigenvector of $P$ which has $p$ as its eigenvalue.

### Phase factor

Multiplying any ket by $e^{i\theta}$, for $\theta\in \RR$ won't change any of its measurable properties.

### Time Evolution

An infinitesimal time change $(I - i\epsilon H)$ must also be unitary, so $I = (I - i\epsilon H)(I - i\epsilon H)^\* = (I - i\epsilon H)(I + i\epsilon H^\*) = I - i\epsilon H + i\epsilon H^\* \Rightarrow H^\* = H $. This means $H$ is self-adjoint, so is measurable. We call it the Hamiltonian, as it acts analogously to the classical Hamiltonian. Most notably, using the definition of a derivation and taking a limit of small $\epsilon$, $\hbar\frac{d\phi(t)}{dt}=-iH\phi$. $\hbar$, the reduced Planck's constant, is for the dimensions. So to summarize, Schrödinger's equation is:

$$ \hbar\frac{d}{dt}\ket{\Phi(t)} = -iH\ket{\Phi} $$

A more direct way to understand this is to recall that if $\frac{d\phi(t)}{dt}=X\phi$, then $\ket{\Phi(t)}=e^{tX}\ket{\Phi(0)}$ (by solving the linear differential equation with a matrix exponential) and if $X=iH$ with $H$ Hermitian, that $X$ is skew-self-adjoint and as a consequence, $e^{tX}$ is unitary (see the section on unitary flow in [ODE notes](/maths/odes)).

As the name suggests, $H$ is the measurable corresponding to the energy of the system.

Time evolution is particularly easy to solve in the basis of eigenvectors of the Hamiltonian, since if we express $\ket{\Phi(t)}=\sum_ia_i(t)\ket{E_i}$, then:


$$ -\frac{i}{\hbar}\sum_ia_i(t)E_i\ket{E_i} = -\frac{i}{\hbar}H\sum_ia_i(t)\ket{E_i} = -\frac{i}{\hbar}H\ket{\Phi(t)}$$


$$\frac{d}{dt}\ket{\Phi(t)}=\frac{d}{dt}\sum_ia_i(t)\ket{E_i} = \sum_i\frac{d}{dt}a_i(t)\ket{E_i}  $$

Consequently, $-\frac{iE\_i}{\hbar}a\_i(t) = \frac{d}{dt}a_i(t) $, which means that $a_i(t)=e^{-\frac{i}{\hbar}E_it}a_i(0)$

(note that $i$ is both the complex unit and an index above)

### The Commutator

$$ [A, B] = AB-BA $$

The commutator is antisymmetric and linear in the first argument. If $A$ and $B$ commute, it is $0$.


### Time Evolution of Expectation

$$ \frac{d}{dt}\langle L \rangle_{\Psi(t)} = \frac{d}{dt} \inner{\Psi(t)}{L|\Psi(t)} =  \inner{\frac{d}{dt}\Psi(t)}{L|\Psi(t)} + \inner{\Psi(t)}{L|\frac{d}{dt}\Psi(t)}$$

$$ = \inner{\frac{i}{\hbar} H\Psi(t)}{L|\Psi(t)} + \inner{\Psi(t)}{L|\frac{i}{\hbar} H\Psi(t)} = \frac{i}{\hbar} \inner{ H\Psi(t)}{L|\Psi(t)} - \frac{i}{\hbar} \inner{\Psi(t)}{L|H\Psi(t)} $$

$$ = \frac{i}{\hbar} \inner{\Psi(t)}{HL|\Psi(t)} - \frac{i}{\hbar} \inner{\Psi(t)}{LH|\Psi(t)} = \frac{i}{\hbar}\langle[H,L]\rangle\_{\Psi(t)} = -\frac{i}{\hbar}\langle[L,H]\rangle\_{\Psi(t)}   $$

Therefore, if $A$ is an observable, and $[A,H]=0$, then the expectation of $A$ is constant in time. A special case is $[H,H]=0$: so the Hamiltonian, which measures the energy, is conserved.

Also note that then the Poisson bracket (as in classical mechanics) can be interpreted as $[L,H] = i\hbar\\{L,H\\}$, so that we recover the classical rule for change over time of a quantity.

### Projection operator and density matrix

Note that for $\ket{\Phi}$, $\pi=\ket{\Phi}\bra{\Phi}$ is a linear operator. In fact, $\pi$ is a projection operator, which is to say that $\pi^2=\pi$ and that $\pi$ is Hermitian:

$$ \left(\ket{\psi}\bra{\psi}\right)\left(\ket{\psi}\bra{\psi}\right) = \ket{\psi}\left(\bra{\psi}\ket{\psi}\right)\bra{\psi} = \ket{\psi}\bra{\psi} $$

For the above, recall that a ket is normalized, by assumption. Being Hermitian, it is a measurable, and in fact it will have one 1D eigenspace with eigenvalue 1, namely the span of $\ket{\Phi}$ and all other eigenvectors with eigenvalue $0$. This means that the trace, being the sum of the eigenvalues, is $1$.

Also, if we have an orthonormal basis $\ket{i}$ (with $i$ ranging over the basis vectors), then

$$ \sum_i \ket{i}\bra{i} = I$$

This should be understood as the statement: if you take a vector, decompose it into its components along a basis, and then add those components back together, you get back what you started with.

We can also use the trace trick to see that

$$ \langle \Phi | L | \Phi \rangle = Tr(\langle \Phi | L | \Phi \rangle) = Tr( \ket{\Phi}\bra{\Phi} L) $$

### Density matrix

If we have uncertainty about what state we're in, there's a very convenient way to express that. Suppose, for example, that $p$ is a distribution over state vectors, so that the probability of a state $\ket{\Phi_i}$ is $p(\ket{\Phi_i})$. Then $\rho = \sum_ip\left(\ket{\Phi_i}\right)\ket{\Phi_i}\bra{\Phi_i}$ is called the density matrix (or operator) and by the linearity of the trace:

$$ \langle L \rangle = Tr(\rho L)$$


### General uncertainty principle

Uses the following form of the Cauchy-Schwartz inequality:

$$ |X||Y| \geq \frac{1}{2}| \langle X|Y \rangle + \langle Y|X \rangle | $$

Let $X=A\ket{\Psi}$ and $Y=iB\ket{\Psi}$

$$Var\_{\Psi}(A)\cdot Var\_{\Psi}(B) \geq \frac{1}{2} |\langle[A,B] \rangle\_{\Psi} | = \frac{1}{2} |E\_{\Psi}([A,B])| $$

The consequence is that if two measurables don't commute, then as your uncertainty about one goes to $0$, your uncertainty about the other goes to infinity.

### Composing systems

If you want states with multiple things, e.g. two spins (qubits), you need a tensor product of vector spaces. The key feature of the monoidal product in a category of vector spaces is that it is *not the categorical product*. You can't get the parts out of the whole. So if you have a fully specified state in the tensor product space, that need not give you any information about the subspace corresponding to one of your qubits.

<!-- Alternatively, using the trace trick, we can form from a state $\phi$ the projection operator $|\phi\rangle\langle\phi|$ (remember that $\phi$ is normalized), and note that $Tr(|\phi\rangle\langle\phi|M)=Tr(\langle\phi|M|\phi\rangle)$ is the expectation of $M$ in state $\phi$. More generally, an operator $\rho=\sum_ia_i|\phi_i\rangle\langle\phi_i|$ gives you a *mixed* state, and the corresponding matrix is the density matrix. -->

## Qubits

The simplest non-trivial system is a 2D state space called a qubit or spin. It's called a spin cause of its use in the physical interpretation for electromagnetism, and more directly because the measurables themselves form a vector space isomorphic to real 3-space. It's called a qubit in the context of quantum computing, because it has two eigenvalues, and these correspond to the values the qubit can take. The eigenvalues are always $1$ and $-1$.

Any measurable on a qubit is composed of the three *Pauli* matrices (and the identity, but it doesn't do much):

$$ \sigma\_x = \begin{bmatrix} 0 & 1\\\\ 1 & 0 \end{bmatrix} $$

$$ \sigma\_y = \begin{bmatrix} 0 & -i \\\\ i & 0 \end{bmatrix} $$

$$ \sigma\_z = \begin{bmatrix} 1 & 0 \\\\ 0 & -1 \end{bmatrix} $$

In fact we can interpret e.g. $\sigma\_x$ as the the x component of the vector representing the orientation of a measurement device.

The Pauli matrices are also closed under commutation (i..e they form a commutator algebra):

$$ [\sigma\_x, \sigma\_y] = 2i\sigma\_z $$

$$ [\sigma\_y, \sigma\_z] = 2i\sigma\_x $$

$$ [\sigma\_z, \sigma\_x] = 2i\sigma\_y $$

Note that the commutators aren't $0$ and so the three Pauli operators are not simultaneously measurable.

### Magnetic field

We can model a magnetic field as a vector $B$ in physical space and the Hamiltonian as:

$$ H = \overrightarrow{\sigma}\cdot \overrightarrow{B} = \sigma\_xB\_x + \sigma\_yB\_y + \sigma\_zB\_z $$

For simplicity, let's choose a simpler example: $H = \frac{\hbar\omega}{2}\sigma\_z$

Then, using the commutator algebra above and the equation for time-evolution of the Hamiltonian:

$$ \frac{d}{dx}\langle \sigma\_x \rangle = -\frac{i}{\hbar}\langle [\sigma\_x, H] \rangle = -\frac{\hbar\omega}{2}\frac{i}{\hbar}\langle [\sigma\_x, \sigma\_z] \rangle = -\omega\langle\sigma\_y\rangle  $$

Similarly:

$$ \frac{d}{dx}\langle \sigma\_y \rangle = \omega\langle\sigma\_x\rangle $$

$$ \frac{d}{dx}\langle \sigma\_z \rangle = 0 $$

Note the very close relation to the analogous classical situation (e.g. Classical Mechanics: The Theoretical Minimum, p183 onwards).

## Particles in continuous (1D) space



Quantization is the act of taking a classical system and designing a quantum system that behaves like the classical system in the limit of $h\to 0$ (roughly). To quantize the motion of a classical particle, we need to upgrade to infinite dimensional Hilbert spaces.

In particular, take the space of functions which are normalizable (when you integrate them multiplied by their complex conjugate from $-\infty$ to $\infty$, you get a finite number). Actually, we'll even allow some non-normalizable things - see [Fourier analysis notes](/maths/fourier.md) to get an intuition of why *distributions* are also allowed.


Fixing a basis, a function can be defined by its coefficients. So the element $|\Phi\rangle$ of the Hilbert space is expressed in a basis (the position basis) as $\phi(x)$, where $\phi$ refers to the coefficient function.

An obvious operator $X$ on this space can then be defined such that $X|\Phi\rangle$ in the position basis is $x\phi(x)$. $X$ is self-adjoint. To see this, first note that for any kets $\Phi$ and $\Psi$ and operator $L$: $\langle\Phi|L|\Psi\rangle=\langle\Psi|L|\Phi\rangle^{\*} \to \langle\Phi|L|\Psi\rangle = \langle L\Phi|\Psi\rangle$ which implies that $L$ is Hermitian. Then:

$$ \bra{\Phi}X\ket{\Psi}$$

$$ = \int\_{-\infty}^{\infty} \phi(x)^{\*}x\psi(x)dx$$

$$ = \left(\int\_{-\infty}^{\infty} \psi(x)^{\*}x\phi(x)dx\right)^{\*}  $$

$$ = \bra{\Psi}X\ket{\Phi}^{\*}$$

The eigenvectors of $X$ are the delta functions and its spectrum (space of eigenvalues) are $\RR$. The eigenbasis is called the *position* basis.

$$X\phi(x) = x\phi(x) = x\_0\phi(x) \Rightarrow (x-x\_0)\phi(x) = 0 \Rightarrow \phi(x)=\delta(x-x\_0)$$

Viewed as a matrix, we have $\bra{x}X\ket{x'} = \delta(x-x')$.

Another obvious operator $Y$ can be defined such that $Y|\phi\rangle$ in the position basis is $\pd{}{x}\phi(x)$. This is skew-self-adjoint and as a consequence, the momentum operator $P$, defined as $P=-i\hbar Y$ is self-adjoint (see [Fourier notes](/maths/fourier)). See to this, first note that for any ket $\ket{\Phi}$, we have $\phi(\infty)=\phi(-\infty)=0$ (since otherwise $\phi$ would not be normalizable). This explains why the first term on the third line below drops out:

$$ \bra{\Phi}D\ket{\Psi}$$

$$ = \int\_{-\infty}^{\infty} \phi(x)^{\*}\frac{d}{dx}\psi(x)dx$$

$$ = [\phi(x)^{\*}\psi(x)]\_{-\infty}^{\infty} - \left(\int\_{-\infty}^{\infty} \frac{d}{dx}\psi(x)^{\*}\phi(x)dx\right)^{\*}  $$

$$ = \bra{\Psi}D\ket{\Phi}^{\*}$$

The eigenvector with eigenvalue $p\in \RR$ is $\frac{1}{\sqrt{2\pi}}e^{\frac{ixp}{\hbar}}$, so the eigenbasis, known as the momentum basis, consists of the complex exponentials.

Note that in the momentum domain, we have to use a definition of integration in which complex exponentials integrate to $0$. Roughly, we'll say that their average over increasingly long times goes to $0$.

Also note that $\lambda = \frac{2\pi\hbar}{p}$ is the wavelength (spatial periodicity) of the wave corresponding to  $\frac{1}{\sqrt{2\pi}}e^{\frac{ixp}{\hbar}}$.

A common notation has that $\ket{x}$ and $\ket{p}$ are respectively eigenvectors of $X$ and $P$. The following derivation gives an example of the kind of thing that bra-ket notation allows for (it's not formally justified here, but turns out to work):


First recall that for $\ket{i}$ ranging over a set of *orthogonal* basis vectors, $I = \int dx \ket{i}\bra{i} $. Also note that the following two equation hold because the eigenvectors of $X$ (i.e. $\ket{x}$) are delta functions:

$$ \inner{x}{\Phi} = \int dx' \delta(x-x')\phi(x') = \phi(x)$$

<!-- $$\inner{x}{p} = \frac{1}{\sqrt{2\pi}}e^{\frac{ixp}{\hbar}} = $$ -->


Then:

$$ \inner{p}{\Phi}$$

$$ = \bra{p}I\ket{\Phi}$$

$$ = \bra{p}\left( \int dx \ket{x}\bra{x} \right)\ket{\Phi}$$

$$ = \int dx \inner{p}{x}\inner{x}{\Phi}$$

$$ = \frac{1}{\sqrt{2\pi}}\int dx e^{-\frac{ixp}{\hbar}}\phi(x) $$

$$ = \mathcal{F}(\phi)(p)$$

where $\mathcal{F}$ is the Fourier transform. This trick of substituting in the identity in this form is known as "resolving the identity".

### Heisenberg uncertainty principle

Note that (working in the position basis):

$$ [X,P]\phi(x) = (XP - PX)\phi(x) = -xi\hbar\frac{d}{dx}\phi(x) + i\hbar\frac{d}{dx}(x\phi(x)) $$

$$ = -xi\hbar\frac{d}{dx}\phi(x) + i\hbar\phi(x) + ix\hbar\frac{d}{dx}\phi(x) = i\hbar\phi(x)$$

$$ \Rightarrow [X,P] = i\hbar $$

As a consequence, we can apply the general uncertainty principle to $X$ and $P$ to obtain:

$$ Var(X)\cdot Var(P) \geq \frac{1}{2} |\langle i\hbar \rangle | = \frac{1}{2\hbar} $$

### Schrödinger Equation

Suppose $H = \frac{P^2}{2m}$. Then we get the follow time evolution:

$$ ih\frac{d}{dt} \ket{\Phi} = \frac{-\hbar^2}{2m}\frac{d^2}{dx^2}\ket{\Phi} $$

Eigenvalues and eigenvectors of this Hamiltonian take the form of $\frac{p^2}{2m}$ and $\phi(x)=e^{\frac{ipx}{\hbar}}$ respectively. What this means is that we can simplify the calculation of the time evolution by diagonalizing (i.e. taking the Fourier transform, i.e. moving into the eigenbasis of $P$).

<!-- $$\phi(x,t) = \int dp \mathcal{F}(\phi)(p)e^{-\frac{ipx}{\hbar}}e^{-\frac{p^2t}{2m\hbar}} $$

One important consequence is that $\mathcal{F}(\phi)(p,t)$ only changes in time by a phase factor, which has no measurable consequence. In other words, momentum is preserved over time. -->

### Velocity

In a classical setting, momentum and velocity are things of the same type. In the (1D) quantum setting, velocity is a scalar $v = \frac{d}{dt}\langle X \rangle\_{\Psi(t)}$. But by the formula for change of expectations above, we have:

$$ v =  \frac{d}{dt}\langle X \rangle\_{\Psi(t)}$$

$$ = \frac{i}{2m\hbar} \langle [P^2,X]\rangle\_{\Psi(t)}$$

$$ = \frac{i}{2m\hbar} \langle P[P,X] + [P,X]P\rangle\_{\Psi(t)}  $$

$$ = \frac{i}{2m\hbar} \langle -2i\hbar P \rangle\_{\Psi(t)}$$

$$ = \frac{\langle P \rangle\_{\Psi(t)}}{m}  $$

So $\langle P \rangle\_{\Psi(t)} = mv$: the *expected* momentum is mass times velocity, as in the classical case.

### Forces

An operator $V(x)$, such that $V\ket{\Phi}$ in the position basis is $V(x)\phi(x)$ represents a potential, with $F(x)=-\frac{\partial V}{\partial x}$. But note that then $V(x)$ commutes with $X$, so that $[X,V(x)]=0$.

A consequence is that, by linearity of the commutator, $[X,H]=[X,P]$, for $H=\frac{P^2}{2m}+V(x)$. This means that as above, $\langle P \rangle\_{\Psi(t)} = mv$.

A similar calculation gives change in momentum (suppressing the dependence on state and noting that $[V(x),P]\psi(x) = V(x)(-i\hbar\frac{d}{dx})\psi(x) - -i\hbar\frac{d}{dx}\left(V(x)\psi(x)\right) = -i\hbar\frac{d}{dx}V(x)\psi(x)$)

$$\frac{d}{dt}\langle P \rangle = \frac{i}{2m\hbar} \langle [P^2,P]\rangle + \frac{i}{\hbar}\langle[V,P]\rangle $$

$$ = \frac{i}{\hbar}\langle i\hbar \frac{dV(x)}{dx}\rangle = -\langle \frac{dV(x)}{x}\rangle = \langle F(x) \rangle  $$


This is the same as the classical equation of motion, but now for expectations. But *note*: the equation is *not* $\frac{d}{dt}\langle P \rangle = -\frac{dV(\langle X \rangle)}{d\langle X \rangle}$. If it were, then the expectations would follow Newton's law of motion. This equation, however, is approximate when $\langle \frac{dV(x)}{x}\rangle \approx \frac{dV(\langle X \rangle)}{d\langle X \rangle}$ which in turn holds when $\frac{dV}{dx}$ is small and the wave packet (i.e. the ket) is big. This is the case (approximately) described by classical mechanics.

### Quantum harmonic oscillator

Harmonic oscillators are both analytically solvable and approximate any system perturbed slightly from equilibrium.

The QHO Hamiltonian is the natural quantum analog to the classical oscillator, namely (setting $m=1$)

$$ H = \frac{P^2+\omega^2X^2}{2}$$

<!-- One eigenvector of $H$ is $g(x)=e^{-\frac{\omega}{2\hbar}x^2}$. In coordinate free form we refer to this as $\ket{0}$ for reasons that will become apparent.  -->

We can actually find the spectrum (set of eigenvalues) of the Hamiltonian without doing almost any calculus, by using an Heisenberg style approach, as follows.

First, the completion of the square to rewrite $H$:

$$H =  \frac{1}{2}\left(P^2+\omega^2X^2\right) = \frac{1}{2}(P+i\omega X)(P-i\omega X) - \frac{1}{2}\left(i\omega XP - i\omega PX \right) $$

$$ = \frac{1}{2}(P+i\omega X)(P-i\omega X) - \frac{1}{2}i\omega[X,P] $$

$$ =  \frac{1}{2}(P+i\omega X)(P-i\omega X) + \frac{\omega\hbar}{2} $$

$$ =  \omega\hbar \frac{-i}{\sqrt{2\omega\hbar}}(P+i\omega X)\frac{i}{\sqrt{2\omega\hbar}}(P-i\omega X) + \frac{\omega\hbar}{2} $$

This suggests some operators:

$$ a\_+ := \frac{-i}{\sqrt{2\omega\hbar}}(P + i\omega X) $$

$$ a\_- := \frac{i}{\sqrt{2\omega\hbar}}(P - i\omega X)  $$

These two are adjoint. We also define:

$$ N := a\_+a\_- $$


Then, using these definitions in the above:

$$ H = \omega\hbar(a\_+a\_- -\frac{1}{2}) = \omega\hbar(N + \frac{1}{2}) $$


Next, a simple Lie algebra (set of operators closed under commutation), easily verified by brute calculation:

$$ [a\_-,a\_+] = 1 $$

$$ [a\_-, N] = a\_- $$

$$ [a\_+, N] = -a\_+ $$

Then, the punchline:

$$ N(a\_+\ket{n}) = (a\_+N + (Na\_+ - a\_+N))\ket{n} $$

$$= (a\_+N+[N,a\_+])\ket{n} = (a\_+N+a\_+)\ket{n} = a\_+(N+1)\ket{n} = (n+1)a\_+\ket{n} $$


In other words, if $\ket{n}$ is an eigenvector (of $H$) with eigenvalue $n$, then $a\_+\ket{n}=K\ket{n+1}$, i.e. $a\_+\ket{n}$ is an eigenvector with eigenvalue $n+1$. $K$ is there as a normalization factor, not yet determined. Similarly for $a\_-$. $a\_+$ and $a\_-$ are respectively called the creation and annihilation operators.

A second punchline:

Because of the squares in the operators constituting $H$ (and the fact that eigenvectors multiply under composition) we know already that the eigenvalues are non-negative. Since the eigenvalues are non-negative, there must be an eigenvector $\ket{0}$ such that $a\_-\ket{0}=\overrightarrow{0}$. This is because the annihilation operator keeps reducing the eigenvalue. So eventually we would hit an eigenvector $\ket{0}$ which $a\_-$ annihilates. But then:

$$\overrightarrow{0}=a\_-\ket{0}=\frac{i}{\sqrt{2\omega\hbar}}(P - i\omega X)\ket{0}$$

$$ \Rightarrow -i\hbar\frac{d}{dx}\phi\_0(x) = i\omega x\phi\_0(x)$$

$$ \Rightarrow \phi\_0(x) = e^{-\frac{\omega x^2}{2\hbar}} $$

So the position projection of $\ket{0}$ is a Gaussian function. We even know that $H\ket{0}=\omega\hbar(N+\frac{1}{2})\ket{0} = \frac{\omega\hbar}{2}$, and that each successive $\ket{n}$ gains $\omega\hbar$ energy.

Finally:

Now that we know the ground state, we can generate the eigenvectors using the creation operator, which is great. What we get are functions which are a polynomial times the ground state. These polynomials are called the Hermite polynomials, and are alternatively odd and even.

We can see that they're orthogonal, because $\ket{n}=K(a\_+)^n\ket{0}$, for a normalizing constant $K$, so $\inner{n}{m} = \bra{0}(a\_-)^n(a\_+)^m\ket{0}$. WLOG, suppose $n > m$. Then we raise more than we lower, so we annihilate the ket.

Given orthonormality (which I have not shown - I've only shown orthogonality), we can find the appropriate value of the normalizing constant $K$ as follows:

$$ a\_-\ket{n} = K\ket{n+1} \Rightarrow \bra{n}a\_+a\_-\ket{n} = K^2 \inner{n+1}{n+1} = \bra{n}N\ket{n} = n\inner{n}{n} $$

$$ \Rightarrow n = K^2 \Rightarrow K = \sqrt{n} $$

### Quantization of a field

Consider a wave in 1D. We could express in a basis of periodic functions, via the Fourier transform, and then view this as a sum of independent harmonic oscillators. But then we can treat each as a *quantum* harmonic oscillator. Under this perspective, each quantum of energy of one of these oscillators is a photon. Note that the quantization will freeze out the infinite of oscillators with negligible energy. (more to clarify here, but my understanding needs to catch up).
