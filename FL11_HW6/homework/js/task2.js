const a = parseFloat( prompt('Please enter the first triangle side length. Use dot for decimal number.', '') );
const b = parseFloat( prompt('Please enter the second triangle side length. Use dot for decimal number.', '') );
const c = parseFloat( prompt('Please enter the third triangle side length. Use dot for decimal number.', '') );

if ( isNaN(a) || isNaN(b) || isNaN(c) ) {
	console.log('Sorry, You enter incorrect side length!');
} else if ( !( a + b > c && a + c > b && b + c > a ) ) {
	console.log('Triangle doesn’t exist');
} else if ( a === b && b === c ) {
	console.log('Equivalent triangle');
} else if ( a === b || b === c || a === c ) {
	console.log('Isosceles triangle');
} else {
	console.log('Normal triangle');
}