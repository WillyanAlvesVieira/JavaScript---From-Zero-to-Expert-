// Remember, we're gonna use strict mode in all scripts now!
'use strict'

//PROBLEM:

// we work for a company build a smart home thermometer
// or most recent task is this : "Given" and array of temperatures of one day 
// calculate the temperature amplitude keep in mind that sometimes there might be 
// a sensor error


// 1) Understading the problem
// - whats is temp amplitude ? answer: difference between highest and lowest temp
// - how to compute max and min temperatures?
// - what's a sensor error ? and what do do ?


//2) breaking up into sub-problems
// - how to ignore errors ?
// - find max value in temperature array - Done
// - find min value in temperature array - Done
// - subtract min from max (amplitude) and return it 


// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
    
//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;

//         if(curTemp > max) max = curTemp
//         if(curTemp < min) min = curTemp
//     }

//     console.log(max, min)
//     return max - min
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//max = 3
//max = 7

//PROBLEM 2?
// Function should now receive 2 arrays of temps


//') Understanding the problem
// - with 2 arrays, should we implement functionality twice ? NO! 
// Just merge two arrays

//2) Breaking up into sub-problems
// - merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {

//     const temps = t1.concat(t2);

//     console.log(temps)

//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;

//         if(curTemp > max) max = curTemp
//         if(curTemp < min) min = curTemp
//     }

//     console.log(max, min)
//     return max - min
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9 , 0, 5] );
// console.log(amplitudeNew);


// DEBBUGING SECTION

// const measureKelvin = function(){
//     const measurement = {
//         type: 'temp',
//         unit: 'cels',

//         //C) FIX THE BUG
//         // value: Number(prompt('Degrees celsius:'))
//         value: 10,
//     };

//     //B) FIND THE BUG

//     console.table(measurement)
//     // console.log(measurement.value)
//     // console.warn(measurement.value)
//     // console.error(measurement.value)

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// //A) identify the bug

// console.log(measureKelvin()); // Não esquecer de fechar os parenteses para executar a function

// const calcTempAmplitudeBug = function (t1, t2) {

//     //using a debugger

//         const temps = t1.concat(t2);
    
//         console.log(temps)
    
//         let max = temps[0];
//         let min = temps[0];
    
//         for (let i = 0; i < temps.length; i++) {
//             const curTemp = temps[i];
//             if(typeof curTemp !== 'number') continue;
    
            
//             if(curTemp > max) max = curTemp
//             if(curTemp < min) min = curTemp
//         }
    
//         console.log(max, min)
//         return max - min
//     };
    
//     const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9 , 4, 5] );
//     //A) Identify THE bug
//     console.log(amplitudeBug);

//CODING CHALLENGE 

//1) Understading the Problem
// - Array transformed to string, separated by ...
// = What is the X Days ?: i + 1

//2) Breaking up into sub problems;
// transform array into string
//- transform each element to string with ºC
// - Strings needs to contain day (i + 1)
// - add ... between elements and start and end of string
//- log string to console

const data1 = [17, 21, 23];
const data2 = [12 ,5, -5, 0, 4];

console.log(`${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`)

const printForecast = (arr) =>{
    
    let str = '';
    
    for(let i = 0; i < arr.length; i++){

        str = str + `${arr[i]}ºC in ${i + 1} days ... `
        //stt += `${arr[i]}ºC in ${i + 1} days ... `
    }
    
    console.log('... ' + str);
    
};

printForecast(data1);
