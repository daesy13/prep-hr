// Write a function called "computeAverageOfNumbers".

// Given an array of numbers, "computeAverageOfNumbers" returns their average. 

// Notes:
// * If given an empty array, it should return 0.

var input = [1,2,3,4,5];
// var output = computeAverageOfNumbers(input);
// console.log(output); // --> 3

function computeAverageOfNumbers(nums) {
	var result = 0;
	var count = 0;
	for (var i = 0; i < nums.length; i++){
		count = count + nums[i];
		result = count / nums.length;
	}
	return result;
}

console.log(computeAverageOfNumbers(input))