// Write an "assertObjectsEqual" function from scratch.

// Assume that the objects in question contain only scalar values 
// (i.e., simple values like strings or numbers).

// It is OK to use JSON.stringify().

// Note: The examples below represent different use cases for the same test. 
// In practice, you should never have multiple tests with the same name.

// Examples

// SUCCESS CASE

// var expected = {foo: 5, bar: 6};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, 'detects that two objects are equal');
// // console output:
// // passed

// FAILURE CASE

var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6};
// assertObjectsEqual(actual, expected, 'detects that two objects are equal');
// // console output:
// // FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}


function assertObjectsEqual(actual, expected, testName) {
	var a = JSON.stringify(actual);
	var b = JSON.stringify(expected);
	if (a === b){
		console.log('passed');
	}
	else{
		console.log('FAILED ' + testName + " answer is: " + a + " should be: " + b);
	}
}

console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'))

