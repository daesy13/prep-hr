//WU10. Write a function called drawTriangle that returns the following string. Feel free to debug-print using console.log, but make sure that the function actually returns a string. 
// Note that in a string, the character for a carriage return (the equivalent of hitting the “Enter” or “Return” key) is “\n”.

function stringTriangle(n){
	var result = ""
	for (var i=1; i<=n; i++)
		result += "*"
	return result
}

//console.log(stringTriangle(4))

function piramid(num){
	var result = "";
	for (var i = 1; i <= num; i++) {
		result += stringTriangle(i) + "\n"
	}
	return result
}

//console.log(piramid(5))

//WU12. Write a function called generateFizzBuzz that returns an object with all the numbers from 1 to 100 as keys and values, with two exceptions. For numbers divisible by 3, the value should be "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), the value should be "Buzz" instead. Example: 
// {0:0,1:1,2:2,3:’Fizz’,4:4,5:’Buzz’...}
// When you have that working, modify your function to show "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still show "Fizz" or "Buzz"for numbers divisible by only one of those). 
// Example: 
// {...15: ‘FizzBuzz’...} 

function generateFizzBuzz(){
	var obj={}
	for (var i = 1; i <= 100; i++) {
	if (i%3 === 0 && i%5 === 0){
		obj[i]= "FizzBuzz"
	}
	else if (i%3 === 0){
		obj[i]="Fizz"
	}	
	else if (i%5 === 0){
		obj[i]="Buzz"
	}
	else {
		obj[i]=i
	}
	}
	return obj;
}
console.log(generateFizzBuzz())