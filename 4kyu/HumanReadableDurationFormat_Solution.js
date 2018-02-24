function formatDuration(seconds) {
	// Complete this function
	const names = ['year', 'day', 'hour', 'minute', 'second'];
	const vals = [31536000, 86400, 3600, 60, 1];
	let foundNames = [];
	let foundVals = [];

	if (!seconds) return 'now';

	while (seconds > 0) {
		for (let i = 0; i < vals.length; i++) {
			if (vals[i] <= seconds) {
				if (foundNames.indexOf(names[i]) !== -1) {
					foundVals[foundNames.indexOf(names[i])]++;
				} else {
					foundNames.push(names[i]);
					foundVals.push(1);
				}
				seconds -= vals[i];
				break;
			}
		}
	}
  let str = "";
  foundNames.map( (name, idx) => {
    let temp = foundVals[idx] > 1 ? name + 's' : name;
    let x;
    if (idx + 1 !== foundNames.length && idx !== 0) {
      x = ", "
    } else if(idx !== 0){
      x = " and "
    } else {
      x = "";
    }
    temp = x + foundVals[idx] + " " + temp;
    str += temp
  })
	return str;
}