//  Each

function each (arr, callback){
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

/* 1. Refactor the uses of `for` loops in the below functions to use `each`
   instead: */

var people = [
 {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
 {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
 {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
 {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
 {name: {first: "Louis", last: "Reasoner"}, age: 21}
];


function ages(people) {
  var acc = [];
  each(people, function(person){
    acc.push(person.age)
  })

  return acc;
}

function firstNames(people) {
  var acc = [];
  each(people, function(person){
    acc.push(person.name.first)
  })
  return acc;
}

function lastNames(people) {
  var acc = [];
  each(people, function(person){
    acc.push(person.name.last)
  })
  return acc;
}

// console.log(ages(people));; // => [26, 34, 40, 45, 21]
// console.log(firstNames(people));; // => ["Alyssa", "Ben", "Eva", "Lem", "Louis"]
// console.log(lastNames(people));; // => ["Hacker", "Bitdiddle", "Ator", "Tweakit", "Reasoner"]


// Map

function map (arr, callback){
  var result = [];
  each(arr, function(value){
    result.push(callback(value))
  })
  return result;
}

// var nums = [1, 4, 7, 9, 80]

// var numsBy2 = map(nums, function(number){
//   return number * 2
// })

// console.log("numsBy2: ", numsBy2);

/* 1. Refactor the uses of `each` in the below functions to use `map`
   instead: */

function ages(people) {
  return map(people, function(person){
    return person.age
  })
}

function firstNames(people) {
  return map(people, function(person){
    return person.name.first
  })
}

function lastNames(people) {
  return map(people, function(person){
    return person.name.last
  })
}

// console.log(ages(people));; // => [26, 34, 40, 45, 21]
// console.log(firstNames(people));; // => ["Alyssa", "Ben", "Eva", "Lem", "Louis"]
// console.log(lastNames(people));; // => ["Hacker", "Bitdiddle", "Ator", "Tweakit", "Reasoner"]