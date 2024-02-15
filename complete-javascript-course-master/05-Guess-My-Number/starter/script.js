'use strict';

// console.log(document.querySelector('.message').textContent); // before change
// document.querySelector('.message').textContent = 'Correct Number!'
// console.log(document.querySelector('.message').textContent); //after change 

// document.querySelector('.number').textContent = 14;
// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 23,
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random()*20) + 1; // fora do clique do botão
let score = 20; //tem que ser let pois é mutavel.

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', 
function(){

   const guess = Number(document.querySelector('.guess').value); //pega o valor colocado
    console.log(guess, typeof guess);

    if(!guess) {
     document.querySelector('.message').textContent = 'No Number!'; // Se clicar no Check sem NUMERO, gera a me
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number! ✔'


    } else if (guess > secretNumber){
        if(score > 1 ){
            document.querySelector('.message').textContent = 'Too high !🚀';
            score--; // score = score - 1
            document.querySelector('.score').textContent = score;
        } else {
            
            document.querySelector('.message').textContent = 'You Lost the Game 💣!'
            document.querySelector('.score').textContent = 0;
        }

       
    } else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low ! ☹';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost the Game 💣!'
            document.querySelector('.score').textContent = 0;
        }
       
    } 
}) 