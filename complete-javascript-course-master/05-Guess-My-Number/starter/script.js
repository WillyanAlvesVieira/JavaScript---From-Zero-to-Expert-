'use strict';

// console.log(document.querySelector('.message').textContent); // before change
// document.querySelector('.message').textContent = 'Correct Number!'
// console.log(document.querySelector('.message').textContent); //after change 

// document.querySelector('.number').textContent = 14;
// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 23,
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', 
function(){
    console.log(document.querySelector('.guess').value);
    document.querySelector('.message').textContent = 'Correct Number!'

})