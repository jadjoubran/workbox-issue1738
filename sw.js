importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "9dc0b552e6f7ddc12caaa71cd427b16b"
  }
]);

workbox.routing.registerRoute(
  /test\.json$/,
  workbox.strategies.networkFirst({
    cacheName: "api-cache",
    networkTimeoutSeconds: 1
  })
);
