const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/


//determine a proper function name and parameter variable name
function ThePassword(paramVariable1, paramVariable2){

  let password = paramVariable1
  let input = paramVariable2

  /* planning
password is variable
input is variable
input === password
if the user's input matches the password exactly, show "Access Granted!"
if the user's input does not match, show "Access Denied!"
if the user's input is "I forgot", show "Here is a hint"
if the user's input is "reset", show "Let's reset your account"
Ask two questions:
Set up your password.
Type your password.
  */

 if (
input === password) {
  console.log("Access Granted!");
}
else {
 console.log("Access Denied!");
}

if( 
  input = "forgot") {
    console.log("Here is a hint.");
  }
 else if(
  input = "reset"){
    console.log("Let's reset your account.");
  }
}

//CHALLENGE FUNCTION


function StartApp(){
  readline.question('Set up your password.', _password => {
    readline.question('Type your password.', _input => {

      //call your function here.
      ThePassword(_input, Number(_password))

      // readline.close();
   
      if(_input !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();