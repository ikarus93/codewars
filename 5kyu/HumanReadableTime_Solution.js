function humanReadable(seconds) {
	function addZero(num) {
		let x = num < 10 ? '0' + num : num;
		return x;
	}

	let t = [3600, 60, 1];
	let found = [0, 0, 0];

	while (seconds > 0) {
		for (let i = 0; i < t.length; i++) {
			if (t[i] <= seconds) {
				found[i]++;
				seconds -= t[i];
				break;
			}
		}
	}

	return (
		'' +
		found
			.map((num, idx) => {
				let x = idx + 1 < found.length ? ':' : '';
				return addZero(num) + x;
			})
			.join('')
	);
}