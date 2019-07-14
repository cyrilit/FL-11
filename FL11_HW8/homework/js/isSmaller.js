function isBigger (first, second) {
	return first > second;
}
function isSmaller (first, second) {
	return !isBigger(first, second);
}
isSmaller(-230, 1024);