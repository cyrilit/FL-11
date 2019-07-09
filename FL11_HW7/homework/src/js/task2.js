const resources = {
	attempts: 3,
	numBound: 8,
	expander: 4,
	factor: 1,
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
		let choice = parseInt( prompt(
					`Chose a roulette pocket number from 0 to ${resources.numBound}
					Attempts left: ${resources.attempts - i}
					Total prize: ${resources.total}$
					Possible prize on current attempt: ${resources.basicPrizes[i] * resources.factor}$`, ''), 10 );
		if (choice === ballLand) {
			resources.total += resources.basicPrizes[i] * resources.factor;
			if ( confirm(`Congratulation, you won!   Your prize is: ${resources.total} $. Do you want to continue?`) ) {
				resources.numBound += resources.expander; // make number range bigger at 4 as the previous one
				resources.factor *= 2; // make maximum prize two times bigger
				i = 0; // set number of attempts to 3 
			} else {
				alert(`Thank you for your participation. Your prize is: ${resources.total} $`);
				if ( confirm('Do you want to play again?') ) {
					resources.numBound = 8;
					resources.factor = 1;
					resources.total = 0;
					i = 0;
				} 
			}
		} else {
			alert(`Thank you for your participation. Your prize is: ${resources.total} $`);
			if ( confirm('Do you want to play again?') ) {
					resources.numBound = 8;
					resources.factor = 1;
					resources.total = 0;
					i = 0;					
				}
		}
	}
} else {
	alert('You did not become a billionaire, but can.');
}