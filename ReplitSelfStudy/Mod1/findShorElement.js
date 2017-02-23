// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear.
// * If the given array is empty, it should return an empty string.

// var output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // --> 'a'


function findShortestElement(arr) {
	var result = [];
	var count = 100;
	for (var i = 0; i < arr.length; i++){
		if (arr[i].length < count){
			count = arr[i].length;
			result = arr[i];
		}
	}
	return result;
}

console.log(findShortestElement(['a', 'two', 'three']))