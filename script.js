// Randomly returns Rock, Paper, or Scissors
function getComputerChoice() {
    // Get random integer between 0-2
    let random = Math.floor(Math.random()*3);
    // Return choice based on random integer
    return (random == 0) ? 'Rock' :
        (random == 1) ? 'Paper' : 
        (random == 2) ? 'Scissors' :
        'error';
}

// Checks selections and decides winner
// Returns winner of round (tie/player/computer)
function playRound(playerSelection, computerSelection) {
    // Input Validation
    const choices = ['Rock', 'Paper', 'Scissors'];
    const playerIndex = choices.indexOf(playerSelection);
    const computerIndex = choices.indexOf(computerSelection);
    const difference = playerIndex - computerIndex;

    // Check if tie
    if (playerIndex === computerIndex) {
        gameMessage.textContent =`It's a tie, both threw ${playerSelection}.`;
        return 'tie';
    }
    // Check if player wins
    // Conditions based on patterns of winning combinations
    else if (difference === 1 || difference === -2) {
        gameMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        return 'player';
    }
    // Player lost
    else {
        gameMessage.textContent =`You lost! ${computerSelection} beats ${playerSelection}.`;
        return 'computer';
    }
}

function updateVisual(playerSelection, computerSelection) {
    playerVisual.src = `img/${playerSelection.toLowerCase()}.png`;
    playerVisual.alt = `${playerSelection}`;
    computerVisual.src = `img/${computerSelection.toLowerCase()}.png`;
    computerVisual.alt = `${computerSelection}`;
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreDisplay.classList.add('winner');
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreDisplay.classList.add('winner');
    }
    playerScoreDisplay.textContent  = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function checkForWinner() {
    // Game over deciding winner
    if (playerScore === roundsToWin) {
        gameInstruction.textContent = 'Game Over: You win! Play Again?';
        gameInstruction.style.display = 'flex';
        results.style.display = 'none';
        playerScore = 0;
        computerScore= 0;
    } else if (computerScore === roundsToWin) {
        gameInstruction.textContent = 'Game Over: You lost. Play Again?';
        gameInstruction.style.display = 'flex';
        results.style.display = 'none';
        playerScore = 0;
        computerScore = 0;
    }
}

function buttonAddHighlight(e) {
    e.target.classList.add('highlight');
}

function buttonRemoveHighlight(e) {
    e.target.classList.remove('highlight');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if its not transitioning
    this.classList.remove('winner');
}

// Initialize score keeping variables
let playerScore = 0;
let computerScore = 0;
let roundsToWin = 5;
// Initialize loop variables
let playerSelection;
let computerSelection;
let winner;
// Select required elements
gameButtons = document.querySelectorAll('button');
visuals = document.querySelector('.visuals');
playerVisual = document.querySelector('.playerVisual');
computerVisual = document.querySelector('.computerVisual');
results = document.querySelector('.results');
playerScoreDisplay = document.querySelector('#playerScore');
computerScoreDisplay = document.querySelector('#computerScore');
gameInstruction = document.querySelector('.instruction');
gameMessage = document.querySelector('.message');

// Button Hover Highlighting
gameButtons.forEach(gameButton => gameButton.addEventListener('mouseover', buttonAddHighlight ));
gameButtons.forEach(gameButton => gameButton.addEventListener('mouseout', buttonRemoveHighlight ));

// Winner Trasition
playerScoreDisplay.addEventListener('transitionend',removeTransition);
computerScoreDisplay.addEventListener('transitionend',removeTransition);


gameButtons.forEach(gameButton => gameButton.addEventListener('click', function() {
    // Check for game start
    if (playerScore === 0 && computerScore === 0) {
        gameInstruction.style.display = 'none';
        results.style.display = 'flex';
        visuals.style.visibility = 'visible';
    }
    playerSelection = gameButton.name;
    computerSelection = getComputerChoice();
    winner = playRound(playerSelection, computerSelection);
    updateVisual(playerSelection, computerSelection);
    updateScore(winner);
    checkForWinner();
}));