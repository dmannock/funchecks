var isFunctor = require('./checks/isFunctor');
var isMonad = require('./checks/isMonad');

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

//INITIAL ASSERTIONS
//essential early stage of tests before lib used

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
	[{}, false],
	[{another: function() {}}, false],
	[{map: undefined}, false],
	[{map: function() { }}, false],
	[[], true],
	[[1], true],
	[[undefined], true],
	[SimpFunctor(10), true]
];

var functionToTest = isFunctor;
var functionBeingTested = functionToTest.name;
console.log(functionBeingTested + ' Tests:');
for (var key in functorTestValues) {
	var value = functorTestValues[key][0];
	var expected = functorTestValues[key][1];
	var result = functionToTest(value);
	var isPass = result === expected;
	var readableValue = (typeof value === 'object' ? JSON.stringify(value) : (value && value.toString()));
	//TODO: better pretty print
	//stringify doesn't preserve undefined props
	if (isPass) {
		console.log('PASS:' 
			+ ' Result ' + result 
			+ ' with object ' + readableValue
		);
	} else {
		console.log('FAIL:' 
			+ ' Result ' + result 
			+ ' should equal expected ' + expected 
			+ ' with object ' + readableValue
		);
	}
}

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

var functionToTest = isMonad;
var functionBeingTested = functionToTest.name;
console.log(functionBeingTested + ' Tests:');
for (var key in monadTestValues) {
	var value = monadTestValues[key][0];
	var expected = monadTestValues[key][1];
	var result = functionToTest(value);
	var isPass = result === expected;
	var readableValue = (typeof value === 'object' ? JSON.stringify(value) : (value && value.toString()));
	//TODO: better pretty print
	//stringify doesn't preserve undefined props
	if (isPass) {
		console.log('PASS:' 
			+ ' Result ' + result 
			+ ' with object ' + readableValue
		);
	} else {
		console.log('FAIL:' 
			+ ' Result ' + result 
			+ ' should equal expected ' + expected 
			+ ' with object ' + readableValue
		);
	}
}