fr//your code here!
console.log("1. We use arrays to insert a list elements of the same data type")

var numbers = [1,2,3,4,5,6,7,8,9];
console.log("2. numbers: " + numbers);

function squareAll(array){
	var results = [];
	for (var i=0; i < array.length; i++){
		var multiply = array[i]*array[i];
		results.push(multiply);
	}
	return results;
}

console.log("3. squareAll: " + squareAll(numbers));

//***Data Modeling***

var book1 = {
	title: "Harry Potter and the Sorcerer's Stone ", 
	author: "J.K. Rowling",
	msrp: "$14.00",
	genre: "Fiction",
	numberOfPages: 400,
	description: "Harry Potter and the Philosopher's Stone is the first novel in the Harry Potter series and J. K. Rowling's debut novel, first published in 1997 by Bloomsbury. It was published in the United States as Harry Potter and the Sorcerer's Stone by Scholastic Corporation in 1998."

}

//console.log("book1: " + book1.title);

var book2 = {
	title: "Snow Crash",
	author: "Neal Stephenson",
	msrp: "$10.00",
	genre: "Science Fiction",
	numberOfPages: 250,
	description: "Snow Crash is Neal Stephenson's third novel, published in 1992. Like many of Stephenson's other novels it covers history, linguistics, anthropology, archaeology, religion, computer science, politics, cryptography, memetics and philosophy."
}

var book3 = {
	title: "Moby Dick",
	author: "Herman Melville",
	msrp: 6.00,
	genre: "Classic",
	numberOfPages: 200,
	description: "It's about a whale"
}

function makeABook(title, author, msrp, genre, numberOfPages, description){
	return {
	title: title,
	author: author,
	msrp: msrp,
	genre: genre,
	numberOfPages: numberOfPages,
	description: description
	}
}

var book4 = makeABook("Mobie Dick","Herman Melville", 6, "Classic", 200, "whale")

function displayBook(book){
	return book.title + ", by " + book.author + " -- " + book.genre + ", $" + book.msrp;
}

console.log("displayBook4: " + displayBook(book4))

function search(query, library){
	var searchResult =[];
	for (var i = 0;  i < library.length; i-- ) {
		library[i]
	}
}
