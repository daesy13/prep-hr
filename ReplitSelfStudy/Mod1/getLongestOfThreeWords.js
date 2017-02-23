// Write a function called "getLongestOfThreeWords".

// Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

// Notes:
// * If there is a tie, it should return the first word in the tie.

// var output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output); // --> 'these'

function getLongestOfThreeWords(word1, word2, word3) {
  var result = 0;
  var newArray = [word1, word2, word3]
  var longest;
  for (var i=0; i < newArray.length;  i++){
  	if ( newArray[i].length > result){
  		result = newArray[i].length;
  		longest = newArray[i];
  	}
  } 
  return longest;
}

console.log(getLongestOfThreeWords('these', 'three', 'words'))