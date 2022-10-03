if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(serviceWorker => {
        console.log("Service Worker registered: ", serviceWorker);
      })
      .catch(error => {
        console.error("Error registering the Service Worker: ", error);
      });
  }

  self.addEventListener("install", event => {
    console.log("Service Worker installing.");
  });

  self.addEventListener("activate", event => {
    console.log("Service Worker activating.");
  });

  this.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});