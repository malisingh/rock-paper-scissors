// players score variables
let humanScore = 0;
let computerScore = 0;

// computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// human choice
function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper, or scissors!");
  return humanChoice;
}

// play a single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win, ${humanChoice} beats ${computerChoice}}!`);
    humanScore++;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`You lose, ${computerChoice} beats ${humanChoice}}!`);
    computerScore++;
    console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`);
  }
}

//  play the entire game
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}
playGame();
