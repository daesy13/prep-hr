// Write a function called "computeAverageLengthOfWords".

// Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

// var output = computeAverageLengthOfWords('code', 'programs');
// console.log(output); // --> 6

function computeAverageLengthOfWords(word1, word2) {
  var total = word1.length + word2.length;
  return total/2;
}

console.log(computeAverageLengthOfWords('code', 'programs'))