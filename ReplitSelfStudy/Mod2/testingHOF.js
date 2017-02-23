function sum(numbers){
	var ans = numbers.reduce(function(a, b){
				return a + b;	
			   }, 0);
	return ans
}

console.log(sum([1,2,3,4,5]))