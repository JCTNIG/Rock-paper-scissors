
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let player = 0;
let computer = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

const choices = ["rock", "paper", "scissors"];

function makeChoice(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  displayResult(result);
  increaseScore(result);
  game();
}



const resultDiv = document.getElementById("resultDiv");

const btn = document.querySelectorAll(".btn");

btn.forEach((btn) => {
  btn.addEventListener('click', () => makeChoice(btn.id))
})

function displayResult(result) {
  resultDiv.textContent = result;
}

function playRound(playerSelection, computerSelection) {
  if (choices.includes(playerSelection)) {
    if (computerSelection === playerSelection) {
      return `It's a tie! You both selected ${computerSelection}`
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else {
    return `Invalid Selection`;
  }
  }

  function game() {
    if (player === 5) {
      displayResult("Congratulations! You won the battle.");
      disableButton();
      tryAgain();
    } else if (computer === 5) {
      displayResult("Game Over! You lost.");
      disableButton();
      tryAgain();
    }
  }
  function increaseScore(result) {
    if (result.includes('win!')) {
      player++;
      playerScore.textContent = player;
    } else if (result.includes('lose!')) {
      computer++;
      computerScore.textContent = computer;
    }
  }
  
  function disableButton() {
      btn.forEach((btn) => {btn.disabled = true});
  }


function tryAgain() {
  const button = document.createElement("button");
      button.textContent = "Play Again";
      document.body.appendChild(button);

      button.addEventListener('click', () => {
        location.reload();
      })
}