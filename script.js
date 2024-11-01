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
