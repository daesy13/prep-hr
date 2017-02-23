// Write a function called "countAllCharacters".

// Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

// Notes:
// * If given an empty string, countAllCharacters should return an empty object.

// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}

function countAllCharacters(str) {
	var newObj = {};
  var newArray = str.split("")
  for (var i = 0; i < newArray.length; i++){
    var char = str.charAt(i);
    console.log("char: ", char)
    if(newObj[char]) {
     newObj[char]++  
    }
    else{ 
     newObj[char] = 1 
    }
  }
  return newObj;
}

console.log(countAllCharacters("banana"))