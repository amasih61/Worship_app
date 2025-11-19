// Naya Service Worker
// Iska kaam browser ko PWA installability ke liye 'pass' karna hai.

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  // Naye SW ko turant activate karne ke liye
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  // Sabhi pages ka control lene ke liye
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Yeh 'fetch' handler PWA ko "installable" banane ke liye zaroori hai.
  // Yeh network request ko pass kar deta hai.
  event.respondWith(fetch(event.request));
});


