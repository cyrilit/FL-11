function formatTime (minutes) {
	let temp = minutes % 1440;
	const min = temp % 60;
	const hour = (temp - min) / 60;
	const day = (minutes - temp) / 1440;	
	return `${day} day(s) ${hour} hour(s) ${min} minute(s).`;
}
formatTime(3601);