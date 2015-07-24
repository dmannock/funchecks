var deepCompare = require("../compare");

function getConstructor(type, obj) {
	return 	typeof type === "function" ? type : obj.constructor;
}

function isSemigroup(type, obj) {
	var guardChecks = !!(obj && typeof obj.concat === "function")

	if (!guardChecks) {
		return false;
	}

	//TODO: this feels hacky
	//works for built-in types
	var mCtor = getConstructor(type, obj);
	if (!mCtor || !obj.concat(obj)) {
		return false;
	}
	var m1 = mCtor('a');
	var m2 = mCtor('b');

	// console.log(`isSemigroup mCtor: ${mCtor} type ${type}`);
	return !!(
		deepCompare(obj.concat(mCtor()), obj) //should be monoid empty concatenated		
		&& deepCompare(obj.concat(m1).concat(m2), obj.concat(m1.concat(m2)))
	);
}

module.exports = isSemigroup;