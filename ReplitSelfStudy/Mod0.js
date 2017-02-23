// M01.Write a function called "greetCustomers".
// Given a name, "greetCustomers" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object. 
// The greeting should be different, depending on the name on their reservation.
// Case 1 - Unknown customer ( Name is not present in customerData ): 
// var output = greetCustomer('Terrance');
// console.log(output); // --> 'Welcome! Is this your first time?'
// Case 2 - Customer who has visited only once ( 'visits' value is 1 ):
// var output = greetCustomer('Joe');
// console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
// Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):
// var output = greetCustomer('Carol');
// console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
// Notes:
// * Your function should not alter the customerData object to update the number of visits.
// * Do not hardcode to the exact sample data. This is a BAD IDEA:
// if (firstName === 'Joe') {
//   // do something
// }

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';

  	if (customerData[firstName] === undefined){
  		greeting = "Welcome! Is this your first time?"
  	}
	else if (customerData[firstName].visits === 1){
  		greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!"
  	}
  	else if (customerData[firstName].visits >= 2){
  		greeting = "Welcome back, " + firstName + "! So glad to see you again!"
  	}
	
  return greeting;
}

// console.log(greetCustomer("Carol"))


// M02.Write a function called "transformEmployeeData" that transforms some employee data from one format to another.
// The argument will look something like this:
var example = [
    [
       ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
       ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]
//console.log(example[0][3][0])
// Given that input, the return value should look like this:
// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
// Note that the input may have a different number of rows or different keys than the given sample. 
// For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

function transformEmployeeData(array) {
	var newArray = []
	
	array.forEach(function(element){
		var obj = {}
		element.forEach(function(data){
			obj[data[0]]= data[1] 
		})
		
		newArray.push(obj);
	})
	return newArray
};

transformEmployeeData(example)

// M03.Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
// Argument:
// {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// }
// Return value:
// [['name', 'Holly'], ['age', 35], ['role', 'producer']]
// Note that your function should be able to handle ANY object like this, not just the exact sample provided above.
// E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
// {
//   species: 'canine',
//   name: 'Bowser',
//   weight: 45
// }

function convertObjectToList(obj) {
	var results = [];
for (var key in obj){
	results.push([key, obj[key]])
}
  return results
}

// console.log(convertObjectToList({
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// }))


