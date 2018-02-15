---
layout: post
title: Canoe Beta is Coming
date: 2018-02-15 10:00:00
description: 
img: brace-yourselves.jpg  
author: gokr
tags: [canoe, mobile, beta] # add tag
---

We from the Canoe team would like to give an update on where we are on the development of [Canoe](https://getcanoe.io), the cross platform (Windows, Linux, OSX, iOS, Android) fully open source Nano wallet.

<!--more-->

# The Project
First of all, Canoe is Open Source, both in license (MIT) but perhaps more importantly, in spirit. Anyone can join and help, we build it together. All discussions around where development is going is public on our discord and we are currently **5 in the official team** (Göran, Rami, Josh, Mike and Tyler) and perhaps 5-10 more actively helping with testing, ideas and so on. Joining in is just a matter of **doing the walk and not just the talk**. :)

Canoe is not a core project, but we are actively working with the core team who have been very helpful and supportive of Canoe.

# The Journey
We first made an alpha version of Canoe, but I happily admit that was "the wrong track". I made the mistake that the RPC for the official node was useful for **actually making a wallet**, but the main purpose of the wallet parts in the RPC is for exchanges and the likes, not for personal wallets, since they per definition creates a need for trusting the server.

So we quickly decided to rewrite all the inner mechanics of Canoe so that it contains a full wallet implementation and can operate with a "trustless" server. The concept of a "trustless server" is simply a server that you don't have to trust and still be safe. Or to put it more bluntly, **if the server for some reason is compromised, it should not be able to lead to you losing funds**.

We are reusing [the same core code](https://github.com/chriscohoat/rai-wallet) that [Nanowallet.io](https://nanowallet.io) uses, which in turn was originally written by Chris Cohoat for Nodejs. This new branch of Canoe is what is going to be released as Canoe Beta.

Canoe is a hybrid application written in javascript using AngularJS and the Ionic mobile framework and is packaged to run either in [NW.js](https://nwjs.io/) for the desktops, or in [Apache Cordova](https://cordova.apache.org/) for primarily **iOS and Android, although Windows Phone may also be supported**. Canoe development started in december, as a clone of [Copay](https://copay.io), the Bitcoin wallet developed by Bitpay.

There are already "developer builds" we hand out to people that are serious in helping us with testing, so far for Android and the desktops. We should soon get a testflight going on iOS for test users, we have at least one developer running Canoe beta on iOS already, so it's just a matter of someone doing it.

# Canoe Beta
For those 300 people that decided to play with Canoe Alpha - the current Beta is already much better and should be just as safe, or even safer to use than Nanowallet.io. Seed, keys and all signing etc happens in Canoe and only signed blocks are passed to and from the server. The wallet is stored encrypted in localstorage on your device using the same AES256 encryption that Nanowallet uses.

Canoe has QR scanning and follows the established QR/URL conventions from the wiki, uses precalculated PoW (both client and server), handles multiple accounts including attributes like a readable name, color of account etc, an address book with name, email, gravatar integration and incremental search, a communication system with **no polling at all** using pub/sub MQTT, a full live table of conversion rates to fiat currencies to show all amounts in both Nano and in the local currency of user choice and we have 40 contributors signed up [helping us](https://poeditor.com/join/project/cnSZa85DRN) **translating Canoe to 28 languages** (and counting)! And there is quite a lot more in Canoe.

The backend for Canoe is also fully open source and we are hosting the current server at getcanoe.io, but there is nothing stopping the community from running more server instances around the globe.

For the beta which we hope to release before end of february, we are still working mainly on the following things:

* Security mechanisms around session timeout and locking methods including PIN, fingerprint (Android) etc, described in detail [in another post](https://getcanoe.io/2018/02/11/security-in-beta.html)
* The detail view over the actual block chain per account, in other words, the transaction history.
* Packaging for iOS and signing, checksums etc in general for all platforms.
* Support for account aliases via Tyler Storm's [alias server](https://getcanoe.io/2018/02/11/nano-alias-alpha.html), both creation of your own and lookups of other's.
* Bug fixing of course.

All work is driven via [github's issues and milestones](https://github.com/getcanoe/canoe/milestone/2).

And Canoe Beta will be released on all 5 platforms! No promises for Windows Phone though ;)

If you have questions or want to help out, you can always reach us on our [discord server](https://discord.gg/ecVcJM3).

Thank you, the Canoe team.

<div style="margin: auto; width: 100%; padding: 10px">
<img src="/assets/img/donate.png" style="display: block;margin-left: auto;margin-right: auto;"/><br>
<div style="display:flex;align-items:center;justify-content:center;">
<bold>xrb_1qckwc5o3obkrwbet4amnkya113xq77qpaknsmiq9hwq31tmd5bpyo7sepsw</bold>
</div>
</div>
