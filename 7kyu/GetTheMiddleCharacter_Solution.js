function getMiddle(s) {
	//Code goes here!
	let x = s.length % 2 !== 0
		? Math.floor(s.length / 2)
		: [s.length / 2 - 1, s.length / 2];
	if (Array.isArray(x)) {
		return s.slice(x[0], x[1] + 1);
	} else {
		return s[x];
	}
}