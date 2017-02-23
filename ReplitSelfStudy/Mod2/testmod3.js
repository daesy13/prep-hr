var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];

var oddEvenCounts = numbers.reduce(function(counts, number) {
   if (isOdd(number)) {
     counts[odd]++;
   } else {
     counts[even]++;
   }
 }, {});

function isOdd(n){
	if (n % 2 === 0){
		return true;
	}
}
console.log(oddEvenCounts)