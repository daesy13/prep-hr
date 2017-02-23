// Write a function called "isPersonOldEnoughToDrink".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrink" 
// returns whether the given person is old enough to drink.

// Notes:
// * The legal drinking age in the United States is 21.

var obj = {
  age: 16
};
// var output = isPersonOldEnoughToDrink(obj);
// console.log(output); // --> false

function isPersonOldEnoughToDrink(person) {
	var results = false;
	for (var key in person){
		if (person[key] >= 21){
			results = true;
		}
	}
	return results;
}

console.log(isPersonOldEnoughToDrink(obj))