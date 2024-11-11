document.addEventListener("dblclick", (event) => {
  const includeElements = ['DIV', 'BODY', 'HTML', 'TITLE'];
  const excludeElements = ['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT', 'A', 'LABEL', 'TABLE'];

  if (
    includeElements.includes(event.target.tagName) &&
    !excludeElements.includes(event.target.tagName)
  ) {
    chrome.runtime.sendMessage({ action: "closeTab" });
  }
});
