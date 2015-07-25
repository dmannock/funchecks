var deepCompare = require('../compare');
var utils = require('../utils');

//TODO: shortcut checks by hints / aware of context
//currently uses brute force checks
//this data type requires flexibility for naming
//alternative call scenarios
//#1: default name: chain
//#2: aliases
//#3: exhaustive check all
var of = 'of';
var chainAlisaes = ['chain', 'flatMap', 'bind'];

function isMonadChain(obj, chainName) {
	if (!utils.isFunc(obj[of]) //pointed functor check
		|| !utils.isFunc(obj[chainName])) {
		return false;
	}

	var unwrapped = 1;
	var m = obj[of](unwrapped);
	return !!(
		deepCompare(m[chainName](utils.id), utils.id(unwrapped)),	
		deepCompare(m[chainName](obj[of]), m)
	);
}

module.exports = function isMonad(obj) {
	return !!obj && chainAlisaes.some(function(chainAlias) {
		return isMonadChain(obj, chainAlias);
	});
};