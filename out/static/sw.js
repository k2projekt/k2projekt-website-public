importScripts('/static/cache-polyfill.js');
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('k2projekt').then(function(cache) {
      return cache.addAll([
        '/',
      ]);
    })
  );
});
