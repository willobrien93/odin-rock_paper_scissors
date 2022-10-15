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
    const choicesLower = ['rock', 'paper', 'scissors'];
    
    const playerIndex = choicesLower.indexOf(playerSelection.toLowerCase());
    const computerIndex = choicesLower.indexOf(computerSelection.toLowerCase());
    const difference = playerIndex - computerIndex;

    // Check if tie
    if (playerIndex === computerIndex) {
        console.log(`It's a tie, both threw ${choices[playerIndex]}.`);
        return 'tie';
    }
    // Check if player wins
    // Conditions based on patterns of winning combinations
    else if (difference === 1 || difference === -2) {
        console.log(`You win! ${choices[playerIndex]} beats ${choices[computerIndex]}.`);
        return 'player';
    }
    // Player lost
    else {
        console.log(`You lost! ${choices[computerIndex]} beats ${choices[playerIndex]}.`);
        return 'computer';
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function checkForWinner() {
    // Game over deciding winner
    if (playerScore === roundsToWin) {
        console.log('Game Over: You win!')
        playerScore = 0;
        computerScore= 0;
    } else if (computerScore === roundsToWin) {
        console.log('Game Over: You lost.')
        playerScore = 0;
        computerScore = 0;
    }
}

// Initialize score keeping variables
let playerScore = 0;
let computerScore = 0;
let roundsToWin = 5;
// Initialize loop variables
let playerSelection;
let winner;

gameButtons = document.querySelectorAll('button');
gameButtons.forEach(gameButton => gameButton.addEventListener('click', function() {
    winner = playRound(gameButton.name , getComputerChoice())
    updateScore(winner);
    // Score reporting
    console.log(`Player: ${playerScore} Computer: ${computerScore}`)
    //
    checkForWinner();


}));