// Write a function called "computeAreaOfACircle".

// Given the radius of a circle, "computeAreaOfACircle" returns its area.

// var output = computeAreaOfACircle(4);
// console.log(output); // --> 50.26548245743669

function computeAreaOfACircle(radius) {
  var area = Math.PI * radius * radius;
  return area;
}

console.log(computeAreaOfACircle(4))