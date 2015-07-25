var deepCompare = require('../compare');
var utils = require('../utils');

function f(x) {
	return x + '1';
}
function g(y) {
	return y + '2';
}

function isFunctor(obj) {
	return !!(
		obj
		&& utils.isFunc(obj.map)
		&& deepCompare(obj.map(utils.id), utils.id(obj))		
		&& deepCompare(obj.map(f).map(g), obj.map(function(x) { return g(f(x)); })) //naive check for first assertion - relies on type coercion
	);
}

module.exports = isFunctor;