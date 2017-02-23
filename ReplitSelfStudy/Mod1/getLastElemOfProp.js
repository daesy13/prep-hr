// Write a function called "getLastElementOfProperty".

// Given an object and a key, "getLastElementOfProperty" 
// returns the last element of an array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * if the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 5]
};
// var output = getLastElementOfProperty(obj, 'key');
// console.log(output); // --> 5

function getLastElementOfProperty(obj, key) {
	var newArray;
	var results;
	for (var key1 in obj){
		if (obj[key1] === obj[key] && Array.isArray(obj[key1])){
			newArray = obj[key1];
			results = newArray.pop();
		}
	}
	return results;
}

console.log(getLastElementOfProperty(obj, 'key'))