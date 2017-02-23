//your code here!
//******DAESY STEPHENS*****

function billTotal(subTotal){
	return subTotal + (subTotal*.15)+(subTotal*.095);
}

console.log("billTotal: " + billTotal(15));

function animalNoise(animal, emotion){
if (animal === "cat"){ 
	if (emotion === "happy"){
	return "happy meow";
	}
	else if(emotion === "sad"){
	return "sad meow";
	}
	else if(emotion === "angry"){
	return "grrr meow";
	}
	else if(emotion === "surprised"){
	return "ohhh meow";
	}
}
else if(animal === "dog"){
	if (emotion === "happy"){
	return "happy woof woof";
	}
	else if(emotion === "sad"){
	return "sad woof woof";
	}
	else if(emotion === "angry"){
	return "grrr woof woof";
	}
	else if(emotion === "surprised"){
	return "ohhh woof woof";
	}
}
else{
	return "not an animal I recognize";
}
}

function digitalSum(num){
	if (num <= 9){
		return num;
	}

	return num % 10 + digitalSum(Math.floor(num/10));
}


