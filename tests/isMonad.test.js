var runTests = require('./runTests');
var testData = require('./data');
var isMonad = require('../checks/isMonad');

var monadTestValues = [
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
	[{of: undefined}, false],
	[{of: function() { }}, false],
	[{chain: undefined}, false],
	[{chain: function() { }}, false],
	[[], false],
	[[1], false],
	[[undefined], false],
	[testData.SimpMonad(10), true]
];

runTests(isMonad, monadTestValues);