/*
 let js = "amazing"
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'Coder'
let myCurrentJob = 'Teacher'

let job1 = 'programmer'
let job2 = 'teacher'

console.log(myFirstJob); 


// Variable name conventions //


let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log( javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);;

console.log(typeof null);


let age = 30;
age = 31;
 
const birthYear = 1991;
// birthYear = 1990;


//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Alves';
console.log(firstName + ' ' + lastName);

// Assignment operators

let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4
x++; //x = x + 1
x--; // x = x - 1
x--;
console.log(x);

//comparison Operators

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019)



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25-10-5);

let x, y;

x = y = 25 - 10 - 5;
console.log(x,y)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);

console.log(averageAge);

 Write your code below. Good luck! 🙂 

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;


const BMIMark = massMark / (heightMark * heightMark)
const BMIJohn = massJohn / (heightJohn * heightJohn)

console.log(BMIMark, BMIJohn)

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);



const firstName = 'Willyan';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;


const willyan = "I'm " + firstName + ',a ' + (year - birthYear)
+ ' years old' + job + '!';

console.log(willyan);

const willyanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(willyanNew); 

console.log(`Just a regular string...`)

console.log(`String
multiple
tankin`);



const age = 15;

if(age >= 18){
    console.log('Sarah can start drivers license ' )
} else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait Another ${yearsLeft} years :)`)
}

const birthYear = 1894;
let century;

if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(`Você Nasceu no século ${century}`)


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than Johns's (${BMIJohn})!`)
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})!`)
}   


 // type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log('i am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2')

let n = '1' + 1;

n = n - 1; // operador de - faz com que vire um numero. se fosse + seria 111
console.log(n);

//false values: 0, '', undefined, NaN, False;

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100; //boolean true if (0, '', undefined, NaN )it will be  false;
if(money){
  console.log("Dont spend it all ;)");
}else{
  console.log('You should get a job!');
}

let height;
if(height){
  console.log('YAY! Height is defined')
}else{
  console.log('Height is UNDEFINED')
}


const age = '18';
if(age === 18) console.log('You Just Became an Adult (strict)');

if(age == 18) console.log('You Just Became an Adult (loose)');



const favourite = Number(prompt("What's your favourite number"));
console.log(favourite);

if(favourite === 23) { // 23 === 23 virou um numero.
  console.log('Cool" 23 is a amazing number!')
}else if(favourite === 7){
  console.log('7 is also a cool number');
} else{
  console.log('Number is not 23 or 7');
}

if(favourite !== 23) console.log('Why not 23 ?');



const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision )
console.log(hasDriversLicense  || hasGoodVision)
console.log(!hasDriversLicense);

//const shouldDrive = hasDriversLicense && hasGoodVision;
 //if (shouldDrive){
 // console.log('Sarah is able to drive!');
//}else{
 // console.log('Someone else should drive...');
//}

const isTired = true; //C

console.log(hasDriversLicense || hasGoodVision || isTired);

const driveIfItsGood = hasDriversLicense && hasGoodVision && !isTired;
if(driveIfItsGood){
  console.log('Sarah can drive')
}else{
  console.log('Sarah cant drive')
}
*/

/* Write your code below. Good luck! 🙂 

1. Calculate the average score for each team, using the test data included below. 
The average score for Dolphins should be assigned to the scoreDolphins variable, 
and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, 
and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.*/ 

/*
const scoreDolphins = (100+ 100 + 110) / 3;
const scoreKoalas = (88 + 100 + 110) / 3;

if(scoreDolphins > scoreKoalas){
  console.log("Dolphins win the trophy")
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy")
}else{scoreDolphins === scoreKoalas
console.log('Both win the trophy')}



const scoreDolphins = (97+ 112 + 100) / 3;
const scoreKoalas = (109 + 95 + 98) / 3;

console.log(scoreDolphins);
console.log(scoreKoalas)


if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
  console.log('Dolphins win the trophy');
  
}else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
  console.log('Koalas win the trophy');

}else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100 ){
  console.log('Both win the trophy');
  
}else{
  console.log('No one wins the trophy')
}



const day = 'monday';

switch(day){
  case 'monday': //day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break; //sem o break o código contiua sendo lido até um novo break
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record Videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
    default:
      console.log('Not a valid day')
}



let days = 'saturday'

  if (days === 'monday'){
  console.log('Plan course structure')
  console.log('Go to coding meetup')

  } else if ( days === 'tuesday'){
  console.log('Prepare theory videos');

  } else if ( days === 'wednesday' || days === 'thursday'){
  console.log('Write code examples')

  } else if (days === 'friday'){
    console.log('Record Videos')

  } else if (days === 'saturday' || days === 'sunday'){
  console.log('Enjoy the weekend :D')

  } else{
    console.log('Not a Valid day')
}
  


//Statements and Expressions

//Ternary Operator (if and else)

const age = 23;
age >= 18 ? console.log('I like to drink wine ') : 
console.log('I like to drink water ');

const drink =  age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18){
  drink2 ='wine';  
}else{
  drink2 = 'water'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)



const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value
its ${bill + tip}`)

*/

  
  








