(defproject codepair.io "0.1.0-SNAPSHOT"
  :description "Website code for Codepair.io"
  :url "codepair.io"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.8.0-RC2"]
                 [org.clojure/clojurescript "1.7.170"]
                 [aleph "0.4.1-beta2"]
                 [yada "1.0.0-20150903.093751-9"]
                 [reloaded.repl "0.1.0"]
                 [org.danielsz/system "0.2.0"]
                 [bkell "0.1.2"]
                 [clj-http "2.0.0"]
                 [cheshire "5.5.0"]]  

  :repl-options {:init-ns codepair.shell}

  :cljsbuild {:builds [{:id "codepair"
                        :source-paths ["src/cljs/"]
                        :main "codepair.core"
                        :compiler {:output-to "resources/public/js/codepair.js"
                                   :output-dir "resources/public/js/out"
                                   :source-map "resources/public/js/out.js.map"
                                   :optimizations :whitespace
                                   :pretty-print true}}]}
  
  :profiles {:dev {:source-paths ["src/cljs/" "src/clj/"]

                   :dependencies [[org.clojure/test.check "0.9.0"]
                                  [ring/ring-mock "0.3.0"]
                                  [midje "1.8.2"]
                                  
                                  [figwheel-sidecar "0.5.0-2"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [weasel "0.7.0" :exclusions [org.clojure/clojurescript]]]
                   
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :plugins [[lein-midje "3.1.1"]
                             [lein-figwheel "0.5.0-2"]
                             [lein-cljsbuild "1.1.1"]]

                   :figwheel {:http-server-root "public"
                              :server-port 3449
                              :css-dirs ["resources/public/css"]
                              :ring-handler lc.server/http-handler}  
                   }
             
             :test {:dependencies [[ring/ring-mock "0.3.0"]]}}

 )
