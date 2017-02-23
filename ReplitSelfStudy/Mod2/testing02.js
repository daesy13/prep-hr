// Write an "assertArraysEqual" function from scratch.

// Assume that the arrays in question contain only scalar values 
// (i.e., simple values like strings or numbers).

// Do not use JSON.stringify(), Array.join(), or any other 
// "convert the array to a string so I can compare two strings" 
// `type of technique to implement this.

// Examples

// SUCCESS CASE
// var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
// var actual = 'broken'.split('');
// assertArraysEqual(actual, expected, 'splits string into array of characters');
// // console output:
// // passed

// FAILURE CASE
// var expected = [1, 1, 2, 3, 5, 8, 13];
// var actual = [2,3,5,6,8,13,21,34];
// var actual = generateFirstNFibonaccis(7);
// assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"

function assertArraysEqual(actual, expected, testName) {
	var result;
	if (actual.length === expected.length){
		for (var i = 0; i < actual.length; i++){
			if (actual[i] === expected[i]){
				result = "passed";
			}
			else{
				result = "FAILED " + testName + " expected: " + expected + ", actual answer: " + actual;
			}
		}
	}
	else{
		console.log("FAILED " + testName + " expected: " + expected + ", actual answer: " + actual);
	}
	console.log(result);
}

console.log(assertArraysEqual(actual, expected, 'splits string into array of characters'))

// function generateFirstNFibonaccis(n){
// 	var newArray = []
// 	var a = 0; 
// 	var b = 1; 
// 	var result = b;
// 	for (var i = 1; i <= n; i++){
// 		result = a + b;
// 		a = b;
// 		b = result;
// 		newArray.push(a)
// 	}
// 	return newArray
// }

// console.log(generateFirstNFibonaccis(7))

