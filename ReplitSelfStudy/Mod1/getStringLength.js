// Write a function called "getStringLength".

// Given a string, "getStringLength" returns the length of the given string.

// Notes:
// * Do NOT use any native 'length' methods.
// * You might consider using 'substring' or 'slice' as alternatives.

// var output = getStringLength('hello');
// console.log(output); // --> 5

function getStringLength(string) {
	count = 0;
	var test = string
	while(test !== ""){
		test = test.slice(0,-1)
		count++;
	}
	return count;
}

console.log(getStringLength('hello'))

