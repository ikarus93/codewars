function GetSum(a, b) {
	//Good luck!
	let sum = 0;
	let [x, y] = [a < b ? a  : b, a < b ? b : a];
	for (let i = x; i <= y; i++) sum += i;
	return sum;
}