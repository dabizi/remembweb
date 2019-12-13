function setup() {
  noCanvas();

  let bgpage = chrome.extension.getBackgroundPage();
  window.word = bgpage.word.trim();

  //Get number of questions saved
  chrome.storage.sync.get('myNb', function(data){
    var nb = data.myNb;
    if (typeof nb === "undefined") {
      data.myNb = 0;
      chrome.storage.sync.set({'myNb': data.myNb}, function(){
      });
    }

    //Create graphics elements asynchronously
    createP("Nb of questions : " + data.myNb);
    createP(window.word);
    var save_button = createButton("save");
    save_button.mousePressed(saveData);

    var get_button = createButton("get");
    get_button.mousePressed(getData);

    var nb_of_saved = createButton("number");
    nb_of_saved.mousePressed(getNb);

    var clear_button = createButton("clear");
    clear_button.mousePressed(clearIt);

  });

}

function saveData() {
  chrome.storage.sync.get('myNb', function(data){
    nb = data.myNb;
    nb = incrementCounter(nb, data);
    chrome.storage.sync.set({"myQuestion": window.word}, function(){
      alert('\'' + window.word + '\' is saved at ' + nb);
      console.log('\'' + window.word + '\' is saved at ' + nb);
    });
  });
}

function incrementCounter(nb, data)
{
  if (typeof nb === "undefined") {
    data.myNb = 1;
    chrome.storage.sync.set({'myNb': data.myNb}, function(){
    })
    console.log("counter set to 1");
  }
  else {
    data.myNb++;
    chrome.storage.sync.set({'myNb': data.myNb}, function(){
    });
    console.log("counter incremented to " + data.myNb);
  }
  return (data.myNb);
}

function getData() {
  chrome.storage.sync.get('myQuestion', function(data){
    alert('\'' + data.myQuestion + '\' was saved');
  });
}

function getNb(){
  chrome.storage.sync.get('myNb', function(data){
    nb = data.myNb;
    if (typeof nb === "undefined") {
      alert('Impossible');
    }
    else {
      data.myNb++;
      chrome.storage.sync.set({'myNb': data.myNb}, function(){
      });
      alert(data.myNb + ' questions saved');
    }
  });
}

function clearIt(){
  chrome.storage.sync.clear(function(data){
    alert("data cleared");
  });
}
