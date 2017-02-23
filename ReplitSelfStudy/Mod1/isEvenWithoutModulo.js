// Write a function called "isEvenWithoutModulo".

// Given a number, "isEvenWithoutModulo" returns whether it is even. 

// Notes:
// * It does so without using the modulo operator (%). 
// * It should work for negative numbers and zero.

// var output = isEvenWithoutModulo(8);
// console.log(output); // --> true

function isEvenWithoutModulo(num) {
	var mod;
	var result = false;
	if (num >= 0){
		mod = num - 2 * Math.floor(num/2);
	}
	else {
		mod = num + 2 * Math.floor(-num/2);
	}
	if (mod === 0){
		result = true;
	}
	return result;
}

console.log(isEvenWithoutModulo(-15))