// Write a function called "areBothOdd".

// Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

// var output = areBothOdd(1, 3);
// console.log(output); // --> true

function areBothOdd(num1, num2) {
  if (num1 % 2 !== 0 && num2 % 2 !== 0){
  	return true;
  }
  else
  	return false;
}

console.log(areBothOdd(1, 3))