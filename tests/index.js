var isFunctor = require('../checks/isFunctor');
var isMonad = require('../checks/isMonad');

//TODO: extract data types
var SimpFunctor = function(x) {
	return {
		map: function(f) {
			return SimpFunctor(f(x));
		}
	};
}

var SimpMonad = function(x) {
	return {
		chain: function(f) {
			return f(x);
		},
		of: function(y) {
			return SimpMonad(y);
		}
	};
}

function prettyPrint(value) {
	if (value && value.constructor === Array) {
		return '[' + (value && value.toString()) + ']';
	}
	if (value instanceof Function) {
		return value.toString();
	}
	if (!(value instanceof Object)) {
		return value && value.toString();
	}
	var output = [];
	for (var prop in value) {
		output.push(prop + ': ' + prettyPrint(value[prop]));
	}
	return '{' + output.join(', ') + '}';
}

//INITIAL ASSERTIONS
//essential early stage of tests before lib used
function runTests(functionToTest, testValues) {
	console.log(functionToTest.name + ' Tests:');
	for (var key in testValues) {
		var value = testValues[key][0];
		var expected = testValues[key][1];
		var result = functionToTest(value);
		var isPass = result === expected;
		var readableValue = prettyPrint(value)
		if (isPass) {
			console.log('PASS:' 
				+ ' Result ' + result 
				+ ' with object ' + readableValue
			);
		} else {
			throw new Error('FAIL: ' 
				+ functionToTest.name
				+ ' result was ' + result 
				+ ' expected it to be ' + expected 
				+ ' with object ' + readableValue
			);
		}
	}
}

//functor
var functorTestValues = [
	[undefined, false],
	[null, false],
	[10, false],
	[12.345, false],
	[NaN, false],
	[Infinity, false],
	[-Infinity, false],
	['badger', false],
	[{}, false], //check
	[{another: function() {}}, false],
	[{map: undefined}, false],
	[{map: function() { }}, false],
	[[], true],
	[[1], true],
	[[undefined], true],
	[SimpFunctor(10), true]
];

runTests(isFunctor, functorTestValues);

//monad
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
	[SimpMonad(10), true]
];

runTests(isMonad, monadTestValues);