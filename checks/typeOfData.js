var dataTypes = require('../const/dataTypes');
var isFunctor = require('../checks/isFunctor');
var isMonad = require('../checks/isMonad');

var dataTypeFunctionMappings = {};
dataTypeFunctionMappings[dataTypes.FUNCTOR] = isFunctor;
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