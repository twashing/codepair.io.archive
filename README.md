# Codepair.io

Source code for the Codepair.io web application.


## Usage

This should be sufficient to run the tests

- `git clone git@github.com:twashing/codepair.io.git`
- `cp resources/{config.edn.template,config-codepair.edn}`
- `lein midje`


## TODO

1) Bound layout to session
  - `/index` when logged out
  - `/landing` when logged in
2) Header with *title* and *login* / *logout* link
3) Landing Page Outline
  - all listings
  - your availabilities
  - your session(s)
  - stripe page
4) Stripe page (update account level)
5) *CRU* availability
  - tags all lower case, no dashes or spaces
  - create button & workflow
  - page transitions (between all, availabilities, sessions)
6) ***Integrate WebRTC (incl. signalling server), or Google Hangouts integration***
7) Devops
  - point DNS records to Linode server
  - prod deploy **app**
  - prod deploy **db**
  - prod deploy **webrtc** solution
  - notify Stripe that I'm going live
8) Connect with someone
  - Accept a connection 
9) Exit pairing (of others)
  - End session (of yours)
10) Search for availabilities by *user* *text search*
11) Explore http handling using [Pedestal](pedestal.io)
  - asynchronous communication with client


## License

Copyright © 2015 FIXME

Distributed under the Eclipse Public License either version 1.0 or any later version.
