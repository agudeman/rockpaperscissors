// Prompt the user for how many rounds they want to play
let numRounds = parseInt(prompt("How many rounds do you want to play?"));

// Initialize global variables for wins, ties, and losses
let wins = 0;
let ties = 0;
let losses = 0;

// Loop through the number of rounds
for (let i = 0; i < numRounds; i++) {
// Prompt the user for their choice
	let userChoice = prompt("Round " + (i+1) + ": Choose rock, paper, or scissors. (Enter r, p, or s.)");

// Generate a random number for the computer's choice
    let computerChoice = Math.floor(Math.random() * 3);

// Translate the computer's choice from a number to rock, paper, or scissors
	switch (computerChoice) {
		case 0:
			computerChoice = "r";
			break;
		case 1:
			computerChoice = "p";
			break;
		case 2:
			computerChoice = "s";
			break;
	}

// Compare the user's choice to the computer's choice
	if (userChoice === computerChoice) {
// It's a tie
	ties++;
	alert("It's a tie! You both chose " + userChoice);
    } else if ((userChoice === "r" && computerChoice === "s") || 
    (userChoice === "p" && computerChoice === "r") || 
    (userChoice === "s" && computerChoice === "p")) {
// User wins
    wins++;
    alert("You win! You chose " + userChoice + " and computer chose " + computerChoice);
} else {
// Computer wins
    losses++;
    alert("You lose! Computer chose " + computerChoice);
}
}

// Alert the user to the final results
alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses);