//your code here!
function isHot(temperature) {
  if (temperature > 90) {
	 return "It's hot!";
  }
  return "It's not hot";
}

function oldEnoughTo(age) {
  if (age >= 21) {
     return "Drink";
  }
  else if (age >= 18){
  	return "Vote";
     }
  else if (age >= 16){
  	return "Drive a car";
  } 
  else if (age <= 0){
  	return "Error try again"
  }
  else {
  return "Go back to school!";
  }
}

function sayHello(language){
	if (language === 'english'){
		return "HELLO";
	}
	else if (language === 'spanish'){
		return "HOLA";
	}
	else if (language === 'dutch'){
		return "HALLO";
	}
}

function validCredentials(username, password){
	if (username.length >= 8 && password.length >= 8 ){
		return true;
	}
	return false;
}

//*****Intro Repetition*****

function sum(n){
	if (n===0){
		return 0;
	}
	return n+ sum(n-1);
}

function factorial(n){
	if (n === 1){
		return 1;
	}
	else if (n === 0){
		return 1;
	}
	return n * factorial(n-1);
}

console.log("factorial: "+factorial(4))

function repeatString(str, count){
	if (count === 0){
		return " ";
	}
	return str + repeatString(str, count-1);
}

console.log("repeatString: " + repeatString("dog",4));

function fib(n){
	if (n === 0){
		return 1;
	}
	else if (n === 1){
		return 1;
	}
	return fib(n-1) + fib(n-2);
}

console.log("fib: " + fib(4));

//****More Practice****

//***!!!!Pending
function sum2(start, end){
	var result;
	if (end > 0){
		result = result + start++;
		end--;
	}

}

console.log("sum2: " + sum2(2,7));

function product(start, end){

}

function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

function add(x,y){
	if (y>0){
		dec(y);
		return dec(x);
	}
}

console.log("add: " + add(2,3));


