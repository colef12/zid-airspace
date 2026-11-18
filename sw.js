// Offline support: precache the app shell + current data file, then network-first with cache fallback.
const CACHE = 'zid-airspace-v1';
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    const res = await fetch('./', {cache: 'no-store'});
    await c.put('./', res.clone());
    const html = await res.text();
    const assets = [...html.matchAll(/(?:src|href)="([^"#:]+\.(?:js|png|webmanifest)(?:\?[^"]*)?)"/g)].map(m => m[1]);
    await c.addAll([...new Set(['icon-180.png', 'icon-192.png', 'icon-512.png', ...assets])]);
    self.skipWaiting();
  })());
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const nav = req.mode === 'navigate';
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    try {
      const res = await fetch(req, {cache: 'no-store'});
      if (res.ok) c.put(nav ? './' : req, res.clone());
      return res;
    } catch {
      return (await c.match(nav ? './' : req, {ignoreSearch: nav})) || (await c.match(req, {ignoreSearch: true})) || Response.error();
    }
  })());
});
