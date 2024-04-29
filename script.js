/*
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function playGame() {
  const playerSelection = prompt(
    "Please type rock, paper, or scissors into the space below:"
  );
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}

//playGame();
*/

const choices = ["rock", "paper", "scissors"];
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerScore.textContent = `PLAYER: ${playerChoice}`;
  computerScore.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;
}
