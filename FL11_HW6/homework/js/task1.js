const divider = 2;
const a1 = parseFloat( prompt('Please enter the x-coordinate for A point. Use dot for decimal number.', '') );
const a2 = parseFloat( prompt('Please enter the y-coordinate for A point. Use dot for decimal number.', '') );
const b1 = parseFloat( prompt('Please enter the x-coordinate for B point. Use dot for decimal number.', '') );
const b2 = parseFloat( prompt('Please enter the y-coordinate for B point. Use dot for decimal number.', '') );
const c1 = parseFloat( prompt('Please enter the x-coordinate for C point. Use dot for decimal number.', '') );
const c2 = parseFloat( prompt('Please enter the y-coordinate for C point. Use dot for decimal number.', '') );

if ( isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2) ) {
	console.log('Sorry, You enter incorrect coordinates!');
} else {
	console.log( (a1 + b1) / divider === c1 && (a2 + b2) / divider === c2 );
}