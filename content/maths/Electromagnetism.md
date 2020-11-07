
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





Electric vs electronic circuits: the former have power gain less than 1: power is lost, the latter have power gain greater than 1, which requires doing something to some separate power source. Transitors, op-amps, etc pertain to circuits in the second category.




Conductance and resitance are reciprocal.

Voltage: difference in voltage between two points is given by line integral, of electric charge along path, so requires E to be conservative (i.e. path independent) which in turn requires no time varying magnetic fields.

"Conversely, power is supplied by an element when a positive current i is directed
out of the voltage terminal marked positive."
