document.addEventListener("dblclick", (event) => {
  const excludeElements = ['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT', 'A', 'LABEL'];

  if (
    event.target.tagName === 'DIV' &&
    !excludeElements.includes(event.target.tagName)
  ) {
    chrome.runtime.sendMessage({ action: "closeTab" });
  }
});
