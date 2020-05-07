const cacheName="INFO_CASHE";
const appFiles=[
];

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName)
      .then(cache => {
        return cache.addAll(appFiles);
      })
    );
  
});

self.addEventListener("activate",(activating)=>{	
  console.log("Service Worker: All systems online, ready to go!");
});

self.addEventListener("fetch",function(event){   
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }));

});
