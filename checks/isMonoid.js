var deepCompare = require("../compare");
var isSemigroup = require("./isSemigroup");

function isFunc(fn) {
	return typeof fn === "function";
}

//TODO: needs
//semigroup
//and identity
function isMonoid(type, obj) {
	var guardChecks = !!(obj 
		&& type
		&& type.empty
		&& isFunc(type.empty)
	)

	if (!guardChecks) {
		return false;
	}

	// console.log(`isMonoid type.empty: ${type.empty} type`, type, obj);

	var m = type('a');

	return !!(
		isSemigroup(type, obj)
		&& deepCompare(m.concat(type.empty()), m)
		&& deepCompare(type.empty().concat(m), m)  //should be monoid empty concatenated		
	);
}

module.exports = isMonoid;