//**** NEED HELP ON THIS ONE****
// function power(base, exp){
// 	if (exp === 0){
// 		return 1;
// 	}
// 	else if (exp === 1){
// 		return base;
// 	}
// 	return base*power(base,exp-1);
// }
// console.log("power:" + power(2,1));

///**** I don't understand the logic of Fib***
// function fib(n){
// 	if (n === 0){
// 		return 1;
// 	}
// 	else if (n === 1){
// 		return 1;
// 	}
// 	return fib(n-1) + fib(n-2);
// }

// console.log("fib: " + fib(5));

//Modify your sum function from the Basic Requirements section to accept two parameters, start and end: sum should now compute the sum of the numbers from start to end. What happens if start is larger than end? Modify sum to check for this case and, when found, swap the start and end arguments.


function arrayReverse(array){
    var results=[];
    for ( var i=array.length-1; i>=0; i--){
       results.push(array[i]); 
    }
    return results;
}

 var array1 = [1,2,3,4,5];

//console.log(arrayReverse(array1));

//console.log(array1);

// function coldCaller(array){
//     var random = Math.floor(Math.random*array.length);
  
//     return array[random];
// }


// var students = ['Aaron Aves',
// 'Alex Duda',
// 'Colton Jett',
// 'Elliott Birch',
// 'Jamin Ewell',
// 'Jane Vaden',
// 'Jared Cairns',
// 'Jason Sierra',
// 'Joshua Peng',
// 'Nick Partridge',
// 'Rachel Noble',
// 'Richard Mathera',
// 'Robert Ballard',
// 'Sammy Icaza',
// 'Samy Kebaish',
// 'Silvia Fernandez',
// 'Vandeth Nop',
// 'Vy Trinh']

// console.log(coldCaller(students))

//Create a function that checks if two arrays are equal. Assume the arrays can only contain numbers, strings, and/or booleans.
//Hint : are the arrays the same length?
//Hint : are each corresponding values of the arrays the same?
sample=[1,2,3,4,5];
another=[1,2,3,4,5];

function areArraysEqual(array1, array2) {
  if (array1.length === array2.length){

  		for (var i=0; i<array1.length; i++){
  				
  			if (array1[i] !== array2[i]){
  				return false;
  			}
  		}
  		return true
  }
  return false;
}

//console.log(areArraysEqual(sample,another))
//***when you compare only stops on the first true, so is better to look for the unequal first false if not is true

/* 1. Refactor the uses of `for` loops in the below functions to use `each`
   instead: */

   var people = [
     {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
     {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
     {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
     {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
     {name: {first: "Louis", last: "Reasoner"}, age: 21}
   ];

   // function ages(people) {
   //   var acc = [];
   //   for (var i = 0; i < people.length; i++) {
   //     acc.push(people[i].age);
   //   }
   //   return acc;
   // }

   // people.forEach(function(age){
   //     console.log(person.age)
   // })



   // function firstNames(people) {
   //   var acc = [];
   //   for (var i = 0; i < people.length; i++) {
   //     acc.push(people[i].name.first);
   //   }
   //   return acc;
   // }

   // function lastNames(people) {
   //   var acc = [];
   //   for (var i = 0; i < people.length; i++) {
   //     acc.push(people[i].name.last);
   //   }
   //   return acc;
   // }


// Create a function that loops through the profiles array, log each person's name if they are hungry and returns an object with 2 properties. “hungry” and “notHungry”. Each property should be an array of people’s profiles sorted by whether they are hungry or not.

// var profiles = [
//   {
//     name: "Kevin",
//     age: 12,
//     hungry: true,
//     pets: ["cats"]
//   },
//   {
//     name: "Alex",
//     age: 19,
//     hungry: false,
//     pets: ["dogs", "turtle", "cat"]
//   },
//   {
//     name: "Luisa",
//     age: 99,
//     hungry: true,
//     pets: ["cats", "otter", "capybara", "meerkat"]
//   },
//   {
//     name: "Albrey",
//     age: 40,
//     hungry: true,
//     pets: []
//   }
// ];

// function hungryOrNot (profiles){
//   var obj = {
//     hungry:[],
//     notHungry: []
//   };

//   for (var i=0, i<profiles.length, i++){
//     if (profiles[i].hungry){
//       console.log(profiles[i].name+'is hungry');
//       obj.hungry.push(profiles[i])
//     }
//     else{
//       obj.notHungry.push(profiles[i])
//     }
//   }
//   return obj
// }



// Toy Problem
// create a function that takes in a collection of movies and the name of a
// movie (target), if the movie is in the collection return the movie object,
// if not, return an error message.

var newReleases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{ id: 432534, time: 65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{ id: 432534, time: 65876586 }]
  }
];

function findMovie (collection, target){
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].title === target){
      return collection[i]
    }
  }
  return "Error: the movie that you are looking for is not in this list"
}

//console.log(findMovie(newReleases, 'The Chamber'))

//create a function that takes a collection of movies and returns an array of object that only have the id and title of all the movies that have a rating of 5.0

// function fiveStarts(collection){
//   var arr = [];
//   for( var i=0; i<collection.length, i++){
//     if (collection[i].rating === 5){
//       arr.push({id: collection[i].id, title: collection[i].title})
//     }
//   }
//   return arr
// }

//console.log(fiveStarts(newReleases));

var myExample = "My name is Daesy"
var example1 = myExample.split(" ")

console.log(example1)






