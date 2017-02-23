// your code here

//1.
var cube =  function(x){
	return x * x * x;
}

//2.
var fullName = function(first, last){
	return first + " " + last;
}

//3.
var power = function(base, exp){
	if (exp === 0){
		return 1;
	}
	return base * power(base, exp - 1);
} 

//4.
var sumCubes = function(numbers){
	var total = 0;
	for (var i = 0; i < numbers.length; i++){
		total = total + cube(numbers[i]);
	}
	return total;
}

// Iterating Over Arrays
//1.
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

//2.
function sumSquares(numbers){
	var total = 0;
	each(numbers,function(num){
		total = total + (num * num);
	})

return total;
}

//console.log(sumSquares([1,2,3,4]))

//3.
function sumCubes(numbers){
	var total = 0;
	each(numbers, function(num){
		total = total + cube(num);
	})
	return total;
}

//console.log(sumCubes([1,2,3,4]))

//4.
function product1(numbers){
	var total = 1;
	for (var i=0; i < numbers.length; i++){
		total = total * numbers[i];
	}
	return total;
}

//console.log(product1([1,2,3,4]))

function product2(numbers){
	var total = 1;
	each(numbers, function(num){
		total = total * num
	})
	return total;
}

//console.log(product2([1,2,3,4]))

//5.
function cubeAll1(numbers){
	var total = 0;
	for (var i=0; i < numbers.length; i++){
		total = total + cube(numbers[i])
	}
	return total
}

//console.log(cubeAll1([1,2,3])) //1,8,27=36

function cubeAll2(numbers){
	var total = 0;
	each(numbers, function(num){
		total = total + cube(num)
	})
	return total
}

//console.log(cubeAll2([1,2,3]))

//6.
function odds(numbers){
	var results = []
	each(numbers, function (num){
		if (num%2 === 0)
			results.push(num)
	})
	return results
}

//console.log(odds([1,2,3,4,5,6,7]))

//More Practice
//1.
function sumByAllElementsMultipliedByFour(numbers){
	var total = 0;
	each(numbers, function(num){
		total = total + (num*4)
	})
	return total
}

//console.log(sumByAllElementsMultipliedByFour([1,2,3,4]))//4+8+12+16=40

//2.******STUDY THIS ONE*******
function sumBy(numbers, f){
	var total = 0;
	each(numbers,function(num){
		total = total + f(num)
	})
	return total
}

var number = [1,2,3,4];

//console.log(sumBy(number, cube))

//3.
console.log(sumBy(number, function(n){
	var n = number[i];
	return n;
}))

//4.
function productBy(numbers, f){
	var total = 1;
	each(numbers,function(num){
		total = total * f(num)
	})
	return total
}

//console.log(productBy(number, cube))











