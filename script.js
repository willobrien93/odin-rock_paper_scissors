// getComputerChoice function
// randomly returns Rock, Paper, or Scissors
function getComputerChoice() {
    // Get random integer between 0-2
    let random = Math.floor(Math.random()*3);
    // Return choice based on random integer
    return (random == 0) ? 'Rock' :
        (random == 1) ? 'Paper' : 
        (random == 2) ? 'Scissors' :
        'error';
}

// playRound function
// Parameters: 
// Player Selection (case-insensitive), Computer Selection
// Return: String of who is the winner and why

// game function
// plays 5 rounds, keeps score, reports winner and loser