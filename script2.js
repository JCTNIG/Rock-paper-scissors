// Get computer's choice
function getComputerChoice() {
  let sign = Math.floor(Math.random() * 3) + 1;
  let choice = "";
  if (sign === 1) {
    choice = "rock";
  } else if (sign === 2) {
    choice = "paper";
  } else if (sign === 3) {
    choice = "scissors"
  }
  return choice
}

const computerSelection = getComputerChoice();

// Get user's choice
function getUserChoice() {
  let sign = prompt("Enter 1:rock or 2:paper or 3:scissors");
  let choice = "";
  if (sign === "1" || sign.toLowerCase() === "rock") {
    choice = "rock";
  } else if (sign === "2" || sign.toLowerCase() === "paper") {
    choice = "paper";
  } else if (sign === "3" || sign.toLowerCase() === "scissors") {
    choice = "scissors"
  } else {
    choice = false;
  }
  return choice;
}
let playerSelection = getUserChoice();

// Write a function that plays a single round.

function playRound(user, computer) {
  let message = "";
  if (user) {
    if (user === computer) {
      message = "Its a draw";
    } else if ((user === "rock" && computer === "paper") || (user === "paper" && computer === "scissors") || (user === "scissors" && computer === "rock")) {
      message = `You Lose! ${computer} beats ${user}`;
    } else {
      message = `Winner!!! You Win! ${user} beats ${computer}`;
    }
  } else {
    message = "Wrong Input! Try Again"
  }
  return message;
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection))

