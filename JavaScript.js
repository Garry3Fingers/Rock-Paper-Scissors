function getPlayerChoice() {
  let playerInput = getPlayerInput();
  let playerChoice = playerInput.toUpperCase();
  if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS") {
    return playerChoice;
  } else if (playerChoice === "CANCELED") {
    return "Canceled";
  } else {
    return "Wrong input"
  }
}

function getPlayerInput() {
  let playerInput = prompt("Type the item which to throw", "Rock or Paper or Scissors");
  if (playerInput === null) {
    return "Canceled";
  } else {
    return playerInput;
  }
}


const randomNumber = () => Math.floor(Math.random() * 100);


function getComputerChoice() {
  let computerChoice = randomNumber();
  if (computerChoice >= 66) {
    return "ROCK";
  } else if (computerChoice >= 33) {
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
    case (playerChoice === "Canceled" && (computerChoice === "ROCK" || computerChoice === "PAPER" || computerChoice === "SCISSORS")):
      result = "Canceled";
      break;
    default:
      result = "You must choose the current item! The computer won this round because of it!";
  }
  return result;
}


//Start the program
playGame();


function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let score;
  for (let i = 0; i < 5; i++) {
    score = getResult();
    if (score === 1) {
      ++playerScore;
    } else if (score === 0) {
      ++computerScore;
    } else if (score === "draw") {
      playerScore += 0;
      computerScore += 0;
    } else {
      return "Canceled";
    }
    console.log(`Current match score: Player - ${playerScore}, Computer - ${computerScore}`);
  }
  console.log(declareTheWinner(playerScore, computerScore));
}


function declareTheWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "You won the match. Congratulations!!!";
  } else if (playerScore < computerScore) {
    return "The computer aces this match. Maybe someday it'll pretend that you can beat it.";
  } else {
    return "It's a draw. Not bad for human being.";
  }
}


function getResult() {
  roundResult = playRound(getPlayerChoice(), getComputerChoice());
  console.log(roundResult);
  score = roundResult.charAt(4);
  if (score === "W") {
    return 1;
  } else if (score === "L" || score === "m") {
    return 0;
  } else if (score === " ") {
    return "draw"
  } else {
    return "Canceled";
  }
}