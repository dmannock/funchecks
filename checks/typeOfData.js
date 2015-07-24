var dataTypes = require('../const/dataTypes');
var isFunctor = require('../checks/isFunctor');
var isSemigroup = require('../checks/isSemigroup');
var isMonoid = require('../checks/isMonoid');
var isMonad = require('../checks/isMonad');

//TODO: manual requires, mappings & dataType consts atm
//precedence? 
var dataTypeFunctionMappings = {};
dataTypeFunctionMappings[dataTypes.FUNCTOR] = isFunctor;
dataTypeFunctionMappings[dataTypes.MONOID] = isMonoid;
dataTypeFunctionMappings[dataTypes.SEMIGROUP] = isSemigroup;
dataTypeFunctionMappings[dataTypes.MONAD] = isMonad;

//data, optional type?
function typeOfData(type, data) {
	for (var typeName in dataTypeFunctionMappings) {
		if (dataTypeFunctionMappings[typeName](type, data)) {
			return typeName;
		}
	}
	return typeof data;
}

module.exports = typeOfData;