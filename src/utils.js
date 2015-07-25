module.exports.id = function(x) {
	return x;
};

module.exports.getCtor = function(type, obj) {
	return 	typeof type === "function" ? type : obj.constructor;
};

module.exports.isFn = function(fn) {
	return typeof fn === "function";
};