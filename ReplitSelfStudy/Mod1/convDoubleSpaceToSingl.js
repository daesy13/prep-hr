// Write a function called "convertDoubleSpaceToSingle".

// Given a string, "convertDoubleSpaceToSingle" returns 
// the passed in string, with all the double spaces converted to single spaces.

// var output = convertDoubleSpaceToSingle("string  with  double  spaces");
// console.log(output); // --> "string with double spaces"

// Notes:
// * In order to do this problem, you should be familiar with "String.split", and "Array.join".

function convertDoubleSpaceToSingle(str) {
  var newArray = str.split(" ");
  var newArray2 = [];
  for (var i = 0; i < newArray.length; i++){
  	if (newArray[i] !== ""){
  		newArray2.push(newArray[i]);
  	}
  }
  return newArray2.join(" ");
}

console.log(convertDoubleSpaceToSingle("string  with  double  spaces"))