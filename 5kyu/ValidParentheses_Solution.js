unction validParentheses(parens) {
	let open =  0;
	let closeNoOpen = false;

	parens = parens.split('');
	for (let i = 0; i < parens.length; i++) {
		if (parens[i] === '(') {
			open ++;
		} else if (parens[i] === ')' && open) {
			open--;
		} else {
			closeNoOpen = true;
		}
	}

	return open === 0 && closeNoOpen === false;
	//TODO
}