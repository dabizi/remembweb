document.body.style.border = "5px solid red";

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
 console.log(message.txt); 
  if (message.txt === "hello") {
   let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
     elt.style['background-color'] = '#FF00FF'; 
    }
  }
}
