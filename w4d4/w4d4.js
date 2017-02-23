//your code here!
//Retrieve the value "comeGetMe!" in each of the following data structures. Store them in variable(s)/data structure(s) of your choice.

var arrayA = ["hello", "world", "hack", "reactor", "comeGetMe!", "is", "awesome"];
var arrayB = [true, false, 100, 200, "comeGetMe!", "Batman", "Robin",];
var objA = {
    name : "Joker",
    favoriteColor : "Purple",
    catchPhrase : "comeGetMe!"
}
var objB = {
    yogurtFlavor : "Vanilla Tart",
    serialNumber : "64928599301ADDG",
    companyName : "comeGetMe!",
    shippingAddress : "1600 Pennsylvania Ave NW, Washington, D.C."
}

// console.log("arrayA: " , arrayA[4])
// console.log("arrayB: " , arrayB[4])
// console.log("ObjA: " , objA.catchPhrase)
// console.log("ObjB: " , objB.companyName)

//How would you access the the value of pets?

// var myStore = {
//     name : "PetInc",
//     founded : "2030",
//     pets : "dogs"
// }

//console.log("pets value: " , myStore.pets)

// What if the value associated with pets changed to :
var myStore = {
    name : "PetInc",
    founded : "2030",
    pets : {
        dogs : 13,
        cats : 10,
        birds : 30,
        fishes : 23
    }
}

//How would you access and store the value of the property pets?

function propertyPets(obj){
	var newArray = [];
	for (var key in obj.pets){
		newArray.push(obj.pets[key])
	}
	return newArray
}

//console.log("propertyPets: " , propertyPets(myStore))

var dogs = myStore.pets.dogs
var cats = myStore.pets.cats
var birds = myStore.pets.birds
var fishes = myStore.pets.fishes

var individualPropertyPets = [dogs, cats, birds, fishes]
//console.log("individual propertyPets: " , individualPropertyPets)


//Retrieve the specific property of each small box inside the bigBox and store it in the variables provided (replace null);

var bigBox = {
    smallBoxA : {weight : 12, volume : 15, full : true},
    smallBoxB : {weight : 22, volume : 12, full : false},
    smallBoxC : {weight : 19, volume : 19, full : false}
}

var weightOfSmallBoxA = bigBox.smallBoxA.weight;
var volumeOfSmallBoxA = bigBox.smallBoxA.volume;
var fullOfSmallBoxA = bigBox.smallBoxA.full;
var weightOfSmallBoxB = bigBox.smallBoxB.weight;
var volumeOfSmallBoxB = bigBox.smallBoxB.volume;
var fullOfSmallBoxB = bigBox.smallBoxB.full;
var weightOfSmallBoxC = bigBox.smallBoxC.weight;
var volumeOfSmallBoxC = bigBox.smallBoxC.volume;
var isSmallBoxCFull = bigBox.smallBoxC.full;

var propertyOfBigBox = [weightOfSmallBoxA,volumeOfSmallBoxA, fullOfSmallBoxA, weightOfSmallBoxB,  volumeOfSmallBoxB, fullOfSmallBoxB, weightOfSmallBoxC, volumeOfSmallBoxC , isSmallBoxCFull]

//console.log("propertyOfBigBox: " , propertyOfBigBox)

//Create a function BoxMaker that returns an object box with the following properties:

// length (number)
// width (number)
// height (number)
// contents (array)

function boxMaker(length,width,height,contents){
	var objBox = {
		length: length,
		width: width,
		height: height,
		contents: contents
	}
	return objBox
}

//console.log("boxMaker: ", boxMaker(2,3,4, ["nice box"]))

//Create a function randomInt that takes in a number, and returns a random integer between 1 and that parameter.

//Hint : Math.random()

function randomInt(num){
	var rand = Math.floor(Math.random() * num)+1
	return rand;
}

//console.log("random",randomInt(9))

//Write a function that returns the number of strings in the given array.

function numOfStrings(argument){
 var count = 0;
 for (var i = 0; i < argument.length; i++) {
 if (typeof argument[i] === 'string'){
 	count = count + 1
 }
}
    return count
}

//E.g.
var mixedArray = [1, 4, 3, "hello", true, "false"] 

function numOfStrings2(argument){
 var newArray = [];
 for (var i = 0; i < argument.length; i++) {
 if (typeof argument[i] === 'string'){
 	newArray.push(argument)
 }
}
    return newArray.length
}


console.log("numOfStrings2: " , numOfStrings2(mixedArray))

//create assert

function squareN(num){
	return num * num;
}

function assert(actual, expected, testName){
	if (expected === actual){
		console.log ("Passed");
           }	
           else {
		console.log(testName);
           }
}

console.log(assert(numOfStrings2(mixedArray), 2,"it should return 2"))

// collection.reduce
// *array.reduce (it only returns one value)
// function distill(collection, callback, startValue){
//   loop(collection, function(elem){
//     startValue = callback(startValue, elem);
//   });

//   return startValue;
// }


function numOfStringsHOF(argument){
	return argument.reduce(function(acc, element){
		if (typeof element === "string"){
			acc += 1;
		}
		return acc;
	},0)
}









