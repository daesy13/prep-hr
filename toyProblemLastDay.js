/*

*  Write a function `myMap` that takes in a collection and a callback (names of your parameters) respectively they are an array and a function. 

# 'callback' is just a parameter name for the function that is passed into and called (or executed) inside 'myMap'. 

*  Create a variable called `myMapResults` and assign it to an empty array in the local scope.

*  Iterate through the `collection` (you can use each to iterate).

*  Assign the current value of the `collection` during each iteration to a variable called `currentElement`.

*  During each iteration, invoke `callback` and pass in the variable `currentElement` as the argument.

*  Assign the previous step to a variable called `callbackResult`.

*  Push `callbackResult` to `myMapResults`.

*  After the for loop, return the array `myMapResults`.

*/

function myMap(collection, callback){
	var myMapResults = []
	collection.forEach(function(currentElement){
		myMapResults.push(callback(currentElement))
	})
	return myMapResults;
}

var array =[1,2,3,4] 

function two(n){
	return (n*2)
	 
}

console.log(myMap(array,two))


