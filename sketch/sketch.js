let logo;

function preload()
{
  logo = loadImage("../brain.png");
}

function setup() {
//  noCanvas();
    createCanvas(100, 100);
  let bgpage = chrome.extension.getBackgroundPage();
  window.word = bgpage.word.trim();

  updateScreen(true);
}

function updateScreen(boolean){
  let nb;

  chrome.storage.sync.get('myQuestion', function(data){
    obj = data.myQuestion;
    console.log(typeof obj);

    //If no question exists, create new array
    //Does not work yet
    if (typeof obj !== "undefined") {
      nb = parseInt(obj.length);
    }
    else {
      nb = 0;
    }
  });
  let question_text;
  //Create graphics elements asynchronously
  str = "Question number : " + nb;
  question_text = createP(str);

  createP(window.word);
  let save_button = createButton("save");
  save_button.mousePressed(saveData);

  let get_button = createButton("get");
  get_button.mousePressed(getData);

  let clear_button = createButton("clear");
  clear_button.mousePressed(clearIt);

  let review_button = createButton("review");
  review_button.mousePressed(reviewIt);

}

function QANDA(Number, Questions, Answer1, Answer2, Answer3, Answer4, Date, Level) {
  this.number = Number;
  this.questions = Questions;
  this.answer1 = Answer1;
  this.answer2 = Answer2;
  this.answer3 = Answer3;
  this.answer4 = Answer4;
  this.date = Date;
  this.level = Level;
}

function saveData() {
  chrome.storage.sync.get('myQuestion', function(data){

    obj = data.myQuestion;

    // Get selectedText for answer1
    let selectedText = window.getSelection().toString().trim();
    window.word = window.word.replace(selectedText, "...");

    if (selectedText.length === 0)
    {
      alert('You need to highlight what will become the correct answer.');
      return ;
    }

    let answer2 = prompt("Answer 2: ");
    let answer3 = prompt("Answer 3: ");
    let answer4 = prompt("Answer 4: ");
    // Get date
    let d = Date(Date.now());
    date = d.toString()

    //If no question exists, create new array
    if (typeof obj === "undefined") {
      var newquestion = new Array();
      newquestion.push(new QANDA(1, window.word, selectedText, answer2, answer3, answer4, date, 0));
      chrome.storage.sync.set({"myQuestion": newquestion}, function(){
        alert('\'' + window.word + '\' is saved at ' + 1);
        console.log('\'' + window.word + '\' is saved at ' + 1);
      });
    }
    else {
      obj.push(new QANDA(obj.length + 1,
        window.word, selectedText, answer2, answer3, answer4, date, 0));
      chrome.storage.sync.set({"myQuestion": obj}, function(){
        alert('\'' + window.word + '\' is saved at ' + obj.length);
        console.log('\'' + window.word + '\' is saved at ' + obj.length);
        console.log(obj);
      });
    }
  });
}

function getData() {
  chrome.storage.sync.get('myQuestion', function(data){
    if (typeof obj === "undefined") {
      alert('no question saved');
    } else {
      alert('\'' + data.myQuestion.slice(-1)[0].questions
      + '\' was saved with the following answers :\n Answers 1 : '
      + data.myQuestion.slice(-1)[0].answer1);
    }
    console.log(data.myQuestion);
  });
}

function clearIt(){
  chrome.storage.sync.clear(function(data){
    alert("data cleared");
  });
  //  updateScreen(false);
}

function reviewIt(){
  //createCanvas(1000, 500);
  image(logo, 0, 0);
//  background(51);
}
