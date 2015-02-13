(defproject codepair.io "0.1.0-SNAPSHOT"
  :description "Website code for Codepair.io"
  :url "codepair.io"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2505"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [compojure "1.3.1"]
                 ;[ring/ring-defaults "0.1.3"]
                 [ring/ring-core "1.2.1"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [slingshot "0.12.1"]
                 [com.taoensso/timbre "3.3.1"]
                 [im.chit/hara.component "2.1.7"]
                 [im.chit/adi "0.3.1"]
                 [om-material-ui "0.1.1"]

                 ;; meant to override [clj-time "0.6.0"] in ring-core
                 [clj-time "0.8.0"]

                 [bkell "0.1.2"]]

  :repl-options {:init-ns codepair.shell}

  :ring {:handler codepair.handler/app}

  :profiles {:dev {:dependencies [[org.clojure/test.check "0.6.1"]
                                  [midje "1.6.3"]
                                  [alembic "0.3.2"]]
                   :plugins [[lein-midje "3.1.3"]]}})
