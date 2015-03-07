(defproject codepair.io "0.1.0-SNAPSHOT"
  :description "Website code for Codepair.io"
  :url "codepair.io"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2505"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [compojure "1.3.1"]
                 [ring/ring-core "1.2.1"]
                 [ring/ring-devel "1.0.0"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [ring-server "0.4.0"]
                 [slingshot "0.12.1"]
                 [cheshire "5.4.0"]
                 [clj-http "1.0.1"]
                 [com.taoensso/timbre "3.3.1"]
                 [im.chit/hara.component "2.1.7"]
                 [im.chit/adi "0.3.1"]
                 [om "0.8.0-rc1"]
                 [sablono "0.2.22"]
                 [secretary "1.2.1"]

                 ;; meant to override [clj-time "0.6.0"] in ring-core
                 [clj-time "0.8.0"]
                 [abengoa/clj-stripe "1.0.4"]
                 [noisesmith/groundhog "0.0.3"]

                 [bkell "0.1.2"]]

  :repl-options {:init-ns codepair.shell}

  :ring {:handler codepair.http.handler/app}

  :profiles {:dev {:source-paths ["src/cljs/" "src/clj/"]
                   :dependencies [[org.clojure/test.check "0.6.1"]
                                  [ring/ring-mock "0.2.0"]
                                  [midje "1.6.3"]]
                   :plugins [[lein-midje "3.1.1"]]}}

  :cljsbuild {:builds [{:id "codepair"
                        :source-paths ["src/cljs/"]
                        :compiler {
                                   :output-to "resources/public/js/codepair.js"
                                   :output-dir "resources/public/js/out/"
                                   :source-map    "resources/public/js/out.js.map"
                                   :foreign-libs [{:file "https://login.persona.org/include.js"
                                                   :provides ["navigator"]}]
                                   :optimizations :none
                                   :pretty-print true}}]}

  :jvm-opts ^:replace ["-Xmx1024m" "-server"])
