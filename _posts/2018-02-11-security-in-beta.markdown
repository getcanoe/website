---
layout: post
title: Security in Beta
date: 2018-02-11 23:00:00
description: 
img: security.png  
author: gokr
tags: [canoe, mobile, beta] # add tag
---

This article explains our current proposal on how security settings etc will work in the upcoming Canoe Beta. If you have insights and feedback to give, don't hesitate to pop in on discord and let us know! Note that after Canoe beta has been used for a while we can revisit these details before we try to reach v1.0 of Canoe.

<!--more-->

# The Fundamentals

First some basics **everyone should know**. Canoe is a client side Nano wallet using the base implementation [originally developed by Chris Cohoat for Nodejs](https://github.com/chriscohoat/rai-wallet). Same code is used in [Nanowallet.io](https://nanowallet.io). This means Canoe manages a client side wallet with a **seed, all the keys for the accounts, and also all the block chains for those accounts**.

All signing of blocks is done on the client side (PoW can be delegated to server, or done locally too) and only blocks are sent and received from the server. This means **no keys nor seed ever travel outside the Canoe application on the client**.

Whenever something changes in the wallet, like a new block is added in a chain, or a new account is created, the wallet is serialized to JSON, encrypted using the user password (AES256) and finally stored in localstorage. In contrast to Nanowallet, Canoe only saves a snapshot of the wallet locally on your device/computer. Nanowallet sends the snapshot to the server instead, since the idea for that wallet is to be accessible from any computer. However, since it's encrypted, that fact is not a big security risk for Nanowallet.

So the wallet is stored encrypted and if you as a user **forget your password - you can never get that wallet back**. But... you can reconstruct the wallet if you have a backup of the seed. This is why the seed is so important. So we have:

* A wallet which has a seed and keys for accounts
* A password which is used to decrypt the wallet from storage so that it can be used
* A seed which can be used to recreate the wallet

The purpose of the password is to prevent bad people that may steal your device to get interactive with your wallet. The purpose of the seed is for you to be able to recreate the wallet if your phone is lost.

# Canoe
When Canoe starts up for the first time it will take you through "onboarding" and create a wallet and let you pick a good password to use to encrypt it. The second time you start Canoe it will look for an encrypted wallet in localstorage and instead of going through onboarding - it will ask you for the password to decrypt the wallet.

If you don't remember the password correctly, there is no safety line to pull. The wallet can not be decrypted and you will have to recreate it using the seed that you hopefully have a backup of on paper. If you forgot to backup your seed - then you are truly **"up shit creek without a paddle"**. The accounts you had in that wallet and their funds are then **inaccessible forever**. So please people, save that seed!

When Canoe is running, the wallet is living unencrypted in RAM with all keys and the seed. Theoretically, at this point, someone could through some vulnerability manage to read the memory of Canoe and access keys and seed. There are two basic approaches here for securing access:

1. We make sure Canoe has no such vulnerability that would let someone read the memory of Canoe. Remember, we also need to trust that iOS, Android or the other operating systems Canoe runs on does not give an attacker this possibility.

2. Or we simply purge the wallet (and the password to decrypt it) from RAM. If it's not there, then it can't be read by an attacker. But then the user must go through the hassle of entering a potentially hard to type password when unlocking the app.

We want Canoe to have reasonable defaults and then let the user decide level of paranoia :)

# Timeouts and Locks
Securing the Canoe wallet from access by someone other than you consists of:

* The phone's own unlock mechanisms, first line of defense.
* Canoe's unlock mechanisms.
* Canoe's logic for doing sends and viewing accounts.

Canoe has the following three unlock options:
1. Password entry (all platforms)
2. Fingerprint scanning (Android)
3. PIN code (all platforms)

Our proposal is to control behavior using the following settings:

* When app goes to background, choose lock mechanism (none, fingerprint, PIN, password).
* When timeout A is reached (in background or not), choose lock mechanism (none, fingerprint or PIN).
* When timeout B is reached Canoe will purge wallet from RAM and lock by password. This is like restarting Canoe.

Example:

Joe hates security and does not want to be bothered with locking. He chose "none" for lock when going to background and when reaching A. And he sets B to max value, 86400. This essentially never locks Canoe, until after 24 hours of inactivity.

Jane is paranoid and uses password lock when Canoe goes to background. She chose "none" for lock when reaching A, but she sets B to 60 seconds which will lock Canoe with password after 1 minute of inactivity.

# Logic constraints

There is also some application logic deciding when the password unlock is required:

* Max amount to send in a single send (set in user choice of currency), without requiring unlock method X
* Max amount to send during x hours (set in user choice of currency), without requiring unlock method X

In addition to this certain areas of the application always require unlock by password when entering them:

* The security preferences page is password checked at entrance, each time.
* The advanced settings page is password checked at entrance, each time.

# Canoe vs Nanowallet
As I have explained Canoe uses the same base code for the wallet. Nanowallet does not seem to have evolved much last months so I think the codebase is almost the same. Canoe has made some tweaks, we for example have a metadata object attached to each account inside the wallet - so that we can store attributes of each account, for example the color of the account in the UI, or the new alias field.

The big differences:

* Nanowallet sends encrypted wallet as a blob to the server, both for backup reasons but also to be able to reach the wallet from any browser. Canoe currently only stores wallet in localstorage. This means Canoe currently has no multi device support, but we will add it after the Beta.
* The code for Nanowallet is run inside your regular browser and depends on the security of that browser. Canoe runs as a packaged Cordova application on mobile, or as an Nwjs application on desktops. This is a more tightly controlled environment.
* The code for Nanowallet is served up from Nanowallet.io, obviously, so if that server is compromised all bets are off.

For Canoe beta I would argue that Canoe beta seems safer than Nanowallet, if we disregard the fact that Canoe is newer code.


If you have questions you can always reach us on our [discord server](https://discord.gg/ecVcJM3).

Thank you, the Canoe team.

<div style="margin: auto; width: 100%; padding: 10px">
<img src="/assets/img/donate.png" style="display: block;margin-left: auto;margin-right: auto;"/><br>
<div style="display:flex;align-items:center;justify-content:center;">
<bold>xrb_1qckwc5o3obkrwbet4amnkya113xq77qpaknsmiq9hwq31tmd5bpyo7sepsw</bold>
</div>
</div>
