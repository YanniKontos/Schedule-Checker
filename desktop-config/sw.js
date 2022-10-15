if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(serviceWorker => {
      })
      .catch(error => {
        console.error("Error registering the Service Worker: ", error);
      });
  }

  self.addEventListener("install", event => {
  });

  self.addEventListener("activate", event => {
  });

  this.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});