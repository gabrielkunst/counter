"use strict";

/* VARIABLES */
const increaseEl = document.querySelector("#increase");
const decreaseEl = document.querySelector("#decrease");
const resetEl = document.querySelector("#reset");
const scoreEl = document.querySelector("#score");
let score = 0;

/* FUNCTIONS */

function setDisplay() {
  scoreEl.textContent = score;
  if (score > 0) {
    scoreEl.style.color = "rgb(0,255,0)";
  } else if (score < 0) {
    scoreEl.style.color = "rgb(255,0,0)";
  } else {
    scoreEl.style.color = "white";
  }
}

const increase = function () {
  score++;
  setDisplay();
};

const decrease = function () {
  score--;
  setDisplay();
};

const reset = function () {
  score = 0;
  setDisplay();
};

/* CALLS */

document.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key == "ArrowUp" || key == "ArrowDown") {
    key == "ArrowUp" ? increase() : decrease();
  }
});
increaseEl.addEventListener("click", increase);
decreaseEl.addEventListener("click", decrease);
resetEl.addEventListener("click", reset);
