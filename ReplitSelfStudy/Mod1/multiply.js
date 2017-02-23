// Write a function called "multiply".

// Given 2 numbers, "multiply" returns their product.

// Notes:
// * It should not use the multiply operator (*).\

// var output = multiply(4, 7);
// console.log(output); // --> 28

function multiply(num1, num2) {
	var result = 0;
	for (var i = 0; i < num2; i++){
		result += num1;
	}
	if (num2 < 0){
		for (var j = 0; j < num1; j++){
		result += num2;
		}
	}
	return result;
}

console.log(multiply(0, 4))