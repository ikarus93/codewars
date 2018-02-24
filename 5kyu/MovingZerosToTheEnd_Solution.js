var moveZeros = function(arr) {
	let zeros = [];
	return arr .map(item => {
			if (item === 0) {
				zeros.push(item);
			}
			return item;
		})	.filter(item => {return item !== 0;	}).concat(zeros);
};