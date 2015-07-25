var deepCompare = require("../compare");
var isSemigroup = require("./isSemigroup");
var utils = require("../utils");

module.exports = function isMonoid(obj, type) {
	if (!obj 
		|| !type
		|| !type.empty
		|| !utils.isFunc(type.empty)) {
		return false;
	}
	var m = type('a');
	return !!(
		isSemigroup(obj, type)
		&& deepCompare(m.concat(type.empty()), m)
		&& deepCompare(type.empty().concat(m), m)  //should be monoid empty concatenated		
	);
};