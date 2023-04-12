"use strict";

// // SECTION: ARRAY WITH QUESTIONS & ANSWERS
let questionsArray = [
  {
    question: "A boolean is:",
    correctAnswer: 1,
    answers: [
      "A. a function",
      "B. a logical data type that is true or false",
      "C. a symbol",
      "D. a data type that is a sequence of characters",
    ],
  },
  {
    question: "Which of the following is accurate?",
    correctAnswer: 3,
    answers: [
      "A. 3 === three",
      "B. 3 !== 3",
      "C. true && true is false",
      "D. true || false is true",
    ],
  },
  {
    question: "x++ is the same as saying:",
    correctAnswer: 0,
    answers: ["A. x + 1", "B. x + 2", "C. x^2", "D. x * 2"],
  },
  {
    question: "What do you enclose a string in?",
    correctAnswer: 1,
    answers: [
      "A. parentheses",
      "B. quotations",
      "C. brackets",
      "D. curly brackets",
    ],
  },
  {
    question:
      "In the array: let numbersArray = [1, 2, 3, 4]; what is the index of the number 3?",
    correctAnswer: 1,
    answers: ["A. 1", "B. 2", "C. 3", "D. 4"],
  },
];

// // SECTION: SELECTING ELEMENTS
let startBtn = document.querySelector(".start-button");
let timeLeft = document.querySelector(".time-left");
let pointsCurrent = document.querySelector(".points-current");
let cardTitle = document.querySelector(".card-title");
let directions = document.querySelector(".directions");
let questionEl = document.querySelector(".question");
// let question1 = document.querySelector(".q1");
// let question2 = document.querySelector(".q2");
// let question3 = document.querySelector(".q3");
// let question4 = document.querySelector(".q4");
// let question5 = document.querySelector(".q5");
let answerBtns = document.querySelector(".answer-buttons");
let choiceBtns = document.querySelectorAll(".choice");
// let choice0 = document.querySelector(".choice-0");
// let choice1 = document.querySelector(".choice-1");
// let choice2 = document.querySelector(".choice-2");
// let choice3 = document.querySelector(".choice-3");
let incorrectOrCorrect = document.querySelector(".incorrect-correct");
let highScores = document.querySelector(".high-score-link");

// // SECTION: INITIAL PAGE GAME STATUS
// NOTES: Create function for initialization of game?
let currentQuestionIndex = 0;
let points = 0;
pointsCurrent.textContent = 0;
let timeRemaining = 60;
timeLeft.textContent = timeRemaining;
// let init = function () {
//   pointsCurrent.textContent = 0;
//   directions.classList.remove("hidden");
//   answerButtons.classList.add("hidden");
//   h3.classList.add("hidden");
// };
// init();

// // SECTION: TIMER
let timeLeftText = function () {
  timeLeft.textContent = timeRemaining;
};

const startTimer = function () {
  let timerID = setInterval(function () {
    timeRemaining--;
    timeLeftText();

    if (timeRemaining === 0) {
      clearInterval(timerID);
      endQuiz();
    }
  }, 1000);
};

// // SECTION: QUESTIONS
// NOTES: question function -> for loop

const questionFunction = function () {
  if (currentQuestionIndex >= questionsArray.length) {
    return;
  }
  let currentQuestion = questionsArray[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  for (let i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].textContent = currentQuestion.answers[i];
  }
};
// // SECTION: CLICK ANSWER 1) Correct 2) Incorrect
const handleAnswerClick = function (index) {
  let correctAnswer = questionsArray[currentQuestionIndex].correctAnswer;
  incorrectOrCorrect.classList.remove("hidden");
  if (index === correctAnswer) {
    points += 20;
    incorrectOrCorrect.textContent = "🎉 Correct!";
  } else {
    points -= 10;
    timeRemaining -= 10;
    timeLeftText();
    incorrectOrCorrect.textContent =
      "❌ Incorrect, 10 seconds removed from your time!";
  }

  pointsCurrent.textContent = points;
  currentQuestionIndex++;

  questionFunction();
};

// NOTES: event handler for each answer click

choiceBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => handleAnswerClick(index));
});

// // SECTION: START
// TODO: 1) click ||
startBtn.addEventListener("click", function () {
  startTimer();
  directions.classList.add("hidden");
  cardTitle.classList.add("hidden");
  choiceBtns.forEach((btn) => btn.classList.remove("hidden"));
  points = 0;
  currentQuestionIndex = 0;
  pointsCurrent.textContent = points;
  questionFunction();
});

// // SECTION: SAVE HIGH SCORE
const endQuiz = function () {
  clearInterval(timerID);
  questionEl.textContent = "Quiz finished! How did you do?";
  choiceBtns.forEach((btn) => btn.classList.add("hidden"));
  incorrectOrCorrect.classList.add("hidden");
};

// // SECTION: NEW GAME
