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
		var type = testValues[key][0];
		var value = testValues[key][1];
		var expected = testValues[key][2];

		if (!expected) {
			expected = value;
			value = type;
		}
		var result = functionToTest(value, type);
		var readableValue = prettyPrint(value)
		if (result === expected) {
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
	console.log(''); //empty line padding
}

module.exports = runTests;