var SimpFunctor = function(x) {
	return {
		map: function(f) {
			return SimpFunctor(f(x));
		}
	};
}

var SimpMonad = function(x) {
	return {
		chain: function(f) {
			return f(x);
		},
		of: function(y) {
			return SimpMonad(y);
		}
	};
}

module.exports = {
	SimpFunctor: SimpFunctor,
	SimpMonad: SimpMonad
}