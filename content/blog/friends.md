---
title: "The One with the Common Ground"
date: 2020-01-26T17:07:24+01:00
draft: True

---
-

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

> "They think they are so slick messing with us. But they don't know that we *know* that they know"

Somewhere in my PhD between feeling anxious about research and feeling frustrated by it, there was this halcyon time period (on reflection, no actual continuous stretch of time but more like a badly pieced-together action montage) where I paced around poorly lit rooms and thought really hard about the way [common ground](https://reubencohngordon.com/docs/irony.pdf) works in language.

<!-- Everyone who has spent a long time doing one thing is susceptible to the bias of believing that thing to be noteworthy or unique (maybe everything really is, with enough attention), and
   it is that
  we haven't yet understood very much.

    understanding how to think about the common ground was the one thing I really took away from my own research.
 -->

The common ground is this shimmering mirage of a concept. It's the information everyone in a conversation not only knows but acts as if everyone else knows (and knows they know, and so on), and it sort of only exists on the basis of a shared pretense perpetuated by all the people taking part. Really there's only one cultural touchstone which can make this tangible, and I'm going to surprise you by saying that no, it's not Friends.

Okay, I lied, it's Friends. What happens is that Monica and Chandler (party 1) are covertly sleeping together - Joey knows but that's it. Joey for the purposes of this example is not relevant. For reasons that will become apparent, it will be convenient to call this fact, that Chandler and Monica are, both literally and figuratively in bed together: $\phi\_0$. That is, $\phi\_0$ is the proposition: Monica and Chandler are sleeping together.

Then Rachel and Phoebe (party 2) find out. Let's denote by $\phi\_1$ the proposition: Party 2 knows $\phi\_0$. So $\phi\_1$ and furthermore, party 1 do not know that $\phi\_1$. In fact, maybe that deserves a handy shorthand too; let's say that  $\psi\_1$ is the proposition: Party 1 do not know $\phi\_1$.

In a commendably sly turn, party 2 realize that $\psi\_1$ makes the situation ripe for trickery ("we could not tell them we know, and have a little fun of our own"). Party 2's plan is that Phoebe will maintain the pretense that $\phi\_0$ is false, so as to preserve $\psi\_1$, but do so in such a way as to mess with Chandler and Monica. So the upshot is that Phoebe flirts with Chandler, who is unaware that this is a pretense, and is taken aback.

So far, so good. But this is where the epistemic game theorists must have infiltrated the script writers' meeting, because then party 1 infer that party 2's weird behavior can only be explained by $\phi\_1$ being true. Immediately, $\psi\_1$ ceases to be true, but $\phi\_2$ and $\psi\_2$ become true instead.

For the sake of clarity, and I mean that in the broadest possible sense, I'll introduce the following definitions. Here, $X\_n$ is 2 when $n$ is odd, and $1$ when $n$ is even (for $n>0$):

- $\phi\_n$: Party $X\_n$ know that $\phi\_{n-1}$.
- $\psi\_n$: Party $X\_{n+1}$ do not know that $\phi\_{n}$.

"The messers become the messees" and Chandler flirts back, alarming Phoebe who then is led to believe that his commitment to Monica is somewhat less than exemplary. This eventually makes *her* realize that *of course*! they know we know ($\phi\_2$), but - aha!! - now we know that ($\phi\_3$), and they don't know we know they know we know ($\psi\_3$). One again armed with the upper hand, Phoebe accepts Chandler invitation to "have all the sex", beckoning in the final act of the episode.

To paraphrase Lemony Snicket, I don't need to drag you any further through the predictable details of this narrative, other than to say that eventually Chandler abandons the pretense, confesses his love for Monica, and, as Joey exclaims in self-aware theatricality, like the chorus at the end of Oedipus Rex, finally everyone knows! (Except Ross, cue the after-credit scene).

I am writing this right after turning 26, on the eve of moving to a new city and starting a new job, so I rewatched The One Where Everybody Finds Out with a closer-than-normal eye for its tropes and a strange sense of whatever the reverse of foreboding is (watching the future solidify from a fine mist to a concrete slab, but *without* a sense of dread?)


But inner turmoil aside, let me pause here to take stock ([I hate to, but may I?](https://www.youtube.com/watch?v=3MWpHQQ-wQg&t=70s&ab_channel=FunEnglishLessons)). Granted, the convoluted plot of the episode is noteworthy for showcasing the potential nuance of social interaction (obviously the show has made a comical point out of this nuance, a point which, yes, I am knowingly grinding into a fine dust), but how does it shed light on the idea of the common ground?

The idea is this: by the end of the episode, $\phi\_0$, the fact that Monica and Chandler are dating, is in the common ground (among Rachel, Phoebe, Joey, Monica and Chandler). But at every stage before this, even though everyone knows $\phi\_0$, and then knows that everyone knows, and so on, it isn't in the common ground, as shown by the fact that no-one acts like it's true.
In a sense, the episode could almost have been designed as a thought experiment to show that any degree of higher order knowledge of a fact (we know that they know that...) is qualitatively different to that fact being in the common ground

<!-- : higher order knowledge of $\phi\_0$ is compatible with both parties acting as if $\phi\_0$ is false. On the other hand, $\phi\_0$ being in the common ground is *not* compatible with that. -->

But why spend time thinking about such a niche idea as common ground anyway? The answer, maybe predictably, is that it's not niche at all. The notion of common ground doesn't just arise in the contrived scenario above, but rather it's a basic element of communication generally.

Everything from the rule that we drive on the right (or left) to the fact that certain words refer to certain objects is not just something everyone knows, but something that everyone knows everyone knows, and so on.

For example, I know what "My hair is on fire - please help" means, and you know what "My hair is on fire - please help" means, but in order for say it to any effect, I must also assume that you know, and in hearing my frenzied request, you must assume that I know you know, and have issued this series of strangely but deliberately choreographed noises with the intent of it being understood to mean that my hair is on fire (please help).
To put it much more succinctly, the *convention* that words mean particular things is true only because everyone acts according to that convention. It's not enough that we all know English - our knowledge of English has to also be in the common ground.

<!-- If you were *certain* that I did not speak English, or *certain* that I did not know you spoke English, you would have to conclude that I was just making noises, and in the absence of any other evidence (in this particular case there would probably be some other evidence), continue about your day. -->


Actually, that leads to a working definition what the common ground is, namely: The common ground between some set of people is set of all facts that they all know and that everyone assumes are in the common ground. (Note how this definition is recursive)

<!-- It's probably worth noting explicitly that the fact that the common ground is defined in terms of itself (i.e. recursively) is not an accident. -->

One of the consequences of this definition is that the common ground $C$ is such that some fact $x$ being in $C$ and everyone acting as if $x\in C$ amount to the same thing. There is something profoundly abnormal about that: imagine if everyone acting like it never rains in England actually makes it true. Or imagine playing a version of Guess the Weight of the Fruit Cake[^1] in which the cake's weight depends on what everyone believes the weight to be.

In that vein, I like to think of the common ground from a sort of magical realist point of view, as if it's this mutable object which metamorphoses into what everyone acts as if it is, like in the book American Gods, where the old-world gods disappear when people stop believing in them.

There are many questions you have, ranging from: how do you build a precise (let alone testable) model of communication that encodes the idea of common ground in the right way? to: if he can get this much mileage out of the social nuances of Friends, would he ever shut up about Seinfeld?

<!-- which would be something like: the common ground is the prior knowledge of a hypothetical agent that forms the base case of a mutual recursion consisting of the interlocutors reasoning about each other. -->

And then there's one question [best put by Baldrick, to Blackadder](https://www.youtube.com/watch?v=tGxAYeeyoIc&ab_channel=63CAMART):

> Baldrick: the way I see it, these days there's a war on, right, and ages ago there wasn't, right, so there must have been a moment when there not being a war on went away and there being a war on came along, so, what I want to know is, how did we get from the one case of affairs to the other case of affairs?

> Blackadder: Do you mean, how did the war start?

  <!-- (The joke of Baldrick finding the most laborious possible way to ask a simple question is less funny if you've ever read a philosophy paper). -->

Baldrick, in the tradition of philosophers the world over, has phrased his simple question with so much care that it seems complicated. He's asking about how the 1st world war started, but in this case, this analogous question might be:

> How did we go from the one case of affairs, where $\phi\_0$ wasn't in the common ground, to another state, where it was?

How, in fact, does anything enter the common ground?


<!-- You could be forgiven for thinking that I'm stating the obvious. This is surely a perfect instance of someone believing something is profound after spending a long time thinking about it. Let me resort to another example to try to convince you that -->

Let me make the following broad claim: things can enter the common ground in (at least) two ways. The first is by some collectively witnessed event. For example, if Joey (now counterfactually relevant) had said in the presence of both parties: "I assert that $\phi\_0$ is true" (this is the sort of offhand remark that Joey often makes, to reliable comic effect), then $\phi\_0$ would be in the common ground. This is the power of public announcements, like group emails, or shouting "I'm so lonely" in the middle of a large crowd[^2]. Chandler's concession to Phoebe at the end of the episode has the same effect re. $\phi\_0$.

As an aside, this first way of things entering the common ground requires that the triggering event be sufficiently "strong" evidence. For example, certain events which provide evidence towards $\phi\_0$, like party 2 walking in on party 1 standing unusually close, would be sufficiently compatible with $\phi\_0$ being false that both parties could, in a strangely collaborative act, tacitly agree to ignore it. This, by the way, seems to be what happens when something very awkward happens at a social gathering: all parties simply agree that it in fact has not happened. (Think: someone forgetting your name at a cocktail party and you acting as in they have not forgotten and taking pains not to put them in a position in which this lack of knowledge will be clearly exposed).
Some events, on the other hand, like party 2 walking in on party 1 *in flagrante delictu* - I'm assuming that if unfamiliar, the meaning of this phrase is recoverable from context - would be just too compelling evidence for either party to ignore.
That is, Rachel and Monica couldn't walk in on Chandler and Monica having sex, make eye contact, leave the room, and then pretend that nothing had happened. Actually, as I write that, I realize that pretending you have not walked in on someone having sex is an extremely plausible scenario, so I'll revise my point. What I really mean is just that based on my model of how the cast of Friends would behave in a counterfactual version of this episode, I think this scenario would trigger an end to the pretense that $\phi\_0$ is false[^3].

So things can enter the common ground through collectively witnessed events. What about the second way? The second way is stranger. In a nutshell it's that everyone in a conversation can simply pretend that something was already in the common ground, and lo and behold, it starts to be there, by virtue of always having been there.



<!-- In essence, it's this: people can summon things into the common ground just by collectively acting as if they were already there.  -->

I'll need another example. In the interest of continuity, let's say it's also from Friends, but as this one will be strictly contrived, so let's say it's from the as yet unreleased, much feted (but sadly delayed) Friends reunion show.

We start watching with baited breath as the screen pans from the New York skyline, much as it ever was, to Phoebe and Joey holding umbrellas and standing in a fountain. Finally, the significance of the opening credits scene is going to be revealed.

This is their first time seeing each other in years, so as the dialog begins, it's unclear what is and isn't in the common ground.

Phoebe might not be sure, for example, if Joey remembers her song Smelly Cat. Perhaps, at one point, their conversation goes like this:

> Phoebe: I played Smelly Cat the other day

> Joey: no way!

This exchange shores things up: the existence of Smelly Cat is back in the common ground, on account of Phoebe *acting* as if it *already was* in the common ground, and Joey acting the same way too.

What's interesting about this is that you can assume information was already in the common ground even if it couldn't have possibly been there before.

For example, suppose Joey wants it in the common ground that he is married. He could announce this fact - that was method one for entering something into the common ground - but he could also just say:

> The other day, my partner said the funniest thing to me...

And Phoebe might reply:

> Oh, what was that?


<!-- Here, Phoebe is taking for granted (at a linguist might say, *presupposing*) that Monica remembers who Emily is - a character who after 15 years she might plausibly have forgotten. And perhaps  -->
<!-- (Recreating the tone of an average Friends dialog is actually pretty hard): -->

In this exchange, Joey has simply acted as if it was already in common ground that he was married, and Phoebe has not challenged him. His marriage is a presupposition of his utterance.
The conversation continues, but the fact of Joey's marriage has slid into the DMs of their common ground.

To see that this way of entering a fact into the common ground is different from a direct announcement, note that there are some things which, when asserted directly are just surprising, but when presupposed, make you sound unhinged.

For example: if say to a new acquaintance: "I have a pet alpaca", then sure, they may be surprised or even doubtful, but if I say, without first mentioning the previous fact: "Last week, while I was taking my pet alpaca for a walk, I had an interesting idea", you would be confused, because while it's implausible that I have a pet alpaca, it is much much more implausible that the fact of my having one was already in the common ground. (This is context dependent: if this conversation took place at an alpaca conference, the presupposition of alpaca ownership might be downright plausible.)


<!-- : more compelling example: Or more to the point, think about language; you never sat down with anyone and agreed what every word means, but we act as if they all have fixed meanings (of which we might have some uncertainty) and that everyone else who speaks the language knows those meanings too. -->

I'll wind up with a second example, of a great party game (to my knowledge nameless) which works like this. Person 1 starts with a sufficiently vague statement about an event, like:

> Gosh, wasn't that thing we went to last week fantastic?

To be clear, there is no actual event - the point of the game is that both people just make it up as they go along. As such, Person 2 responds in assent, accommodating the presupposition that they shared this collective experience, and maybe adding some details:

> Oh man, that was so good - I love the way they were dressed!

The conversation continues in this vein until, after a while, both participants feel they have established to some degree of clarity what musical/flood/funeral/baking show they collaboratively conjured out of the ether, and compare notes.
(I really love this game, but admittedly, it is also the kind of thing I imagine people who describe themselves as thespians doing in large groups).

If there's any punchline, it's that language is exactly like this game. No-one goes through the dictionary, carefully checking with the friends, neighbors and loved ones that they are all in agreement about the meanings of each word. But without doing this, we all agree that there is some incredibly complex and baroque set of rules, that we already are in agreement on those rules, and then just sort of talk to each other on this basis. In my soon-to-be-professional opinion, having thought about it for several years, I can confirm that language is pretty odd.

[^1]: Game played at an English country fair, rules self-explanatory

[^2]: In fact, [this puzzle](https://xkcd.com/blue\_eyes.html) and the [follow up discussion](https://terrytao.wordpress.com/2008/02/05/the-blue-eyed-islanders-puzzle/) are a good, if obviously idealized, example of how public announcements of a proposition can have a very surprising effect even if that proposition was already known by everyone (but not in the common ground). If you read it, consider that in the analogy with Friends, Joey plays the role of the impartial Guru - ostensibly a flesh and blood human, but for all intents and purposes exempt from the complexity of the social machinations.

[^3]: You might wonder (and indeed I think this is an empirically fascinating question which at some point in the future we will have the tools to investigate rigorously): what is the threshold where an event provides sufficiently strong evidence of $\phi\_0$ that it enters the common ground? In other words, how undeniable does the evidence have to be before all parties abandon any pretense?  I think, if I had to really pinpoint why I'm fixating on this point, it is because strength of evidence is a continuous variable, but the effect of something entering the common ground is not continuous. That is, you can imagine increasingly strong signs of Monica and Chandler's romance being ignored until some threshold, at which point $\phi\_0$ enters the common ground and everyone starts to behave entirely differently, sort of like a phase transition.
