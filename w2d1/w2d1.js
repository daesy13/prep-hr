//your code here!
var sample=[1,2,3,4,5]

function first(array){
return array[0]
}

function last(array){
return array[array.length - 1]
}

function nth(array, index){
return array[index]
}

function rest(array){
	return array.slice(1, array[array.length-1]);
}

function butLast(array){
	return array.slice(0, array[array.length-2]);
}

function cons(x, array){
	array.unshift(x);
	return array;
}

function conj(x, array){
	array.push(x);
	return array;
}

//****Array Iteration****
var numArray = [1,2,3,4,5];

function sum1(array){
	var result=0;
	var i=0;
	while(i<array.length){
		result=result + array[i];
		i=i+1;
	}
	return result;
}

console.log("sum1: " + sum1(numArray));

function sum2(array){
	var result = 0;
	for(var i = 0; i<array.length; i++){
		result = result + array[i];
	}
	return result;
}

console.log("sum2: " + sum2(numArray));

function max(array){
	var maximum=0;
	for (var i=0; i<array.length; i++){
		if (array[i]>maximum){
			maximum = array[i]
		}
	}
	return maximum;
}

console.log("max: " + max(numArray));

function max2(array){
	var maximum = 0;
	var i = 0;
	while(i<array.length){
		if(array[i]>maximum){
		maximum = array[i];
	}
	i=i+1;
	}
	return maximum
}

console.log("max2 : " + max2(numArray));

console.log("the quick brown fox jumped over the lazy dog".split(" "));
console.log("Hello, world!".split(""));
console.log("1,2,3,4,5,6".split(","));

var samStr = "the quick brown fox jumped over the lazy dog";

function longestWord(string){
	var long = "";
	var newArray = string.split(" ");
	for (var i=0; i<newArray.length; i++){
		if (newArray[i].length > long.length){
			long = newArray[i];
		}
	}
	return long;
}

console.log("longestWord: " + longestWord(samStr));

function remove(array, element){
	var newArray = [];
	for (var i=0; i<array.length; i++){
		if (array[i] !== element){
			newArray.push(array[i]);
		}
	}
	return newArray;
}

console.log("remove: " + remove(numArray,3));

function evens(array){
	var newArray = [];
	for (var i=0; i<array.length; i++){
		if (array[i] % 2 === 0){
			newArray.push(array[i]);
		}
	}
	return newArray;
}

console.log("evens: " + evens(numArray));


