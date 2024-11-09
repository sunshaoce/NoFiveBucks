document.addEventListener("dblclick", (event) => {
  const includeElements = ['DIV', 'BODY', 'HTML'];
  const excludeElements = ['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT', 'A', 'LABEL'];

  if (
    includeElements.includes(event.target.tagName) &&
    !excludeElements.includes(event.target.tagName)
  ) {
    chrome.runtime.sendMessage({ action: "closeTab" });
  }
});
