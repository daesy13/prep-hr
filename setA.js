//1. collectKeys takes an object and returns an array filled with all of they keys inside of the collection.
//var obj = {course: 'Reactor Prep', best: true};
// collectKeys(obj) // ['course', 'best'];

function collectKeys(element){
	var newArray = [];
	for (var key in element){
		newArray.push(key)
	}
	return newArray
}

//console.log(collectKeys(obj))


//2.isPalindrome: A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. Return true if the given string is a palindrome. Otherwise, return false.
// ex.  palindrome("race CAR"); // true
// Note: Assume user can only enter alphanumeric characters and white spaces (no special characters).

// create a function palindrome that takes a string
// create another function that takes an string and splice, join and toLowerCase.
// create a new array that stores my string into lowercase
// compare the two new strings with a boolean

var example = "taco cat";

function preReverse(string){
	return string.split(" ").join("")
}
//console.log(preReverse(example))


function isPalindrome(string){
	var reverse = preReverse(string).split('').reverse().join('').toLowerCase();
	console.log("reverse: ",reverse)
	var originalString = preReverse(string).split('').join('').toLowerCase()
	console.log("originalString: ",originalString)
	if (originalString === reverse){
		return true
	}
	else {
	return false
    }
}

console.log(isPalindrome(example))




//3. averageAge takes an array of people (array of objects) and returns the average age of the group of people.
// ex.   var people = [
// {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
// {name: {first: "Ben", last: "Bitdiddle"}, age: 34}
// ]
// console.log("averageAge(people): ", averageAge(people)); // 30


//4.Truncate a string (str- first argument) if it is longer than the given maximum string length (num- second argument). Return the truncated string with a "..." ending. Note that the three dots at the end add to the string length. If the num is less than or equal to 3, then the length of the three dots is not added to the string length.
// ex. truncate("A-tisket a-tasket A green and yellow basket", 11); //"A-tisket..."


//5.Create a function named last that takes in an array as the first parameter and returns the last element in the array. Your function also takes in a number as an optional second parameter. If a number is passed in as the second argument, you must return that number of the last elements in the array.
//var nums = [1, 2, 3, 4, 5];

// var getLastNum = last(nums);

// console.log("Last element of the nums array: ", getLastNum); // 5

// var getLastTwoNums = last(nums, 2);

// console.log("Last two elements of the nums array: ", getLastTwoNums); // [4, 5]


//6.Create a test function called "assert". With it we are going to test all the functions that we are going to build today, this function takes two parameters: an expression (that evaluates to a boolean value) and a string that describes the expected behavior:

// If the expression evaluates to true, return "test passed".
// Otherwise, return the string that describes the behavior.