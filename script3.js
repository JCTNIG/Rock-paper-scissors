function getComputerChoice() {
  //Generate a random number between 1 and 3
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  // Match the random numbers to rock, paper and scissors
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors"
  }
}

