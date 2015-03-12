(defproject codepair.io "0.1.0-SNAPSHOT"
  :description "Website code for Codepair.io"
  :url "codepair.io"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2505"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [io.pedestal/pedestal.service "0.3.1" :exclusions [ring/ring-core clj-time
                                                                    com.fasterxml.jackson.core/jackson-annotations]]
                 [io.pedestal/pedestal.service-tools "0.3.1" :exclusions [com.fasterxml.jackson.core/jackson-annotations
                                                                          clj-time]]
                 [io.pedestal/pedestal.jetty "0.3.1"]
                 [ch.qos.logback/logback-classic "1.1.2" :exclusions [[org.slf4j/slf4j-api]]]
                 [org.slf4j/jul-to-slf4j "1.7.7"]
                 [org.slf4j/jcl-over-slf4j "1.7.7"]
                 [org.slf4j/log4j-over-slf4j "1.7.7"]
                 [im.chit/vinyasa "0.3.4" :exclusions [im.chit/hara.reflect
                                                       im.chit/hara.namespace.import
                                                       im.chit/hara.class.inheritance
                                                       im.chit/hara.data.map
                                                       im.chit/hara.common.checks
                                                       im.chit/hara.common
                                                       im.chit/hara.common.hash
                                                       im.chit/hara.common.primitives
                                                       im.chit/hara.common.error
                                                       org.codehaus.plexus/plexus-utils]]
                 [im.chit/hara.reflect "2.1.8" :exclusions [im.chit/hara.common.checks
                                                            im.chit/hara.common
                                                            im.chit/hara.common.error
                                                            im.chit/hara.common.hash
                                                            im.chit/hara.common.primitives]]
                 [io.pedestal/pedestal.service-tools "0.3.1" :exclusions [ring/ring-core
                                                                          com.fasterxml.jackson.core/jackson-annotations
                                                                          clj-time]]                 
                 [compojure "1.3.1" :exclusions [ring/ring-core]]
                 [ring/ring-core "1.2.1"]
                 [ring/ring-devel "1.0.0"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [ring-server "0.4.0" :exclusions [ring/ring-devel
                                                   ring/ring-core hiccup
                                                   clj-stacktrace ns-tracker
                                                   ring/ring-servlet
                                                   org.clojure/java.classpath
                                                   ring/ring-jetty-adapter]]
                 [slingshot "0.12.1"]
                 [cheshire "5.4.0"  :exclusions [com.fasterxml.jackson.core/jackson-core]]
                 [clj-http "1.0.1"  :exclusions [com.cognitect/transit-clj
                                                 com.cognitect/transit-java
                                                 com.fasterxml.jackson.core/jackson-annotations]]
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

                 [bkell "0.1.2"  :exclusions [org.clojure/clojure com.google.guava/guava]]]

  :resource-paths ["resources" "config" "dev"]
  :global-vars  {*warn-on-reflection* true
                 *assert* true}
  ;;:pedantic? :abort
  :main ^{:skip-aot true} server-sent-events.server
        
  :repl-options {:init-ns codepair.shell}

  :ring {:handler codepair.http.handler/app}

  :profiles {:dev {:aliases {"run-dev" ["trampoline" "run" "-m" "server-sent-events.server/run-dev"]}
                   :source-paths ["src/cljs/" "src/clj/" "dev/"]
                   :dependencies [[io.pedestal/pedestal.service-tools "0.3.1"]
                                  [org.clojure/test.check "0.6.1"]
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
