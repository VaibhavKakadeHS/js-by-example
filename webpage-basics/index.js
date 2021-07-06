// This event is fired when the whole page has loaded, including
// all dependent resources such as stylesheets and images
window.addEventListener("load", function () {
console.log("Page is fully loaded");
});

// This event is fired when the initial HTML document has been completely
// loaded and parsed, without waiting for stylesheets, images,
// and subframes to finish loading.
document.addEventListener("DOMContentLoaded", function () {
  console.log("Document is loaded");
});
