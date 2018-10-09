chrome.runtime.onMessage.addListener(function(message, callback) {
  if (message == "runContentScript") {
    chrome.tabs.executeScript(null, {
      file: "grids.js"
    });
  }
});

console.log("BG");
