// Write a function called "findMaxLengthOfThreeWords".

// Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

// var output = findMaxLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 3

function findMaxLengthOfThreeWords(word1, word2, word3) {
  var result = 0;
  var newArray = [word1, word2, word3];
  for (var i = 0; i < newArray.length; i++){
  	if (newArray[i].length > result){
  		result = newArray[i].length;
  	}
  } 
  return result;
}

console.log(findMaxLengthOfThreeWords('a', 'be', 'see'))
