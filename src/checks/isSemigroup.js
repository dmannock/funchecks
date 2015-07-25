var deepCompare = require("../compare");
var utils = require("../utils");

module.exports = function isSemigroup(obj, type) {
	if (!obj || !utils.isFn(obj.concat)) {
		return false;
	}

	//TODO: this feels hacky - revisit
	var mCtor = utils.getCtor(type, obj);
	if (!mCtor || !obj.concat(obj)) {
		return false;
	}
	var m1 = mCtor('a');
	var m2 = mCtor('b');
	return !!(
		deepCompare(obj.concat(mCtor()), obj) //should be monoid empty concatenated		
		&& deepCompare(obj.concat(m1).concat(m2), obj.concat(m1.concat(m2)))
	);
};