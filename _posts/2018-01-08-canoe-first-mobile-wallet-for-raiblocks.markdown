---
layout: post
title: Canoe Wallet&#58; First Mobile Wallet for RaiBlocks 
date: 2018-01-08 10:00:00
description: 
img: disaster-girl.jpg 
author: rami 
tags: [canoe, mobile, launch, alpha] # add tag
---

Two weeks ago we started working on a new wallet for Raiblocks based on the popular Bitcoin wallet, [Copay](http://copay.io). Today, we are happy to bring you our first tech preview alpha release of Canoe!

Canoe supports **Android**, **iOS** (to be released, but you can build it yourself) and **Windows Phone** (also comes soon), in addition to **Windows, Mac OSX, and Linux desktops**.

We are releasing Canoe early because we want to get it in the hands of the community as soon as possible in order to test the user experience and help us 'battle harden' it. That being said, Canoe comes with a solid list of features including an onboarding tour that creates the wallet, importing seeds, sending and receiving RaiBlocks (QRCode), creating multiple accounts, QR code scanning, an address book, fingerprint unlock, and much more.

Finally, please be aware that Canoe is still in it's very early stages, so please use only accounts with small amounts for testing purposes.

Here is a non-exhaustive list of Canoe's current shortcomings:

* Password protection is not yet implemented
* Email notifications is not yet hooked in
* The account view with transactions is not yet implemented
* You can currently not remove an account
* URL handling is not yet done
* The home tab with balances and pending is not updated automatically, pull down or switch between tabs to get it up to date.
* Import wallet via file not implemented
* Currency conversions not fully working, but a bit
* ...and a bunch more of course!

But all of the above will of course soon be fixed.


# Security

The security of the current model is based on people trusting us to not steal their money. Kinda like any exchange.

This is because the current architecture relies on the "wallet" parts of the RPC, which means Canoe is sending the seed (when you import, or when you create the wallet initially) through HTTPS to our server. So if a hacker gets root access to our servers, they can do some serious damage.

We also haven't yet implemented the password mechanism, and currently client side state (including seed) is stored in localstorage unencrypted.

These are all **big fat security issues** that we plan to fix in the beta release by reusing the excellent raiwallet webclient side codebase which addresses most of these issues brilliantly!

Finally, we are doing server side PoW, so... if a LOT of people start using it - the server will not manage. We are not sure what number "a LOT" is. Again, something that will be moved to client side in beta.

# Contribute
Thank you for being part of this project at such an early stage. If you'd like to contribute to Canoe, you can help us by reporting issues, fixing bugs, translating, or donating.

Regards, the Canoe Team
