//1. Rewrite the functions firstNames, lastNames and fullNames using map as shown above.

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function map(array, f) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(f(element, i));
  });
  return acc;
}

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function ages(people) {
  return map(people, function(person) {
    return person.age;
  });
}

function firstNames(collection){
	return map(collection, function(eachElement){
		return eachElement.name.first
	})
}

//console.log(firstNames(people))

function lastNames(collection){
	return map(collection, function(eachElement){
		return eachElement.name.last
	})
}

// console.log(lastNames(people))

function fullNames(collection){
	var fullName = map(collection, function(eachElement){
		 if (!eachElement.name.middle){
		 	return eachElement.name.first+ " "+eachElement.name.last;
		 }
		return eachElement.name.first+ " " +eachElement.name.middle+" " +eachElement.name.last
	})
	return fullName


}

//console.log(fullNames(people))

function abs(x) {
  if (x >= 0) {
    return x;
  }
  return -x;
}

console.log(map([1, -2, 37, -100, -8, 5], abs)) // => [1, 2, 37, 100, 8, 5]