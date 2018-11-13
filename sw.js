importScripts('/cache-polyfill.js');

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('maxClick-sw1').then(function (cache) {
      return cache.addAll([
        '/MaxClicks/',
        '/MaxClicks/index.html',
        '/MaxClicks/src/css/style.css',
        '/MaxClicks/src/js/jquery-3.3.1.js',
        '/MaxClicks/bootstrap-4.1.3/css/bootstrap.min.css',
        '/MaxClicks/bootstrap-4.1.3/js/bootstrap.min.js',
        '/MaxClicks/src/fonts/fontawesome-free-5.4.2-web/css/all.css',
        '/MaxClicks/src/fonts/fontawesome-free-5.4.2-web/webfonts/fa-regular-400.ttf',
        '/MaxClicks/dist/bundle.js',
        '/MaxClicks/src/js/model.js',
        '/MaxClicks/src/js/view.js',
        '/MaxClicks/src/js/controller.js',
        '/MaxClicks/src/js/app.js',
        '/MaxClicks/src/sound/blaster2.mp3',
        '/MaxClicks/src/images/level-0.jpg',
        '/MaxClicks/src/images/level-1.jpg',
        '/MaxClicks/src/images/level-2.jpg',
        '/MaxClicks/src/images/level-3.jpg',
        '/MaxClicks/src/images/level-4.jpg',
        '/MaxClicks/src/images/level-5.jpg',
        '/MaxClicks/src/images/level-6.jpg',
        '/MaxClicks/src/images/level-7.jpg',
        '/MaxClicks/src/images/level-8.jpg',
        '/MaxClicks/src/images/level-9.jpg',
        '/MaxClicks/src/images/level-10.jpg',
        '/MaxClicks/src/images/level-11.jpg',
        '/MaxClicks/src/images/level-12.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open('maxClick-sw1').then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function (response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
