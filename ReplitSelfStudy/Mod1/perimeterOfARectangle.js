// Write a function called "computePerimeterOfARectangle".

// Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.

// var output = computePerimeterOfARectangle(5, 2);
// console.log(output); // --> 14


function computePerimeterOfARectangle(length, width) {
  return 2 * (length + width);
}

console.log(computePerimeterOfARectangle(5,2))