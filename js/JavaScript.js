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
  };

};

// Main block of the game play

const buttons = document.querySelectorAll('.shape-button button');

buttons.forEach((button) => button.setAttribute('disabled', ''));

buttons.forEach((button) => {
  button.addEventListener('click', playRound)
});

const divRoundResult = document.querySelector('.result-of-round');

const paraResult = document.createElement('p');

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
      computerScore++;
      break;
    
    case (playerChoice === 'Paper' && computerChoice === 'Scissors'):
      paraResult.className = 'lost';
      paraResult.textContent = 'You Lost the round! Scissors beats Paper!';
      computerScore++;
      break;
    
    case (playerChoice === 'Scissors' && computerChoice === 'Rock'):
      paraResult.className = 'lost';
      paraResult.textContent = 'You Lost the round! Rock beats Scissors!';
      computerScore++;
      break;
    
    case (playerChoice === 'Rock' && computerChoice === 'Scissors'):
      paraResult.className = 'won';
      paraResult.textContent = 'You Won the round! Rock beats Scissors!';
      playerScore++;
      break;
    
    case (playerChoice === 'Paper' && computerChoice === 'Rock'):
      paraResult.className = 'won';
      paraResult.textContent = 'You Won the round! Paper beats Rock!';
      playerScore++;
      break;
    
    case (playerChoice === 'Scissors' && computerChoice === 'Paper'):
      paraResult.className = 'won';
      paraResult.textContent = 'You Won the round! Scissors beats Paper!';
      playerScore++;
      break;
  }

  divRoundResult.appendChild(paraResult);
  
  score.textContent = `Current match score: Player - ${playerScore}, Computer - ${computerScore}`;
  
  declareTheWinner();

};

// Running score block

const divRunningScore = document.querySelector('.score-dom-container');

const score = document.createElement('p');

const winnerOfGame = document.createElement('p');

let playerScore;

let computerScore;

function declareTheWinner() {
  
  if (playerScore === 5) {
    
    winnerOfGame.textContent = 'You won the match. Congratulations!!!';
    
    buttons.forEach((button) => button.setAttribute('disabled', ''));
    
    beginOfGame.textContent = 'New Game';

    divRunningScore.appendChild(winnerOfGame);
  
  } else if (computerScore === 5) {
    
    winnerOfGame.textContent = 'The computer aces this match. Maybe someday it\'ll pretend that you can beat it.';
    
    buttons.forEach((button) => button.setAttribute('disabled', ''));
    
    beginOfGame.textContent = 'New Game';

    divRunningScore.appendChild(winnerOfGame);
  
  };

};


// Start/restart/new game block

const beginOfGame = document.querySelector('.start-game button');

beginOfGame.addEventListener('click', startGame);


// This function also restarts correct game, and start new game

function startGame() {

  checkDivChild();
  
  buttons.forEach((button) => button.removeAttribute('disabled', ''));
  
  clearScore();
  
  divRunningScore.appendChild(score);
  
  score.textContent = `Current match score: Player - ${playerScore}, Computer - ${computerScore}`;

  beginOfGame.textContent = 'Restart Game';

};

const clearScore = () => {

  playerScore = 0;

  computerScore = 0;

};

function checkDivChild() {

  if (divRunningScore.hasChildNodes()) {
    
    divRunningScore.removeChild(divRunningScore.lastChild);
  
  };

  if (divRoundResult.hasChildNodes()) {

    divRoundResult.removeChild(divRoundResult.firstChild);

  }

};