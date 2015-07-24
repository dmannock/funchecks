function SimpFunctor(x) {
	return {
		map: function(f) {
			return SimpFunctor(f(x));
		}
	};
}

function SimpSemigroup(x) {
	return {
		concat: function(y) {
			return SimpSemigroup(x + y);
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
	SimpSemigroup: SimpSemigroup,
	SimpMonad: createMonad('chain'),
	createMonad: createMonad
}