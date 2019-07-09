const UPPER_BOUND = 8,
ATTEMPTS = 3;
const basicPrizes = {
	0: 100, 
	1: 50, 
	2: 25
};
let totalPrize = 0;

if ( confirm('Do you want to play a game?') ) {
	let ballLand = Math.floor( Math.random() * (UPPER_BOUND + 1) );
	for (let i = 0; i < ATTEMPTS; i++) {
		let pocketNumberGuess = prompt('Please enter a number of pocket on which the ball could land:', '');
		if (pocketNumberGuess === ballLand) {
			// statement
		} else {
			// statement
		}
	}
} else {
	alert('You did not become a billionaire, but can.');
}


if ( confirm(`Congratulation, you won!   Your prize is: ${userPrize} $. Do you want to continue?`) ) {
	let ballLand = Math.random() * (UPPER_BOUND - LOWER_BOUND) + LOWER_BOUND + 1;
	for (let i = 0; i < ATTEMPTS; i++) {
		let pocketNumberGuess = prompt('Please enter a number of pocket on which the ball could land:', '');
		if (pocketNumberGuess === ballLand) {
			// statement
		} else {
			// statement
		}
	}
} else {
	alert(`Thank you for your participation. Your prize is: ${userPrize} $`);
	if ( confirm('Do you want to play again?') ) {
		//
	} else {
		//make number range bigger at 4 as the previous one (for example [0; 8] -> [0; 12])
		// two times bigger maximum prize
	}
}