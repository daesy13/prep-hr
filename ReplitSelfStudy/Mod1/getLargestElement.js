// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:
// * It should return 0 if the array is empty.

// var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;

function getLargestElement(arr) {
	var result = 0;
	var count = -100;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] > count){
			count =  arr[i];
			result = arr[i];
		}
	}
	return result;
}

console.log(getLargestElement([5, 2, 8, 3]))