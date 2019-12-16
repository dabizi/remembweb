

function setup() {
  noCanvas();
let bgpage = chrome.extension.getBackgroundPage();
window.word = bgpage.word.trim();

  updateScreen(true);
}

function updateScreen(boolean){
//  noCanvas();
//let bgpage = chrome.extension.getBackgroundPage();
//window.word = bgpage.word.trim();

  chrome.storage.sync.get('myNb', function(data){
    var nb = data.myNb;
    if (typeof nb === "undefined") {
      data.myNb = 0;
      chrome.storage.sync.set({'myNb': data.myNb}, function(){
      });
    }

		let question_text;
    //Create graphics elements asynchronously
		str = "Question number : " + data.myNb
  	question_text = createP(str);

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

function QANDA(Number, Questions, Answer1, Answer2, Answer3, Answer4, Date) {
this.number = Number;
this.questions = Questions;
this.answer1 = Answer1;
this.answer2 = Answer2;
this.answer3 = Answer3;
this.answer4 = Answer4;
this.date = Date;
}

function saveData() {
  chrome.storage.sync.get('myNb', function(data){
    nb = data.myNb;
    nb = incrementCounter(nb, data);
		var newquestion = new QANDA(nb, window.word, 'a', 'b', 'c', 'd', 'e');
		console.log(newquestion);
    chrome.storage.sync.set({"myQuestion": newquestion}, function(){
    alert('\'' + window.word + '\' is saved at ' + nb);
    //console.log('\'' + window.word + '\' is saved at ' + nb);
    });
  });
//	updateScreen(false);
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
    alert('\'' + data.myQuestion.questions + '\' was saved');
		console.log(data.myQuestion);
  });
}

function getNb(){
  chrome.storage.sync.get('myNb', function(data){
		// .length
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
  //updateScreen();
}

function clearIt(){
  chrome.storage.sync.clear(function(data){
    alert("data cleared");
  });
 updateScreen(false);
}
