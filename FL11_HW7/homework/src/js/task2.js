const resources = {
	attempts: 3,
	numBound: 8,
	expander: 4,
	factor: 1,
	total: 0,
	basicPrizes: {
		3: 100, 
		2: 50, 
		1: 25
	}
};

if ( confirm('Do you want to play a game?') ) {
	for (; resources.attempts > 0; resources.attempts--) {		
		let ballLand = Math.floor( Math.random() * (resources.numBound + 1) );
		let currentPrize = resources.basicPrizes[resources.attempts] * resources.factor;
		let choice = parseInt( prompt(
					`Chose a roulette pocket number from 0 to ${resources.numBound}
					Attempts left: ${resources.attempts}
					Total prize: ${resources.total}$
					Possible prize on current attempt: ${currentPrize}$`, ''), 10 );
		if (choice === ballLand) {
			resources.total += currentPrize;
			if ( confirm(`Congratulation, you won!   Your prize is: ${resources.total} $. Do you want to continue?`) ) {
				resources.numBound += resources.expander; // make number range bigger at 4 as the previous one
				resources.factor *= 2; // make maximum prize two times bigger
				resources.attempts = 3; // set number of attempts to 3 
			} else {
				alert(`Thank you for your participation. Your prize is: ${resources.total} $`);
				if ( confirm('Do you want to play again?') ) {
					resources.numBound = 8;
					resources.factor = 1;
					resources.total = 0;
					resources.attempts = 3;
				} 
			}
		} else {
			alert(`Thank you for your participation. Your prize is: ${resources.total} $`);
			if ( confirm('Do you want to play again?') ) {
					resources.numBound = 8;
					resources.factor = 1;
					resources.total = 0;
					resources.attempts = 3;					
				}
		}
	}
} else {
	alert('You did not become a billionaire, but can.');
}