// Write a function called "findShortestOfThreeWords".

// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

// Notes:
// * If there are ties, it should return the first word in the parameters list.

// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'

function findShortestOfThreeWords(word1, word2, word3){
  var result = 100;
  var shortest;
  var newArray = [word1, word2, word3];
  for (var i = 0; i < newArray.length; i++){
  	if (newArray[i].length < result){
  		result = newArray[i].length;
  		shortest = newArray[i]
  } 
}
return shortest
}
console.log(findShortestOfThreeWords('a', 'two', 'three'))