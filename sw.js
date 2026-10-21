/* Service Worker - BSKP Bukti SKP Harian
 * Strategi:
 * - Cache app shell (halaman, manifest, ikon) agar instan saat dibuka lagi.
 * - Konten iframe Google Apps Script tetap lewat jaringan (cross-origin).
 * - Saat offline, halaman shell tetap tampil dari cache.
 */
const CACHE_NAME = 'bskp-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './icons/favicon-16.png',
  './icons/favicon-32.png',
  './icons/favicon-48.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-192.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Hanya GET; request lain biarkan lewat
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Request lintas origin (Google Apps Script di iframe) -> jangan di-cache,
  // biarkan browser menanganinya langsung.
  if (url.origin !== self.location.origin) return;

  // Network-first dengan fallback cache (shell selalu segar, tetap bisa offline)
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((cached) => cached || caches.match('./index.html')))
  );
});
