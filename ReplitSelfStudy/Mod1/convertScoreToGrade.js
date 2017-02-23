// Write a function called "convertScoreToGrade".

// Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) --> 'A'
// * (89  - 80) --> 'B'
// * (79  - 70) --> 'C'
// * (69  - 60) --> 'D'
// * (59  -  0) --> 'F'
// * If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

// var output = convertScoreToGrade(91);
// console.log(output); // --> 'A'

function convertScoreToGrade(score) {
  var answer;

  if (score < 0){
  	answer = "INVALID SCORE"
  }
  else if (score < 60){
  	answer = "F";
  }
  else if (score < 70){
  	answer = "D";
  }
  else if (score < 80){
  	answer = "C";
  }
  else if (score < 90){
  	answer = "B";
  }
  else if (score <= 100) {
  	answer = "A";
  }
  else if (score > 100 )
  	answer = "INVALID SCORE";

  return answer;
}

console.log(convertScoreToGrade(91))