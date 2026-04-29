// This is a basic service worker to allow the PWA to be installable on Android
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // We are using CDNs, so we just let the browser handle fetching
  return;
});
