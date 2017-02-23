//your code here!
var x = 1;

function counter(){
     x = x+1;
console.log(x);
}

var upperBound = 5;
var myGuess = randInt(upperBound)
//console.log(myGuess);
var guessCount = 0;
var highScore = guessCount;

function guessMyNumber(n){
	if (n>upperBound) {
		guessCount++;
		return "Out of bounds! Please try a number between 0 and " + upperBound;

	} else if (n === myGuess && guessCount ===1){
		return "You guessed my number on " + guessCount + " guess";	

 	} else if (n === myGuess){
		return "You guessed my number on " + guessCount + " guesses";

	} else if (guessCount >= 4){
		return "Sorry you lost, you exceeded the number of tries!";
	}

	guessCount++;
	return "Nope! The correct number was " + myGuess;
	
}
 
 function randInt(n){
 	return Math.floor(Math.random()*(n+1))
 }

function power_iter(base,exponent){
	var result=1;
	while (exponent>0){
		result=result*base;
		exponent=exponent-1;
	}
	return result;
}


//***while***

function sum(n){
	while (n>0){
		return n + sum(n-1);
	}
	return 0;
}

function sum(n){
  var result = 0;
  var count = n;
  while(count >0){
    result = result + count;
    count--;
    }
  return result;
}

function factorial(n){
  if (n == 0 || n == 1){
    return 1;
  }
  return factorial(n-1) * n
}

function repeatString(str, count){
  var result = " ";
  while(count > 0){
  	result = str + result;
    count--;
  }
	return result;
}

function sum2(start, end){
	var result = start;
  if (start < end){
  while(end > start){
  	start++;
  	result = result + start;
  }
  }
  else {
  while(end < start){
  	start--;
  	result = result + start;
  }
  }
  return result;
}

function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

function isEven(n){
  var even = n/2;
  
	while (Number.isInteger(even) === true){
  return true;
  }
  return false
}

function multiply(x, y){
  var result = x;
	while (y > 1){
  result = result + x ;
  y--;
  
  }
 return result;
}


function add(x, y){
	while( y > 0){
  x = inc(x);
  y = dec(y);
  } 
	return x;
}








