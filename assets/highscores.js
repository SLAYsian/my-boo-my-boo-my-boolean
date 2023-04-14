"use strict";

function showHighScores() {
  let highScoresList = document.querySelector(".high-scores-list");

  if (highScoresList) {
    let highScores = localStorage.getItem("highScores") || "";
    highScoresList.innerHTML = highScores;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showHighScores();
});
