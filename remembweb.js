console.log("Chrome extension go");

window.addEventListener('mouseup', wordsSelected);

function wordsSelected(){
  let selectedText = window.getSelection().toString().trim();
  console.log(selectedText);
  if (selectedText.length > 0) {
    let message = {
      test: selectedText
    };
    browser.runtime.sendMessage(message);
  }
}
