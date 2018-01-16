---
layout: post
title: Canoe Alpha 2 is Out 
date: 2018-01-16 18:20:00
description: 
img: firefighters.jpg  
author: gokr 
tags: [canoe, mobile, launch, alpha] # add tag
---

Today we decided to release the [Alpha 2](https://github.com/getcanoe/canoe/releases/tag/v0.2.0) version of Canoe! This time we also sent out our invitation email to the **605 people** who signed up on the early launch page. And yes, after sending that out - we will delete all those emails as promised. This release is a pure bug fix of the first Alpha. The main focus of these alpha versions is for you to try it out and get a feel for the UI, and test it. It's not the real thing yet (see below), but a lot of Canoe works fine and we want early feedback and hopefully also attract developers to help out.

<!--more-->

# Platforms
Canoe supports **Android**, **iOS** (yet to be released, but you can build it yourself) and **Windows Phone** (also coming later), in addition to **Windows**, **Mac OSX**, and **Linux** desktops.

After the first alpha we have gotten a flying start on translations where **14** people are helping with translating Canoe to **18 languages!** If your language [is not listed](https://poeditor.com/join/project/cnSZa85DRN), join up!

# Shortcomings
Finally, please be aware that Canoe is still in it's very early stages, so please **use only accounts with small amounts** for testing purposes.

Here is a non-exhaustive list of Canoe's current shortcomings:

* Password protection is not yet implemented
* Email notifications is not yet hooked in
* The account view with transactions is not yet implemented
* You can currently not remove an account
* URL handling is not yet done
* The home tab with balances and pending is not updated automatically, pull down or switch between tabs to get it up to date.
* Import wallet via file not implemented

...and a bunch more of course! But all of the above will eventually be fixed.

# Security
The security of the current architecture is based on people trusting us to not steal their money. Kinda like any exchange.

This is because currently Canoe uses the "wallet" parts of the RPC, which means Canoe is sending the seed (when you import, or when you create the wallet initially) through HTTPS to our server. So if a hacker gets root access to our servers, they can do some serious damage.

We also haven't yet implemented the password mechanism, and the client side state (including seed) is stored in localstorage unencrypted. These are all **big fat security issues** but they only apply to the Alpha, they will all be fixed in the Beta!

# Next Steps
Development of Canoe continues and more and more people are joining the effort. We are at this moment four in the core team, spread out in Sweden, Japan, Saudi Arabia and the US. But we are many more hanging in the Discord. Any donations are spread out evenly among the core team members, as they come in.

The dev branch has during the last week come quite a long way towards using a full client side wallet implementation based on the **raiwallet client side codebase**, which in turn is derived from [Chris Cohoat's excellent work in Nodejs](https://github.com/chriscohoat/rai-wallet).

This means the Beta will look the same, but use a similar **secure client-side-only** approach that raiwallet.com uses.

# Contribute
Thank you for being part of this project at such an early stage!

We invite anyone to contribute to Canoe. You can help us by joining as a developer, reporting issues, fixing bugs, translating, chatting encouraging words on discord - or donating some XRB. This is true Open Source, everything is done in the open.

Regards, the Canoe Team (Göran, Rami, Josh, Mike)

<div style="margin: auto; width: 100%; padding: 10px">
<img src="/assets/img/donate.png" style="display: block;margin-left: auto;margin-right: auto;"/><br>
<div style="display:flex;align-items:center;justify-content:center;">
<bold>xrb_1qckwc5o3obkrwbet4amnkya113xq77qpaknsmiq9hwq31tmd5bpyo7sepsw</bold>
</div>
</div>
