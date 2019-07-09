const resources = {
	attempts: 3,
	numBound: 8,
	expander: 4,
	total: 0,
	basicPrizes: {
		0: 100, 
		1: 50, 
		2: 25
	}
};

if ( confirm('Do you want to play a game?') ) {
	for (let i = 0; i < resources.attempts; i++) {		
		let ballLand = Math.floor( Math.random() * (resources.numBound + 1) );
		let pocketNumberGuess = prompt(
			`Chose a roulette pocket number from 0 to ${resources.numBound}
			Attempts left: ${resources.attempts - i}
			Total prize: ${resources.total}$
			Possible prize on current attempt: ${resources.basicPrizes[i]}$`, '');
		if (pocketNumberGuess === ballLand) {
			resources.total += resources.basicPrizes[i];
			if ( confirm(`Congratulation, you won!   Your prize is: ${resources.total} $. Do you want to continue?`) ) {

			} else {
				alert(`Thank you for your participation. Your prize is: ${resources.total} $`);
				if ( confirm('Do you want to play again?') ) {
					i = 0;
					resources.numBound += resources.expander;
					// two times bigger maximum prize					
				} else {
					//
				}
			}
		} else {
			alert(`Thank you for your participation. Your prize is: ${resources.total} $`);
		}
	}
} else {
	alert('You did not become a billionaire, but can.');
}




