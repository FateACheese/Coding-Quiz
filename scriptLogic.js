var pageWrapper = document.querySelector(".start");
var highscores = document.querySelector(".scores");
var timer = document.querySelector("#time");
var startButton = document.querySelector("#start");
var revealQuestion = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var question = document.querySelector("choices");
var endScreen = document.querySelector("end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var feedback = document.querySelector("#feedback");
var Currentquestion = "";

var seconds = 60;
timer.textContent = 60;

var Questiontrack = 0;

var userScore = 0;

// create event listener for start button
startButton.addEventListener("click", function () {
  // removes page wrapper
  pageWrapper.setAttribute("style", "display: none;");
  showQuestions();
  startTimer();
});

// added for loop to iterate over questions + answers

function showQuestions() {
  // reveals Q&A
  revealQuestion.setAttribute("class", "");
  questionTitle.textContent = Questions[Questiontrack].question;
  // increments questions, choices & answers
  for (var i = 0; i < Questions[Questiontrack].choices.length; i++) {
    var btn = document.createElement("button");
    // button content
    btn.textContent = Questions[Questiontrack].choices[i];
    question.appendChild(btn);
    btn.setAttribute("id", "options" + i);
  }
}

choices.addEventListener("click", function (event) {
  var selected = event.target;
  // assigned variable to event within choices div
  var Answer = selected.textContent === Questions[Questiontrack].Answer;
  if (Answer) {
    userScore += 10;
    Correct();
    NextQuestion();
  } else if (!Answer) {
    seconds -= 10;
    Incorrect();
    NextQuestion();
  }
});

function NextQuestion() {
  // changes questions upon click
  for (var i = 0; i < Questions[Questiontrack].choices.length; i++) {
    var buttonChosen = document.querySelector("#options" + i);
    buttonChosen.textContent = Questions[Questiontrack].choices[i];
  }
  questionTitle.textContent = Questions[Questiontrack].question;
  Questiontrack++;
}

function startTimer() {
  var Countdown = setInterval(function () {
    timer.textContent = seconds;
    seconds--;
    if (seconds == 0) {
      // clears countdown
      clearInterval(Countdown);
      timer.textContent = 60;
      alert("You have run out of time!");
    }
  }, 1000);
  // runs at speed of 1 second
}

function Incorrect() {
  feedback.textContent = "Wrong!";
  feedback.setAttribute("class", "");
}

function Correct() {
  feedback.textContent = "Correct!";
  feedback.setAttribute("class", "");
}
