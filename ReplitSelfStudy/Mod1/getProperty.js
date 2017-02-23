// Write a function called "getProperty".

// Given an object and a key, "getProperty" returns the value of the property at the given key. 

// Notes:
// * If there is no property at the given key, it should return undefined.

var obj = {
  key: 'value'
};
// var output = getProperty(obj, 'key');
// console.log(output); // --> 'value'

function getProperty(obj, key) {
	var result =  undefined;
  	for (var key1 in obj){
  		if (obj[key1] === obj[key]){
  			result = obj[key1];
  		}
  	}
  	return result;
}

console.log(getProperty(obj, 'key'))