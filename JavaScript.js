function getPlayerChoice() {
  let playerInput = prompt("Type which item you'll throw", "Rock or Paper or Scissors");
  let playerChoice = playerInput.toUpperCase();
  if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS") {
    return playerChoice;
  } else {
    return alert("You typed incorrect item");
  }
}

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

function getComputerChoice() {
  let computerChoice = randomNumber();
  if (computerChoice <= 33) {
    return "ROCK";
  } else if (computerChoice > 33 && computerChoice <= 66) {
    return "PAPER";
  } else {
    return 'SCISSORS';
  }
}

