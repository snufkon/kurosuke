(defproject kurosuke "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]])

(defproject kurosuke "0.1.0-SNAPSHOT"
  :description "Sample program of Boids written by ClojureScript using Makkuro Kurosuke like image"
  :url "https://github.com/snufkon/kurosuke"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/cljs"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2069"]
                 [domina "1.0.2"]]
  :plugins [[lein-cljsbuild "1.0.0"]]
  :cljsbuild {:builds
              [{:source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/main.js"
                           :optimizations :advanced
                           ;;:optimizations :whitespace
                           ;;:pretty-print true
                           }}]})
