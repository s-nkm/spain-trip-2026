// オフライン対応：アプリ本体は事前キャッシュ、地図タイルなどは見たものを順次キャッシュ
const VERSION = 'v7';
const SHELL = ['./', 'index.html', 'css/style.css', 'js/data.js', 'js/app.js', 'img/icon.svg', 'img/hero.avif', 'img/hero.jpg', 'manifest.webmanifest',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css', 'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js', 'https://unpkg.com/@maplibre/maplibre-gl-leaflet@0.1.0/leaflet-maplibre-gl.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('shell-' + VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('shell-') && k !== 'shell-' + VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  // 自サイト：ネット優先（更新をすぐ反映）、オフライン時はキャッシュ
  if (sameOrigin) {
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open('shell-' + VERSION).then((c) => c.put(req, copy)); return res; }).catch(() => caches.match(req).then((r) => r || caches.match('index.html'))));
    return;
  }
  // 地図タイル・フォント・ライブラリ：キャッシュ優先
  if (/tile\.openstreetmap\.org|tiles\.openfreemap\.org|fonts\.(googleapis|gstatic)\.com|unpkg\.com/.test(url.host)) {
    e.respondWith(caches.open('runtime').then((c) => c.match(req).then((hit) => hit || fetch(req).then((res) => { if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res; }))));
  }
});
