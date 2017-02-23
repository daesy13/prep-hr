// Write an "assertEqual" function from scratch, from memory.

// Please DO NOT simply PASTE in from before.

// If you have to go back and look at your previously-implemented code once, 
// fine, but come back here and write it from memory.

// Then use your assertion function in a series of test cases to thoroughly test the code.

// Use categorical reasoning to consider all the useful cases.

// Debug the code under test, if necessary.



function square(n) {
	var squaredN = n * n;
  	return squaredN;
}

function assertEqual(actual, expected, testName) {
	if (actual === expected){
		console.log("passed");
	}
	else{
		console.log("FAILED " + testName + " result is: " + actual + " it shuld be: " + expected);
	}
}

//console.log(assertEqual(square(2), 4, "square of a number"))
// console.log(assertEqual(square(3), 27, "cube of a number"))
//console.log(square(2))