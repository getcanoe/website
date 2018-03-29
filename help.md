---
layout: help 
title: Canoe | Help
heading: Help
---

##### How can I get help?

Canoe is a community driven open source project, the best way to find help is through:

* Ask on the community chat on [discord](https://discord.gg/ecVcJM3).

* Look in our [github issue tracker](http://github.com/getcanoe/canoe/issues) to see if the problem is already described there including any help around it.

##### Is the Canoe Wallet secure?

Security is our first concern. You can read a full article here: [Security in Canoe Beta](https://getcanoe.io/2018/02/11/security-in-beta.html).

##### I lost my phone with Canoe on it, how do I get my Nano back? Can someone steal my Nano?

You can install Canoe on another phone (or computer) and restore your wallet by either importing the seed (you backed up your seed right?), or importing a backup file of the wallet if you have one of those. An encrypted backup file can be generated from `Settings → Export wallet`.

If you set a complex password, you should be safe from others stealing your Nano. In the case you are worried that your password wasn't complex enough, you can restore your old wallet, and transfer all your Nano to a newer wallet (choose a better password this time!)

##### What is a representative and why should I choose one?

The network votes on the validity of unclear transactions, and a representative account will vote on your behalf. Choosing a representative that you trust is important, but also choosing a representative that doesn't have the majority of the voting weight (Official Reps) is important, as it enhances the decentralization of the Nano network.

When no action is taken Canoe’s node is the default representative for the accounts you create in your wallet. You can change the representative for each of your accounts under `Settings → <Your Account> → Representative`.

##### My funds are not displayed correctly when compared to explorers!

The block chains in your Canoe wallet may be out of sync with the network. You can sync them by using `Settings → Advanced → Repair`.

This operation is harmless but can take some time as it will reload all blockchains associated with your wallet from the Nano network.

##### Can I use the same wallet (seed) and its’s accounts on different devices (e.g. mobile and desktop)?

It’s possibile, but at this time (before Canoe implements proper wallet sharing on multiple devices) we recommend using a different wallet for each device. Using the same wallet across devices could lead to your wallet going out of sync. You will need to "Repair" your wallet as described above, to get your wallet in sync again.

##### I want to backup my address book.

Go to `Settings → Export Wallet` and use the File tab. This will export your whole wallet including the address book.

##### I have imported my wallet using the seed, where are my other accounts I created?

You can recreate your accounts by clicking the `+` button on the home tab. A seed determines all associated accounts of the wallet, in the same order. This means you will always be able to restore them.

##### What is ‘Server Side PoW’?

Every transaction needs to perform a calculation (referred to as "PoW" - Proof Of Work) as a security mechanism against transaction spamming. Desktop applications generally have no problem with this, however mobile devices would require a lot of processing power and energy, therefore it is disabled on these devices and the work is delegated to the Canoe server instead.
