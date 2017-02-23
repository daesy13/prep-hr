//your code here!
function glasses(students){
	return (100 * students)/40 + "%";
}

function cube(x){
	return x * x * x;
}

function lhs(a,b){
	return Math.pow((a+b), 2);
}

function rhs(a,b){
	return Math.pow(a,2)+(2*a*b)+Math.pow(b,2);
}

function oldEnoughToDrink(age){
	if (age > 21){
		return true;
	}
	return false
}

function bouncer(name,age){
	if (name === "joe"){
		return "Sorry " + name + " you are not welcome here anymore";
	}
	else if (age >= 21){
		return "Welcome " + name + "!";
	}
	return "Go home " + name;
}
