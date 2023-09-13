// get computer's choice 
let getComputerChoice = Math.floor(Math.random() * 3) + 1;

// assign each sign to a number
let computerSign = "";
if (getComputerChoice === 1) {
  computerSign = "rock";
} else if (getComputerChoice === 2) {
  computerSign = "scissors";
} else if (getComputerChoice === 3) {
  computerSign = "paper";
}
console.log(`computer: ${computerSign}`);

// let the user chose a sign
let userSelect = +prompt("Enter a number: \n 1 = rock\n 2 = scissors\n 3 = paper");

if (!(userSelect === 1 || userSelect === 2 || userSelect === 3)) {
  alert("Wrong input!");
  console.log("Try again"); 
}

// assign users number to a sign
let userSign = "";
if (userSelect === 1) {
  userSign = "rock";
} else if (userSelect === 2) {
  userSign = "scissors";
} else if (userSelect === 3) {
  userSign = "paper";
}
console.log(`You: ${userSign}`);

// compare the user's sign and the computer's sign 
let result = "";
if (computerSign === userSign) {
  result = "DRAW !\nNo Winner !"
} else {
  if ((computerSign === "rock" && userSign === "scissors") || (computerSign === "scissors" && userSign === "paper") || (computerSign === "paper" && userSign === "rock")) {
    result = "Computer Wins";
  } else {
    result = "You Win!"
  }
}
console.log(result);