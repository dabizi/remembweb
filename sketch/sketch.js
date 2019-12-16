

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
var nb;


//  chrome.storage.sync.get('myNb', function(data){
//    nb = data.myNb;
	//nb = incrementCounter(nb, data
	chrome.storage.sync.get('myQuestion', function(data){
	obj = data.myQuestion;
	console.log(typeof obj);

	//If no question exists, create new array
	if (typeof obj !== "undefined") {
		nb = parseInt(obj.length);
  //chrome.storage.sync.get('myNb', function(data){
  //  var nb = data.myNb;
  //  if (typeof nb === "undefined") {
  //    data.myNb = 0;
  //    chrome.storage.sync.set({'myNb': data.myNb}, function(){
    //  });
		console.log('defined');
    }
		else {
			console.log('undefined');
			nb = 0;
		}
		});
		let question_text;
    //Create graphics elements asynchronously
		str = "Question number : " + nb;
  	question_text = createP(str);

    createP(window.word);
    var save_button = createButton("save");
    save_button.mousePressed(saveData);

    var get_button = createButton("get");
    get_button.mousePressed(getData);

    var clear_button = createButton("clear");
    clear_button.mousePressed(clearIt);

//  });
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
	chrome.storage.sync.get('myQuestion', function(data){
//  chrome.storage.sync.get('myNb', function(data){
//    nb = data.myNb;
    //nb = incrementCounter(nb, data

		obj = data.myQuestion;

		//If no question exists, create new array
		if (typeof obj === "undefined") {
			var newquestion = new Array();
			newquestion.push(new QANDA(1, window.word, 'a', 'b', 'c', 'd', 'e'));
			chrome.storage.sync.set({"myQuestion": newquestion}, function(){
	    alert('\'' + window.word + '\' is saved at ' + 1);
	    console.log('\'' + window.word + '\' is saved at ' + 1);
			});
		}
		else {
			obj.push(new QANDA(obj.length + 1, window.word, 'a', 'b', 'c', 'd', 'e'));
			chrome.storage.sync.set({"myQuestion": obj}, function(){
	    alert('\'' + window.word + '\' is saved at ' + obj.length);
	    console.log('\'' + window.word + '\' is saved at ' + obj.length);
			console.log(obj);
			});
		}
    });
  //});
//	updateScreen(false);
}

function getData() {
  chrome.storage.sync.get('myQuestion', function(data){
		if (typeof obj === "undefined") {
			alert('no question saved');
		} else {
    alert('\'' + data.myQuestion.slice(-1)[0].questions + '\' was saved');
	}
		console.log(data.myQuestion);
  });
}

function clearIt(){
  chrome.storage.sync.clear(function(data){
    alert("data cleared");
  });
 updateScreen(false);
}
