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
  return retirement;
  return `${fistName} retires in ${retirement} years`
}

const yearsLeft = yearsUntilRetirement(1992,'Willyan');
const yearsBob = yearsUntilRetirement(1980,'Bob');

console.log(yearsLeft, yearsBob)

*/

/*
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

*/

/* const calcAge = function(birthYear){
 return 2037 - birthYear
}

function yearsUntilRetirement (birthYear, fistName) {
 const age = calcAge(birthYear)
 const retirement = 65 - age;

 if(retirement > 0){
   console.log(`${fistName} retires in ${retirement} years`)
   return retirement
 } else{
   console.log(`${fistName} has already retired`)
   return -1
 }

}
console.log(yearsUntilRetirement(1989, 'Willyan'));
console.log(yearsUntilRetirement(1950, 'Mike'))

*/

//Coding Exercise

/*
/* const calcAverage = (a, b, c) => (a + b + c) /3;
  
  let scoreDolphins = calcAverage (80, 90, 80);
  let scoreKoalas = calcAverage(5, 5 , 5);
  
  const checkWinner = (avgDolphins, avgKoalas) => {
    
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log("It's a draw!");
    }
  };

  checkWinner(scoreDolphins, scoreKoalas);
  //repassamos os parametros aos avgDolphins e avgKoalas com o resultado da média
 

  //test 2;
  scoreDolphins = calcAverage (85, 54, 41);
  scoreKoalas = calcAverage(23, 34 , 27);
  console.log(scoreDolphins, scoreKoalas);
  checkWinner(scoreDolphins, scoreKoalas)
*/
/* 
const friend1 = 'Michael';
const frined2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter',  ]
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice'] não funciona

const firstName = 'Willyan'
const willyan = [firstName, 'Alves', 2024 - 2000, 'Dev', friends];
console.log(willyan)

//Exercise

const calcAge = function (birthYear){
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[years.length -1])];

console.log(ages)


const friends = ['Michael', 'Steven', 'Peter',];

//add elements
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

//remove elements
friends.unshift('John');
console.log(friends)

friends.pop(); //nãp precisa passar valor sempre remove o ultimo;
const popped = friends.pop();
console.log(popped);
console.log(friends)

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob')); //não tem bob então retorna falso

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')){
  console.log('You have a friend called Steven');
}



const calcTip = function (bill){
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length -1])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length -1] + tips[tips.length -1]]
console.log(bills, tips, totals);


const jonasArray = [
  'Jonas',
  'Willyan',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter','Steven']
]

const jonas = {
   firstName: 'Jonas',
   lastName: 'Willyan',
   age: 2037 - 1991,
   job: 'teacher',
   friends: ['Michael', 'Peter','Steven']
};
 */


/* const jonas = {
  firstName: 'Jonas',
  lastName: 'Willyan',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter','Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first'+ nameKey]);
console.log(jonas['last' + nameKey]);


jonas.location = 'Portugal';
jonas['twitter'] = '@wav_lll';
console.log(jonas);

/* const interestedIn = prompt('What do you want to know about Jonas ? Choose between fistName, lastName, age, job and friends');

if(jonas[interestedIn]){ //if true ! cant be undefined :D
console.log(jonas[interestedIn]); //than execute this line
  }else{ //else this
    console.log('Wrote request ! Choose between fistName, lastName, age, job and friends')
  } */

//Challenge
//Wrote a sentence like "Jonas has 3 friends", and his best friend
//is called Michael."

/* console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best \
friend is called ${jonas.friends[0]}`);
 */

/*

//OBJECTS METHODS
const jonas = {
  firstName: 'Jonas',
  lastName: 'Alves',
  birthYear: 2000,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  
  calcAge: function(){
    this.age =  2037 - this.birthYear;//reverenciar o objeto dentro dele mesmo.
    return this.age;
  }, // sempre lembrar de colocar virgula pois ainda estamos dentro do objeto

getSummary: function(){
  return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, 
  and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
}

};

console.log(jonas.calcAge());
console.log(jonas.age);

//challenge

console.log(jonas.getSummary())

*/





const mark = {
  fullName: 'Mark Miller',
  mass: '78',
  height:'1.69',
  calcBMI: function(){
   this.bmi = this.mass / (this.height * this.height);
   return this.bmi;
  }
  
}

const john = {
  fullName: 'John Smith',
  mass: '50',
  height:'1.20',
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },

  
}


mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi)

if(mark.bmi > john.bmi){
  console.log(`${mark.fullName}'s BMI (${mark.bmi} is higher than
    ${john.fullName}'s BMI ${john.bmi})`)
} else if(john.bmi > mark.bmi){
console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than
${mark.fullName}'s BMI ${mark.bmi}`)
}


