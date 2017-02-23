// Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
// Argument:
// {
//   item: 'Taco',
//   priceInDollars: 1.5,
//   delicious: true
// }
// Return value:
// [['item', 'Taco'], ['priceInDollars', 1.5], ['delicious', true]]

// Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

// E.g., it should also be able to handle this, or any other object containing simple key-value pairs.

// {
//   name: 'Beyonce',
//   age: 35,
//   isTouring: false,
//   mostRecentAlbum : "Lemonade"
// }

function convertObjectToList(object){
	var newArray = [];
	for (var key in object){
		newArray.push([key, object[key]])
	}
	return newArray
}

var bey = {
  name: 'Beyonce',
  age: 35,
  isTouring: false,
  mostRecentAlbum : "Lemonade"
}

console.log(convertObjectToList(bey))

