// This event is fired soon as the page DOM has been loaded, without
// waiting for resources to finish loading
window.addEventListener("load", function (event) {
  console.log("page is fully loaded");
});

// This event is fired as soon as the page DOM has been loaded, without
// waiting for resources to finish loading
document.addEventListener("DOMContentLoaded", function () {
  console.log("Document is loaded");
});
