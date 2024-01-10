'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534; uso restrito do javaScript
 
*/


/*
//FUNCTIONS SECTION

function logger(){
   console.log('My name is Willyan');
}
//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
  const juice = ` Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(7, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2 , 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

*/

/* //FUNCTION DECLARTION

const age1 = calcAge1(1991);

// const calcAge1 = (birthYear) => {
// return 2037 - birthYear 
// }

function calcAge1(birthYear){
return 2037 - birthYear;
}

//EXPRESSION

const calcAge2 = function(birthYear){
  return 2037 - birthYear;
}

const age2 = calcAge2(1992)

console.log(age1 , age2)

*/


//FUNCTION EXPRESSION

/*const calcAge2 = function (birthYear){
return 2037 - birthYear;
}
const age2 = calcAge2(1992)
console.log(age2)*/

//ARROW FUNCTION

/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, fistName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${fistName} retires in ${retirement} years`
}

const yearsLeft = yearsUntilRetirement(1992,'Willyan');
const yearsBob = yearsUntilRetirement(1980,'Bob');

console.log(yearsLeft, yearsBob)

*/

function cutFruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor(apples, oranges){
  const applePieces = cutFruitPieces(apples); 
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2,3));

