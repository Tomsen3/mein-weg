var CACHE = "singleiter-v1.5.1";
var URLS = ["/singleiter/", "/singleiter/index.html", "/singleiter/sw.js", "/singleiter/manifest.json", "/singleiter/version.json"];

self.addEventListener("install", function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(URLS); }));
  self.skipWaiting();
});

self.addEventListener("activate", function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener("fetch", function(e) {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(function(r) {
    var clone = r.clone();
    caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
    return r;
  }).catch(function() {
    return caches.match(e.request);
  }));
});

self.addEventListener("message", function(e) {
  if (e.data === "skipWaiting") self.skipWaiting();
});