function array_diff(a, b) {
	return a.filter(item => { return b.indexOf(item) === -1;});
}