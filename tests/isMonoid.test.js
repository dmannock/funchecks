var runTests = require('./runTests');
var testData = require('./data');
var isMonoid = require('../checks/isMonoid');

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
	[{concat: undefined}, false],
	[{concat: function() { }}, false],
	[[], false],
	[[1], false],
	[[undefined], false],
	[testData.SimpMonoid, testData.SimpMonoid(10), true]
];

runTests(isMonoid, expected);