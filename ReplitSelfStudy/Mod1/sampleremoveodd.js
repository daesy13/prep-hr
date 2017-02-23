// Write a function called "removeOddValues".

// Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeOddValues(obj);
// console.log(obj); // --> { a: 2, c: 4 }

function removeOddValues( obj ) {
  var result={};
  for (var i in obj ) {
    if (obj[i]%2 !== 0)
    	delete obj[i];
  }
  return obj;
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};

console.log(removeOddValues( obj ));