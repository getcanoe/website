---
layout: post
title: Canoe and plans ahead
date: 2018-12-23 14:40:00
description: 
img: mice.jpg  
author: gokr
tags: [canoe, mobile] # add tag
---

Canoe development slowed down after **1.0.1** for various reasons. Both me and Tyler got new day jobs, Rami also was busy and Stef had a huge crop of olive trees to harvest. Yes, not kidding, **5 tons**! But... it's christmas time, and Canoe is getting close to Canoe's 1st birthday, time to get cracking again! 
<!--more-->

# Best laid plans of Mice and Men...
First of all we would like to thank the community for all the support during 2018. We also want to take the opportunity to invite developers to **join us in the Canoe project** - we need more developers! Canoe 1.x is in 100% javascript, Cordova on mobile. Canoe 2.x will be in Flutter, see below, and thus in Dart. If you find these technologies interesting, do join up!

But now, for some "best laid plans" the Canoe project continues, and we have three major parts happening:

* Kayak is born!
* Canoe 2.x starting!
* Canoe 1.x evolving

Before going into details on Canoe 1.1, some words about the first two items on that list.

# Kayak
As you may be aware, we are looking at Flutter for Canoe 2.0. At work I (Göran) am working a lot in Dart, server side so far (and loving it), but I am also getting started with mobile apps in Flutter. At the same time Nico has started hacking on a **cold wallet** as a mobile app (see feature 3 in list below for Canoe 1.1) - in Flutter!

We have decided to call this limited "cold Canoe" - **Kayak**. It's meant to act as a limited cold wallet only, with high levels of security. Flutter is also perfect since Flutter runs "pixel identical" all the way down to Android Jelly Bean, v16, 4.1.x, and iOS 8 (iPhone 4S). You can quite easily find such old phones for very little money.

So **Nico focuses on Kayak** and I (Göran) will be focusing on writing a Dart library for the core domain code for the wallet.

# Canoe 2.0
We also want to fire up work on Canoe v2.0 in Flutter. This is a great time to join the Canoe project, because you can now get to work in Flutter (awesome shit) and be able to affect the design of Canoe v2.0 from the very start. **Tyler will be the lead on Canoe v2.0** and it will use the same core library for the wallet as Kayak.

# Canoe 1.1
The plan is to get **Canoe 1.1 out in january**. Exactly what features and bug fixes we can muster is unknown, but do give us your view on what you think are the top 5 from the list below. We are also aware of several bugs on github that we will comb through. Write your comments in the reddit thread about this post.

In order to get some sense of what we can focus on for 1.1, and to get our priorities straight, we have written down a list of things we know we can do in no particular order:

1. Email notifications
2. Push notifications
3. QR code based cold wallet
4. Multiple separate wallets
5. Wallet sweeping and gifting
6. Add support for OpenCAP (rewriting our own aliases implementation)
7. Distributed PoW
8. URL handlers working properly
9. Support for recurring payments
10. Composite account (a scheme for better privacy)
11. Representative guarding (alarm when your reps aren't behaving)
12. Much more lax security option
13. Seed sharing finally working
14. Setting for more explorers, more buttons to get to them
15. nano_ prefix support
16. Shorten account numbers visually

This list is probably not complete.

# Email notifications
Adding email notifications, optional, for incoming funds when your Canoe app is not running, seems like a good idea. It will however require the server to know an email address associated with the wallet id, so purely from a security mindset - an intruder on the backend would be able to harvest the email for those account numbers. But if the user acknowledges this "risk", it's a very nice feature, and email works regardless of platform, Android, iOS or desktops.

# Push notifications
This one needs more investigation and personally I would favor email notifications to begin with. Any and all insight here is appreciated.

## QR code based cold wallet
This idea was first proposed by Cryptocode (now in core) AFAIK. The idea is to use a cheap old cell phone as a cold wallet, only to communicate with it using QR codes. Thus, Canoe (the hot wallet) would need a mechanism to ask the cold wallet to sign a block (via a QR code), and the cold wallet of course needs to be able to scan QR codes, sign blocks and show them back as QR codes. Then the hot Canoe can send the block to the network for processing. At least this is my perception of how this is meant to work.

The intention is to add the parts for the hot wallet side to begin with, so that Canoe 1.1 can talk to "Kayak", see below.

## Multiple separate wallets
In order to implement wallet sweeping and similar features, and also for longer term integration with other Nano based coins like Nollar, we want to make Canoe able to "juggle" separate wallets. This means you will be able to add more seeds and keep track of several wallets - in the same Canoe. This feature is on high priority and is the main focus of Göran for Canoe 1.1.

## Wallet sweeping and gifting
Multiple wallets enables sweeping and gifting. Sweeping involves scanning a QR code that contains a seed. Canoe then creates a temporary wallet behind the scenes, scans the accounts and whatever funds it finds, it transfers to an account of your choosing in your main wallet. Gifting is the opposite, Canoe then creates a new seed and temporary wallet, transfers funds to an account of that wallet, and then shows a QR code with this seed, or the same as a paper wallet. This feature enables sending funds to anyone, as a URL.

## Add support for OpenCAP
As some of you know, Canoe has had a fully fledged alias function for a long time. But we decided to "pull it" upon request from Nano core. Unfortunately, this hasn't really led to a concerted effort as we expected. Lately yet another attempt at aliases was started by Lane Wagner, the OpenCAP. During discussions Lane has evolved and adapted OpenCAP along the lines of the alias solution we envisioned in Canoe, so we have come to the decision to support it and implement it in Canoe. Tyler is our main man on this, he wrote all of our original alias implementation, including the alias server to go along with it. We got a taste of our own alias implementation during testing and it was very nice to have. We are not sure we have the energy to get it all into 1.1, it depends on feedback and man power. Lane is working with us on this also.

## Distributed PoW
We have initial code support for distribution of PoW to slave servers. I never had the energy to pull it all the way through, but it would be nice to get it done since it then alleviates the need for a beefy server running the Canoe backend. The system uses MQTT and it's pub/sub model to have slave servers connect and offer help to calculate PoW. When a Canoe wallet needs PoW, it makes a request and the backend delegates it to one of the available slaves. Kinda like that.

## URL handlers
Canoe has code inherited from Copay to handle URLs, but it was never fully hooked up and tested. But if we do this then you can click on a URL in your browser (mainly interesting on mobile I guess) and it spawns Canoe to handle the URL. This is also a very important feature for the "sweeping and gifting" so goes hand in hand with that.

## Recurring payments
This is a relatively new idea that was floated by a Canoe user to support "subscriptions". It's about paying say 1 Nano every monday, or every month, or whatever. The obvious problem is of course that Canoe may not be running when it's time to pay, so ... some kind of server side needs to be involved. I have not fully vetted this idea, but it seems to me that Canoe could pre-create signed and ready send blocks for say 6 payments (or whatever), and send them to a server that only has the job to send them out, one by one, on the Nano network at the proper day. The only thing a malicious party could do if he got hold of these blocks, is to make the payments prematurely.

Also, the setup requires a separate account for these payments, since the chain needs to be undisturbed or the blocks will automatically become invalid. This also means that this account needs to have the funds in it - for these 6 payments - from the start. It's an interesting idea, and we could easily add support in the Canoe backend to handle this. What do you guys say? Is it a nice feature? It seems to enable subscription based payments without involving a third party other than the Canoe backend. You can also "cancel" the subsription at any time, by simply moving the funds out of the subscription account - thus making the pre-created blocks immediately invalid.

## Composite account
This is a way to increase privacy by using multiple receiver accounts but letting Canoe present the funds and transactions as if it was a single logical account. In combination with stealth addresses - which has been discussed on the Canoe discord - it could create a decent level of privacy, and it can also be a reasonable function for a merchant without needing a 3rd party payment gateway. Personally I find the concept more of an intellectual challenge than perhaps something that people desperately wants. But I may be wrong? The exact details around this demands a full article of its own. If you find this intriguing, ask on discord. The stealth address mechanism was proposed by POar, but I have not lately gotten in contact with him/her.

## Representative guarding
We all know how important it is with decently chosen representatives. If you use Canoe, you end up using our representative account by default when you create accounts, but you can change it easily, and individually per account under Settings. In the community we have had several discussions on how to get people to make educated choices, and it's a bit complicated. But we could relatively easy let Canoe warn you if the representative(s) you have chosen are not behaving properly - for example if they are offline, or have relatively bad online percentage. Or if something else is wrong about them. We could hook into mynano.ninja as a trusted source of information around this.

## Lax security
A lot of people find Canoe to be a PITA when it comes to security. You need to enter password quite often, and you can't get away with just FaceID or touch. Most people miss the fact that you can increase "lock times" to very high numbers, and thus make it a bit more bearable. But perhaps you are fine just trusting your phone security and don't want Canoe to put up a second fight. The idea is to add some settings so that you can turn off security in increasing levels, all the way to the extreme point where no password is needed and the wallet is not encrypted at rest on disk. Early on we wanted Canoe to be safe as hell. Now we are considering letting the user decide, starting out with a decent default.

## Seed sharing
Ahhhh, this olden goldie. Yes, we need to wrap this up so that you can run multiple wallets, for example both a mobile and a desktop Canoe, with the same seed. As it stands today, Canoe gets confused if a different app (Canoe or other wallet) makes blocks in the same accounts. Nothing bad happens, but you end up needing to do "repair" in Canoe to get it in sync again. But yeah, we need to fix it.

## More explorers
In order to get a "second opinion" on blocks and transactions, the explorers on the net are invaluable. Canoe should have more buttons to go to them, and we should offer a choice of what explorers to use.

## Nano prefix support
Ok, so... this one is of course mandatory to fix. We must support "nano_" as well as "xrb_".

## Shortening account numbers
Account numbers are quite long, we should of course use a shortening style, much like other wallets do. Also fairly easy to fix.


# More fun stuff ...
During Q1 2019 there are also at least **two other cool things coming** in Canoe. Unfortunately we will have to let you hang a bit on these since we need to correlate with other parties, but... both are very nice and we will go public with them as soon as we can! ;) Yeah, I know, what a tease I am.

# Getting in contact
So now you are fired up and ready to join in the Canoe project, perhaps with testing, ideas or actual coding. Best bet is to come to us on our [discord server](https://discord.gg/ecVcJM3). There are many "paddlers" there to help, including the whole Canoe team. We have also a channel for running your own Canoe backend, as well as a channel about Point Of Sale terminals, translations of Canoe to other languages etc. Welcome!

# The Project
Canoe is Open Source, both in license (MIT) but perhaps more importantly, **in spirit**. Anyone can join and help, we build it together. All discussions around development is public on our discord and we are currently **5 in the official team** (Göran, Rami, Stef, Nico and Tyler) and perhaps 5-10 more actively helping with testing, ideas and so on. Joining in is just a matter of **doing the walk and not just the talk**. :)

Canoe is actively working with the core team who have been very helpful and supportive of Canoe. We are also cooperating with other Nano projects and teams in various areas, several other wallets share our backend for example.

If you have questions or want to help out, you can always reach us on our [discord server](https://discord.gg/ecVcJM3).
If you want to join the Canoe team, just talk to us.

Thank you!

Göran, Rami, Tyler, Stef, Nico