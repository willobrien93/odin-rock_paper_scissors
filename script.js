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
    else if (difference === -1 || difference === 2) {
        console.log(`You win! ${choices[playerIndex]} beats ${choices[computerIndex]}.`);
        return 'player';
    }
    // Player lost
    else {
        console.log(`You lost! ${choices[computerIndex]} beats ${choices[playerIndex]}.`);
        return 'computer';
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