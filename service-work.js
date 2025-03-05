self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("meu-pwa-cache").then(cache => {
        return cache.addAll([
          "/",
          "/index.html",
          "/pesquisa.html",
          "/styles.css",
          "/script.js"
        ]);
      })
    );
  });
  