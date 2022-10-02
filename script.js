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

    console.log(`Testing: Player:${playerSelection} CPU: ${computerSelection}`);

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

function game(roundsToWin) {
    // Initialize score keeping variables
    let playerScore = 0;
    let computerScore = 0;
    // Initialize loop variables
    let playerSelection;
    let winner;

    // Loop until someone wins
    while (Math.max(playerScore,computerScore) < roundsToWin) {
        // Prompt user for selection
        playerSelection = prompt('Rock, Paper, or Scissors???');
        // Play round
        winner = playRound(playerSelection, getComputerChoice());
        // Scorekeeping
        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }
        // Score reporting
        console.log(`Player: ${playerScore} Computer: ${computerScore}`)
    }

    // Game over deciding winner
    if (playerScore > computerScore) {
        console.log('Game Over: You win!')
    } else if (playerScore < computerScore) {
        console.log('Game Over: You lost.')
    } else {
        console.log('Game Over: It\'s a tie')
    }
}


// Tests computerChoice for equal distribution
function testComputerChoice(sampleSize){
    let rock = 0;
    let paper = 0;
    let scissors = 0;
    let selection;

    for(let i = 0; i < sampleSize; i++) {
        selection = getComputerChoice();
        if (selection === 'Rock') {
            rock++;
        }
        else if (selection === 'Paper') {
            paper++;
        }
        else if (selection === 'Scissors') {
            scissors++
        }
        else{
            return 'Error'
        }
    }

    console.log(`Rock: ${rock}`)
    console.log(`Paper: ${paper}`)
    console.log(`Scissors: ${scissors}`)
}


// game function
// plays 5 rounds, keeps score, reports winner and loser