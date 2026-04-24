const CACHE = 'meinweg-v1.17';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './config.js',
  './data.js',
  './ui.js',
  './main.js',
  './chart.umd.min.js',
  './manifest.json',
  './version.json',
  './icon-192.png',
  './icon-512.png'
];

function isCacheable(request) {
  if (request.method !== 'GET') return false;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return false;
  if (url.pathname.includes('/rest/v1/')) return false;
  if (request.mode === 'navigate') return true;

  const STATIC_EXTENSIONS = [
    '.html', '.json', '.js', '.css', '.png', '.jpg', '.jpeg',
    '.svg', '.webp', '.gif', '.ico', '.woff', '.woff2'
  ];
  return STATIC_EXTENSIONS.some(ext => url.pathname.endsWith(ext));
}

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.all(ASSETS.map(asset =>
        cache.add(asset).catch(err => console.warn('Cache failed:', asset, err))
      ))
    )
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', e => {
  if (!isCacheable(e.request)) return;

  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(fresh => {
        if (fresh && fresh.ok) {
          caches.open(CACHE).then(c => c.put(e.request, fresh.clone()));
        }
        return fresh;
      }).catch(async () => {
        return (await caches.match(e.request)) || caches.match('./index.html');
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      return fetch(e.request).then(fresh => {
        if (fresh && fresh.ok && fresh.type === 'basic') {
          caches.open(CACHE).then(c => c.put(e.request, fresh.clone()));
        }
        return fresh;
      });
    })
  );
});
