/* Prüfungstrainer – Service Worker: App-Shell offline verfügbar machen */
var CACHE = "pruefungstrainer-v3";
var ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./schema-baugenehmigung.js",
  "./schema-bauaufsicht.js",
  "./schema-nachbarschutz.js",
  "./schema-einschreiten.js",
  "./schema-bebauungsplan.js",
  "./schema-plansicherung.js",
  "./schema-komr-aufgaben.js",
  "./schema-komr-selbstverwaltung.js",
  "./schema-komr-kommunalaufsicht.js",
  "./schema-komr-satzung.js",
  "./schema-komr-organkompetenz.js",
  "./schema-komr-ratsbeschluss.js",
  "./schema-komr-mitwirkungsverbot.js",
  "./schema-komr-aussetzung.js",
  "./schema-komr-bmwahl.js",
  "./schema-komr-beigeordnete.js",
  "./schema-komr-wahlbeschwerde.js",
  "./schema-komr-kvs.js",
  "./schema-komr-einrichtungen.js",
  "./schema-komr-verpflichtungserklaerung.js",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      return hit || fetch(e.request).then(function (resp) {
        var copy = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        return resp;
      });
    })
  );
});
