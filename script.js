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

// Changes game images to selections
function updateVisual(playerSelection, computerSelection) {
    playerVisual.src = `img/${playerSelection.toLowerCase()}.png`;
    playerVisual.alt = `${playerSelection}`;
    computerVisual.src = `img/${computerSelection.toLowerCase()}.png`;
    computerVisual.alt = `${computerSelection}`;
}

// Updates player scoreboard and triggers animation start
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

// Checks game win conditions and triggers end game conditions
function checkForWinner() {
    // Game over deciding winner
    if (playerScore === roundsToWin) {
        gameInstructionText.textContent = 'Game Over: You win!';
        gameOver();
    } else if (computerScore === roundsToWin) {
        gameInstructionText.textContent = 'Game Over: You lost!';
        gameOver();
    }
}

function gameOver() {
    startButton.textContent = 'Play Again?';
    gameInstruction.style.display = 'flex';
    gameSelection.style.display = 'none';
}

function resetGame() {
    playerScore = 0;
    computerScore= 0;
    playerScoreDisplay.textContent  = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerVisual.src = `img/placeholder.png`;
    playerVisual.alt = ``;
    computerVisual.src = `img/placeholder.png`;
    computerVisual.alt = ``;
    gameMessage.textContent = "Make a Selection to Start."
}

// Button Hover Styling
function buttonAddHighlight(e) {
    e.target.classList.add('highlight');
}
function buttonRemoveHighlight(e) {
    e.target.classList.remove('highlight');
}

// Scoreboard winner transition helper function
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
//Container1
gameInstruction = document.querySelector('.instruction');
gameInstructionText = document.querySelector('.instructionText');
gameSelection = document.querySelector('.choices');
startButton = document.querySelector('.startButton');
gameButtons = document.querySelectorAll('.gameButtons');
//Container2
visuals = document.querySelector('.visuals');
playerVisual = document.querySelector('.playerVisual');
computerVisual = document.querySelector('.computerVisual');
gameMessage = document.querySelector('.message');
//Container3
results = document.querySelector('.results');
playerScoreDisplay = document.querySelector('#playerScore');
computerScoreDisplay = document.querySelector('#computerScore');

// Button Hover Highlighting
gameButtons.forEach(gameButton => gameButton.addEventListener('mouseover', buttonAddHighlight ));
gameButtons.forEach(gameButton => gameButton.addEventListener('mouseout', buttonRemoveHighlight ));
startButton.addEventListener('mouseover', buttonAddHighlight );
startButton.addEventListener('mouseout', buttonRemoveHighlight );

// Winner Transition
playerScoreDisplay.addEventListener('transitionend',removeTransition);
computerScoreDisplay.addEventListener('transitionend',removeTransition);

startButton.addEventListener('click', function() {
    resetGame();
    gameInstruction.style.display = 'none';
    gameSelection.style.display = 'flex';
    results.style.display = 'flex';
    visuals.style.visibility = 'visible';
});

// Effective game function
gameButtons.forEach(gameButton => gameButton.addEventListener('click', function() {
    playerSelection = gameButton.name;
    computerSelection = getComputerChoice();
    winner = playRound(playerSelection, computerSelection);
    updateVisual(playerSelection, computerSelection);
    updateScore(winner);
    checkForWinner();
}));