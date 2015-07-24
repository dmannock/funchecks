var SimpFunctor = function(x) {
	return {
		map: function(f) {
			return SimpFunctor(f(x));
		}
	};
}

function createMonad(chainName) {
	return function SimpMonad(x) {
		var obj = {
			of: function(y) {
				return SimpMonad(y);
			}
		};
		obj[chainName] = function(f) {
			return f(x);
		};
		return obj;
	}
}

module.exports = {
	SimpFunctor: SimpFunctor,
	SimpMonad: createMonad('chain'),
	createMonad: createMonad
}