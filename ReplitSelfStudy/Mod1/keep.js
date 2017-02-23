// Write a function called "keep".

// Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.

// Notes:
// * If no elements match, "keep" should return an empty array.

// var output = keep([1, 2, 3, 2, 1], 2) 
// console.log(output); --> [2, 2]

function keep(array, keeper) {
	var newArray = [];	
  	for (var i = 0; i < array.length; i++){
  		if (array[i] === keeper){
  			newArray.push(array[i]);
  	}
  }
  return newArray;
}

console.log(keep([1, 2, 3, 2, 1], 2))