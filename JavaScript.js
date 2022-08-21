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
      result = "It's a draw!";
      break;
    case (playerChoice === "ROCK" && computerChoice === "PAPER"):
      result = "You Lost the round! Paper beat Rock!";
      break;
    case (playerChoice === "PAPER" && computerChoice === "SCISSORS"):
      result = "You Lost the round! Scissors beat Paper!";
      break;
    case (playerChoice === "SCISSORS" && computerChoice === "ROCK"):
      result = "You Lost the round! Rock beat Scissors!";
      break;
    case (playerChoice === "ROCK" && computerChoice === "SCISSORS"):
      result = "You Won the round! Rock beat Scissors!";
      break;
    case (playerChoice === "PAPER" && computerChoice === "ROCK"):
      result = "You Won the round! Paper beat Rock!";
      break;
    case (playerChoice === "SCISSORS" && computerChoice === "PAPER"):
      result = "You Won the round! Scissors beat Paper!"
      break;
  }
  return result;
}

//console.log(playRound(getPlayerChoice(), getComputerChoice()));

game();

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let score;
  for (let i = 0; i < 5; i++) {
    score = getResult();
    if (score === 1) {
      ++playerScore;
    } else if (score === 0) {
      ++computerScore;
    }
    console.log(`Current match score: Player - ${playerScore}, Computer - ${computerScore}`);
  }
  let finalScore = () => {
    let finalMessage;
    if (playerScore > computerScore) {
      finalMessage = "You won the match. Congratulations!!!";
    } else if (playerScore < computerScore) {
      finalMessage = "The computer aces this match. Maybe someday it'll pretend that you can beat it.";
    } else {
      finalMessage = "It's a draw. Not bad for human being.";
    }
    return finalMessage;
  }
  //console.log(playerScore, computerScore);
  console.log(finalScore());
}

function getResult() {
  roundResult = playRound(getPlayerChoice(), getComputerChoice());
  console.log(roundResult);
  score = roundResult.charAt(4);
  if (score === "W") {
    return 1;
  } else if (score === "L") {
    return 0;
  } 
}
