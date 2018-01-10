---
layout: post
title: Disaster Girl Strikes 
date: 2018-01-09 23:25:00
description: 
img: disaster-girl-meme.jpg 
author: gokr 
tags: [canoe, mobile, launch, alpha] # add tag
---

We decided to release the Alpha version of Canoe, but we didn't send out emails to all 600 people that have signed up for trying it - simply because we wanted to test it for a few hours with a smaller crowd. That proved wise since **Disaster Girl** turned out to be a **properly chosen pic** for the alpha post!

<!--more-->

# A Bug
The alpha of Canoe works quite nicely from a UI perspective, and a few people got cracking with it, all was fine. Then suddenly when yet another new user clicked through the onboarding and came to the step "Create Wallet" - the two calls that had worked perfectly fine for about 114 wallets - **suddenly failed hard**. In fact, immediately after the "wallet create" call the rai_node decided that the wallet was locked. Or in fact, wasn't there at all, although it did report successfully creating it! And after that it just threw it's digital hands in the air and refused to talk to us anymore.

So there is a bug in rai_node, and this is core code, so I have not yet tried to look into why. Colin proposed that it may be a race condition and that a pause between the first two calls might help - but nah, didn't. And also, the latest master has some bug fixes preventing some bad conditions, nah, didn't help either. **NOTE: Help arrived later with Luke Alonso, finding the root cause, see below.**

# Helicopter Down
After a flurry of attempts trying to get the rai_node running again, I gave up. The server was down and noone could run Canoe at this point. I decided to:

* Scan all wallets to see if anyone had any money in them
* If so, reach out and try to figure out where to send it
* Delete all empty wallets and see if that could resurrect it somehow

# Luke Saves The Day
Luke Alonso contacted me after I had explained our problems on the #development channel. He had been hacking in these parts earlier, and fixed another nasty issue causing corruption in a similar fashion. Luke took the db and debugged it all and he found out that **there is a limit of 128 wallets** in rai_node! Now, a limit would be fine - if rai_node actually would return an error saying something like "limit reached", but ... nah. What fun would that be? ;) So the BUG was simply that the code didn't detect failure nor report it.

Now I have patched our rai_node with a limit of **1000** wallets, and we are up and running again. If this stays up for a while we will soon send out our email to all those 600 that signed up for the alpha.

# Next Step
We are already hacking on the newer architecture which will **not use these calls at all**. But it will take some time before that new code is usable. Until then, play with the alpha but remember the warnings we have given about it. The beta will be a much more solid solution.

Thank you for being part of this project at such an early stage. If you'd like to contribute to Canoe, you can help us by reporting issues, fixing bugs, translating, or donating.

And once more... THANK YOU LUKE!

Regards, the Canoe Team

<div style="margin: auto; width: 100%; padding: 10px">
<img src="/assets/img/donate.png" style="display: block;margin-left: auto;margin-right: auto;"/><br>
<div style="display:flex;align-items:center;justify-content:center;">
<bold>xrb_1qckwc5o3obkrwbet4amnkya113xq77qpaknsmiq9hwq31tmd5bpyo7sepsw</bold>
</div>
</div>
