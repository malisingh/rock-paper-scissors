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
const outcomeDiv = document.querySelector(".outcome");
const winner = document.querySelector(".winner");
const scoreDiv = document.querySelector("score");
const p = document.createElement("p");
p.textContent = "";
const winnerh2 = document.createElement("h2");

function playRound(humanChoice, computerChoice) {
  winnerh2.textContent = "";
  winner.appendChild(winnerh2);
  if (humanChoice === computerChoice) {
    p.textContent = `It\'s a tie! You both picked ${humanChoice}`;
    outcomeDiv.appendChild(p);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    p.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
    outcomeDiv.appendChild(p);
    humanScore++;
    if (humanScore === 5) {
      winnerh2.textContent = `Congratulations! You win!`;
      winner.appendChild(winnerh2);
      humanScore = 0;
      computerScore = 0;
    }
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    p.textContent = `You lose, ${computerChoice} beats ${humanChoice}!`;
    outcomeDiv.appendChild(p);
    computerScore++;
    if (computerScore === 5) {
      winnerh2.textContent = `Sorry, You lose! Computer beats you! ${computerScore} to ${humanScore}`;
      winner.appendChild(winnerh2);
      computerScore = 0;
      humanScore = 0;
    }
    // p.textContent = `Human score: ${humanScore}\nComputer score: ${computerScore}`;
  }
}

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

rockBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanChoice = "rock";
  playRound(humanChoice, computerSelection);
});
paperBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanChoice = "paper";
  playRound(humanChoice, computerSelection);
});
scissorsBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanChoice = "scissors";
  playRound(humanChoice, computerSelection);
});

//  play the entire game
// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     playRound(getHumanChoice(), getComputerChoice());
//   }
// }
// playGame();
