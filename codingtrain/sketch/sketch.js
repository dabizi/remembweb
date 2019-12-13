function setup() {
  noCanvas();

  let bgpage = chrome.extension.getBackgroundPage();
  window.word = bgpage.word.trim();

  createP(window.word);
  var save_button = createButton("save");
  save_button.mousePressed(saveData);

  var get_button = createButton("get");
  get_button.mousePressed(getData);

  var nb_of_saved = createButton("number");
  nb_of_saved.mousePressed(getNb);

  var clear_button = createButton("clear");
  clear_button.mousePressed(clearIt);
}

function saveData() {
  chrome.storage.sync.get('myNb', function(data){
    var nb = data.myNb;
    if (typeof nb === "undefined") {
      var newvalue = 1;
      chrome.storage.sync.set({'myNb': newvalue}, function(){
        console.log(newvalue + ' is saved');
      });
    }
    else {
      console.log('\'' + data.myNb + '\' questions saved');
    }
  });
  chrome.storage.sync.set({'myQuestion': window.word}, function(){
  console.log('\'' + window.word + '\' is saved');

    });
}

function getData() {
  chrome.storage.sync.get('myQuestion', function(data){
    alert('\'' + data.myQuestion + '\' was saved');
  });
}

function getNb(){
  chrome.storage.sync.get('myNb', function(data){
    var nb = data.myNb;
    if (typeof nb === "undefined") {
      alert('Impossible');
    }
    else {
      alert(data.myNb + ' questions saved');
    }
  });
}

function clearIt(){
  chrome.storage.sync.clear(function(data){
    alert("data cleared");
  });
}
