importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  /test\.json$/,
  workbox.strategies.networkFirst({
    cacheName: "api-cache",
    networkTimeoutSeconds: 1
  })
);
