var dataTypes = require('../const/dataTypes');
var isFunctor = require('../checks/isFunctor');
var isSemigroup = require('../checks/isSemigroup');
var isMonoid = require('../checks/isMonoid');
var isMonad = require('../checks/isMonad');

//TODO: manual addition atm: requires, mappings & dataType consts
//also, precedence? 
var dataTypeFunctionMappings = {};

dataTypeFunctionMappings[dataTypes.FUNCTOR] = isFunctor;
dataTypeFunctionMappings[dataTypes.MONOID] = isMonoid;
dataTypeFunctionMappings[dataTypes.SEMIGROUP] = isSemigroup;
dataTypeFunctionMappings[dataTypes.MONAD] = isMonad;

module.exports = function typeOfData(data, type) {
	for (var typeName in dataTypeFunctionMappings) {
		if (dataTypeFunctionMappings[typeName](data, type)) {
			return typeName;
		}
	}
	return typeof data;
};