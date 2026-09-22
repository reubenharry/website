---
title: "The Unfolding of Language"
slug: "the-unfolding-of-language"
date: 2026-09-21T17:00:00-04:00
draft: true
description: "How languages come to exist, treated as a dynamical systems problem."
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
    var all = MathJax.Hub.getAllJax(), i;
    for(i = 0; i < all.length; i += 1) {
        all[i].SourceElement().parentNode.className += ' has-jax';
    }
  });

  MathJax.Hub.Config({
  TeX: { equationNumbers: { autoNumber: "AMS" } }
  });

</script>

<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
  mermaid.initialize({ startOnLoad: true });
</script>

How do languages come to exist?

I first got sold on the enduring appeal of this question by Guy Deutscher's book *The Unfolding of Language*, which I read as a teenager. The impression I remember getting is that while the details of any particular language's history are complicated and interesting, the problem in general is quite abstract. Imagine the experiment, that for obvious reasons cannot be run, in which a group of children are left to their own devices from birth. Does a language emerge between them? If so, how? 

The abstract problem has its roots in reality, because one way or another, maybe over many generations, some variant of this scenario really must have happened: going far enough back, our ancestors did not have language, but we do. But really how? There is no way for everyone to sit down and state the rules of the language, even if such a thing could be done: after all, you can't agree on a language until you have one to communicate with.

My perspective on this question has been shaped by two things. The first is that I spent my PhD thinking about Bayesian models of the common ground, the set of things everyone assumes that everyone else knows, and the ways in which information enters the common ground. Lots of information is in the common ground, but the most complex examples are surely languages, which exist by virtue of everyone believing that everyone else uses them. From this perspective, the question of how languages come to exist translates to: how do people come to believe they do, or: how do they enter the common ground?

The second thing is that I've spent the last few years in a physics department. The sensibility of physicists for tackling hard problems is different to linguists and computer scientists. In particular, physicists are good at encountering a phenomenon and then finding the simplest model that captures the essence of it. Finding it requires a lot of creative work, but once you have it, you can mine it for intuition. A classic example is the (2D) Ising model, which is more or less the simplest possible model that is also complex enough to exhibit phase transitions. The Ising model turns out to be a laboratory for understanding pretty much everything about statistical field theories (renormalization group, conformal field theory, defects, etc.)

<!-- The toolkit of physics is relevant to the emergence of language in other ways too; non-equilibrium statistical mechanics studies the dynamics of probability distributions over time, which is exactly the mathematical language I would want to use to describe an agent's evolving belief about another agent's policy. -->

With these two influences in mind, I want to describe how I envision a model of language formation. (I should also note that I am obviously not the first person to think about modeling this problem mathematically, or to use concepts from reinforcement learning, Bayesian inference, game theory and dynamical systems to do it. That said, I think I'm well positioned to have a novel perspective.)

## The system

Schematically, what I have in mind is a dynamical system, comprised of two agents coupled to a world. Graphically:

<div class="mermaid">
flowchart LR
  Agent1 -->|Action| Environment
  Environment -->|Observation| Agent2
</div>

What this diagram is meant to convey is that the world "outputs" a stream of pairs of observations $(o_1, o_2)$, that depends on a stream of incoming actions from both agents, $(a_1, a_2)$. Conversely, each agent takes in the stream of observations from the world, and the stream of actions from the other agent, and produces a stream of actions. This is, in its entirety, described by a stochastic process over $(o_1, o_2, a_1, a_2)$.

The reason I want to frame the problem as a dynamical system is that I want to eventually ask questions about the dynamics, and in particular whether a language-like state is an attractor.

For the sake of some concreteness, let's say that the state of the world is the position $x \in \mathbb{R}$ of a particle moving around stochastically, which the agents noisily observe.

## The agents

Let's say that the agents are Bayesian RL agents, so that they update their beliefs about the world based on the observations they receive (and also the actions of the other agent, which they can see), and produce actions to maximize their expected reward. Let's also say that each agent is rewarded according to how accurately they *both* guess the position of the particle, a reward chosen to incentivize cooperation.

Forgetting language for a minute, if they know how the observation is produced, they can obtain a belief about the position of the particle from Bayesian inference, given observations. 

gif goes here

(This uses a particle filter, which is the general solution for inference on a time-varying signal.)

## Language

So what does language mean in the context of this system? I would say that there is a language if each agent chooses their actions in a way that encodes information about the state, and the other agent decodes it correctly.

We could hardcode this sort of behavior. For instance, define a language (or really, a semantics) $L$ to be a function $(A, O) \to \{0,1\}$, where $A$ and $O$ are respectively the space of actions and observations (so both $\mathbb{R}^2$). This gives a (stochastic) way to translate between actions and observations: given an action $a$, it defines a uniform distribution $p(o \mid a)$ over $\{o \in O \mid L(a, o) = 1\}$, and given an observation $o$, it defines a uniform distribution $p(a \mid o)$ over $\{a \in A \mid L(a, o) = 1\}$. We then define an agent parametrized by $L$ to produce actions drawn from $p(a \mid o)$ given the current observation $o$, and to convert actions of the other agent into observations using $p(o \mid a_2)$.

gif

If both agents are parametrized by the same $L$, then the system has language, in the sense that each agent transmits information to the other. This improves the expected reward, since agents now get double the observations.

As a sidenote, the system has what a physicist would call a "gauge freedom": there are many choices of $L$ that will work, and as long as both agents agree on which one is in use, they will decode and encode information correctly. A linguist would call this gauge freedom the "arbitrariness" of a convention.

Of course the point is to not hardcode, and instead understand how this behavior can emerge in Bayesian RL agents with as few artificial assumptions as possible. That is the game we are playing here. Let's think through how this could work. The key is to realize that for a Bayesian agent, if they *believe* that the other agent functions according to a language $L$, then they will also act according to $L$. 

To see this, suppose that agent 1 believes that agent 2 is using language $L$. Then agent 1, being Bayesian, will extract information from seeing $a_2$ at each time point. Moreover, since agent 1 is rewarded for agent 2's successful guessing of the particle's position, they are incentivized to have a policy which produces actions that are compatible with $L$, since they believe that agent 2 will take this action and convert it into an observation.

So suppose that agent 1 and agent 2 both believe that the other is using language $L$. Then they each act as if they are using language $L$, so that the signals the agents are exchanging actually do convey information. And voila, the system has language!

This leads to what I think is the really interesting mystery at the heart of all this: how does the pair of agents acquire such a belief?

## Dynamics of belief

Because of the Bayesian RL setting, there is a natural way to approach this question. Each agent should have uncertainty not only over the position of the particle, but also over the other agent's behavior. For example, let's say that agent 1 believes that agent 2 is parametrized by a language $L$, but has a distribution over possible values of $L$. As time passes, agent 1's belief about $L$ evolves, as it receives evidence in the form of the actions of agent 2, as a function of the inferred position of the particle. Similarly for agent 2.

Let's put this in mathematical terms. We have a space $D^\mathcal{A}_1$ of agent 1's *beliefs* about agent 2. That is, every point is a distribution over (the parameters of) an agent's policy and world model. Then the full space we are interested in is the product space $D = (D^\mathcal{A}_1, D^\mathcal{A}_2)$.

There is a certain region (submanifold, if you like) of this space $C \subset D$ in which the two beliefs are the same, $C = \{ (b_1, b_2) \in D \mid b_1 = b_2 \}$. This is the language (or "convention") region, because, as discussed above, if both agents believe the other communicates according to the same rules, then they will communicate according to the same rules, and successfully exchange information.

animation here

In the spirit of physics, we can think about the effective dynamics of just the two beliefs, $b_1$ and $b_2$, with the other degrees of freedom in the system (the observations, actions and particle position) integrated out.

The question is then: what assumptions are needed to make this submanifold an attractor under the effective belief dynamics? That is, under what conditions will the belief dynamics flow towards the language submanifold? Secondly, what are the dynamics within the language submanifold? I would say that the first question addresses how a language forms, and the second: how a language evolves.

## Why I like this approach

The main reason I like this approach is it doesn't require that language be hardcoded. In particular, there isn't a degree of freedom inside each agent corresponding to their language. Rather, agents just have beliefs about other agents, and these beliefs can drift over time. If they drift into a belief that the other agents are engaging in linguistic behavior, then language emerges. This perspective transforms the problem of language emergence into something akin to non-equilibrium statistical physics: understanding the dynamics of a probability distribution.

Languages, on this view, are epiphenomena of the agents' policies and world models: a language exists if both agents' world models agree on how they interpret some subset of the other's actions (their speech acts), and their policies agree on how to produce (some subset of) those actions. A language has a discrete set of messages, or a compositional structure, if that is what the agents end up believing it has. (Certainly this is not the definition of a language that all linguists would have in mind. For one thing, it makes no distinction between a non-linguistic convention like fashion and natural language.)

The mathematics of this problem are in the spirit of non-equilibrium physics, where the object of study is the dynamics of a probability distribution representing a system of interest. This is part of why the dynamical systems approach to language I've described here is appealing, because there is a toolkit for studying how distributions evolve. That said, even the simplest model of this kind is hard: the effective dynamics of the agents' beliefs depend on all the details of the inference algorithm and RL algorithm that they use.

<!-- It is also compatible with mechanisms like memetic drift, where the belief of one agent influences the belief of the other, and in turn influences the belief of the first, a self-reinforcing process which seems key to language change. A more coarse-grained model can assume a population of agents which experience an effective force towards aligning their languages, and perhaps towards compositionality and away from complexity, but the goal here is to delve into the details of how these properties arise. -->

## Where this fits in the landscape of ideas

<!-- Coming up with a concrete model that has a "linguistic attractor" with a satisfactorily minimal set of assumptions seems to me like a very interesting problem. I don't think many linguists would agree, but I'd love to convince them. Like any good problem, it is concrete enough to actually work on, but it forces you to think carefully about the assumptions you make, particularly the nature of a convention and whether agents need to reason about each other's policies (and world models). These things are subtle. -->

but if you want to understand the origins of that force, you need to delve into the gory details of the quantum mechanical model of the atom. 

Similarly, one can have a statistical mechanical type model of a popluation of agents, each with a degree of freedom corresponding to their language. People do this kind of thing, in the spirit of the XY model or similar. But the goal of the kind of model I'm outlining here would be to describe the "forces" that act on languages at a fundamental level (towards alignment, towards compositionality), rather than taking this as assumed. 
