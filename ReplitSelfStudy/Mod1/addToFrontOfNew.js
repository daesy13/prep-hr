// Write a function called "addToFrontOfNew".

// Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

// Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
// var output = addToFrontOfNew(input, 3);
// console.log(output); // --> [3, 1, 2];
// console.log(input); --> [1, 2]

function addToFrontOfNew(arr, element) {
	var newArray = [element]
	var result = newArray.concat(arr);
	return result;
}

console.log(addToFrontOfNew(input, 3))