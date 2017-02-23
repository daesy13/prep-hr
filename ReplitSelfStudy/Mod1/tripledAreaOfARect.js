// Write a function called "computeTripledAreaOfARectangle".

// Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.

// var output = computeTripledAreaOfARectangle(2, 4);
// console.log(output); // --> 24

function computeTripledAreaOfARectangle(length, width) {
  var total = length * width;
  return total * 3;
}

console.log(computeTripledAreaOfARectangle(2, 4))