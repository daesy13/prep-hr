// Write a function called "getAllWords".

// Given a sentence, "getAllWords" returns an array containing every word in the sentence. 

// Notes:
// * If given an empty string, it should return an empty array.

// var output = getAllWords('Radagast the Brown');
// console.log(output); // --> ['Radagast', 'the', 'Brown']

function getAllWords(str) {
	var result = [];
	if (str.length !== 0){
		result = str.split(" ");
	}
	return result;
}

console.log(getAllWords('Radagast the Brown'))