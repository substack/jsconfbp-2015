# anyone can edit

James Halliday
http://substack.net

Hobbyist Programmer
Oakland, California

https://github.com/substack/omega-projects/issues

---
# anyone can edit

What if ANYONE could edit ANYTHING?

---
# anyone can edit

some problems:

* access to technology
* free time and resources
* DRM, copyright
* tech literacy

---
# you own your data

a laudable goal, but also problematic:

"You own your data."

More on that later.

---
# wikis

wikis work because many people are empowered to participate

(just like npm!)

---
# wikis as a pervasive data model

not just a centralized curated repository of "truth"

---
# wiki technical features

* historical database (like git, couchdb)
* activity feeds

https://oaklandwiki.org/Activity_Addiction

---
# wikidb

a small database you can use for wiki-like data

---
# demo

command-line wikidb demo

---
# demo

wikidb in the browser

http://localhost:8082

---
# other kinds of wikis!

live music wiki! http://studio.substack.net

project planning wiki: http://ship.substack.net

---
# demo

http://studio.substack.net
http://localhost:8081

---
# demo

http://ship.substack.net
http://localhost:8080

---
# problems with wikis

The wiki can be shut down or hacked.

The wiki software can change in user-hostile ways.

---
# problems with SERVICES

The SERVICE can be shut down or hacked.

The SERVICE software can change in user-hostile ways.

---
# problems with OWNERSHIP

The PROPERTY can be appropriated or excessively accumulated.

A small number of people usually bear the expenses or reap the rewards.

---
# digital property

* naming (dns, package registry names)
* transaction ledger (crypto currency)
* cryptographic trust (ssl cartels)

---
"It's a miracle these people ever got out of the 20th century."

-- Captain James T. Kirk in San Francisco, 1986 (Star Trek IV)

---

"You own your data."

Perhaps instead:

"You own your identity." (more on that later)

---

How can we build services that nobody can own?

---
# identity

You are the hash of your public key.

Users generate their own keys.

---
# demo

sign data with cryptography

---
# content-addressable data

```
key = hash(value)
```

* integrity checking for free
* links can't change

---
# replication is easy!

* concatenate logs to replicate
* allow multiple HEAD values for each key

---
# demo

append-only logs

---
# blob store

https://www.npmjs.com/package/abstract-blob-store

abstract interface for blob storage:

* files on disk
* s3
* google drive
* indexedDB

---
# demo

content-addressable-blob-store

---
# DHTs

distributed hash tables (kademlia paper)

http://webtorrent.io

torrent-stream

npm install -g torrent torrent-mount

---
# demo

torrent-blob-store

---
# webrtc!

peer to peer connections in the browser! (and in node!)

but!

peer introductions are very tricky

---
# demo

webrtc signaling

---
# PEERNET

mad science multi-layer gossip network
for subnetting

---
# END

Hack the planet!

