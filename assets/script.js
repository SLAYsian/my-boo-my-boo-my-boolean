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
let answerBtns = document.querySelector(".answer-buttons");
let choiceBtns = document.querySelectorAll(".choice");
let incorrectOrCorrect = document.querySelector(".incorrect-correct");
let endQuizSection = document.querySelector(".end-quiz");
let finalScoreEl = document.querySelector(".final-score");
let highScoreMessage = document.querySelector(".high-score-message");
let initialsInput = document.getElementById("initials");
let saveScoreBtn = document.querySelector(".save-score-btn");
let newGameBtn = document.querySelector(".new-game-btn");
let highScoresLink = document.querySelector(".high-score-link");
let highScoresList = document.querySelector(".high-scores-list");

let currentQuestionIndex = 0;
let points = 0;
pointsCurrent.textContent = 0;
let timeRemaining = 60;
timeLeft.textContent = timeRemaining;
let timerID;

// // SECTION: TIMER
let timeLeftText = function () {
  timeLeft.textContent = timeRemaining;
};

const startTimer = function () {
  timerID = setInterval(function () {
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
    endQuiz();
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

  if (currentQuestionIndex < questionsArray.length) {
    questionFunction();
  } else {
    endQuiz();
  }
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

// // SECTION: END QUIZ

let highScoresArray = [];
const endQuiz = function () {
  clearInterval(timerID);
  questionEl.textContent = "Quiz finished! How did you do?";
  choiceBtns.forEach((btn) => btn.classList.add("hidden"));
  incorrectOrCorrect.classList.add("hidden");

  endQuizSection.classList.remove("hidden");

  finalScoreEl.textContent = points;
  saveScoreBtn.addEventListener("click", function () {
    let initials = initialsInput.value;
    let highScores = localStorage.getItem("highScores") || "";

    highScores += `${initials}: ${points}<br>`;
    localStorage.setItem("highScores", highScores);
    endQuizSection.classList.add("hidden");
    questionEl.classList.add("hidden");
    init();

    // highScoresLink.innerHTML = showHighScores();
  });
};

// // SECTION: HIGH SCORE
let lowestHighScore = highScoresArray[highScoresArray.length - 1]?.score || 0;
if (points > lowestHighScore) {
  highScoreMessage.textContent =
    "🎉 Congratulations! You got a new high score!";
} else {
  highScoreMessage.textContent = "";
}

// // SECTION: NEW GAME

const init = function () {
  endQuizSection.classList.add("hidden");
  directions.classList.remove("hidden");
  cardTitle.classList.remove("hidden");
  points = 0;
  currentQuestionIndex = 0;
  timeRemaining = 60;
  timeLeft.textContent = timeRemaining;
  pointsCurrent.textContent = points;
};
newGameBtn.addEventListener("click", init);
