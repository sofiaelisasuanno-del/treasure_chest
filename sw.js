// Quando aggiorni l'app, cambia questo numero (v1 -> v2) così il telefono scarica i file nuovi.
const CACHE='treasure-chest-v3';
const FILES=['./','./index.html','./manifest.json','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))); self.clients.claim(); });
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(fetch(e.request).then(r=>{ const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{}); return r; }).catch(()=>caches.match(e.request)));
});
