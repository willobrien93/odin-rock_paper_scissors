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


// playRound function
// Parameters: 
// Player Selection (case-insensitive), Computer Selection
// Return: String of who is the winner and why

// game function
// plays 5 rounds, keeps score, reports winner and loser