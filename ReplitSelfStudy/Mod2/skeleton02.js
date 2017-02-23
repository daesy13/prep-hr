// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 

// Write and test a function that determines whether a string is an isogram. 

// Notes:
// * Assume your input is only letters.
// * Assume the empty string is an isogram. 
// * Ignore case.
// * Follow the pseudocode exactly!

function isIsogram(text) {
  // add each char to a set
  var myset = new Set(text)
  console.log(myset)
  console.log(myset.size-1)
  if (myset.size === text.length){
  	return true
  }
  else{
  	return false
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set 
}

console.log(isIsogram("chocolate"))
// var actual = isIsogram("chocolate")

// function assertEqual(actual, expected, testName){
// 	if (actual === expected){
// 		console.log("passed")
// 	}
// 	else{
// 		console.log("FAILED " + testName + " expected: " + expected + ", actual answer: " + actual)
// 	}
// }

