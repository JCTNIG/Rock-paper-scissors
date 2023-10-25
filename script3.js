function getComputerChoice() {
  //Generate a random number between 1 and 3, and match it to rock, paper and scissors
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors"
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if ((playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "paper")) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
  (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  } else if (playerSelection === computerSelection) {
    return "Draw! You both selected " + playerSelection;

  } else {
    return "Invalid selection"
  }
}


function game() {
  let userScore = 0;
  let computerScore = 0;
  let winner = "";
  
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter either 'Rock', 'Paper' or 'Scissors'");
    console.log(playerSelection);

    let computerSelection = getComputerChoice();
    console.log(computerSelection);

    let result = playRound(playerSelection,computerSelection);

    console.log(result);

    // Add a score to the winner of each round.
    if (result.includes("Win!")) {
      userScore += 1;
    } else if (result.includes("Lose!")) {
      computerScore += 1;
    }

    console.log(userScore);
    console.log(computerScore);

  }

  // Show the winner
  if (userScore === computerScore) { 
    winner = `It's a tie! Try Again \nYou ${userScore}\nComputer ${computerScore}`
  } else if (userScore > computerScore) {
    winner = `You Win! \nYou ${userScore}\nComputer ${computerScore}`;
  } else {
    winner = `Computer Wins!\nYou ${userScore}\ncomputer ${computerScore}`;
  }

  return winner
}

console.log(game());