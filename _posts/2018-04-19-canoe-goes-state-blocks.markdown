---
layout: post
title: Canoe Goes State Blocks!
date: 2018-04-19 12:30:00
description: 
img: stateblocks.jpg  
author: gokr
tags: [canoe, mobile, beta] # add tag
---
 We have been working hard to get an [updated Canoe](/download) out with support for the new state blocks (aka Universal Blocks). In fact you all **MUST** upgrade Canoe in order to be able to handle state blocks properly!

 Let's say that again: **YOU MUST UPGRADE TO 0.3.6!**

With this post we begin by releasing the Desktop versions, Android and iOS will follow in a day or two.
<!--more-->

# Getting Help
First off, you may be reading this because you need help with Canoe. Best bet is to come to us on our [discord server](https://discord.gg/ecVcJM3). There are many "paddlers" there to help, including the whole team.

# State Blocks
The obvious **big thing** in 0.3.6 is "state blocks". As you may know the Nano network is undergoing an upgrade to a new kind of block that basically replaces all four earlier block types. This meant a lot of core wallet code needed to be amended in Canoe.

As a user, the idea is that ... you don't really see the difference :) But under the hood, Canoe now handles state blocks and when the official wallets all switch (when the so called canary2 block is sent out) to making state blocks - Canoe version 0.3.6 (or newer) **will also automatically switch**.

But old Canoe 0.3.5 will still run, but it will at that point **NOT see incoming sends** from official wallets, because Canoe 0.3.5 does not understand state blocks so they are not even forwarded to it.

Canoe 0.3.6 will also already create state blocks if an account chain has state blocks in it, although not very likely except if you are a developer and have been testing Canoe against our test server - which... you probably have not done.

**Word of Caution: All block explorers I have looked at on the net (6 or so) have at the time of writing NOT been upgraded to properly show state blocks. They all fail in one way or another, some more than others. So try to not panic when things look strange!**

# And a Bunch of Improvements
In addition to state blocks, this is a list covering all the other changes in 0.3.6:

* Upgraded our backend Nano node to V12.0

* Canoe now has an improved Send workflow made by Tyler. Now one can more easily choose the from account when entering the amount, and one can see the balance in that account.

* Fix to get Canoe working on iOS 10.x

* Fixed searching and paging when searching among contacts in send page.

* Added a new way for wallet applications to register themselves with the backend server so that they tell what app they are ("canoe") and which version. This enables conditional handling on backend, like for example forwarding the new state blocks to only new Canoes.

* Added a new live shared configuration mechanism so that we can push out live configuration updates to Canoes.

* Reenabled live server message card so that we can post a message to all Canoes, typically when backend may have issues or similar.

* Added a new setting under Settings - Advanced, being able to choose backend server to use. At the moment we only have our own backend at getcanoe.io, and a test server. But we are about to package the server so if anyone wants to operate a Canoe backend locally, say for example in Brazil or in Asia, talk to us!

* Canoe will now on seed import ask the user to enter the text "delete" to confirm that the user understands that the current wallet is being deleted. We may later also add a mechanism to move it to the side instead of deleting.

* Canoe will now on seed import also recreate accounts named "Account 1", "Account 2" etc, until it finds 20 consecutive accounts with empty block chains. Nanovault does the same.

* UI fixes in various places.

* iPhone X send tab render bug fixed.

* When scanning QR code in send flow, pay with selected account.

* Fixed bug with a double balance being erroneously shown when there were pending receive blocks in Canoe.

* Enhanced warning when going back to onboarding.

* Updated all existing language translations.

* Refund now defaults to the account you are refunding from.

* Fix for history view error after importing seed.

# Going Forward
We hope the 0.3.6 release will move smoothly and that it will properly deal with the upcoming canary2. Since this was super high priority, all other things were kinda put aside.

But now, going forward, **we aim for 1.0!**

And one thing we really want to do is to get **all the new languages in**! We have now [over 90 people working on translating Canoe](https://poeditor.com/join/project/cnSZa85DRN) to **34 languages** - that's just amazing!

This version still only has 16 languages, but we promise to enable all new languages that reach 90% coverage in the next release. We just didn't have enough time for 0.3.6.

# The Project
Canoe is Open Source, both in license (MIT) but perhaps more importantly, **in spirit**. Anyone can join and help, we build it together. All discussions around where development is going is public on our discord and we are currently **5 in the official team** (Göran, Rami, Stef, Cedric and Tyler) and perhaps 5-10 more actively helping with testing, ideas and so on. Joining in is just a matter of **doing the walk and not just the talk**. :)

Canoe is not a core project, but we are actively working with the core team who have been very helpful and supportive of Canoe.

If you have questions or want to help out, you can always reach us on our [discord server](https://discord.gg/ecVcJM3).

Thank you!

Göran, Rami, Tyler, Stef, Cédric