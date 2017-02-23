// Write a function called "getNthElementOfProperty".

// Given an object and a key, "getNthElementOfProperty"
// returns the nth element of an array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If n is out of range, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 6]
};
// var output = getNthElementOfProperty(obj, 'key', 1);
// console.log(output); // --> 2

function getNthElementOfProperty(obj, key, n) {
	var results;
	for (var key1 in obj){
		if (obj[key1] === obj[key] && Array.isArray(obj[key1])){
			var newArray = obj[key1];
			for (var i = 0; i < newArray.length; i++){
				if (i === n){
					results = newArray[i];
				}
			}
		}
	}
	return results;
}

console.log(getNthElementOfProperty(obj, 'key', 1))