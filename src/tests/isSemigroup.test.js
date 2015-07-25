var runTests = require('./runTests');
var testData = require('./data');
var isSemigroup = require('../checks/isSemigroup');

//type?, obj, expected
var expected = [
	[undefined, false],
	[null, false],
	[10, false],
	[12.345, false],
	[NaN, false],
	[Infinity, false],
	[-Infinity, false],
	['badger', true],
	[{}, false],
	[{another: function() {}}, false],
	[{concat: undefined}, false],
	[{concat: function() { }}, false],
	[[], true],
	[[1], true],
	[[undefined], true],
	[testData.SimpSemigroup, testData.SimpSemigroup(10), true]
];

runTests(isSemigroup, expected);