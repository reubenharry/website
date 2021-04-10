---
title: "Misc"
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
$\newcommand{\ket}[1]{| #1 \rangle}$
$\newcommand{\bra}[1]{\langle #1 |}$
$\newcommand{\inner}[2]{\langle #1 | #2 \rangle}$


TODO:

  put all the mechanics in Mechanics

### Geometric optics

Accurate in the regime where wavelength $\lambda$ is much smaller than some relevant thing, like the distance from an aperture to a receiving wall.

Characterized entirely by a principle of least action, which is that if a light ray has gone from point A to point B, it has taken the route which minimizes time, or any of them if there are multiple. This gives rise to:

- angle of incidence equals angle of reflection
- Snell's law
- focusing by lens and parabolic reflectors

### Quantum Mechanics

Here meaning mechanics to refer to how quantum theory applies to particles and waves and all that, rather than just the postulates of quantum physics generally.

Anything by R. Shankar, e.g. Chapter 19 of Fundamentals of Physics 2, is great.

The key guiding points:

- refer back to double slit experiments as a base camp for mapping out the space of ideas.
- history of the discovery of quantum mechanics was messy, but a few (abstracted versions of) key experiments stand out, in which light behaves like a particle, but also has wave-like interference

### Interference


Let $A$ be a wave, and $B$ another. In particular, we have a non-commutativity, namely:

$$ |A|^2 + |B|^2 \neq |A + B|^2 $$

So the intensity pattern you get on the surface when both apertures are open is not the sum of the individual intensity patterns. This non-commutativity is termed *interference*. A classic sign of something wavy going on.

So when you realize that light, at very low intensities, consists of individual particles, namely photons with $p=\hbar k$ and $E=\hbar \omega$, you're surprised to find that there's nevertheless interference.

This same pattern holds for electrons, and other particles, atoms, molecules. Actually the case of photons is really subtle and complicated and I think you need a fuller account of field quantization (Quantum Electrodynamics) to actually understand it.

### Double slit experiment

In the double slit experiment, you have two apertures in a line and a wave approaching the line. Beyond the line at distance $D$ is another line where the wave's intensity is measured.

  |  m
} |  m
  |  m


The size of the apertures $W$, the length between the two lines $L$, and the wavelength $\lambda$ are related as $\frac{W^2}{L\lambda}$, which is the setup for Fraunhofer diffraction and as mentioned in [these notes](/maths/fourier), the wave's value at the second line in the variable $p=\frac{\sin\theta}{\lambda}$ is the Fourier transform of the density of stuff that gets through the first line.

As reasonable model of this density is $f(x) = (\delta{x+\frac{d}{2}}+\delta{x-\frac{d}{2}})*\Pi\_A$, where $A$ is the width of the apertures. Note that $\delta$ function convolutions shift position, so that's where this comes from.

Then $F(p) = (e^{-\pi idp}+e^{\pi idp})a\sinc(ap) = 2\cos(\pi dp)a\sinc(ap) $
TODO: check


In particular, for small apertures, this is well approximated by

2\cos(\pi dp)

And that gives intensity

4\cos^2(\pi dp)

Solving for the angle, we see that minima are at

$\frac{\sin(\theta)}{\lambda} = p = \frac{n}{2d}

and maxima are at TODO





### Blackbody radiation

### Ultraviolet catastrophe

### Bremsstrahlung

Collision of electrons with a target which causes them to decelerate and emit photons over a spectrum of frequencies, with minimum frequency related to electrons which give away all their kinetic energy. The existence of this minimum frequency makes sense in the $h\nu$ view of photons, i.e. the quantum mechanical view.

Roughly the inverse of the photoelectric effect.

The following three phenomena involve the impact of a photon on a nucleus, at low, medium and high energies respectively

### Photoelectric effect

An experimental indication of non-classical behavior.

Loose description: Electrons can escape from the surface of an irradiated metal plate. There's a cutoff wavelength, independent of intensity. The magnitude of the current of the escaped electrons is proportional to the intensity. The energy of the photoelectrons is independent of the intensity but linear (at $\frac{h}{e}$) in the frequency.

### Compton scattering
<!-- and Rayleigh scattering -->

An experimental indication of non-classical behavior.

Loose description: Radiation in the X-ray region scatters not in the same wavelength as expected classically, but in two wavelengths, one the same, and the other with an angle-dependent shift.

The theoretical prediction from assuming photons are a particle undergoing an elastic collision with an electron is that you get a shift

$$\Delta\lambda = \frac{h}{m\_ec}(1-\cos \theta) $$

which is borne out. $\frac{h}{m\_ec}$ is a length dimensionally, and is known as the Compton wavelength.

### Pair production

A photon incident on a nucleus creates a pair of a positron and electron.

### etc


Shankar 108: complete describe of plane waves: great reference. very crisp
shankar 108: interference

Equations you need:

Relativistic Hamiltonian:

$$ E^2 = p^2c^2 + m^2c^4 $$

So $v = \frac{dE}{dp} = \frac{pc^2}{E} $

So for a photon, since we know $v=c$, $m\_0=0$.

Then:

$$ p = \frac{h\nu}{c} $$

### Waves

General form is $f(x+vt)$. For Fourier reasons, most things of interest pertain to waves which are complex exponentials:

$$ Ae^{i(\frac{2\pi}{\lambda}x-\frac{2\pi}{T}t)} $$

- $A$ is the amplitude
- $T$ is the period
- $\lambda$ is the wavelength
- $k=\frac{2\pi}{\lambda}$ is the wavenumber
- $\omega=\frac{2\pi}{T}$ is the angular frequency
- $v=\frac{\lambda}{T}=\frac{\omega}{k}$ since if $x=vt$, then the wave value is constant

In higher dimensions:

$$ Ae^{i(k\cdot r-\omega t)} $$


where $k$ is the wave*vector* now, and $v=\frac{\omega}{||k||}$

The intensity of a wave is its point-wise square modulus.

Fourier view:

$$ \psi(x,t) = \int dp A(p)e^{kx-\omega t} = \int dp A(p)e^{(px-E t)/\hbar} $$

With the last step from the De Broglie relations

$$ \lambda = \frac{h}{p} $$

$$ E = \hbar \omega $$




Speed of a wave:

There's the obvious sense of speed, when the wave is expressed as a function of $x-vt$. But also, we can express a wave in its Fourier basis, and then look at the speed of each wave. See the above equation: the confusing thing is to realize that time is separate from the Fourier transform, and that we can regard $\omega$ as a function of $k$, so that each wave has a different speed $\omega(k)$.

*Group velocity* is defined as:

$$ \partial{\omega(k)}{k} $$

Group velocity of the above wave is therefore: $\frac{p}{m}$, in accordance with the classical situation.

Wave particle duality:

either regard it as a wave or particle: typical instance is this...



$$ \nu = \frac{c}{\lambda} $$



### Facility with Kets

$$ \bra{x}P\ket{\psi} = \int \bra{x}P\ket{x'}\inner{x'}{\psi} dx' $$

$$ = \int -i\hbar \delta'(x-x')\psi(x')dx' = -i\hbar \frac{d\psi}{dx} $$


### Wavepackets

A Gaussian wavepacket is a Gaussian function times a complex exponential. Its amplitude is therefore a nice real Gaussian. Its variance and the variance of its Fourier transform multiplied hit the upper bound of the uncertainty principle.

Fact:

  A shared observable needs a shared eigenvector, which means the commutator has a non-empty kernel.

Amazing: T_L = e^{-LD}: derivative operator is the generator of translations
