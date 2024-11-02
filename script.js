// players score variables
let humanScore = 0;
let computerScore = 0;

// computer choice
function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.333) {
    return "Rock";
  } else if (computerChoice > 0.333 && computerChoice <= 0.666) {
    return "Paper";
  } else if (computerChoice > 0.666) {
    return "Scissors";
  }
  return computerChoice;
}
console.log(getComputerChoice());

// human choice
function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper, or scissors!").toLowerCase();
  return humanChoice;
}
console.log(getHumanChoice());

// play a single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}}`);
    humanScore++;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}}`);
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
