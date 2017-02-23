// Write a function called "computePower".

// Given a number and an exponent, "computePower" returns the given number, raised to the given exponent. 

// var output = computePower(2, 3);
// console.log(output); // --> 8

function computePower(num, exponent) {
  var result = 1;
  while (exponent > 0){
  	result = result * num;
  	exponent = exponent-1;
  }
  return result;
}

console.log(computePower(2, 3))