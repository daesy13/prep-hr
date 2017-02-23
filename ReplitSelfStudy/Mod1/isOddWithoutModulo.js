// Write a function called "isOddWithoutModulo".

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

// Note:
// * It does so without using the modulo operator (%). 
// * It should work for negative numbers and zero.

// var output = isOddWithoutModulo(17);
// console.log(output); // --> true

function isOddWithoutModulo(num) {
  	var mod;
	var result = false;
	if (num >= 0){
		mod = num - 2 * Math.floor(num/2);
	}
	else {
		mod = num + 2 * Math.floor(-num/2);
	}
	if (mod === -1 || mod === 1){
		result = true;
	}
	return result;
}