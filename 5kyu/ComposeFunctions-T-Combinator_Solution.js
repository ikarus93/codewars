
var compose = function(...args) {
	if (args.length === 1) return args[0];

	let [val, funcs] = [args[0], args.slice(1)];

	 funcs.map(func => {
	  val = func(val)
	});
	
	return val
};