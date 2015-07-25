var deepCompare = require("../compare");
var isSemigroup = require("./isSemigroup");
var utils = require("../utils");

function isMonoid(type, obj) {
	if (!obj 
		|| !type
		|| !type.empty
		|| !utils.isFunc(type.empty)) {
		return false;
	}
	var m = type('a');
	return !!(
		isSemigroup(type, obj)
		&& deepCompare(m.concat(type.empty()), m)
		&& deepCompare(type.empty().concat(m), m)  //should be monoid empty concatenated		
	);
};

module.exports = isMonoid;