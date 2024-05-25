let playerName = "";
let lowerBound = 0;
let upperBound = 0;
let attempts = 0;

function startGame() {
  playerName = document.getElementById("player-name-input").value.trim();
  if (playerName === "") {
    alert("please enter your name.");
    return;
  }
  document.getElementById("player-name").textContent = playerName;
  document.getElementById("player-name-container").style.display = "none";
  document.getElementById("range-container").style.display = "flex";
  document.getElementById("lower-input").focus();
}

function submitRange() {
  lowerBound = document.getElementById("lower-input").value;
  upperBound = document.getElementById("upper-input").value;

  if (lowerBound === "" || upperBound === "") {
    alert("Please enter both lower and upper bounds.");
    return;
  }

  if (lowerBound >= upperBound) {
    alert("Please upper bound range should be greater than lower bound.");
    return;
  }

  console.log(`Lower Bound: ${lowerBound}, Upper Bound: ${upperBound}`);

  document.getElementById("range-container").style.display = "none";
  document.getElementById("attempts-container").style.display = "flex";
  attempts = log2OfRange(lowerBound, upperBound);
  document.getElementById("attempts-value").textContent = attempts;
}

function log2OfRange(lower, upper) {
  if (lower > upper) {
    console.error("Lower bound must be less than or equal to upper bound");
    return;
  }
  let range = upper - lower + 1;
  return Math.round(Math.log2(range));
}
