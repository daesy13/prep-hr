// Write a function called "isEqualTo".

// Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.

// var output = isEqualTo(11, 10);
// console.log(output); // --> false

function isEqualTo(num1, num2) {
  if (num2 === num1){
  	return true;
  }
  else
  	return false;
}

console.log(isEqualTo(11, 10))