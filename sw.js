const CACHE='comprasmart-shell-v10';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('comprasmart-shell-')&&k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 const path=new URL(req.url).pathname;
 if(path.includes('/api/'))return;
 event.respondWith(fetch(req).then(res=>{
   if(res.ok&&(req.mode==='navigate'||FILES.some(f=>new URL(f,self.registration.scope).pathname===path))){
     const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});
   }
   return res;
 }).catch(()=>caches.match(req).then(c=>c||(req.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});