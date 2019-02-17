---
title: "Informativity and Galois Connections"
date: 2015-06-26T17:07:24+01:00
draft: false
---


<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML">
</script>

Here is an elementary observation (I mean "elementary" in the sense mathematicians sometimes use it: i.e. obvious if you already understand it, otherwise gibberish) that I talked about at MIT's [category theory seminar](http://brendanfong.com/seminar.html), relating [Grice's maxims of Quantity and Quality](http://www.glottopedia.org/index.php/Gricean_maxims) to the category theoretic notion of an adjoint functor.

### Inscrutable Summary:

For a state space W, the left adjoint of a monotone map (i.e. a left Galois connection), \\(L_0\\), from a set of utterances U to the poset (ordered by inclusion) \\(\mathcal{P}(W)\\) is the monotone map \\(S_1: \mathcal{P}(W)\to U\\) which takes a set of states and returns the strongest true utterance with respect to \\(L_0\\). This happens to be a very natural way to encode Grice's maxims of Quality (roughly: speak truthfully) and Quantity (roughly: be as informative as possible, relative to what is relevant) simultaneously.

### Scrutable Explanation:

Each \\(w \in W\\) is a state of the world, or as a linguist would say, a possible world. Thus each element of \\(\mathcal{P}(W)\\) is a set of states, or for a linguist, a proposition.

As usual, the simplest possible example is a reference game, where "state" just means the intended referent. Concretely, say that W = \\(\\{R_1, R_2, R_3\\}\\) as pictured below, and U = {*red dress*, *dress*, *hat*, *silence*}. Obviously arbitrary choices, but just for illustration.

{{< figure src="img/referents.png" imageMaxWidth="1000px" width="750" >}}

Say that the literal listener \\(L_0\\) maps an utterance *u* to the set of referents (i.e. states, i.e. worlds) compatible with *u*, mapping *red dress* to \\(\\{R_1\\}\\), *dress* to \\(\\{R_1, R_2\\}\\) , *hat* to \\(\\{R_3\\}\\) and *silence* to \\(\\{R_1, R_2, R_3\\}\\).

Note that we can make U a poset by defining the partial ordering on U where \\(u \leq u' iff L_0(u) \leq L_0(u')\\). For example, \\(\mathit{dress} \leq \mathit{silence}\\). Note that \\(u \leq u'\\) means that u is *stronger* than u'.

It then follows (by the definition of the ordering on U) that \\(L_0\\) is a monotone map (i.e. a function that preserves the poset ordering) from U to W.




### Galois Connections ###

<!-- The idea of a Galois connection (I think invented by Galois in his proof that there's no general formula for quintic equations) -->

So far just definitions. Just one more: for monotone maps f and g, f is the left Galois connection of g iff:

$$f(s) \leq u \leftrightarrow s \leq g(u)$$

It makes a bit of thinking to make sense of this strange definition, but the intuition is this: there's no obvious notion of an exact inverse of g, because g might well not be surjective (or injective). But for a monotone map, there's a notion of the best approximation of such an inverse. That approximation is f, as defined above. (In fact there are two, the left and right Galois connections, and more broadly, the left and right adjoints of a functor. A monotone map is a very simple case of a functor between very simple categories, namely posets).

Maybe this direct corollary of the above definition will help: if I know g, then its left adjoint f is defined as:

$$f(s) = \bigwedge(\\{u : s \leq g(u)\\})$$.

I write \\(\bigwedge(X)\\) for a poset X to mean the greatest lower bound of X.

OK, so now you can ask: what's the left Galois connection of the literal listener \\(L_0\\)? Let's call this left Galois connection \\(S_1\\), for reasons that will soon be clear. Again, note that \\(L_0\\) can't just be inverted, because it's in general not the case that for any subset s of W (i.e. element of \\(\mathcal{P}(W)\\)), there's an expression which means exactly s under \\(L_0\\).

It's illustrative to work through an example, to see what \\(S_1\\) looks like. Using our case from above, what's \\(S_1(\\{R_2\\})\\)?

Well, \\(S_1(\\{R_2\\}) = \bigwedge\\{u : \\{R_2\\} \leq L_0(u)\\})\\) = \\(\bigwedge(\\{dress, silence\\})\\) = \\(dress\\).

First you find all the utterances that map to supersets of \\(\\{R_2\\}\\). These are all the true utterances (*Quality*). Then you take the greatest lower bound (*Quantity*).

So in other words, the definition of an left Galois connection gives you the following informative speaker \\(S_1\\): consider the set of all utterances compatible with your (possibly singleton) set of worlds, and choose the strongest of these. There's something nice about how the maxims of Quality and Quantity fall out from this.

<!-- That's \\(\\{dress, silence\\}\\). Then you take the greatest lower bound.  -->





<!-- The notion of "Galois connection" formalizes "best approximation of the inverse of a monotone map between posets". (More abstractly, a Galois connection is a kind of adjoint functor, but that's by the by.) -->

We also obtain similar results for pragmatic implicatures (that I won't sketch out here for reasons of laziness) namely that a literal speaker, in the form of a monotone map \\(S_0\\) from w \\(\in\\) W to *us* in \\(\mathcal{P}(U)\\), admits a left Galois connection \\(L_1\\) which returns the exhaustification (linguistics term) of the literal meaning of *us*. So this would model, for example, the fact that the pragmatic interpretation of a (possibly singleton) set of utterances *us* should give the smallest set of possible worlds that could have produced every \\(u \in \mathit{us}\\).

The niceness of this correspondence between Galois connections and pragmatics suggests that something relatively deep is going on here, but I haven't thought about it too much further. The sensible thing to do would be to consider the categorical generalization of Galois connections, namely adjoint functors, and to see if we get the same effect when we invert a more sophisticated functorial semantics.

I came up with this idea thanks to John Baez's fantastic [category theory course](https://forum.azimuthproject.org/categories/applied-category-theory-course), based off of David Spivak and Brendan Fong's *[Seven Sketches in Compositionality](http://math.mit.edu/~dspivak/teaching/sp18/7Sketches.pdf)*.

Summary:

*An informative speaker is a left Galois connection to a literal listener

*A pragmatic listener is a left Galois connection to a literal speaker
