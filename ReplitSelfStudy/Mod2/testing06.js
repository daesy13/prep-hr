// Write an "assertEqual" function from scratch, from memory.

// Please DO NOT simply PASTE in from before.

// If you have to go back and look at your previously-implemented code once, 
// fine, but come back here and write it from memory.

// Then use your assertion function to thoroughly test the code.

// Use categorical reasoning to consider all the useful cases.

// Debug the code under test, if necessary.


// Note: This is a simple implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  array.forEach(function(element) {
    doesEveryElementMatch = callbackFunction(element);
    console.log("doesEveryElementMatchb k7 nnb", doesEveryElementMatch)
  });
  return doesEveryElementMatch;
}

function assertEqual(actual, expected, testName) {
  
}

var array1 = [1,2,3,4,5];
var myFunction = function(n){
	return n < 5;
}

var array2 = [1,2,3,4,5];
var myFunction2 = function(n){
	return n > 5
} 


console.log(every(array1, myFunction))