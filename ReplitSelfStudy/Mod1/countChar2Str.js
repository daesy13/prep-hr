// Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" 
// returns the number of occurences of a given character in the given string.

// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3

function countCharacter(str, char) {
	var count = 0;
	var newArray = str.split('');
	for (var i = 0; i < newArray.length; i++){
		if (newArray[i] === char){
			count++;
		}
	}
	return count;
}

console.log(countCharacter('I am a hacker', 'a'))