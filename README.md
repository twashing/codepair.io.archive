# Codepair.io

Source code for the Codepair.io web application.


## Usage

This should be sufficient to run the tests

- `git clone git@github.com:twashing/codepair.io.git`
- `cp resources/{config.edn.template,config-codepair.edn}`
- `lein midje`


## TODO


1. Pedestal

  [ok] start / stop server
  [ok] hot reloading

  - different sessions can lookup other sessions by [sessionID, userName, groupName]
  
  [ok] async messages
  - WebRTC Signalling
  
  - A/V , Messaging / Screensharing

2. https://github.com/cemerick/double-check
  - Herbert Test Schemas

3. Om Components
4. Om / Cursor updates

5. Sablono -> kioo

5. CRUD Availabilities
5. Unify Searches
5. Request connection

6. ***Integrate WebRTC (incl. signalling server), or Google Hangouts integration*** (http://clojurehackers.com/p/Marak/simple-peer, https://www.google.ca/search?q=setting+up+a+webrtc+server&oq=setting+up+a+webrtc+server&aqs=chrome..69i57.7031j0j7&sourceid=chrome&es_sm=91&ie=UTF-8, https://webrtchacks.com/own-phoneco-with-webrtc/, http://stackoverflow.com/questions/21354278/webrtc-to-setup-signaling-server, http://deeppai.com/2014/01/26/getting-started-with-webrtc/, https://www.google.ca/search?q=clojure+webrtc+signalling+server&oq=clojure+webrtc+signalling+server&aqs=chrome..69i57j69i64l2.13111j0j7&sourceid=chrome&es_sm=91&ie=UTF-8, http://www.html5rocks.com/en/tutorials/webrtc/infrastructure/)
  - Good video documentation: https://www.youtube.com/watch?v=5ci91dfKCyc
  - Signalling & STUN server


--
7. Devops
  - point DNS records to Linode server
  - restart interruptsoftware.com
  - notify Stripe that I'm going live
  
  - prod deploy **app**
  - prod deploy **db**
  - prod deploy **webrtc** solution

8. Connect with someone
  - Accept a connection 

9. Exit pairing (of others)
  - End session (of yours)

--
10. Search for availabilities by *user* *text search*
11. Explore http handling using [Pedestal](pedestal.io)
  - asynchronous communication with client
12. Voting System
13. Office Hours
14. Switch accounts
  - including unsubscribe back to free, from Professional or Enterprise


- edn parsing after first signup
- availabilities / order-by
- availabilities / order-by / created


## License

Copyright © 2015 Interrupt Software Inc.

Distributed under the Eclipse Public License either version 1.0 or any later version.
