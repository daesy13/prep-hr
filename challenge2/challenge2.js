//your code here!
//*** Question on my allPlanets variable, range function (why it change start for i)


// function makePlanets(name,size,distance, satellites){
// 	return{
// 		name:name,
// 		size:size,
// 		distanceFromSun: distance,
// 		numberOfSatellites: satellites
// 	}
// }

// var planet1 = makePlanets("Mercury", "0.055 Earth masses", "0.4 AU from the Sun", "no natural satellites");
// var planet2 = makePlanets("Venus", "0.815 Earth masses", "0.7 AU from the Sun", " no natural satellites");

// var allPlanets = [planet1, planet2]
	


// var solarSystem = {
// 	ageOfSolarSystem: "4.568 billion years",
// 	distanceFromCenterGalaxy: "27,000 ± 1,000 ly",
// 	numberOfKnownComets: 3406,
// 	thePlanets: allPlanets

// 	// this what they did in class for thePlanets
// 	// thePlanets: [makePlanet("earth",3,9,1)]
// }

//2.

// function range(start, end){
// 	var results = [];
// 	var i = start;
// 	while (i < end){
// 	results.push(i++)	
		
// 	}
// 	return results;
// }

// **** Using ForLoop ****
// for (var i=start; i< end; i++){
// 	result.push(i)
// }

//console.log(range(0,4))

//3. 

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
]
// console.log(people[0])
// console.log(people[0].name.first)

// function longestName(array){
// 	for (var i=0; i<array.length; i++){
// 		var lname = 0;
// 	if (array[i].name.first.length + array[i].name.middle.length + array[i].name.last.length > lname){
// 		return array[i].name.first + array[i]name.middle + array[i].name.last;
// 			}
// 		}
// 	}

var youngerThanTwentyFive = people.filter(function(element){
	return element[i].age <= 25)
}

console.log(youngerThanTwentyFive)

// //console.log("longestName: " + longestName(people))

// function completeName(array){
// 	var newArray = [];
// 	for (var i=0; i < array.length, i++ ){
// 		var nameTogether = array[i].name.first + array[i].name.middle + array[i].name.last;
// 		newArray.push(nameTogether)
	
// 	}
// 	return newArray;
// }

//console.log("longestName: " + longestName(people))

//this is the revised and correct version

// function fullName(person){
// 	var middle = person.name.middle || "";
// 	return person.name.first + middle + person.name.last
// }

// function longestName (people){
// 	var longest = people[0];
// 		for (var i = 1; i < people.length; i++){
// 			if(fullName(people[i]).length > fullName(longest).length){
// 				longest =  people[i]
// 			}
// 		}
// 	return longest
// }

//console.log(longestName(people))













