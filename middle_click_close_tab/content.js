document.addEventListener("mousedown", (event) => {
  if (event.button === 1) {
    event.preventDefault();
    chrome.runtime.sendMessage({ action: "closeTab" });
  }
});
