// Write a function called "or".

// Given 2 boolean expressions, "or" returns true or false, corresponding to the || operator.

// Notes:
// * Do not use the || operator.
// * Use ! and && operators instead.

// var output = or(true, false);
// console.log(output); // --> true;

function or(d1, d2) {
  	return !(!d1 && !d2)
}
  

console.log(or(true, false))
