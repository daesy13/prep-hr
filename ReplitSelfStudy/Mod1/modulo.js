// Write a function called "modulo".

// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

// Notes:
// * Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// * 0 % ANYNUMBER = 0.
// * ANYNUMBER % 0 = NaN.
// * If either operand is NaN, then the result is NaN.
// * Modulo always returns the sign of the first number.

// var output = modulo(25, 4);
// console.log(output); // --> 1

function modulo(num1, num2) {
	var q; // quotient
	var p; // product
	var a; // answer

	if (num1 === 0){
		a = 0;
	}
	else if (num2 === 0){
		a = NaN;
	}
	else if (isNaN(num1) || isNaN(num2)){
		a = NaN
	}
	
	q = Math.floor(num1 / num2)
	console.log("quotient: ", q)
	p = q * num2
	console.log("product: ", p)
	a = num1 - p
	console.log("answer: ", a)
	return a;
}

// else if (num1 < 0 && num2 < 0) {
//   num1 = -num1; 
//   num2 = -num2; 
//   var quotient = Math.floor(num1/num2); 
//   var product = num2 * quotient; 
//   var modulo = num1 - product; 
//   return modulo; 
//   }

console.log(modulo(25, 4))