var deepCompare = require("../compare");

function isFunctor(obj) {
	function id(x) {
		return x;
	}
	function f(x) {
		return x + "1";
	}
	function g(y) {
		return y + "2";
	}
	var guardChecks = !!(obj && typeof obj.map === "function")

	if (!guardChecks) {
		return false;
	}

	return !!(
		deepCompare(obj.map(id), id(obj))		
		&& deepCompare(obj.map(f).map(g), obj.map(x => g(f(x)))) //naive check for first assertion - relies on type coercion
	);
}

module.exports = isFunctor;