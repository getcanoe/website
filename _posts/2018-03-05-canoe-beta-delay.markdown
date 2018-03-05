---
layout: post
title: Canoe Beta Delay
date: 2018-03-05 10:00:00
description: 
img: soon.jpg  
author: gokr
tags: [canoe, mobile, beta] # add tag
---

As some may have noted, february came and went and no [Canoe](https://getcanoe.io) release yet! We had hoped for end of february, but ... some things we **really want to have in place** made us postpone a little bit.

So until 

<!--more-->

# The Progress
Progress has been quite good and the team has grown with one more member - Cédric Dupont - making us **6 in the official team**. We have one or two more that have been putting in quite some work, so we may grow a bit more soon.

The activity on github is gaining steam with **over 261 commits** the last month. And we have **48 translators working hard translating Canoe to 28 languages**, just earlier today Portuguese reached 100% and we also have Chinese, Arabic, Russian and many more. But if you would like to translate Canoe to your language, just [join in](https://poeditor.com/join/project/cnSZa85DRN). This part of Canoe is a huge undertaking and we are in awe of all the effort being put in by the translators! Cédric Dupont is from now on taking care of the i18n effort.

Rami Taibah has been working on UX design and fixes inside Canoe and generally keeping track of a lot of issues in github and all of us in general.

Mike Tasset has been making a new nice website design and will also move into improving the UX in Canoe itself later on. Mike is also responsible for the new improved logo of Canoe.

Tyler Storm has been working hard on a new alias server implementation which the core Nano team asked him to implement. This alias server is initially being hosted at our server but will be moved to either an independent server, or to nano.org itself, and **it's free to use and has a fairly strong focus on security**, even though it's of course a centralized solution. However, the idea is to later on move to decentralisation using efforts made by other developers. Finally, the alias registration and lookup is also fully integrated in Canoe, and this is one of the things we really wanted to have working properly before release of the Beta.

And I, Göran Krampe, have been working on many different fronts in Canoe, both the application and the server side parts.

We also have  a lot with testing, figuring out how to make AppImages, making really cool movies on using Canoe and more.

# What's Left

All work is driven via [github's issues and milestones](https://github.com/getcanoe/canoe/milestone/2) and this very moment we have 11 open issues for the Beta milestone. The most important parts we want to nail before making the release are:

1. Security locking including PIN, fingerprint (Android) and timeout settings etc. This was described in [an article earlier](https://getcanoe.io/2018/02/11/security-in-beta.html).
2. Proper timestamping on transactions using persistent server side timestamping of all blocks.
3. Making sure creation and lookups of aliases work both in onboarding and in account settings in Canoe.
4. Fixing a crucial iOS issue and OSX crash, basically making sure Canoe works on all our 5 platforms.

The release of Android will be both on playstore and as downloadable apk file. The release of iOS will be using testflight in AppStore. The desktop editions are released as GPG signed binaries in suitable formats.

# Ok, ok, but when?
We hope to make the release mid march. :) 

If you have questions or want to help out, you can always reach us on our [discord server](https://discord.gg/ecVcJM3).

Thank you, the Canoe team.