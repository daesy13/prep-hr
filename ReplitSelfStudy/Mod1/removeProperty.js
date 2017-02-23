// Write a function called "removeProperty".

// Given an object and a key, "removeProperty" removes the given key from the given object.

var obj = {
  name: 'Sam',
  age: 20
}
// removeProperty(obj, 'name');
// console.log(obj.name); // --> undefined


function removeProperty(obj, key) {
	for (var key1 in obj){
		if (key1 === key){
			delete obj[key1];
		}
	}
	return obj;
}

console.log(removeProperty(obj, 'name'))