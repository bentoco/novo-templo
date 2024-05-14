let playerName = "";
let range = 0;

function startGame() {
  player_name = document.getElementById("player-name-input").value.trim();
  if (player_name === "") {
    alert("please enter your name.");
    return;
  }
  document.getElementById('player-name').textContent = playerName;
  document.getElementById("player-name-window").style.display = "none";
  document.getElementById("range-window").style.display = "flex";
  document.getElementById("lower-input").focus();
}

function submitRange() {
  const lowerBound = document.getElementById("lower-input").value;
  const upperBound = document.getElementById("upper-input").value;

  if (lowerBound === "" || upperBound === "") {
    alert("Please enter both lower and upper bounds.");
    return;
  }

  console.log(`Lower Bound: ${lowerBound}, Upper Bound: ${upperBound}`);
  // You can perform further actions with the bounds here
}
