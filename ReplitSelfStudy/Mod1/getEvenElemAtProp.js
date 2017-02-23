// Write a function called "getEvenElementsAtProperty".

// Given an object and a key, "getEvenElementsAtProperty" 
// returns an array containing all the even elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no even elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

var obj = {
  key: [1000, 11, 50, 17]
};
// var output = getEvenElementsAtProperty(obj, 'key');
// console.log(output); // --> [1000, 50]

function getEvenElementsAtProperty(obj, key) {
	var result = [];
	var newArray;
  	for (var key1 in obj){
  		if(obj[key1] === obj[key] && Array.isArray(obj[key1])){
  			newArray = obj[key1];
  			for (var i = 0; i < newArray.length; i++){
  				if (newArray[i] % 2 === 0){
  					result.push(newArray[i]);
  				}
  			}
  		}
  	}
  	return result;
}

console.log(getEvenElementsAtProperty(obj, 'key'))