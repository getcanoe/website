---
layout: post
title: Canoe Beta Out on Android and iOS!
date: 2018-03-30 19:00:00
description: 
img: allplatforms.jpg  
author: gokr
tags: [canoe, mobile, beta] # add tag
---
 Earlier this week we started by [releasing Canoe Beta version 0.3.4 for Linux, OSX and Windows](2018/03/27/canoe-beta-desktop-release.html). Then as planned we also released it for **Android** with a superb reception making us blush, but we didn't post about it because we also wanted iOS out first, and to be honest - people have posted enough anyway.
 
 Now the **time has come for iOS!** We are so far running it as a Test flight and you can [sign up for it here](/signup) and we are pumping it out at least daily, so you will not have to wait long if you sign up.

<!--more-->

# Getting Help
First off, you may be reading this because you need help with Canoe. Best bet is to come to us on our [discord server](https://discord.gg/ecVcJM3). There are many "paddlers" there to help, uncluding the whole team.

# The BigNumber bug
During the week and the first onslaught of users we discovered a bug that "randomly" caused users to not be able to import their seeds, or just having issues suddenly out of thin air. It was actually a bug in the presentation layer, not with the wallet itself - but it tripped up Canoe enough to not show what it was supposed to show. There was also a silly layout bug in the onboarding process that looked... bad simply.

Both these issues **were fixed and then we pushed out 0.3.5 across the board**.

We also had an embarrassing hiccup when our MQTT server suddenly suffered an expired SSL certificate, it was actually configured for auto updating, but silly me had managed to goof up a config file causing the auto update to fail. But this was thankfully quickly resolved, alhough I am still embarrassed.

# Finally iOS
Personally I am an Android/Linux guy, so I don't get that worked up about iOS. But of course, it still is very important to be out on **both these platforms**, and now we are!

Canoe on Android is open for everyone, on iOS we chose to go with the **Test flight** to start with. We haven't decided for how long or how many, it probably depends on how many issues we see during the next week or two.

# Next Steps
We have lots of things we want to improve in Canoe. Our issue tracker on github is what we use to track all proposals to improvements, features and of course bugs.

There is also work on the server side that we want to do - primarily in securing availability.

Earlier this week we wanted to be able to say more about the next steps, but we are a bit "pumped out" by the beta release and we need a breather before nailing the plan forward. If you have ideas or thoughts, just **get onto discord and chat with us about it** - or simply add an issue to github.

# The Project
Canoe is Open Source, both in license (MIT) but perhaps more importantly, **in spirit**. Anyone can join and help, we build it together. All discussions around where development is going is public on our discord and we are currently **6 in the official team** (Göran, Rami, Stef, Cedric, Mike and Tyler) and perhaps 5-10 more actively helping with testing, ideas and so on. Joining in is just a matter of **doing the walk and not just the talk**. :)

Canoe is not a core project, but we are actively working with the core team who have been very helpful and supportive of Canoe.

If you have questions or want to help out, you can always reach us on our [discord server](https://discord.gg/ecVcJM3).

Thank you!

Göran, Rami, Tyler, Stef, Cédric, Mike