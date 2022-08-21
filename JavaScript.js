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

function playRound(playerChoice, computerChoice) {
  let result;
  switch (true) {
    case (playerChoice === computerChoice):
      result = "It's a draw";
      break;
    case (playerChoice === "ROCK" && computerChoice === "PAPER"):
      result = "You Lose! Paper beat Rock!";
      break;
    case (playerChoice === "PAPER" && computerChoice === "SCISSORS"):
      result = "You Lose! Scissors beat Paper!";
      break;
    case (playerChoice === "SCISSORS" && computerChoice === "ROCK"):
      result = "You Lose! Rock beat Scissors!";
      break;
    case (playerChoice === "ROCK" && computerChoice === "SCISSORS"):
      result = "You Win! Rock beat Scissors!";
      break;
    case (playerChoice === "PAPER" && computerChoice === "ROCK"):
      result = "You Win! Paper beat Rock!";
      break;
    case (playerChoice === "SCISSORS" && computerChoice === "PAPER"):
      result = "You Win! Scissors beat Paper!"
      break;
  }
  return result;
}

//console.log(playRound(getPlayerChoice(), getComputerChoice()));

