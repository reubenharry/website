---
title: "Circuits"
date: 2020-01-26T17:07:24+01:00
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

Notes mostly based on *Foundations of Analog and Digital Electronic Circuits*, which both is quite slow paced, and covers the fundamental concepts carefully.

### Basics

Analysis of circuits take place a level of abstraction above Maxwell's equations, which provide the fundamental physics of electromagnetism. We assume (this is called the lumped circuit discipline) that circuits are composed of series and parallel combinations of "circuit elements", like resistors, capacitors, inductors, diodes, etc. Outside these elements, we assume that there's no changing magnetic flux, which allows E to be conservative, i.e. path independent. That means that voltage is well-defined between any two given points.


Power: $p(t) = v(t)i(t)$

$$E(t) = \int\_{\infty}^t p(\alpha)d\alpha$$

"Just as in all areas of physics and chemistry, power is the rate at which energy is
consumed or produced. Consequently, energy is the integral of power."

Resistors usually satisfy:

$$ v(t) = Ri(t) $$

So that $p(t) = Ri^2(t)

Reistance has units of Ohms.

As resistance tends to infinity, circuit becomes open (no current). As it tends to $0$, circuit becomes short (no voltage).

Resistors dissipate power: TODO show

Capacitors:

$$i(t) = C\frac{d}{dt}v(t)$$

So that $p(t) = Cv(t)\frac{d}{dt}v(t)$

Capacitance has units of Farads.

Inductors:

$$ v(t) = L\frac{d}{dt}i(t) $$

so that $p(t) = Li(t)\frac{d}{dt}i(t)$

Inductance has units of henries.

Voltage sources:

Constant voltage regardless of current.

Kirchhoff's Current Law:

What goes in comes out

Kirchhoff's Voltage Law:

Sum of voltages is 0

Series elements:

Voltage divider: $ \frac{v_2}{v_1} = \frac{R_2}{R_1+R_2} $

Parallel elements:



In series combinations, the
currents through each element are the same; in parallel ones, the voltages are the same.


We can think of a circuit as a system which takes an input voltage/current (say the voltage of the source), and returns an output voltage/current (say the voltage of the final circuit element). If the circuit elements are capacitors, inductors and resistors, then the system is LTI (linear, time invariant).


We can use Fourier methods to determine this LTI system. In particular, if we assume the input voltage is a complex exponential, the various voltages and currents of the elements end up being complex exponentials of the same phase, and so the impedance $Z=\frac{V}{I}$ is not time dependent. In fact, $Z$ satisfies KVL and KCL, so one can find $Z$ for all elements as one would find $R$ if all elements were resistors.

Useful:

- resistor impedance: $R$
- capacitor impedance: \frac{1}{Cj2\pi f}
- inductor impedance: $Lj2\pi f$

Expressing power in terms of impedance, after some simple maths, gives:

$$ p(t) = \frac{1}{2}Re[VI^\*] + \frac{1}{2}|V||I|\cos(4\pi ft + \phi | \psi) $$

where $\phi$ and $\psi$ are the phases of $V$ and $I$.

### A closer look at an RC circuit

todo: results: for low frequency, capacitor acts like open circuit: derive

todo: 	why the two part solution: homogeneous + forced(?name?)
		how the conversion to real number
		RC example
		RL example

### Analog filters


### Diodes

### Transistors

MOSFETs are a common type of transistor. The physics of the device is complex, so the goal, as normal, is to abstract over it.

In general, we can think of a transistor as instantiating a switch. We have a gate terminal, a drain terminal and a source terminal. When the voltage between the gate and source is high enough (above a threshold $v\_T$,

	the route from drain to source is modeled as an open circuit, and short otherwise. A more accurate model is to replace the open circuit with a resistor.

	Saturation region: $v\_{GS} \geq v\_T$ and $v\_{DS} < v\_{GS} - v\_T$

overview: two regimes, one for switch, one for amplifier


A simple model is


Electric vs electronic circuits: the former have power gain less than 1: power is lost, the latter have power gain greater than 1, which requires doing something to some separate power source. Transitors, op-amps, etc pertain to circuits in the second category.




Conductance and resitance are reciprocal.

Voltage: difference in voltage between two points is given by line integral, of electric charge along path, so requires E to be conservative (i.e. path independent) which in turn requires no time varying magnetic fields.

"Conversely, power is supplied by an element when a positive current i is directed
out of the voltage terminal marked positive."
