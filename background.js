console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

window.word = "Please highlight what you want to save";


let contextMenuItem = {
                    "id": "iconid",
                    "title": "Save image",
                    "contexts": ["all"]  // type of context
             };
             chrome.contextMenus.create(contextMenuItem);


function receiver(request, sender, sendResponse) {
  console.log(request);
  word = request.text;
}
