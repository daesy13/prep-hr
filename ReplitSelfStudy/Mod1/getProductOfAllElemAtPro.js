// Write a function called "getProductOfAllElementsAtProperty".

// Given an object and a key, "getProductOfAllElementsAtProperty" 
// returns the product of all the elements in the array located at the given key. 

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.

var obj = {
  key: [1, 2, 3, 4]
};
// var output = getProductOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 24

function getProductOfAllElementsAtProperty(obj, key) {
	var newArray;
	var starPoint = 1;
	var result = 0;
	for(var key1 in obj){
		if (obj[key1] === obj[key] && Array.isArray(obj[key1])){
			newArray = obj[key1];
			for (var i = 0; i < newArray.length; i++){
				starPoint = starPoint * newArray[i];
				result = starPoint;
			}
		}
	}
	return result;
}

console.log(getProductOfAllElementsAtProperty(obj, 'key'))