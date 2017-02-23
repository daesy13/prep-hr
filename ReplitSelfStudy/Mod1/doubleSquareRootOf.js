// Write a function called "doubleSquareRootOf".

// Given a number, "doubleSquareRootOf" returns double its square root.

// var output = doubleSquareRootOf(121);
// console.log(output); // --> 22

function doubleSquareRootOf(num) {
	var firstSR = Math.pow(num, 1/2);
	return firstSR * 2;
}

console.log(doubleSquareRootOf(121))