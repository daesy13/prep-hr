// Write a function called "getLengthOfTwoWords".

// Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

// var output = getLengthOfTwoWords('some', 'words');
// console.log(output); // --> 9


function getLengthOfTwoWords(word1, word2) {
  var l1 = word1.length;
  var l2 = word2.length;
  return l1 + l2;
}

console.log(getLengthOfTwoWords("mama", "papa"))
