// Write a function called "computeSquareRoot".

// Given a number, "computeSquareRoot" returns its square root.

// var output = computeSquareRoot(9);
// console.log(output); // --> 3

function computeSquareRoot(num) {
  return Math.pow(num, 1/2);
}

console.log(computeSquareRoot(25))