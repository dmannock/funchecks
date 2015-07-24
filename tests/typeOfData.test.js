var runTests = require('./runTests');
var testData = require('./data');
var isFunctor = require('../checks/isFunctor');
var isMonad = require('../checks/isMonad');

var dataTypes = {
	FUNCTOR: 'functor',
	MONAD: 'monad'
}

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

//data type checks
var typeOfDataTestValues = [
	[undefined, 'undefined'],
	[null, 'object'],
	[10, 'number'],
	[12.345, 'number'],
	[NaN, 'number'],
	[Infinity, 'number'],
	[-Infinity, 'number'],
	['badger', 'string'],
	[{}, 'object'],
	[{another: function() {}}, 'object'],
	[{map: undefined}, 'object'],
	[{map: function() { }}, 'object'],
	//functional data type checks
	[[], dataTypes.FUNCTOR],
	[[1], dataTypes.FUNCTOR],
	[[undefined], dataTypes.FUNCTOR],
	[testData.SimpFunctor(10), dataTypes.FUNCTOR],
	[testData.SimpMonad(10), dataTypes.MONAD]
];

runTests(typeOfData, typeOfDataTestValues);
