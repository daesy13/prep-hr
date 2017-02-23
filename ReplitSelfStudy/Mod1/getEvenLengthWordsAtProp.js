// Write a function called "getEvenLengthWordsAtProperty".

// Given an object and a key, "getEvenLengthWordsAtProperty" 
// returns an array containing all the even length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no even length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

var obj = {
  key: ['a', 'long', 'game']
};
// var output = getEvenLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> ['long', 'game']

function getEvenLengthWordsAtProperty(obj, key) {
	var result = [];
	var newArray;
	for (var key1 in obj){
		if (obj[key1] === obj[key] && Array.isArray(obj[key1])){
			newArray = obj[key1];
			for (var i = 0; i < newArray.length; i++){
				if (newArray[i].length % 2 === 0){
				result.push(newArray[i]);
				}
			}
		}
	}
	return result;
}

console.log(getEvenLengthWordsAtProperty(obj, 'key'))