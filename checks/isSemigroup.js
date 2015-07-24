var deepCompare = require("../compare");

//TODO: needs
//binary combinator func 
//OR operator (skip for 1st POC?)
function isSemigroup(obj) {
	var guardChecks = !!(obj && typeof obj.concat === "function")

	if (!guardChecks) {
		return false;
	}

	var mCtor = obj.constructor;
	if (!mCtor || !obj.concat(obj)) {
		return false;
	}
	var m1 = new mCtor('a');
	var m2 = new mCtor('b');
	return !!(
		deepCompare(obj.concat(new mCtor()), obj) //should be monoid empty concatenated		
		&& deepCompare(obj.concat(m1).concat(m2), obj.concat(m1.concat(m2)))
	);
}

module.exports = isSemigroup;