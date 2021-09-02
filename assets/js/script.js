var highScoresCounter = counterTimer;
var startTime = 60;
var counterTimer;
var timer = document.getElementById("timer");

// Get a reference to the start button
var btnStart = document.getElementsByClassName("btn-start")[0];
var h1 = document.getElementById("h1");
var instructions = document.getElementById("instructions");

document.getElementById("timer").innerHTML = startTime;

function init() {
  highScores();
}

// starts quiz
// Add click event listener to the start button
btnStart.addEventListener("click", function () {
  // Set the text for our question
  h1.innerText = "Question:";
  instructions.remove();
  counterTimer = setInterval(myTimer, 1000);

  // remove the start button
  btnStart.remove();
});

// start of data for questions
var questionsData = [
  {
    textOfQuestion: "What is a string?",
    options: ["Primitive Data Type", "Yarn", "Boolean", "Object"],
    correctIndex: 0,
  },
  {
    textOfQuestion: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Cats Standing Still",
      "Cascading Script Sheets",
      "Cascading Style Scripts",
    ],
    correctIndex: 0,
  },
  {
    textOfQuestion:
      "What does the display need to be set to in order to use flexbox?",
    options: ["flex or inline flex", "flex", "inline-flex", "box"],
    correctIndex: 0,
  },
];
// variables for questions being set up
const questionsDisplayed = document.querySelector("#questions");
const optionsDisplayed = document.querySelector("#options");
let answerIndex = 0;

//function for questions to read and record
btnStart.addEventListener("click", function () {
  // Set the text for our question
  h1.innerText = "Question:";
  instructions.remove();
  // remove the start button
  btnStart.remove();

  renderQuestion();
});

optionsDisplayed.addEventListener("click", function (e) {
  const element = e.target;
  const question = questionsData[answerIndex];

  if (!element.matches("button")) return;

  // Check to see if the user answered correctly
  if (element.textContent === question.options[question.correctIndex]) {
    // inform them
    alert("Correct!");
    startTime = startTime + 15;
  } else {
    alert("Incorrect!");
    startTime = startTime - 15;
  }
  //increase our question index
  answerIndex++;
  if (answerIndex == questionsData.length) {
    endGame();
  }
  renderQuestion();
});

function renderQuestion() {
  const question = questionsData[answerIndex];
  questionsDisplayed.textContent = question.textOfQuestion;
  //render options
  //clear out the options p to remove previous buttons
  //create a button and append it  to the options p
  optionsDisplayed.innerHTML = "";
  for (let i = 0; i < question.options.length; i++) {
    // reference the option text
    const option = question.options[i];
    //create a button
    const button = document.createElement("button");
    //set the button text
    button.textContent = option;
    //add the button to the options p
    optionsDisplayed.append(button);
  }
}

// need to write a function to grab timer as high score and record it.

function endGame() {
  questionsDisplayed.remove();
  optionsDisplayed.remove();
  alert(`Completed!`);
  myStopFunction();
  h1.innerText = "High Scores:";
}

// Timer
function myTimer() {
  startTime = startTime - 1;
  document.getElementById("timer").innerHTML = startTime;
  if (startTime === 0) {
    alert(`Out of Time!`);
    myStopFunction();
  }
}

function myStopFunction() {
  clearInterval(counterTimer);
}
//

// High score recorder
function highScores() {
  // Get stored value from client storage, if it exists
  var storedHighScores = localStorage.getElementById("highscores");
  // If stored value doesn't exist, set counter to 0
  if (storedHighScores === null) {
    highScoresCounter = 0;
  } else {
    // If a value is retrieved from client storage set the high scoresCounter to that value
    highScoresCounter = storedHighScores;
  }
  //Render high score to page
  win.textContent = "high scores";
}
