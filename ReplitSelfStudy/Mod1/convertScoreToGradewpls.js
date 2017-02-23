// Write a function called "convertScoreToGradeWithPlusAndMinus".

// Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) --> 'A'
// * (89  - 80) --> 'B'
// * (79  - 70) --> 'C'
// * (69  - 60) --> 'D'
// * (60  -  0) --> 'F'
// * If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// * If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
// * If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
// * There are is no F+ and there is no F-.

// var output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); // --> 'A-'

function convertScoreToGradeWithPlusAndMinus(score) {
  var answer;
  if (score < 0){
  	answer = "INVALID SCORE";
  }
  else if(score < 60){
  	answer = "F";
  }
  else if (score < 63){
  	answer = "D-";
  }
  else if (score < 68){
  	answer = "D";
  }
  else if(score < 70){
  	answer = "D+";
  }
  else if (score < 73){
  	answer = "C-";
  }
  else if (score < 78){
  	answer = "C";
  }
  else if (score < 80){
  	answer = "C+"
  }
  else if (score < 83){
  	answer = "B-";
  }
  else if (score < 88){
  	answer = "B";
  }
  else if (score < 90){
  	answer = "B+"
  }
  else if (score < 93){
  	answer = "A-";
  }
  else if (score < 98){
  	answer = "A";
  }
  else if (score <= 100){
  	answer = "A+"
  }
  else
  	{answer = "INVALID SCORE"}
  return answer
}

console.log(convertScoreToGradeWithPlusAndMinus(98))