// Write a function called "getLongestElement".

// Given an array, "getLongestElement" returns the longest string in the given array.

// Notes:
// * If there are ties, it returns the first element to appear.
// * If the array is empty, tt should return an empty string.

// var output = getLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 'three'

function getLongestElement(arr) {
	var results = "";
	var count = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i].length > count){
			count = arr[i].length;
			results = arr[i];
		}
	}
	return results;
}

console.log(getLongestElement(['one', 'two', 'three']))