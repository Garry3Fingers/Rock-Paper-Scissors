// Player Choice Block

// const playerInput = (e) => console.loge.target.textContent;

// buttons.forEach((button) => {
//   button.addEventListener('click', playerInput)
// });


// function getPlayerChoice() {
//   let playerInput = getPlayerInput();
//   let playerChoice = playerInput.toUpperCase();
//   if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS") {
//     return playerChoice;
//   } else if (playerChoice === "CANCELED") {
//     return "Canceled";
//   } else {
//     return "Wrong input"
//   }
// }

// Computer Choice Block

const randomNumber = () => Math.floor(Math.random() * 100);

function getComputerChoice() {
  let computerChoice = randomNumber();
  if (computerChoice >= 66) {
    return "Rock";
  } else if (computerChoice >= 33) {
    return "Paper";
  } else {
    return 'Scissors';
  }
}

// Result of Round
const buttons = document.querySelectorAll('button');
const divRoundResult = document.querySelector('.result-of-round');
const paraResult = document.createElement('p');

buttons.forEach((button) => {
  button.addEventListener('click', playRound)
});

function playRound(e) {
  let playerChoice = e.target.textContent;
  let computerChoice = getComputerChoice();
  switch (true) {
    case (playerChoice === computerChoice):
      paraResult.className = 'draw';
      paraResult.textContent = 'It\'s a draw!';
      break;
    case (playerChoice === 'Rock' && computerChoice === 'Paper'):
      paraResult.className = 'lost';
      paraResult.textContent = 'You Lost the round! Paper beats Rock!';
      break;
    case (playerChoice === 'Paper' && computerChoice === 'Scissors'):
      paraResult.className = 'lost';
      paraResult.textContent = 'You Lost the round! Scissors beats Paper!';
      break;
    case (playerChoice === 'Scissors' && computerChoice === 'Rock'):
      paraResult.className = 'lost';
      paraResult.textContent = 'You Lost the round! Rock beats Scissors!';
      break;
    case (playerChoice === 'Rock' && computerChoice === 'Scissors'):
      paraResult.className = 'won';
      paraResult.textContent = 'You Won the round! Rock beats Scissors!';
      break;
    case (playerChoice === 'Paper' && computerChoice === 'Rock'):
      paraResult.className = 'won';
      paraResult.textContent = 'You Won the round! Paper beats Rock!';
      break;
    case (playerChoice === 'Scissors' && computerChoice === 'Paper'):
      paraResult.className = 'won';
      paraResult.textContent = 'You Won the round! Scissors beats Paper!'
      break;
  }
  divRoundResult.appendChild(paraResult);
}


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