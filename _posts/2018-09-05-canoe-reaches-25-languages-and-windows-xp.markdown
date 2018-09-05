---
layout: post
title: Canoe 1.0.1 with 25 languages and on Windows XP!
date: 2018-09-05 12:30:00
description: 
img: thanks.jpg  
author: gokr
tags: [canoe, mobile] # add tag
---
Today we are making a smaller release **1.0.1** of Canoe. It mainly has some bug fixes, more languages and now runs on Windows XP 32 bit which enables running it on fairly old computers.

<!--more-->

# Languages

Canoe has more than 130 people working on [translating it](https://poeditor.com/join/project/cnSZa85DRN) to 42 different languages! This is very cool and we are super grateful for all your efforts in helping us with this. Of these 42 about 10 haven't really started (at 0% coverage), and yet another 7 have only just gotten started (around 10-20% coverage). But we do have 25 languages currently in Canoe, most of them above 95% coverage.

Added in this release are these 5:

* Portuguese Brazil
* Romanian
* Hebrew
* Slovak
* Bulgarian

And now we are also **fully synced** with POEditor meaning that the current translations are in this version.

# Changes
This is what has changed since 1.0.0:

* Better network connection code and error handling.

* Fixed QR showing [wrong address](https://github.com/getcanoe/canoe/issues/292) in recieve tab sometimes

* Fixed [donate button](https://github.com/getcanoe/canoe/issues/47) by disabling it when there are no funds

* Shows an hour glass when Canoe is waiting for Proof Of Work.

* Fix bug that prevented Canoe from discovering incoming sends and thus causing very long pocketing time

* Added build for Windows 32 bit supporting Windows XP using Legacy version of NWjs (0.14.7).

* Fix to revert backend change (after failing to connect) if one enters a non existing backend hostname.

...and various fixes on the backend side have also been made, especially one that **caused MQTT disconnects** every minute.

# Windows XP
After a request from Venezuela we decided to make a 32 bit build of Canoe that can run on Windows XP. It uses the legacy version of NWjs 0.14.7 and it seems to work in a virtual Windows XP I have on one of my machines. Let us know if it works!

# Getting Help
First off, you may be reading this because you need help with Canoe. Best bet is to come to us on our [discord server](https://discord.gg/ecVcJM3). There are many "paddlers" there to help, including the whole Canoe team. We have also a channel for running your own Canoe backend, as well as a channel about Point Of Sale terminals, translations of Canoe to other languages etc.

# What's next?
Right after this release we get back to working on 1.1.0 which mainly needs to support so called "epoch blocks" which is coming soon to the network, a simplified model of security and hopefully also solving the long standing issue of "seed sharing".

You can follow [our milestones](https://github.com/getcanoe/canoe/milestones/Canoe%201.1.0) on github. :)

# The Project
Canoe is Open Source, both in license (MIT) but perhaps more importantly, **in spirit**. Anyone can join and help, we build it together. All discussions around development is public on our discord and we are currently **5 in the official team** (Göran, Rami, Stef, Nico and Tyler) and perhaps 5-10 more actively helping with testing, ideas and so on. Joining in is just a matter of **doing the walk and not just the talk**. :)

Canoe is actively working with the core team who have been very helpful and supportive of Canoe. We are also cooperating with other Nano projects and teams in various areas.

If you have questions or want to help out, you can always reach us on our [discord server](https://discord.gg/ecVcJM3).
If you want to join the Canoe team, just talk to us.

Thank you!

Göran, Rami, Tyler, Stef, Nico