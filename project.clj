(defproject codepair.io "0.1.0-SNAPSHOT"
  :description "Website code for Codepair.io"
  :url "codepair.io"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.8.0-RC2"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [aleph "0.4.1-beta2"]
                 [cljs-ajax "0.5.2"]
                 [jarohen/chord "0.7.0"]
                 [yada "1.0.0-20150903.093751-9"]
                 [reloaded.repl "0.1.0"]
                 [org.danielsz/system "0.2.0"]
                 [bkell "0.1.2"]
                 [clj-http "2.0.0"]
                 [cheshire "5.5.0"]]

  :repl-options {:init-ns codepair.shell}

  :source-paths ["src/clj/"]
  
  :cljsbuild {:builds [{:id "codepair"
                        :source-paths ["src/cljs/"]
                        :figwheel {:build-id "codepair"
                                   :websocket-url "ws://172.28.128.3:3449/figwheel-ws" }
                        :foreign-libs [{:file "https://simplewebrtc.com/latest-v2.js"
                                        :provides "com.simplewebrtc"}]
                        :compiler {:main "codepair.core"
                                   :output-to "resources/public/js/codepair.js"
                                   :output-dir "resources/public/js/out"
                                   :source-map "resources/public/js/out.js.map"
                                   :optimizations :none
                                   :pretty-print true}}]}

  :figwheel {:http-server-root "public"
             :server-host "172.28.128.3"
             :server-port 3449
             :websocket-url "172.28.128.3"
             :websocket-host "172.28.128.3"
             :css-dirs ["resources/public/css"]
             :asset-path "resources/public"}
  
  :profiles {:dev {:dependencies [[org.clojure/test.check "0.9.0"]
                                  [ring/ring-mock "0.3.0"]
                                  [midje "1.8.2"]                                  
                                  [figwheel-sidecar "0.5.0-2"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [weasel "0.7.0" :exclusions [org.clojure/clojurescript]]]
                   
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :plugins [[lein-midje "3.1.1"]
                             [lein-figwheel "0.5.0-2"]
                             [lein-cljsbuild "1.1.1"]]}
             
             :test {:dependencies [[ring/ring-mock "0.3.0"]]}}

 )
