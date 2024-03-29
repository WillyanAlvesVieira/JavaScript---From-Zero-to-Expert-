'use strict';

// console.log(document.querySelector('.message').textContent); // before change
// document.querySelector('.message').textContent = 'Correct Number!'
// console.log(document.querySelector('.message').textContent); //after change 

// document.querySelector('.number').textContent = 14;
// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 23,
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20) + 1; // fora do clique do botão
let score = 20; //tem que ser let pois é mutavel.
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', 
function(){

   const guess = Number(document.querySelector('.guess').value); //pega o valor colocado
    console.log(guess, typeof guess);

    if(!guess) {
   displayMessage('No Number!'); // Se clicar no Check sem NUMERO, gera a me
     //When player wins
    } else if (guess === secretNumber){
        displayMessage ('Correct Number! ✔')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        //Change de Highscore
    if(score > highscore){
       highscore = score;
       document.querySelector('.highscore').textContent = highscore;
    }

        //when guess is wrong
    } else if( guess !== secretNumber){
        if(score > 1 ){
            // document.querySelector('.message').textContent = guess > secretNumber ? 
            // 'Too high !🚀' : 'Too Low ! ☹' ;

            displayMessage(guess > secretNumber ? 
            'Too high !🚀' : 'Too Low ! ☹')

            score--; // score = score - 1
            document.querySelector('.score').textContent = score;
        } else {
            
            displayMessage ('You Lost the Game 💣!')
            document.querySelector('.score').textContent = 0;
        }
    } 
        //when guess is too high
    // } else if (guess > secretNumber){
    //     if(score > 1 ){
    //         document.querySelector('.message').textContent = 'Too high !🚀';
    //         score--; // score = score - 1
    //         document.querySelector('.score').textContent = score;
    //     } else {
            
    //         document.querySelector('.message').textContent = 'You Lost the Game 💣!'
    //         document.querySelector('.score').textContent = 0;
    //     } 

    //     //When guess is too low
    // } else if (guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too Low ! ☹';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost the Game 💣!'
    //         document.querySelector('.score').textContent = 0;
    //     }
       
    
});


document.querySelector('.again').addEventListener
('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})  