// Write a function called "computeProductOfAllElements".

// Given an array of numbers, "computeProductOfAllElements" 
// returns the products of all the elements in the given array.

// Notes:
// * If given array is empty, it should return 0.

// var output = computeProductOfAllElements([2, 5, 6]);
// console.log(output); // --> 60


function computeProductOfAllElements(arr) {
	var result = 0;
	var start = 1;
	for (var i = 0; i < arr.length; i++){
		start = start * arr[i];
		result = start;
	}
	return result;
}

console.log(computeProductOfAllElements([2, 5, 6]))