---
layout: post
title: Midsummer Bug Analysis
date: 2018-06-28 6:30:00
description: 
img: bug-analysis.jpg
author: gokr
tags: [canoe, mobile] # add tag
---
A few days have gone by and we have now learned much more about the "midsummer bug" and would like to give you a full update.

<!--more-->

# Upgrade please

First, if you missed it, upgrade **immediately** to [Canoe 0.9.12](/download)! It's out in AppStore and PlayStore and downloads are available for Desktops.

# The Midsummer Bug

As most people already know a scenario popped up that can easily lead to problems:

* Let's say we have an account that is not yet opened, it has no blocks.
* Some wallet makes multiple sends to this unopened account, thus causing multiple "pending" blocks being in the ledger.
* The account starts up, say Canoe is started, and Canoe finds there are two waiting sends to produce corresponding receive blocks for.

Now, it turns out different bugs can happen here. The NWC wallet had a bug that, as far as they can see, caused crashes - **but did not lead to unexpected sends**.

Canoe works differently than NWC and has a local copy of the chains for the accounts in your wallet. This means Canoe performs balance calculations etc locally, without performing RPC calls to figure such things out. This base code has been battle tested a lot, it's the same codebase that operates Nanowallet.io and has not changed in a looong time. But it still turned out to have a "sleeping bug" that had not caused any problems earlier - but now - with our current model using "state blocks" - it proved to be a big problem, but seemingly only for Canoe.

The bug was in the balance calculation code, which **when the chain was empty**, tried to take a shortcut and return 0. The problem was that it didn't look in the list of outgoing blocks that Canoe had prepared for sending, but not added to the chain yet. The net effect was that the first block, the "open" block, was created and placed in this "outgoing blocks" collection. And immediately afterwards Canoe started making the next "receive" block, and in order to make that block it called the code to calculate the current balance of the account, which unfortunately saw an empty chain - and returned 0 - failing to account for the block that is already "in transit" so to speak.

So when Canoe prepared the second block in the chain, to receive the second incoming send - it managed to get the balance wrong in this new block. Ideally, if the protocol had been better designed (IMHO this is very poor design, but hey, we all live and learn), the Nano RPC protocol would NOT rely on the balance in order to distinguish between a SEND and a RECEIVE. But things are what they are, and when Canoe sent what it thought was a receive block - it was **instead handled as a send block** by the Nano node. Had there been some other kind of "type" field when sending blocks to be processed, then the node would instead have been able to refuse the block as being an inproper receive block.

# Analysis of fallout

Last night me and Lee Bousfield (PlasmaPower) wrote custom code to comb through the ledger database and find all the cases where this occurred. Some fairly simple rules could be crafted to find chains which had such a malfunctioned second block in them. I wrote my code in [Pharo Smalltalk](http://pharo.org) running against the RPC of a local node, checking all 522470 account chains existing at the time. Lee wrote his code in Rust running directly against the LMDB database, also up to date.

We used slightly different logic to find the cases, but in the end **we both found exactly the same 8 cases, of which 4 are real incidents and not provoked test cases**:

* [xrb_1ye1...hnbmmn](https://www.nanode.co/account/xrb_1ye1b7qanbuk91tno81ndaoihzjoas9kr3mzzexq846bjsinjyz9okhnbmmn)
    * This is NiF's account, 1 bad send of **122.422269 Nano**.
* [xrb_3ccm...pryrx8](https://www.nanode.co/account/xrb_3ccm75pn1u9uwquc3uq8jufh6iz6yqd7rc38x7iiq3qtdj511a35srpryrx8)
    * This is fabfab's account, 1 bad send of **200 Nano**. EDIT: Described as if it happened in NWC, but it must have happened after migration to Canoe.
* [xrb_3sxg...ogky4k](https://www.nanode.co/account/xrb_3sxgbz88bngp85e1maijc3eu7nkgxg7mx7ygoen764x1rd1i1a5cedogky4k)
    * This account made 1 bad send of **9.797974 Nano**.
* [xrb_1k7t...e5w3oh](https://www.nanode.co/account/xrb_1k7tsusd6bax6w98rcu81ewus7ruki7p3bpeohgdhfgkqozy3w5duoe5w3oh)
    * This account made 1 bad send of **8 Nano**.
* [xrb_11fx...fuj7t7](https://www.nanode.co/account/xrb_11fx5bq37ap3cdhji3jrh5u7p6ngcunzo6hskbokau6ybgnf7566qbfuj7t7)
    * This is a test account by Tyler I think, when we debugged the issue.
* [xrb_3qmj...pgr65i](https://www.nanode.co/account/xrb_3qmjya5znq5zcoaacxbuaz56aaqrjx8ia8y7d484ompir7e9jmfx3bpgr65i)
    * This is (we think) a test by Stef that made 1 bad send of 0.009900 Nano.
* [xrb_14d8...1rtofe](https://www.nanode.co/account/xrb_14d8aw7oq6aaz6z6n84836uy3h79emjf9o4utnpq777w3xekrwrmbm1rtofe)
    * This is Stef's test account verifying the bug, made 3 bad sends, not just one, totalling 0.0199 Nano.
* [xrb_3orh...jqjbrj](https://www.nanode.co/account/xrb_3orh3xhqihcxz1psa3uqsz8ngrcaitgg13rt61f5zyfm5hgtpsgmhjjqjbrj)
    * This is NiF's test account, made 1 bad send of 0.029990 Nano.

As far as we can tell all of the above bad sends were made by Canoe, not NWC. The NWC wallet had a different bug which doesn't lead to the above bad sends. We can also note that all these open blocks use the Canoe representative, which is the default in Canoe. The NWC wallet can not change representative yet, so it can not produce these blocks!

Finally, the funds were sent to accounts that noone can reach, **so they are burnt Nano**, it's not someone else that got them. NiF has gotten a fair bit of his Nano back, the Canoe team gave 61 (half lost), since we had 110 in our donation account, but NiF promptly bounced 30 back as a donation. ;)

The other bad accounts will be sent matching Nanos, <strike>except for the one with 200 lost. That account still needs more analysis, both me and Lee are confused around what really happened there, and will try to figure it out more.</strike>

EDIT: Confusion around fabfab's account is cleared, it was subjected to the same bug in Canoe - but after having been migrated over from NWC.

# Counter measures

At first, we **stopped the Canoe backend as soon as we got confirmation something was wrong**. NiF is active in the community and when he told us over chat what had happened - we decided to just turn off immediately. When the server was turned off me and Tyler worked on finding the bug and fixing it, and **releasing Canoe 0.9.12 with the bug fixed**. Then we started the server back up, but with a clear message broadcasted to all Canoes that they needed to immediately upgrade to 0.9.12.

We have also started implementing a **wallet blocking mechanism based on version**, but this will not be available until 0.9.13 is out, since it requires changes in Canoe also.

Finally, during our analysis we noted that the bad sends can be discovered by the backend, and prevented from going through to the node. The NWC wallet server has implemented such a check, and I have also made such **a check in the Canoe backend which is being deployed today** on the Canoe server. This means that old Canoes still being used (please upgrade!) will not be able to perform these bad sends - they will fail, and a Repair (Settings->Advanced->Repair) will be needed but then all is fine.

It also means that other wallet implementations going forward, will be prevented from doing the same mistake in the future. The logic goes like this:

1. If a wallet intends to produce a receive block it will most surely correctly put the hash of the matching send block into the link field.
2. If it then calculates a bad balance causing the block to "turn into" a send, then for send blocks the link field should contain the account number of the destination account, and not a block hash.
3. The backend discovers this by first comparing the previous block balance with the new balance to decide if the block is an actual receive or send. It then notes that - ok, the wallet is doing a send, then if this was indeed the intent, the link field **should contain an account number**. If it instead contains a valid hash for a BLOCK (the chances of this happening by chance is basically 0) - then the send is bad and is prevented from going through. This attempt is also logged in the canoed logs as "Bad send detected".

# Final words

From the Canoe team both me and Tyler frankly NEVER thought Canoe could mistakenly produce send blocks. And for sure, it could never have done it **before state blocks were introduced**. The different positive aspects of state blocks are great, but... this detail in it - the fact that only the balance decides if a block is a send or a receive - is NOT a good design. I don't care what people say, it was just a plain bad idea. It is the opposite of what we developers like to call - defensive coding. In other words, it's a freaking huge coding trap. It's fine in the block itself, but not exposed via the RPC.

We are truly sorry this happened. In a future version of Canoe we will further separate sends from receives in the protocol between Canoe and the backend, thus clearly indicate intent independently from the balance in the block. Until now we have basically mirrored the RPC calls that the node uses, but I think we are moving away from that down the road.

If you have more questions about this bug, or want to help out, you can always reach us on our [discord server](https://discord.gg/ecVcJM3).

regards, Göran and the Canoe team