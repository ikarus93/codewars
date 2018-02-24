var uniqueInOrder = function(iterable) {
	//your code here - remember iterable can be a string or an array
	if (!Array.isArray(iterable)) iterable = iterable.split("")
	return iterable.filter((x, idx) => { return	x !== iterable[idx + 1];});
};