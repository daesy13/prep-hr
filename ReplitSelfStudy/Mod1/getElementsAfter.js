// Write a function called "getElementsAfter".

// Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

// var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
// console.log(output); // --> ['d', 'e']

function getElementsAfter(array, n) {
	var newArray = array.splice(n+1,array.length);
	return newArray;
}

console.log(getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2))