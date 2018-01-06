---
ayout: post
title: Canoe&#58; First Mobile Wallet for RaiBlocks 
date: 2017-09-12 00:00:00 +0300
description: 
img: android-2.png 
tags: [canoe, mobile, launch, alpha] # add tag
---

2 weeks ago we started working on a new wallet for Raiblocks based on the popular Bitcoin wallet, Copay. Today, we are happy to bring you our first alpha release of Canoe! Canoe supports Android, iOS (to be released, but you can build it yourself), and Windows phones, in addition to Windows, Mac OSX, and Linux desktops.

We are releasing Canoe early because we want to get it in the hands of the community as soon as possible in order to test it and help us 'battle harden' it. That being said, Canoe comes with a solid list of features including creating wallets, importing wallets, sending RaiBlocks, receiving Raiblocks, multiple accounts, QR code scanning, fingerprint unlock, and much more.

Finally, please be aware that Canoe is still in it's very early stages, so do not use it with amounts you are uncomfortable losing. Here is a non-exhaustive list of Canoe's current shortcomings:

### Security

The security of the current model is based on people trusting us to not steal their money. Kinda like any exchange. This is because the current architecture relies on the "wallet" parts of the RPC, which means Canoe is sending seed and keys etc through HTTPS to our server. So if a hacker gets root access to our servers, they can do some serious damage.

We also haven't yet implemented the password mechanism, and currently client side state (including seed) is stored in localstorage unencrypted.
These two are big fat security issues that we plan to fix in the beta release by using raiwallet webclient side codebase which addresses both of these issues.

Finally, we are doing server side PoW, so... if a LOT of people start using it - the server will not manage. We are not sure what number "a LOT" is.

### Usability

- The wallet doesn't auto update, it will do that later, but right now it fetches balances etc when you go to home or "pull down" on home.
- We haven't yet implemented the Account details page with txns.
-  We are not showing "pending" transaction yet

### Contribute
Thank you for being part of this project at such an early stage. If you'd like to contribute to Canoe, you can help us by reporting issues, fixing bugs, translating, or donating.
