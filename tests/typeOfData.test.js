var runTests = require('./runTests');
var testData = require('./data');
var dataTypes = require('../const/dataTypes');
var typeOfData = require('../checks/typeOfData');

//TODO: precedence of data types returned?

var expected = [
	[undefined, 'undefined'],
	[null, 'object'],
	[10, 'number'],
	[12.345, 'number'],
	[NaN, 'number'],
	[Infinity, 'number'],
	[-Infinity, 'number'],
	['badger', 'semigroup'],
	[{}, 'object'],
	[{another: function() {}}, 'object'],
	[{map: undefined}, 'object'],
	[{map: function() { }}, 'object'],
	[[], dataTypes.FUNCTOR],
	[[1], dataTypes.FUNCTOR],
	[[undefined], dataTypes.FUNCTOR],
	[testData.SimpFunctor(10), dataTypes.FUNCTOR],
	[testData.SimpMonad(10), dataTypes.MONAD]
];

runTests(typeOfData, expected);
