//extend.Write a function called "extend".
// Given two objects, "extend" adds properties from the 2nd object to the 1st object.
// Notes:
// * Add any keys that are not in the 1st object.
// * If the 1st object already has a given key, ignore it (do not overwrite the property value).
// * Do not modify the 2nd object at all.
var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

// extend(obj1, obj2);

// console.log(obj1); // --> {a: 1, b: 2, c: 3}
// console.log(obj2); // --> {b: 4, c: 3}

function extend(obj1, obj2) {
	
	for (var key1 in obj1){
	
	for (var key2 in obj2){
		if (key2 !== key1){
			obj1[key2] = obj2[key2]
		}
	}
	}
	return obj1;
}

//console.log(extend(obj1, obj2))

//countWords. Write a function called "countWords".
// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 
// Notes:
// * If given an empty string, it should return an empty object.
// var output = countWords('ask a bunch get a bunch'); 
// console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

function countWords(str) {
  var results = str.split(" ");
  var obj={};
  var count = 1
  
  for (var i = 0; i < results.length; i++){
  	console.log(results[i])
  	count = count++
  	obj[results[i]] = count 
  }

  return obj
}

console.log(countWords("ask a bunch get a bunch"))


