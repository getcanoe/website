---
layout: post
title: Alpha Shutdown and Beta Status
date: 2018-02-09 20:00:00
description: 
img: off.png  
author: gokr
tags: [canoe, mobile, alpha, beta] # add tag
---

Now it's the 9th february and we have reached the **shutdown of the Alpha**.

You should read [the previous post](https://getcanoe.io/2018/02/02/alpha-pending-shutdown.html) for details about how the shutdown will be made.

This article will not go through that again, but just explain what happens now and some news about **current state of the Beta**.
<!--more-->

# Tonight
Unless you have done it already, you need to **transfer all your Nano** that you have in the Canoe alpha to another wallet and **never again use the seed** that was used in the Canoe alpha wallet.

In an hour or so I am stopping the server backend for the Canoe alpha. If you haven't moved your Nano to other accounts, then you will have to **email us at hello@getcanoe.io and ask us to reopen**.

On the **16th february we will nuke the wallets** from our server - in fact - **we will delete the whole rai_node**. If someone has asked us to reopen, we will do so from **16th to 19th february**. Then after that we will delete it all.

# The Beta
To compensate for the "sad news" of the demise of the Alpha :) we instead want to give you a status report on the Beta. The Beta is now being tested by the team (and some volunteers) on discord and it has aleady surpassed the functionality of the Alpha.

The Beta:

* Has a complete client side implementation of the core wallet which means the server is now **trustless**. We do not use any of the wallet functionality in the **rai\_node**.
* Has the choice of **server or client side PoW**, with server side as default.
* Maintains one **precalculated PoW** per account. This means that one send or receive is **immediate**. Then Canoe calculates the next PoW.
* Communicates with our backend server using HTTPS and MQTT over secure websockets with **no polling**.
* Has **auto updating UI** (which the Alpha doesnt have)
* Has a **proper implementation of QR code parsing**, according to the wiki standard
* Has **password protection and lock logic** with the full wallet encrypted to localstorage using same encryption mechanism and codebase that Nanowallet.io uses
* ...and a whole lot more

We are working on [a bunch of issues/features](https://github.com/getcanoe/canoe/milestone/2) before we can do the public release, but the plan to get the Beta out before march still seems realistic!

# Speed
Finally, doing a send from one Canoe to another Canoe **seems to take less than 0.5 seconds**. We haven't made proper testing, but the reason for this speed is probably due to the fact that the receiving Canoe **does not use polling**.

Nanowallet, which often is used in speed tests, is not ideal since the last time I looked it still uses a **5 second poll interval** for incoming blocks.

If you have questions you can always reach us on our [discord server](https://discord.gg/ecVcJM3).

Thank you, the Canoe team.

<div style="margin: auto; width: 100%; padding: 10px">
<img src="/assets/img/donate.png" style="display: block;margin-left: auto;margin-right: auto;"/><br>
<div style="display:flex;align-items:center;justify-content:center;">
<bold>xrb_1qckwc5o3obkrwbet4amnkya113xq77qpaknsmiq9hwq31tmd5bpyo7sepsw</bold>
</div>
</div>
