console.log('background running');

browser.runtime.onMessage.addListener(receiver);

window.word = "webmember";

function receiver(request, sender, sendResponse) {
  console.log(request);
  window.word = request.text;
}
