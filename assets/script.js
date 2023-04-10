"use strict";

// // SECTION: QUESTIONS:
// 1) Boolean is:
// a. a function
// b. a logical data type that is true or false
// c. a symbol
// d. a data type that is a sequence of characters
// 2) Which of the following is accurate?
// a. 3 === three
// b. 3 !== 3
// c. true && true is false
// d. true || false is true
// 3) x++ is the same as saying:
// a. x + 1
// b. x + 2
// c. x^2
// c. x * 2
// 4) What do you enclose a string in?
// a. Curly brackets {}
// b. Parentheses ()
// c. Brackets []
// d. Quotations ""
// 5) In the array: var numbers = [1, 2, 3, 4]; what is the index of 3?
// a. 1
// b. 2
// c. 3
// d. 4

// // SECTION: ARRAY WITH QUESTIONS & ANSWERS
let questionsArray = [
  "A boolean is:",
  "Which of the following is accurate?",
  "x++ is the same as saying:",
  "What do you enclose a string in?",
  "In the array: var numbers = [1, 2, 3, 4]; what is the index of 3?",
];
let answers0Array = [
  "A. a function",
  "B. a logical data type that is true or false",
  "C. a symbol",
  "D. a data type that is a sequence of characters",
];

let answers1Array = [
  "A. 3 === three",
  "B. 3 !== 3",
  "C. true && true is false",
  "D. true || false is true",
];

let answers2Array = ["A. x + 1", "B. x + 2", "C. x^2", "D. x * 2"];

let answers3Array = [
  "A. a function",
  "B. a logical data type that is true or false",
  "C. a symbol",
  "D. a data type that is a sequence of characters",
];

let answers4Array = ["A. 1", "B. 2", "C. 3", "D. 4"];

// // SECTION: SELECTING ELEMENTS
let startBtn = document.querySelector(".start-button");
let timeLeft = document.querySelector(".time-left");
let pointsCurrent = document.querySelector(".points-current");
let cardTitle = document.querySelector(".card-title");
let directions = document.querySelector(".directions");
let question = document.querySelector(".question");
let question1 = document.querySelector(".q1");
let question2 = document.querySelector(".q2");
let question3 = document.querySelector(".q3");
let question4 = document.querySelector(".q4");
let question5 = document.querySelector(".q5");
let answerButtons = document.querySelectorAll(".answer-buttons");
let choice = document.querySelectorAll(".choice");
let choice0 = document.querySelector(".choice-0");
let choice1 = document.querySelector(".choice-1");
let choice2 = document.querySelector(".choice-2");
let choice3 = document.querySelector(".choice-3");
let incorrectOrCorrect = document.querySelector(".incorrect-correct");
let highScores = document.querySelector(".high-score-link");

let correctAnswer, selection;

// NOTES: Create function for initialization of game
pointsCurrent.textContent = 0;

// // SECTION: QUESTIONS
// NOTES: Show hidden answers
let answersShow = function () {
  choice0.classList.remove("hidden");
  choice1.classList.remove("hidden");
  choice2.classList.remove("hidden");
  choice3.classList.remove("hidden");
};

// NOTES: question function
// FIX: Points

// let questionFunction = function (correctAnswer) {
//   choice0.addEventListener("click", function () {
//     console.log(`clicked ${answers0Array[0]}`);
//     // preventDefault();
//     // incorrectOrCorrect.classList.remove("hidden");
//     choice0 === correctAnswer;
//     // pointsCurrent.textContent += Number(25);
//   });
//   choice1.addEventListener("click", function () {
//     console.log(`clicked ${answers0Array[1]}`);
//     choice1 === correctAnswer;
//     // pointsCurrent.textContent += Number(25);
//   });
//   choice2.addEventListener("click", function () {
//     console.log(`clicked ${answers0Array[2]}`);
//     choice2 === correctAnswer;
//     // pointsCurrent.textContent += Number(25);
//   });

//   choice3.addEventListener("click", function () {
//     console.log(`clicked ${answers0Array[3]}`);
//     choice3 === correctAnswer;
//     // pointsCurrent.textContent += Number(25);
//   });
// };

let questionFunction = function (correctAnswer) {
  choice0.addEventListener("click", function () {
    // preventDefault();
    // incorrectOrCorrect.classList.remove("hidden");
    console.log(`clicked ${answers0Array[0]}`);
    if (choice0 === correctAnswer) {
      pointsCurrent += 25;
      incorrectOrCorrect.textContent = "🎉 Correct!";
    } else {
      pointsCurrent -= 10;
      incorrectOrCorrect.textContent = "❌ Incorrect!";
    }
  });

  choice1.addEventListener("click", function () {
    console.log(`clicked ${answers0Array[1]}`);
    if (choice1 === correctAnswer) {
      pointsCurrent += 25;
      incorrectOrCorrect.textContent = "🎉 Correct!";
    } else {
      pointsCurrent -= 10;
      incorrectOrCorrect.textContent = "❌ Incorrect!";
    }
  });

  choice2.addEventListener("click", function () {
    console.log(`clicked ${answers0Array[2]}`);
    if (choice2 === correctAnswer) {
      pointsCurrent += 25;
      incorrectOrCorrect.textContent = "🎉 Correct!";
    } else {
      pointsCurrent -= 10;
      incorrectOrCorrect.textContent = "❌ Incorrect!";
    }
  });

  choice3.addEventListener("click", function () {
    console.log(`clicked ${answers0Array[3]}`);
    if (choice3 === correctAnswer) {
      pointsCurrent += 25;
      incorrectOrCorrect.textContent = "🎉 Correct!";
    } else {
      pointsCurrent -= 10;
      incorrectOrCorrect.textContent = "❌ Incorrect!";
    }
  });
};

// // SECTION: INITIAL PAGE GAME STATUS
// let init = function () {
//   pointsCurrent.textContent = 0;
//   timeLeft.textContent = 90;
//   directions.classList.remove("hidden");
//   answerButtons.classList.add("hidden");
//   h3.classList.add("hidden");
// };
// init();

// // SECTION: START
// TODO: 1) click ||
startBtn.addEventListener("click", function () {
  directions.classList.add("hidden");
  cardTitle.classList.add("hidden");
  answersShow();
  pointsCurrent = 0;
  // for loop?
  question.textContent = questionsArray[0];
  choice0.textContent = answers0Array[0];
  choice1.textContent = answers0Array[1];
  choice2.textContent = answers0Array[2];
  choice3.textContent = answers0Array[3];
});
questionFunction(choice1);
// if (choice === correctAnswer) {
//   pointsCurrent += 25;
//   // Number((pointsCurrent.textContent += 25));
//   incorrectOrCorrect.textContent = "🎉 Correct!";
// } else {
//   pointsCurrent -= 10;
//   // Number((pointsCurrent.textContent -= 10));
//   incorrectOrCorrect.textContent = "❌ Incorrect!";
// }
// if (correctAnswer === true) {
//   pointsCurrent.textContent += Number(25);
//   incorrectOrCorrect.textContent = "🎉 Correct!";
//   incorrectOrCorrect.classList.remove("hidden");
// } else {
//   pointsCurrent.textContent -= Number(10);
//   incorrectOrCorrect.textContent = "❌ Incorrect!";
//   incorrectOrCorrect.classList.remove("hidden");
// }

// directions.classList.add("hidden");
// cardTitle.classList.add("hidden");
// answersShow();
// for loop?

// question.textContent = questionsArray[1];
// choice0.textContent = answers1Array[0];
// choice1.textContent = answers1Array[1];
// choice2.textContent = answers1Array[2];
// choice3.textContent = answers1Array[3];
// questionFunction(choice3);

// });

// TODO: Left off with correct or incorrect display message

// incorrectOrCorrect.classList.remove("hidden");

// if ((questionFunction = correctAnswer)) {
//   incorrectOrCorrect.textContent = "🎉 Correct!";
// } else {
//   incorrectOrCorrect.textContent = "❌ Incorrect!";
// }

//  choice0.addEventListener("click", function () {
//     console.log(`clicked ${answers0Array[0]}`);
//     pointsCurrent.textContent -= Number(10);
//   });
//   choice2.addEventListener("click", function () {
//     console.log(`clicked ${answers0Array[2]}`);
//     pointsCurrent.textContent -= Number(10);
//   });
//   choice3.addEventListener("click", function () {
//     console.log(`clicked ${answers0Array[3]}`);
//     pointsCurrent.textContent -= Number(10);
//   });

// choice1.addEventListener("click", function () {
//   console.log(`clicked ${answers0Array[1]}`);
//   pointsCurrent.textContent += Number(25);
// });

// choice0.addEventListener("click", function () {
//   console.log(`clicked ${answers0Array[0]}`);
//   pointsCurrent.textContent -= Number(10);
// });
// choice2.addEventListener("click", function () {
//   console.log(`clicked ${answers0Array[2]}`);
//   pointsCurrent.textContent -= Number(10);
// });
// choice3.addEventListener("click", function () {
//   console.log(`clicked ${answers0Array[3]}`);
//   pointsCurrent.textContent -= Number(10);
// });

// NOTES: Attempt to put in function
// var questionsFunction = function (correctAnswer) {
//   if (
//     choice1.addEventListener("click", function () {
//       console.log(`clicked ${answers0Array[1]}`);
//       // FIX: score
//       pointsCurrent.textContent += Number(25);
//     })
//   );

//   if (
//     choice0.addEventListener("click", function () {
//       console.log(`clicked ${answers0Array[0]}`);
//     })
//   ) {
//     pointsCurrent.textContent -= Number(10);
//   }
//   if (
//     choice1.addEventListener("click", function () {
//       console.log(`clicked ${answers0Array[1]}`);
//     })
//   ) {
//     pointsCurrent.textContent -= Number(10);
//   }
//   if (
//     choice2.addEventListener("click", function () {
//       console.log(`clicked ${answers0Array[2]}`);
//     })
//   ) {
//     pointsCurrent.textContent -= Number(10);
//   }
//   if (
//     choice3.addEventListener("click", function () {
//       console.log(`clicked ${answers0Array[3]}`);
//     })
//   ) {
//     pointsCurrent.textContent -= Number(10);
//   }
// };

// NOTES: Attempt
// if (
//   choice1.addEventListener("click", function () {
//     console.log(`clicked ${answers0Array[1]}`);
//   })
// ) {
//   pointsCurrent.textContent += Number(25);
// }

// if (
//   choice0.addEventListener("click", function () {
//     console.log(`clicked ${answers0Array[0]}`);
//   })
// ) {
//   pointsCurrent.textContent -= Number(10);
// }
// if (
//   choice2.addEventListener("click", function () {
//     console.log(`clicked ${answers0Array[2]}`);
//   })
// ) {
//   pointsCurrent.textContent -= Number(10);
// }
// if (
//   choice3.addEventListener("click", function () {
//     console.log(`clicked ${answers0Array[3]}`);
//   })
// ) {
//   pointsCurrent.textContent -= Number(10);
// }

// NOTES: attempt
// choice1.addEventListener("click", function () {
//   pointsCurrent.textContent += Number(25);
// });
// !choice1.addEventListener("click", function () {
//   pointsCurrent.textContent -= Number(10);
// });

// // SECTION: CLICK ANSWER 1) Correct 2) Incorrect

// // SECTION: TIMER

// // SECTION: SAVE HIGH SCORE

// // SECTION: NEW GAME
