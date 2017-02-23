// Write a function called "isLessThan".

// Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

// var output = isLessThan(9, 4);
// console.log(output); // --> true

function isLessThan(num1, num2) {
	if (num2 < num1){
		return true;
	}
	else 
		return false;
}

console.log(isLessThan(9, 4))