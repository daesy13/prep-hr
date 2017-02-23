// Use the skeleton provided to write a working implementation.

// Notes: 
// * Do not leave any functions in the skeleton unused.
// * Test that your implementation works.

// Specifically -- your code reviewer should be able to just 
// press the [Run] button and see convincing evidence that your code works, because of:
// a) the categorical reasoning displayed by your tests
// b) the line(s) of output in the console log saying "passed" coming from those tests

function average(numbers) {
  return sum(numbers)/numbers.length;
}

console.log(average([1,2,3,4,5]))

function sum(numbers) {
	var total = 0;
	for(var i = 0; i < numbers.length; i++){
		total = total + numbers[i];
	}
	return total;
}

console.log(sum([1,2,3,4,5]))

var av = average([1,2,3,4,5]);

function assertEqual(actual, expected, testName){
	if (actual === expected){
		console.log("passed");
	}
	else{
		console.log("FAILED " + testName + " expected: " + expected + ", actual answer: " + actual);
	}
}

console.log(assertEqual(av, 3, "average"))


// function sum(numbers){
// 	numbers.reduce(function(a, b){
// 		return a + b;
// 	}, 0);
// }

// console.log(sum([1,2,3,4,5]))