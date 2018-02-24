var countBits = function(n) {
	let bin = [];
	while (n) {
		bin.push(n % 2);
		n = Math.floor(n / 2);
	}
	return bin.filter( num => { return num === 1}).length;
	// Program Me
};