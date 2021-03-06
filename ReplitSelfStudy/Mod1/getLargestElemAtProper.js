// Write a function called "getLargestElementAtProperty".

// Given an object and a key, "getLargestElementAtProperty" 
// returns the largest element in the array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 4]
};
// var output = getLargestElementAtProperty(obj, 'key');
// console.log(output); // --> 4

function getLargestElementAtProperty(obj, key) {
	var newArray;
	var count = -100;
	var result;
	for (var key1 in obj){
		if (obj[key1] === obj[key] && Array.isArray(obj[key1])){
			newArray = obj[key1];
			console.log(newArray)
			for (var i = 0; i < newArray.length; i++){
				if (newArray[i] > count){
					count = newArray[i];
					result = newArray[i];
				}
			}
		}
	}
	return result;
}

console.log(getLargestElementAtProperty(obj, 'key'))