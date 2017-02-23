// Write a function called "getSumOfAllElementsAtProperty".

// Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of 
// all the elements in the array located at the given key. 

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the key, it should return 0.

var obj = {
  key: [4, 1, 8]
};
// var output = getSumOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 13

function getSumOfAllElementsAtProperty(obj, key) {
	var newArray;
	var result = 0;
	for (var key1 in obj){
		console.log("obj[key1]: ", obj[key1])
		if (Array.isArray(obj[key])){
			newArray = obj[key];
			console.log("newArray: ", newArray)
			for (var i = 0; i < newArray.length; i++){
				result = result + newArray[i]
			}
		}
	}
	return result;
}

console.log(getSumOfAllElementsAtProperty(obj, 'key'))