// Write a function called "filterOddElements".

// Given an array of numbers, "filterOddElements" 
// returns an array containing only the odd numbers of the given array.

// var output = filterOddElements([1, 2, 3, 4, 5]);
// console.log(output); // --> [1, 3, 5]


function filterOddElements(arr) {
	var result = [];
	arr.filter(function(num){
		if (num % 2 !== 0){
			result.push(num);
		}
	});
	return result;
}

console.log(filterOddElements([1, 2, 3, 4, 5]))