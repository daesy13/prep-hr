// Write a function called "isOddLength".

// Given a word, "isOddLength" returns whether the length of the given word is odd.

// var output = isOddLength('special');
// console.log(output); // --> true

function isOddLength(word) {
  if (word.length % 2 !== 0){
  	return true;
  }
  else
  	return false;
}

console.log(isOddLength('special'));
