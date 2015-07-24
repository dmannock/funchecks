var deepCompare = require("../compare");

//TODO: needs
//binary combinator func 
//OR operator (skip for 1st POC?)
function isSemigroup(obj) {
	var guardChecks = !!(obj && typeof obj.concat === "function")

	if (!guardChecks) {
		return false;
	}

	return !!(
		deepCompare(obj.concat([]), obj) //should be monoid empty concatenated		
	);
}

module.exports = isSemigroup;