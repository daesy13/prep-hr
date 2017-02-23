// repl.it
//WU1. Write a function called generateZeroToTwenty that returns an array of integers from 0 to 20, inclusive

function generateZeroToTwenty(){
    var num = 0;
    var newArray = [];
    while (num <= 20){
        newArray.push(num)
        num = num + 1;
    }
    return newArray;
}

//console.log(generateZeroToTwenty())

function forGenerateToTwenty(){
	var newArray = [];
	for (var i=0; i<21; i++){
		newArray.push(i)
	}
	return newArray
}

//console.log(forGenerateToTwenty());

//WU2. Write a function called generateTwentyToZero that returns an array of integers from 20 to 0 in descending order

function generateTwentyToZero(){
	var num = 20;
	var newArray = [];
	while (num >= 0){
		newArray.push(num)
		num = num -1;
	}
	return newArray;
}

//console.log(generateTwentyToZero())

function forGeneretaToZero(){
	var newArray = [];
	for (var i=20; i>=0; i--){
		newArray.push(i)
	}
	return newArray
}

//console.log(forGeneretaToZero())

//WU3. Write a function called generateEvenNumbers that will return an array of even numbers between 0 and 20, inclusive

function generateEvenNumbers(){
	var array = [];
	var num = 0;
	while (num <= 20){
		array.push(num);
		num = num + 2;
	}
	return array;
}

//console.log(generateEvenNumbers())

function forGenerateEvenNumbers(){
	var array = [];
	for (var i = 0; i<=20; i++){
		if (i%2 === 0){
		array.push(i)
	}
	}
	return array;
}

//console.log(forGenerateEvenNumbers());

//WU4. Write a function called multiplyByNine that accepts an array of integers. It returns an array-of-arrays containing the original integers and each integer multiplied by 9.
// For example, given the input array [1,2,3], 
// it should return [[1,9],[2,18],[3,27]].


function multiplyByNine(array){
	var newArray = [];
	for (var i=0; i<array.length; i++){
		var byNine = array[i]*9;
		newArray.push([array[i],byNine])
	}
	return newArray
}

//console.log(multiplyByNine([1,2,3]));

//WU5. Write a function that adds 2 given arrays of numbers, of the same length.
// Example: sumArrays([1,2,3], [4,5,6]) ⇒ [5,7,9]

function addTwoArrays(array1, array2){
	var newArray = [];
	for (var i=0; i<array1.length; i++){
		var adding = array1[i]+array2[i];
		newArray.push(adding)
	}
	return newArray
}

//console.log(addTwoArrays([1,2,3], [4,5,6]))

//WU6. Write a function that finds the maximum value in a given array. Do not use Math.max

function maximumValue(array){
	var maximum = 0;
	for (var i=0; i<array.length; i++){
			if (array[i]>maximum){
				maximum = array[i]
			}
	}
	return maximum;
}

// console.log(maximumValue([5,6,7,8,9,15]))

//WU7. Write a function that averages a given array of numbers

function averages(array){
	var newArray = 0;
	for (var i = 0; i < array.length; i++) {
		newArray = newArray + array[i]	
	}
	return Math.floor(newArray/array.length)
}

//console.log(averages([5,6,7,8,9,15]))

//WU8. Write a function that adds and subtracts a given array of numbers in alternation and returns the result. For example, given [1,2,3,4,5], it should return -1, because 1+2-3+4-5=-1.

function alternation(numbers){
	var value = 0
	var value2 = 0
	var totalValue = 0
	for (var i = 1; i < numbers.length; i+=2) {
	  	value = value + numbers[i]
	  	
	  }  
	for (var i = 2; i< numbers.length; i+=2 ){
		value2 = value2 + numbers[i]
	}
	
	return totalValue = numbers[0] + value - value2;

}

// console.log(alternation([1,2,3,4,5]))

//WU9. Write a function that returns a horizontal line of asterisks of a specified length.
//Don't just write this out to the log -- actually return the string.
 
function asterisks(num){
	var results = []
	for (var i = 1; i <= num; i++) {
		results = results + "*"
	}
	return results
}

//console.log(asterisks(3))

//WU10. Write a function called drawTriangle that returns the following string. Feel free to debug-print using console.log, but make sure that the function actually returns a string. 

//Note that in a string, the character for a carriage return (the equivalent of hitting the “Enter” or “Return” key) is “\n”.

// #
// ##
// ###
// ####
// #####
// ######
// #######

function numberOfHashtags(num){
	var results = '';
	for (var i=0; i<num ; i++){
		results += "#";
	}
	return results
}

//console.log(numberOfHashtags(3))

function drawATriangle(num){
	var results = '';
	for (var i = 1; i <= num; i++) {
		results += numberOfHashtags(i) + '\n'
	}
	return results
}

//console.log(drawATriangle(3))

//WU11. Given this object: 

var animals = { 
mammals:['bears','lions','whales','otters'], 
birds:['penguins','ducks','swans','chickens'], 
cats:['panther','mountain lion','leopard','snow tiger'], 
insects: ['flea','mosquito','beetle','fly','grasshopper']
}

// Create a function called getFirstAnimals that returns an array of all the first animals in the object. 
// Example: [‘bears’,’penguins’,panther’,’flea’]

// Also create a function called getLastAnimals that returns an array of all the last animals in the object. 
// Example: [‘otters’,’chickens’...etc]
var animals = { 
mammals:['bears','lions','whales','otters'], 
birds:['penguins','ducks','swans','chickens'], 
cats:['panther','mountain lion','leopard','snow tiger'], 
insects: ['flea','mosquito','beetle','fly','grasshopper']
};

function getFirstAnimals(element){
	var results = []
	for(var key in element){
		results.push(element[key][0])
	}
	return results
}

//console.log(getFirstAnimals(animals))

function getLastAnimals(element){
	var results = [];
	for (var key in element){
		results.push(element[key][element[key].length-1])
	}
	return results;
}

//console.log(getLastAnimals(animals))

//WU12. Write a function called generateFizzBuzz that returns an object with all the numbers from 1 to 100 as keys and values, with two exceptions. For numbers divisible by 3, the value should be "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), the value should be "Buzz" instead. Example: 
// {0:0,1:1,2:2,3:’Fizz’,4:4,5:’Buzz’...}
// When you have that working, modify your function to show "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still show "Fizz" or "Buzz"for numbers divisible by only one of those). 
// Example: 
// {...15: ‘FizzBuzz’...} 

 function generateFizzBuzz(){
 	var obj={};
 	for (var i = 1; i <= 100; i++) {
 		 
 		 
 	if(i%3===0 && i%5===0){
 		obj[i] = "FizzBuzz";
 	}
 	else if (i%3 === 0){
 		obj[i] = "Fizz";
 	}
 	else if (i%5 === 0){
 		obj[i] = "Buzz";
 	}
 	else {
 		obj[i]= i;
 	}
 }
 
 return obj
}
//console.log(generateFizzBuzz())

// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
// 1p piece
// 2p piece
// 5p piece
// 10p piece
// 20p piece
// 50p piece
// £1 (100p)
// £2 (200p)
// Write a function called organizeCurrencies that return an array of objects where the first object contains all the pieces and the second contains all the pounds. The value show be the number and the key should be the name of the currency.
// Sample input: 
// ['1p','2p','5p', '5p','10p','20p','50p','£1', '20p','50p','£1','£2']
// Output:
// [ 
//   {10p: 1, 1p: 1, 20p: 2, 2p: 1, 50p: 2, 5p: 2}, 
//   {£1: 2, £2: 1}
// ]










