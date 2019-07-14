function reverseNumber (number) {
	let reversedNumber = 0;
	let digit = 0;
	while (number) {
		digit = number % 10;
		reversedNumber = reversedNumber * 10 + digit;
		number = (number - digit) / 10;
	}
	return reversedNumber; 
}
reverseNumber(-321);