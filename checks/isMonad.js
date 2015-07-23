var deepCompare = require('../compare');

//TODO:
//this data type requires flexibility for naming
//chain, flatMap, bind
//Extract id func to utils/common
//Change of & chain from hardcoded
function id(x) {
	return x;
}

var of = 'of';
var chain = 'chain';
//alternative call scenarios
//#1: default name: chain
//#2: aliases
//#3: exhaustive check all
var aliases = ['flatMap', 'bind'];

function isMonad(obj) {
	var guardChecks = !!(obj
		&& typeof obj[of] === 'function' //pointed functor check
		&& typeof obj[chain] === 'function'
	);

	if (!guardChecks) {
		return false;
	}

	var unwrapped = 1;
	var m = obj[of](unwrapped);
	return !!(
		deepCompare(m[chain](id), id(unwrapped)),	
		deepCompare(m[chain](obj[of]), m)
	);
}

module.exports = isMonad;