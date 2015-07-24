var dataTypes = require('../const/dataTypes');
var isFunctor = require('../checks/isFunctor');
var isSemigroup = require('../checks/isSemigroup');
var isMonad = require('../checks/isMonad');

//TODO: manual requires, mappings & dataType consts atm
var dataTypeFunctionMappings = {};
dataTypeFunctionMappings[dataTypes.FUNCTOR] = isFunctor;
dataTypeFunctionMappings[dataTypes.SEMIGROUP] = isSemigroup;
dataTypeFunctionMappings[dataTypes.MONAD] = isMonad;

function typeOfData(data) {
	for (var typeName in dataTypeFunctionMappings) {
		if (dataTypeFunctionMappings[typeName](data)) {
			return typeName;
		}
	}
	return typeof data;
}

module.exports = typeOfData;