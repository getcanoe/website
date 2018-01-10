---
layout: post
title: Disaster Girl Strikes 
date: 2018-01-09 23:25:00
description: 
img: disaster-girl-meme.jpg  
author: gokr 
tags: [canoe, mobile, launch, alpha] # add tag
---

Last night we decided to release the Alpha version of Canoe. We however opted not to send out emails to those who shown interest in the public alpha; we wanted to test it on a smaller crowd. The launch was announced to our small followership on Twitter and on the Raiblocks Discord. This proved wise since Disaster Girl from our [alpha release blog post](https://getcanoe.io/2018/01/08/canoe-first-mobile-wallet-for-raiblocks.html) showed up.

<!--more-->

# A Bug
The alpha of Canoe worked quite nicely from a UI perspective, a few people got cracking with it, all was fine. At some point, a new user clicked through the onboarding suddenly failed hard. Despite that the two calls had worked perfectly fine for about 114 wallets. In fact, immediately after the "wallet create" call the **rai\_node** decided that the wallet was locked. It then just threw it's digital hands in the air and refused to talk to us anymore.

Turns out I stumbled onto a bug in **rai\_node**. This is core code, so I did not look deep into it. Colin proposed that it may be a race condition and that a pause between the first two calls might help - but nope. Another suggestion was that the latest master has some bug fixes preventing some bad conditions, nope, didn't help either. Help arrived later with Luke Alonso, finding the root cause.

# Helicopter Down
After a flurry of attempts trying to get the node running again, I gave up. The server was down and noone could run Canoe at this point. The team and I decided to:

* Scan all wallets to see if anyone had any money in them
* Reach out to wallet owners and try to figure out how to give them back their funds
* Delete all empty wallets and see if it could be resurrected

# Luke Saves The Day
Luke Alonso contacted me after I had explained our problems on the #development channel. He had been hacking in these parts earlier, and fixed another nasty issue causing corruption in a similar fashion. Luke took the db and debugged it all and found out that **there is a limit of 128 wallets** in rai\_node! Now, a limit would be fine - if rai\_node actually would return an error saying something like "limit reached". But where is the fun in that? ;) The bug was simply that the code didn't detect failure nor report it.

Now I have patched our rai\_node with a limit of 1000 wallets, and we are up and running again. If this stays up for a while we will soon send out our email to all those 600 that signed up to be notified about the alpha.

# Next Step
We are already hacking on the newer architecture, which will not use any of these calls. Until then, play with the alpha but remember the warnings we have given about it. The beta will be a much more solid solution.

Thank you for being part of this project at such an early stage. If you'd like to contribute to Canoe, you can help us by reporting issues, fixing bugs, translating, or donating.

And once more... THANK YOU LUKE!

Regards, the Canoe Team

<div style="margin: auto; width: 100%; padding: 10px">
<img src="/assets/img/donate.png" style="display: block;margin-left: auto;margin-right: auto;"/><br>
<div style="display:flex;align-items:center;justify-content:center;">
<bold>xrb_1qckwc5o3obkrwbet4amnkya113xq77qpaknsmiq9hwq31tmd5bpyo7sepsw</bold>
</div>
</div>
