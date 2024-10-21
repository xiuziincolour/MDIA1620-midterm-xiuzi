const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

//determine a proper function name and parameter variable name
function MidtermGradingSystem(paramVariable1, paramVariable2){
  let name = paramVariable1;
  let grade = paramVariable2;

/* palnning
 name is variable
 grade is variable
 if the score is 86 and above show "Excellent! [Student Name] has an A."
 if the score is between 72 and 85 show "Great job! [Student Name] has a B."
 if the score is between 60 and 71 show "Good effort! [Student Name] has a C."
 if the score is between 50 and 59 show "Needs improvement. [Student Name] has a D."
 if the score is below 50, show "Fail. [Student Name] has a F.
 ask two questions:
 Please type your name.
 Please type your score.
*/

//write your code here

  if ( grade >= 86 ) {
    console.log("Excellent! &(paramVariable1) has an A.");
  }
  else if ( grade <= 85 && grade >= 72){
    console.log ("Great job! [Student Name] has a B.");
  }
  else if (grade >=60 && grade <= 71) {
    console.log("Good effort! [Student Name] has a C.");
  }
  else if (grade >= 50 && grade <=59) {
    console.log ("Needs improvement. [Student Name] has a D");
  }
  else if (grade <50){
    console.log ("Fail. [Student Name] has a F");
  }
}

function StartApp(){
  readline.question('Please type your name.', _name => {
    readline.question('Please type your score.', _grade => {

      //call your function here.
      MidtermGradingSystem(_name, Number(_grade))

      // readline.close();
      if(_grade !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();