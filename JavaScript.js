function getPlayerChoice() {
  let playerInput = prompt("Type which item you'll throw", "Rock or Paper or Scissors");
  let playerChoice = playerInput.toUpperCase();
  if (playerChoice === "ROCK" || playerChoice === "SCISSORS" || playerChoice === "PAPER") {
    return playerChoice;
  } else {
    return alert("You typed incorrect item");
  }
}
