var runTests = require('./runTests');
var testData = require('./data');
var isFunctor = require('../checks/isFunctor');

var expected = [
	[undefined, false],
	[null, false],
	[10, false],
	[12.345, false],
	[NaN, false],
	[Infinity, false],
	[-Infinity, false],
	['badger', false],
	[{}, false],
	[{another: function() {}}, false],
	[{map: undefined}, false],
	[{map: function() { }}, false],
	[[], true],
	[[1], true],
	[[undefined], true],
	[testData.SimpFunctor(10), true]
];

runTests(isFunctor, expected);