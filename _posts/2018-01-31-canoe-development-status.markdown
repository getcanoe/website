---
layout: post
title: Canoe development status 
date: 2018-01-31 10:00:00
description: 
img: workshop.jpg  
author: gokr 
tags: [canoe, mobile, beta] # add tag
---

(photo courtesy of [Jon Westra](https://www.flickr.com/photos/jonwestra78/))

Work continues on the dev branch for the upcoming Beta. We just wanted to describe a bit of what we are doing, why we are doing it and also give some indication of a somewhat-from-the-hip-timeplan.

<!--more-->

# Why does Alpha suck?
Canoe Alpha was written to use the Wallet functionality in the official rai\_node server software. We run a rai\_node on getcanoe.io and we have exposed the RPC (Remote Procedure Call) API that it offers, as a subset and through HTTPS, to the Canoe Alpha application.

So in short, when you use the alpha, a wallet is created in the rai\_node running at getcanoe.io and you interact with it over the RPC. This works but ... it's not very safe. In fact, it means by definition that sensitive information needs to be passed over the network to the getcanoe.io server, since that's where the actual wallet lives. It's basically as unsafe as having your money on an exchange ;) So... nah, we don't want to continue with that approach!

Alpha was released to get people trying it out, checking the UI and so on. Beta will be the real thing.

The current dev branch, which will end up being the Beta, uses a whole different architecture. We looked at the available javascript codebase around RaiBlocks and decided to reuse code from Raiwallet.com, also in a big part [originally developed by Chris Cohoat for Nodejs](https://github.com/chriscohoat/rai-wallet). Raiwallet.com is as you know "blessed" by the official team so using that codebase also felt like a smart move.

# Beta architecture
In the beta we have only made very small changes to the actual wallet code. It's stored encrypted using AES256 in localstorage (just like on raiwallet.com) and you use a password of your own choice to decrypt and access the wallet on startup.

The wallet then uses only "block level" communication with getcanoe.io - thus sending and receiving signed blocks, all signing and other things related to keys happening locally in Canoe. This means that **no keys, or seed, or password or anything else is ever sent to the server side**, the wallet lives purely on your device. This is similar to raiwallet.com - but Raiwallet.com also stores the encrypted wallet on the server side in order to let you as a user access it from different web browsers on different machines.

We will initially probably not have time to implement wallet sharing between multiple Canoe installations, but we will offer a similar mechanism later on.

When it comes to the Proof Of Work, the so called PoW, we have client side PoW working, will see if we have time to make it optional. We will also implement work-ahead so that the first PoW (for pocketing a send someone does to your account, or for making a send from your account) is premade and ready to go.

# Next Step
The beta code now **can do send and receive**. There are bugs and there are lots of details and testing to be done and the new server side needs to be put in place and ... and... yeah, you get it. We are not ready for a release - but we are getting close to first internal testing in the team, perhaps today or tomorrow.

A public Beta release will hopefully be sometime in february. Also, the app stores tend to swallow at least a week of time. Finally, we would need a bit more man power and that could actually speed things up a bit.

# The Team
The Canoe official team is 4 people so far:

- Göran Krampe (gokr), lead dev. Benevolent dictator.
- Rami Taibah (rami), lead UI dev, designer, website, all-over-guy.
- Mike Tasset (MikeHrn), lead designer, website.
- Josh Casquejo (Eunji), designer.

People are however joining as we go and it's a sortof "if you want in and actually deliver stuff you will get in"-thing. The reason we have a defined team is because we also have a donation account, and donations are split among the team members equally.

# More news
Canoe supports **Android**, **iOS** (yet to be released, but you can build it yourself) and **Windows Phone** (also coming later), in addition to **Windows**, **Mac OSX**, and **Linux** desktops.

The alpha was never released for iOS nor Windows Phone, nor was the Android version released on the playstore, it was only available as a downloadable apk.

We will try to do a bit better for the beta - hoping to get both Android and iOS up on stores.

After the first alpha we have also gotten tons of translations brewing where **34** people are helping with translating Canoe to **18 languages!** If your language [is not listed](https://poeditor.com/join/project/cnSZa85DRN), join up!

We will release the Beta with all languages that are fully translated at the time of the build, and that we have had at least one more person verifying it's not a bogus translation.

# Contribute
Thank you for being part of this project at such an early stage!

We invite anyone to contribute to Canoe. You can help us by joining as a developer, reporting issues, fixing bugs, translating, chatting encouraging words on discord - or donating some XRB. This is true Open Source, everything is done in the open.

Regards, the Canoe Team

<div style="margin: auto; width: 100%; padding: 10px">
<img src="/assets/img/donate.png" style="display: block;margin-left: auto;margin-right: auto;"/><br>
<div style="display:flex;align-items:center;justify-content:center;">
<bold>xrb_1qckwc5o3obkrwbet4amnkya113xq77qpaknsmiq9hwq31tmd5bpyo7sepsw</bold>
</div>
</div>
