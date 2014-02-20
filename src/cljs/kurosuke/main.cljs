(ns kurosuke.main
  (:require [goog.uri.utils :as utils]
            [goog.userAgent :as ua]
            [domina :as dom]
            [domina.events :as ev]))

(def FPS 30)
(def MAX_SPEED 7)
(def BOID_DISTANCE 10)
(def DEFAULT_BOIDS_NUM 10)

(def screen-width (atom 500))
(def screen-height (atom 500))
(def canvas (dom/by-id "world"))
(def ctx (.getContext canvas "2d"))
(def boids (array))
(def img (js/Image.))
(def url (.-href (.-location js/window)))
(def boid-size (or (utils/getParamValue url "s") 50))

(defn make-boids []
  (let [num-boids (or (utils/getParamValue url "n") DEFAULT_BOIDS_NUM)]
    (loop [i 0]
      (when (< i num-boids)
        (aset boids i (js-obj "x" (* (js/Math.random) @screen-width)
                              "y" (* (js/Math.random) @screen-height)
                              "vx" 0
                              "vy" 0))
        (recur (inc i))))))

(defn add-boid [x y]
  (aset boids
        (.-length boids)
        (js-obj "x" x "y" y "vx" 0 "vy" 0)))

(defn get-distance [b1 b2]
  (let [x (- (aget b1 "x") (aget b2 "x"))
        y (- (aget b1 "y") (aget b2 "y"))]
    (Math/sqrt (+ (* x x) (* y y)))))

(defn += [boid property value]
  (aset boid property
        (+ (aget boid property) value)))

(defn -= [boid property value]
  (aset boid property
        (- (aget boid property) value)))

(defn *= [boid property value]
  (aset boid property
        (* (aget boid property) value)))

(defn x-boid [index] (aget boids index "x"))
(defn y-boid [index] (aget boids index "y"))
(defn vx-boid [index] (aget boids index "vx"))
(defn vy-boid [index] (aget boids index "vy"))

(defn rule1 [index]
  (let [num-boids (.-length boids)]
    (loop [x 0 y 0 i 0]
      (if (< i num-boids)
        (recur (+ x (x-boid i)) (+ y (y-boid i)) (inc i))
        (let [cx (/ (- x (x-boid index)) (- num-boids 1))
              cy (/ (- y (y-boid index)) (- num-boids 1))
              b (aget boids index)]
          (+= b "vx" (/ (- cx (aget b "x")) 100))
          (+= b "vy" (/ (- cy (aget b "y")) 100)))))))

(defn rule2 [index]
  (let [num-boids (.-length boids)]
    (loop [i 0]
      (if (< i num-boids)
        (if (== i index) (recur (inc i))
          (let [b (aget boids index)
                d (get-distance (aget boids i) b)]
            (when (< d BOID_DISTANCE)
              (-= b "vx" (- (x-boid i) (aget b "x")))
              (-= b "vy" (- (y-boid i) (aget b "y"))))
            (recur (inc i))))))))

(defn rule3 [index]
  (let [num-boids (.-length boids)]
    (loop [vx 0 vy 0 i 0]
      (if (< i num-boids)
        (recur (+ vx (vx-boid i)) (+ vy (vy-boid i)) (inc i))
        (let [cvx (/ (- vx (vx-boid index)) (- num-boids 1))
              cvy (/ (- vy (vy-boid index)) (- num-boids 1))
              b (aget boids index)]
          (+= b "vx" (/ (- cvx (aget b "vx")) 8))
          (+= b "vy" (/ (- cvy (aget b "vy")) 8)))))))

(defn restrict [index]
  (let [b (aget boids index)
        speed (Math/sqrt (+ (* (aget b "vx") (aget b "vx"))
                            (* (aget b "vy") (aget b "vy"))))]
    (if (>= speed MAX_SPEED)
      (let [r (/ MAX_SPEED speed)]
        (*= b "vx" r)
        (*= b "vy" r)))

    (if (or (and (< (aget b "x") 0) (< (aget b "vx") 0))
            (and (> (aget b "x") @screen-width) (> (aget b "vx") 0)))
      (*= b "vx" -1))

    (if (or (and (< (aget b "y") 0) (< (aget b "vy") 0))
            (and (> (aget b "y") @screen-height) (> (aget b "vy") 0)))
      (*= b "vy" -1))))

(comment
(defn draw []
  (.clearRect ctx 0 0 @screen-width @screen-height)
  (loop [i 0]
    (when (< i (.-length boids))
      (.drawImage ctx img
                  (- (x-boid i) (/ boid-size 2))
                  (- (y-boid i) (/ boid-size 2))
                  boid-size
                  boid-size)
      (recur (inc i)))))
  )

(defn draw []
  (.clearRect ctx 0 0 @screen-width @screen-height)
  (let [rate (/ boid-size (.-width img))
        height (* (.-height img) rate)]
    (loop [i 0]
      (when (< i (.-length boids))
        (.drawImage ctx img
                    (- (x-boid i) (/ boid-size 2))
                    (- (y-boid i) (/ boid-size 2))
                    boid-size
                    height)
        (recur (inc i))))))

(defn move []
  (loop [i 0]
    (when (< i (.-length boids))
      (rule1 i)
      (rule2 i)
      (rule3 i)
      (restrict i)
      (let [b (aget boids i)]
        (+= b "x" (aget b "vx"))
        (+= b "y" (aget b "vy")))
      (recur (inc i)))))

(defn simulate []
  (draw)
  (move))

(defn get-client-width []
  (.-clientWidth (.-documentElement js/document)))

(defn get-client-height []
  (.-clientHeight (.-documentElement js/document)))

(defn resize []
  (reset! screen-width (get-client-width))
  (reset! screen-height (get-client-height))
  (set! (.-width canvas) @screen-width)
  (set! (.-height canvas) @screen-height))

(defn add-handler [evt]
  (let [x (:clientX evt)
        y (:clientY evt)]
    (add-boid x y)))

(defn register-listener []
  (if ua/MOBILE
    (ev/listen! (dom/by-id "world") :touchstart add-handler)
    (ev/listen! (dom/by-id "world") :click add-handler)))

(defn init []
  (if (== js/window (.-parent js/window))
    (do ;; when page is displayed directly
      (resize)
      (set! (.-onresize js/window) resize))
    (do ;; when page is displayed by iframe
      (set! (.-width canvas) @screen-width)
      (set! (.-height canvas) @screen-height)))

  (if (utils/getParamValue url "i")
    (set! (.-src img) "resources/public/img/totoro.png")
    (set! (.-src img) "resources/public/img/kurosuke.png"))

  (set! (.-onload img) (fn []
                         (set! (.-fillStyle ctx) "rgba(33, 33, 33, 0.8)")
                         (make-boids)
                         (js/setInterval simulate (/ 1000 FPS))
                         (register-listener))))

(set! (.-onload js/window) init)
