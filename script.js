let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, compGuess, targetNum) {
  const humanDifference = Math.abs(targetNum - humanGuess);
  const compDifference = Math.abs(targetNum - compGuess);

  return humanDifference <= compDifference;
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}

function playRound() {
  const humanGuess = Number(document.getElementById('humanGuess').value);

  if (isNaN(humanGuess) || humanGuess < 0 || humanGuess > 9) {
    alert('Your guess is out of range! Please enter a number between 0 and 9.');
    return; // Stop the round if the input is invalid
  }

  const computerGuess = Math.floor(Math.random() * 10);
  const target = generateTarget();

  const humanWins = compareGuesses(humanGuess, computerGuess, target);

  if (humanWins) {
    updateScore('human');
    document.getElementById('resultText').textContent =
      `You won! Target was ${target}. Computer guessed ${computerGuess}.`;
  } else {
    updateScore('computer');
    document.getElementById('resultText').textContent =
      `Computer won! Target was ${target}. Computer guessed ${computerGuess}.`;
  }

  advanceRound();

  document.getElementById('humanScore').textContent = humanScore;
  document.getElementById('computerScore').textContent = computerScore;
  document.getElementById('roundNumber').textContent = currentRoundNumber;
}
