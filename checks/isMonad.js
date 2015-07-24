var deepCompare = require('../compare');

//TODO:
//this data type requires flexibility for naming
//non brute force checking - pass mappings
//Extract id func to utils/common
function id(x) {
	return x;
}

var of = 'of';
//alternative call scenarios
//#1: default name: chain
//#2: aliases
//#3: exhaustive check all
var chainAlisaes = ['chain', 'flatMap', 'bind'];

function isMonadChain(obj, chainName) {
	var guardChecks = 
		typeof obj[of] === 'function' //pointed functor check
		&& typeof obj[chainName] === 'function';

	if (!guardChecks) {
		return false;
	}

	var unwrapped = 1;
	var m = obj[of](unwrapped);
	return !!(
		deepCompare(m[chainName](id), id(unwrapped)),	
		deepCompare(m[chainName](obj[of]), m)
	);
}

//TODO: shortcut checks by hints / aware of context
// currently uses brute force checks
function isMonad(obj) {
	return !!obj && chainAlisaes.some(function(chainAlias) {
		return isMonadChain(obj, chainAlias);
	});
}

module.exports = isMonad;