# Codepair.io

Source code for the Codepair.io web application.


## Usage

This should be sufficient to run the tests

- `git clone git@github.com:twashing/codepair.io.git`
- `cp resources/{config.edn.template,config-codepair.edn}`
- `lein midje`


## TODO

- Bound layout to session
  - `/index` when logged out
  - `/landing` when logged in

- Header with *title* and *login* / *logout* link

- Landing Page Outline
  - all listings
  - your availabilities
  - your session(s)
  - stripe page

- Stripe page (update account level)

- *CRU* availability
  - tags all lower case, no dashes or spaces
  - create button & workflow
  - page transitions (between all, availabilities, sessions)

- Connect with someone
  - Accept a connection 

- Exit pairing (of others)
  - End session (of yours)

- Search for availabilities by *user* *text search*

- Explore http handling using [Pedestal](pedestal.io)
  - asynchronous communication with client


## License

Copyright © 2015 FIXME

Distributed under the Eclipse Public License either version 1.0 or any later version.
