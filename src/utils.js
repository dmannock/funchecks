module.exports.id = function id(x) {
	return x;
};

module.exports.getConstructor = function getConstructor(type, obj) {
	return 	typeof type === "function" ? type : obj.constructor;
};

module.exports.isFunc = function isFunc(fn) {
	return typeof fn === "function";
};