self.addEventListener("install",function(e){e.waitUntil(caches.open("kage-v1").then(function(c){return c.addAll(["./","./index.html","./manifest.json","./manifest.webmanifest","./icon-192.png","./icon-512.png"]);}).then(function(){return self.skipWaiting();}));});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim());});
self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}).catch(function(){return fetch(e.request);}));});
