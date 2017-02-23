// Write a function called "findSmallestElement".

// Given an array of numbers, "findSmallestElement" 
// returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.

// var output = findSmallestElement([4, 1, 9, 10]);
// console.log(output); // --> 1

function findSmallestElement(arr) {
	var result = 0;
	var count = 1000;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] < count){
			count = arr[i];
			result = arr[i];
		}
	}
	return result;
}

console.log(findSmallestElement([4, 1, 9, 10]))