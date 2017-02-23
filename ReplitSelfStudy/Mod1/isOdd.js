// Write a function called "isOdd".

// Given a number, "isOdd" returns whether the given number is odd.

// var output = isOdd(9);
// console.log(output); // --> true

function isOdd(num) {
  if (num % 2 !== 0){
  	return true;
  }
  else 
  	return false
}

console.log(isOdd(9))