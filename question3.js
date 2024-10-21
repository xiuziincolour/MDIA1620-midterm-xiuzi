const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

//determine a proper function name and parameter variable name
function LunchMoneyManagement(paramVariable1, paramVariable2,paramVariable3, paramVariable4){
let name = paramVariable1
let money =paramVariable2
let lunchitem= paramVariable3
let price = paramVariable4

  /*planning
  name is variable
  luchitem is variable
  price is variable
  money is variable
  If the student has enough money to buy lunch, show "[student name] purchased [lunch item] purchased!"
  If the student does not have enough money, show "[student name] does not have sufficient funds to buy [lunch item]!"
  ask four questions:
  Please give me your name.
  How much money do you have?
  What do you want to buy?
  How much does this cost?
  */

  //write your code here
  if (money < price) {
    console.log ("[student name] does not have sufficient funds to buy [lunch item]!");
  }
  else {console.log ("[student name] purchased [lunch item] purchased!");

  }


function StartApp(){
  readline.question('Please tell me your name.', _name => {
    readline.question('How much money do you have?', _money => {
      readline.question('What do you want to buy?', _lunchitem => {
        readline.question('How much does this cost?', _price => {

          //call your function here.
          LunchMoneyManagement(_name, Number(_money),_lunchitem, Number(_price))

          // readline.close();
          if(_input4 !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();}