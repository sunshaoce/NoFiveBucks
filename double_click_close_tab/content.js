document.addEventListener("dblclick", (event) => {
  const excludeElements = ['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT', 'A', 'LABEL'];

  if (
    (event.target.tagName === 'DIV' || event.target.tagName === 'BODY') &&
    !excludeElements.includes(event.target.tagName)
  ) {
    chrome.runtime.sendMessage({ action: "closeTab" });
  }
});
