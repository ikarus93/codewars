function isInteresting(number, awesomePhrases) {
	function isPalidrome(num) {
		//Checks for Palidromes
		return num == ('' + num).split('').reverse().join('');
	}

	function isSequence(num, diff) {
		//checks if num is a sequence, diff is used to differ from increment vs decrementing
		let is = true;
		let x = ('' + num).split('');
		let track = parseInt(x[0]);
		for (let i = 0; i < x.length; i++) {
			if (track != x[i]) {
				is = false;
			}
			track += diff;
			if (track - 1 === 9 && diff === 1) {
				track = 0;
			}
		}
		return is;
	}
	const rePatts = [/^\d0{1,}$/, /([1-9])\\1{9}/]; //patters for finding zero ending numbers as well as numbers that are made up of 1 sole digit

	function check(number) {
		//checks using the previous declared functions if the number matches any conditions

		if (
			isPalidrome(number) ||
			isSequence(number, 1) ||
			isSequence(number, -1) ||
			rePatts[0].test(number.toString()) ||
			rePatts[1].test(number.toString()) ||
			awesomePhrases.indexOf(number) !== -1
		) {
			return true;
		}
		return false;
	}
	let [plus1, plus2] = [number + 1, number + 2]; //Used to check for number occuring in the next 1-2 miles

	if (number + 1 <= 99 && number + 2 <= 99) return 0;

	if (check(number) && number > 99) {
		return 2;
	} else if (check(plus1) || check(plus2)) {
		return 1;
	} else {
		return 0;
	}

	// Go to town!
}