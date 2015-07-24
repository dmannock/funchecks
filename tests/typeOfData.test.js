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
	['badger', dataTypes.SEMIGROUP],
	[{}, 'object'],
	[{another: function() {}}, 'object'],
	[{map: undefined}, 'object'],
	[{map: function() { }}, 'object'],
	[[], dataTypes.FUNCTOR],
	[[1], dataTypes.FUNCTOR],
	[[undefined], dataTypes.FUNCTOR],
	[testData.SimpFunctor(10), dataTypes.FUNCTOR],
	[testData.SimpMonad(22), dataTypes.MONAD],
	//some data types may need type hints
	[testData.SimpMonoid, testData.SimpMonoid(33), dataTypes.MONOID],
	//variants with explicit type hint
	[String, 'badger', dataTypes.SEMIGROUP],
	[[], [44], dataTypes.FUNCTOR]
	//TODO: type not implemented in other checks e.g. isFunctor
	//[testData.SimpFunctor, testData.SimpFunctor(55), dataTypes.FUNCTOR],
	//[testData.SimpMonad, testData.SimpMonad(22), dataTypes.MONAD]
];

runTests(typeOfData, expected);
