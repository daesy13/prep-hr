// Write a function called "findSmallestNumberAmongMixedElements".

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" 
// returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4

function findSmallestNumberAmongMixedElements(arr) {
	var result = 0;
	var count = 100;
	var num;
	for (var i = 0; i < arr.length; i++){
		if (typeof (arr[i]) === "number"){
			num = arr[i];
			if (num < count){
				count = num;
				result = num;
			}
		}
	}
	return result;
}

console.log(findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']))