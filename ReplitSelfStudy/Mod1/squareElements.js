// Write a function called "squareElements".

// Given a array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

// var output = squareElements([1, 2, 3]);
// console.log(output); // --> [1, 4, 9]

function squareElements(arr) {
	var newArray = []
	
	for (var i = 0; i < arr.length; i++){
		newArray.push(arr[i]*arr[i]);
	}
	return newArray;
}

console.log(squareElements([1, 2, 3]))