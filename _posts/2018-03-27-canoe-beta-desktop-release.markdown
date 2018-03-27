---
layout: post
title: Canoe Beta Desktop Release
date: 2018-03-27 20:00:00
description: 
img: apollo15.jpg  
author: gokr
tags: [canoe, mobile, beta] # add tag
---
 The Canoe team is proud to release the Beta Release - version 0.3.4 of Canoe  - for Desktops! This is Canoe for **Linux, OSX and Windows**. Later this week we are releasing the same Canoe for Android and iOS also - but Desktop is first out of the gate! And if you are keen on iOS you can [sign up for Testflight here](/signup). Android will probably be released publically.

<!--more-->

# The Downloads
We build and sign all binaries with GPG. Our public key has not yet been validated fully by others, but we hope to solve that as soon as possible. The [download page](/download/) has full instructions on how to verify the signatures of the files.

We distribute Canoe for Desktop as a zip file. For Linux we also have an AppImage, and for OSX there is a standard dmg. These are just the same build, but packaged in a possibly more convenient way. But you can always use the zip file, extract it, and run the canoe executable inside.

# Canoe Beta 0.3.4
Since Canoe Alpha2 was released in mid january we have made **667 commits** and basically rewrote the whole guts of Canoe.

All wallet operations like signing etc happens client side in Canoe and only signed and ready blocks are passed to and from the server. This means the server side is "trustless" so even if the server would be compromised **your wallet is safe on your own device**.

The wallet is stored encrypted only in localstorage on your device/computer using the industrial grade [AES256](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) encryption. It never travels to the server, not even in encrypted form.

For desktop, the wallet is stored in [NW.js](https://nwjs.io/) localstorage, which is not inside the extracted directory. This means you can delete the whole Canoe directory, install a newer version, and your wallet will still be available as before. See [the help page](/help/) for details on where the wallet is stored.

* Canoe has QR code scanning (and QR code generation) for both accounts and seeds and follows the established QR/URL conventions from the wiki. Whenever you see a little scanner icon in a field, you can tap it to use the scanner. Scanner also works fine using the computer webcam!
* Canoe uses **precalculated PoW per account** (currently server side PoW except for Linux which can also do client side) which means regular use of Canoe is instant.
* Canoe has a **lock security** mechanism based on a soft and hard inactivity timeout, detecting when Canoe goes into background - and user choice of locking methods including PIN, fingerprint or password. The model is described in more detail [in another post](https://getcanoe.io/2018/02/11/security-in-beta.html).
* Canoe also handles **multiple accounts** including attributes like a readable name, the chosen representative, color of account in the UI, if balance should be hidden etc.
* And there is an **address book** with name, email, gravatar integration and incremental search.
* Canoe can export and import the wallet as a file, fully encrypted. This preserves more metadata than using only the seed import/export. The file also contains the address book.
* All transactions are **timestamped by the Canoe server**, regardless if your Canoe is running or not. This means you have proper timestamps in the account history view, as the time the transactions were detected by our server.
* Canoe communicates with **no polling at all** using pub/sub MQTT. This means our server is not overloaded with polling clients and it also means that transactions between Canoe wallets are sub second, if the precalculated PoW is ready to go, which it should be in most natural cases.
* Canoe has a full **live table of conversion rates** to fiat currencies to show all amounts in both Nano and in the local currency of your choice.
* Canoe also has sound effects for incoming transactions, sends and a few other things. 
* And finally, we have almost 60 contributors signed up [helping us](https://poeditor.com/join/project/cnSZa85DRN) **translating Canoe to 31 languages** (and counting)!

The backend for Canoe is also fully open source and we are hosting the current server at getcanoe.io, but there is nothing stopping the community from running more server instances around the globe. If you are interested in this, contact us!

Did we miss some feature? We probably did, because there is quite a lot. Hop in and explore!

<video width="480" height="320" controls="controls">
  <source src="/assets/movies/overview.mp4" type="video/mp4">
</video>

# The Project
Canoe is Open Source, both in license (MIT) but perhaps more importantly, **in spirit**. Anyone can join and help, we build it together. All discussions around where development is going is public on our discord and we are currently **6 in the official team** (Göran, Rami, Stef, Cedric, Mike and Tyler) and perhaps 5-10 more actively helping with testing, ideas and so on. Joining in is just a matter of **doing the walk and not just the talk**. :)

Canoe is not a core project, but we are actively working with the core team who have been very helpful and supportive of Canoe.

# Technology
We are reusing [the same core code](https://github.com/chriscohoat/rai-wallet) that [Nanowallet.io](https://nanowallet.io) uses, which in turn was originally written by Chris Cohoat for Nodejs.

Canoe is a hybrid application written in javascript using AngularJS and the Ionic mobile framework and is packaged to run either in [NW.js](https://nwjs.io/) for the desktops, or in [Apache Cordova](https://cordova.apache.org/) for primarily **iOS and Android, although Windows Phone may also be supported**. Canoe development started in december, as a clone of [Copay](https://copay.io), the Bitcoin wallet developed by Bitpay.

All work is driven via [github's issues and milestones](https://github.com/getcanoe/canoe/milestone/2).

If you have questions or want to help out, you can always reach us on our [discord server](https://discord.gg/ecVcJM3).

Thank you, the Canoe team.