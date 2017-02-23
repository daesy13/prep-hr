var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');

function assertArraysEqual(actual, expected) {
	var result;
	if (actual.length === expected.length){
		for (var i = 0; i < actual.length; i++){
			if (actual[i] === expected[i]){
				console.log("pass")
				return;
			}
			else{
				console.log("fail")
				return;
			}
		}
	}
	else{
		console.log("fail")
	}
	console.log(result)
}

console.log(assertArraysEqual(actual, expected))
