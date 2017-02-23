// Write a function called "getLengthOfLongestElement".

// Given an array, "getLengthOfLongestElement" 
// returns the length of the longest string in the given array.

// Notes:
// * It should return 0 if the array is empty.

// var output = getLengthOfLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 5

function getLengthOfLongestElement(arr) {
	var elemLength = 0;
	var count = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i].length > count){
			count = arr[i].length;
			elemLength = arr[i].length;
		}
	}
	return elemLength;
}

console.log(getLengthOfLongestElement(['one', 'two', 'three']))