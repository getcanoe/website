---
layout: post
title: Canoe Is Born
date: 2018-01-08 10:00:00
description: 
img: yapese-canoe.jpg 
tags: [canoe, mobile] # add tag
---

I started looking into crypto currencies in the beginning of december about one month ago. Buying some Bitcoin and learning the ropes. But I immediately started looking at the "mining free" coins, since IMHO it's an obviously **idiotic waste of energy** going on with the whole mining concept.

## The DAGs
Being so called "DAG coins" eliminating mining - **RaiBlocks, IOTA and Byteball** caught my attention. Of these three RaiBlocks felt most interesting to me.

Byteball does have nice feature, and from the little I have read - a concept of privacy making it stand out. But RaiBlocks is straight forward in its focus (money - not a damn "computing platform") and I would also argue the block lattice model feels very natural to me, so natural that I can't understand why blockchains have been around all this time, and only RaiBlocks picked such a model.

## Open Source
I am a developer, quite experienced, and I wanted to get involved in the community somehow. I have taken part in many different open source projects during the years and that's how I like to work.

Frankly... RaiBlocks has in my humble opinion a bit of **learning to do** in this department. The core team is fairly silent and things are being developed "out of sight". I understand that there are probably commercial reasons for some things being "cooked up" in the dark, but it does make the community "second class citizens"...

From what I can tell we have no real saying in what's being done nor how the roadmap is supposed to look. Maybe I am missing something here though, perhaps I am just old-fashion, perhaps there are channels open that I should have known about?

Many praise the team for actually delivering though and not just talking, and I agree, that's a strong point - but hey, that's what real developers do and I expect no less.

But I would expect a bit more inclusiveness. If it's supposed to be a real open source project of course. Sorry for sounding negative, but this is meant to be constructive criticism.

## Wallets

Obviously RaiBlocks is a bit lacking in this department. The native official wallet uses Qt, written in C++ and works, but... it's definitely **not a pillar of user friendliness** - and that's perfectly fine - because core team has their focus on other parts. As long as it works, it serves the purpose. Of course, it should be slightly less confusing around the important parts (backup, seed etc).

The web based [Raiwallet.com](http://raiwallet.com) is good stuff. I don't use it myself, but I have skimmed lots of the code. In fact, we plan to reuse large parts of it in Canoe for the beta!

Then there are some works in progress, but definitely a bit of a shortage here. So feeling that "hey, how hard can it be?" - I looked at Byteball, because people said they have a **great wallet** and it turns out that it's a derivation of [Copay](http://copay.io) from Bitpay. These wallets are built using web tech - in Cordova and nwjs. That means great portability including mobile. And it's all MIT licensed.

# Just doing it
One thing I have learned is that things get going when you actually start doing something instead of talking. So I just cloned out Byteball and started with it. That **failed**, I couldn't even run it! Not sure what it was, but after a few hours of frustration (probably something trivial) I cloned out Copay instead, going straight to the source.

From that point in time I have been hacking on it like a mad man, and @Eunji and @rami have joined up helping me with design, UI fixing, testing, planning and website development. I called it **RaiW** first, but @Eunji came up with **the much better name Canoe** and the first incarnation of our logo - a canoe holding a rai stone.

We have even gotten our first **real donation**! No idea from whom, but thanks! We split it among all team members.

# The Canoe Project
We fired up a server, registered a domain, got a website in place and so on. And we are close to our first tech-preview [alpha release](). That's after just a few weeks of work, and Canoe is already full of working features.

We **know** that the current backend model is not good from a security perspective, we will start replacing it as soon as alpha is out the door. But we want people to get a shot at playing with it!

And we have over **600 people signed up to try out the alpha**!


# Contribute
We invite anyone to contribute to Canoe, you can help us by joining as developer, reporting issues, fixing bugs, translating, chatting encouraging words on discord - or donating.

This is true Open Source. Everyone can be a part. Everything done in the open. :)