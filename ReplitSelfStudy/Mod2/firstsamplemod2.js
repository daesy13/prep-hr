var x = [1,2,3];
var y = [4,5,6];
var z = x;

z[2]=y[0]
console.log("z: ", z)
z[1]=y[2]
console.log("z: ", z)
y[1]=z[1]
console.log("y: ", y)
//x[0]=y[0]
console.log("x: ", x)
x[2]=1

// console.log("x: ", x)
// console.log("y: ", y) 
// console.log("z: ", z)

