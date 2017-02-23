// Write a function called "computePerimeterOfACircle".

// Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.

// var output = computePerimeterOfACircle(4);
// console.log(output); // --> 25.132741228718345

function computePerimeterOfACircle(radius) {
  var per = Math.PI * 2 * radius;
  return per;
}

console.log(computePerimeterOfACircle(4))