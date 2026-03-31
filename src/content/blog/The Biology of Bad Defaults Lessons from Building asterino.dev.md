---
title: "The Biology of Bad Defaults: Lessons from Building asterino.dev"
description: "Our brains are not black boxes, they are biological organs subject to the same physical constraints as the rest of our body. Here's what that means for the decisions we make as software engineers."
pubDate: 2026-03-30
tags: ["software-engineering", "web-development", "astro", "decision-making"]
imgURL: "https://images.unsplash.com/photo-1716833322990-acbeae5cc3eb?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

Every day, we make decisions without giving it a second thought, some of which are full of consequences while others are menial. From what route you drive to work, your go-to coffee shop order, or whether a defendant looks trustworthy in court, the brain does not distinguish. Our brains are not black boxes of mystery; they are made up of the same deterministic, biological yuck as the rest of your body. Just as you might injure your knee on a hike and reduce your ability to walk, your brain is subject to the same physical constraints, hunger, fatigue, and stress. These constraints are constantly working under the hood to influence your decisions, often without you knowing. According to neuroscientist and primatologist Robert Sapolsky:
 
> "...the frontal cortex has an extremely high metabolic rate and rates of activation of genes related to energy production. Willpower is more than just a metaphor; self-control is a finite resource." (Sapolsky, 49)
 
We accept the limitations of our body without apprehension, but rarely extend that acceptance to our brains.
 
Given that willpower is a finite resource, it matters how we spend it. Most of our daily work becomes routine over time, which is exactly what our biology is optimizing for; it would rather coast on a familiar pattern than burn energy on a deliberate one. The danger here isn't the existence of the routine; it's the failure to recognize when the decision has outgrown the routine.
 
The consequences of routine formation at work heavily depend on the context it's happening in. Memorizing the steps of creating a header section for an HTML file likely won't be a decision that makes or breaks the future of a software project, but a framework will. When I started building [asterino.dev](https://asterino.dev), my personal portfolio site, the obvious choice was to reach for Next.js or React, it's what I know, it's what most job postings ask for, and it's what I would have used without thinking. I had developed a routine of reaching for the same front-end framework over and over again, but this time I paused. A portfolio site is static by nature, it does not need server-side rendering, dynamic routing or the overhead that comes with React, so I chose Astro.
 
Astro's content-first architecture made that decision immediately apparent. When I implemented the blog section, there was no fighting the framework, I simply defined a content collection, dropped in a markdown file, and all of the routing handled itself. Every blog post lives at a clean and readable URL without any manual configuration. I hadn't written a single post yet, but the infrastructure was already there to support all of the features of markdown inside any post. Whenever I needed to write a blog post, I did not have to worry about implementation, I simply had to worry about the content of my writing.
 
Once the correct framework was in place, the decisions beneath it felt obvious. Given that a portfolio site has a finite number of sections, rather than rebuilding a shell for every page, I created a single Layout component that each section simply slots its content into. The result was I could shift my focus to the content of each page rather than worrying about the minutia of implementation. The upstream decision of deliberate action rather than routine had already done all of the thinking.
 
The same humility we extend to a bad knee deserves a place in every design decision. Your biology is not an obstacle to good engineering, it's the context in which all engineering happens. Recognize which decisions have outgrown your routine, spend your willpower there, and let everything else be automatic.