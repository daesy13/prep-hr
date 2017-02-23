// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" 
// returns the length of the shortest string in the given array.

// Notes:
// * It should return 0 if the array is empty.

// var output = getLengthOfShortestElement(['one', 'two', 'three']);
// console.log(output); // --> 3

function getLengthOfShortestElement(arr) {
	var elemLength = 0;
	var count = 100;
	for (var i = 0; i < arr.length; i++){
		if (arr[i].length < count){
			count = arr[i].length;
			elemLength = arr[i].length;
		}
	}
	return elemLength;
}

console.log(getLengthOfShortestElement(['one', 'two', 'three']))