importScripts('/cache-polyfill.js');

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('maxClick-sw1').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/src/css/style.css',
        '/src/js/jquery-3.3.1.js',
        '/bootstrap-4.1.3/css/bootstrap.min.css',
        '/bootstrap-4.1.3/js/bootstrap.min.js',
        '/src/fonts/fontawesome-free-5.4.2-web/css/all.css',
        '/src/fonts/fontawesome-free-5.4.2-web/webfonts/fa-regular-400.ttf',
        '/dist/bundle.js',
        '/src/js/model.js',
        '/src/js/view.js',
        '/src/js/controller.js',
        '/src/js/app.js',
        '/src/sound/blaster2.mp3',
        'src/images/level-0.jpg',
        'src/images/level-1.jpg',
        'src/images/level-2.jpg',
        'src/images/level-3.jpg',
        'src/images/level-4.jpg',
        'src/images/level-5.jpg',
        'src/images/level-6.jpg',
        'src/images/level-7.jpg',
        'src/images/level-8.jpg',
        'src/images/level-9.jpg',
        'src/images/level-10.jpg',
        'src/images/level-11.jpg',
        'src/images/level-12.jpg'
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