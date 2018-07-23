---
layout: post
title: Canoe goes 1.0.0!
date: 2018-07-23 12:30:00
description: 
img: woman-canoe.jpg  
author: gokr
tags: [canoe, mobile] # add tag
---
Finally we have decided to release **1.0.0 of Canoe!** We felt it was time since Tyler Storm - our true hero managing the iOS release of Canoe - finally got Canoe published on AppStore!

<!--more-->

We did not manage to get everything we planned into this release, but we felt it was the right thing to do anyway. A quick 1.0.1 release will follow shortly. The lovely photo is courtesy of Roberto Nickson (@g) on Unsplash.

# AppStore
Apple approval was a challenge. Apple previously only allowed approved cryptocurrencies on the app store, and Nano was not on that list. Recently they changed their guidelines to allow for cryptocurrency apps as long as there is an LLC behind the app. As soon as this was changed Nano Wallet Company quickly released their wallets. We immediately started to figure out the best way to form a legal entity for Canoe.

Tyler went to work finding the cheapest way to form a legal entity and ended up filing with the State of Ohio for an LLC. This was the best option as Tyler lives there and [Ohio has a very small filing fee and no annual fee](https://www.llcuniversity.com/llc-annual-fees-by-state/).

After registering for the LLC we had to get our IRS EIN and we had to file for a DUNS number. Next we had to work with Apple to convert our existing Apple individual developer account to a company developer account. Finally after finishing all of this we were able to submit to Apple only to be rejected as they couldn't login. We provided additional information that there was no login and they should just follow the prompts to create an account.

After a 5 day waiting period they have **finally approved Canoe** to be listed on the iOS app store!

# Changes
This is what has changed since 0.9.12:

* Show password icons/buttons on all password input fiels, [pull request](https://github.com/getcanoe/canoe/pull/288) made by Brian Ko.

* Fixed a [bad text](https://github.com/getcanoe/canoe/issues/283) when clicking donate to Canoe.

* Fixed the Repair action to properly repair accounts with no block history.

* Made Canoe use the new way to connect with the backend that includes **sending name and version** of the wallet software.

* Fixed validation of account names beginning with **nano_**.

* Tyler fixed an issue in how send transactions sometimes **appeared** as receive transactions in the history view.

...and various fixes on the backend side have also been made.

# Team Changes
Nico Fricke has joined the Canoe team. Nico has been operating his own Canoe backend for quite some time and has been helping others do the same and has been quite active on the Canoe discord. Welcome Nico!

This means we are currently 5 people on the team - Mike Tasset and Cédric Dupont have other things going on in their lives :) and are not currently active in the team, but thanks for all their help!

If you want to join the Canoe team, just talk to us.

# Getting Help
First off, you may be reading this because you need help with Canoe. Best bet is to come to us on our [discord server](https://discord.gg/ecVcJM3). There are many "paddlers" there to help, including the whole Canoe team. We have also a channel for running your own Canoe backend.

# What's next?
Right after this release we will **push out 1.0.1 fairly quickly**. The main focus of 1.0.1 will be to get [all translations updated](https://poeditor.com/join/project/cnSZa85DRN), as we did not get that into 1.0.0, sorry! It was the plan, but... since we got the Apple approval it was better to push this version out and then make a quick 1.0.1 as a followup. We will also include other smaller fixes that were supposed to be in 1.0.0.

You can follow [our milestones](https://github.com/getcanoe/canoe/milestones/Canoe%201.0.1) on github. :)

# The Project
Canoe is Open Source, both in license (MIT) but perhaps more importantly, **in spirit**. Anyone can join and help, we build it together. All discussions around development is public on our discord and we are currently **5 in the official team** (Göran, Rami, Stef, Nico and Tyler) and perhaps 5-10 more actively helping with testing, ideas and so on. Joining in is just a matter of **doing the walk and not just the talk**. :)

Canoe is actively working with the core team who have been very helpful and supportive of Canoe. We are also cooperating with other Nano projects and teams in various areas.

If you have questions or want to help out, you can always reach us on our [discord server](https://discord.gg/ecVcJM3).

Thank you!

Göran, Rami, Tyler, Stef, Nico