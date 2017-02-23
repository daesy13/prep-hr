//your code here!
// no1.
function wordLengths(string){
var newArray = string.split(" ");
var newArr = [];
for (var i = 0; i < newArray.length; i++) {
	var length = newArray[i].length;
	newArr.push(length)
}
return newArr;
}

//console.log("wordLengths: " , wordLengths("The quick brown fox jumps over the lazy dog."))

//no3.
function wordsLongerThanThree(string){
	var newArray = string.split(" ");
	var array = [];
	for (var i = 0; i < newArray.length; i++) {
		if(newArray[i].length >= 3){
			array.push(newArray[i])
		}
	}
	return array;	
}

//console.log("wordsLongerThanThree" + wordsLongerThanThree("I The a quick b brown c fox jumps over the lazy dog."))

// no2.
function concat(arr1, arr2){
var union = []
for (var i=0; i<arr1.length; i++){
	union.push(arr1[i])
}
for (var i=0; i<arr2.length; i++){
	union.push(arr2[i])
}
return union;
}


//console.log("concat" + concat([1, 2, 3], [4, 5, 6]))




