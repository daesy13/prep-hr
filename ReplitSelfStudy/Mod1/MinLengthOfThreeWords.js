// Write a function called "findMinLengthOfThreeWords".

// Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

// var output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1

function findMinLengthOfThreeWords(word1, word2, word3) {
  var result = 100;
  var newArray = [word1, word2, word3];
  for (var i = 0; i < newArray.length; i++) {
  	if (newArray[i].length < result){
  		result = newArray[i].length
  	}
  }
  return result;
}

console.log(findMinLengthOfThreeWords('a', 'be', 'see'))