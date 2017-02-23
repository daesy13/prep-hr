// Write a function called "getSmallestElementAtProperty".

// Given an object and a key, "getSmallestElementAtProperty" 
// returns the smallest element in the array located at the given key. 

// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined. 
// * If there is no property at the key, it should return undefined.

var obj = {
  key: [2, 1, 5]
};
// var output = getSmallestElementAtProperty(obj, 'key');
// console.log(output); // --> 1

function getSmallestElementAtProperty(obj, key) {
	var count = 100;
	var newArray;
	var results;
	for (var key1 in obj){
		if (Array.isArray(obj[key])){
			newArray = obj[key];
			for (var i = 0; i < newArray.length; i++){
				if (newArray[i] < count){
					count = newArray[i];
					results = newArray[i];
				}
			}
		}
	}
	return results;
}

console.log(getSmallestElementAtProperty(obj, 'key'))