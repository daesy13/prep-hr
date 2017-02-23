// Write a function called "filterEvenElements".

// Given an array of numbers, "filterEvenElements" 
// returns an array containing only the even numbers of the given array.

// var output = filterEvenElements([2, 3, 4, 5, 6]);
// console.log(output); // --> [2, 4, 6]

function filterEvenElements(arr) {
	var result = [];
	arr.filter(function (num){
		if (num % 2 === 0){
			result.push(num);
		}
	});
	return result;
}

console.log(filterEvenElements([2, 3, 4, 5, 6]))