// Write a function called "filterOddLengthWords".

// Given an array of string, "filterOddLengthWords" 
// returns an array containing only the elements of the given array whose lengths are odd numbers.

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']

function filterOddLengthWords(words) {
	var result = [];
	words.filter(function(odd){
		if (odd.length % 2 !== 0){
			result.push(odd);
		}
	});
	return result;
}

console.log(filterOddLengthWords(['there', 'it', 'is', 'now']))