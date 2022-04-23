'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent ='Correct Number'; 
*/

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;
//console.log(document.querySelector('.number').textContent = SecretNumber);

document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    console.log(guess);

    //when there is no input
    if (!guess ) {
        document.querySelector('.message').textContent = 'No Number';
    }

    else if(guess > 20){
        document.querySelector('.message').textContent = 'Enter number between 1 and 20';
    }
    //when there guess is correct
    else if (guess == SecretNumber) {
        document.querySelector('.number').textContent = SecretNumber;
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('body').style.backgroundColor = 'Green';
        document.querySelector('.number').style.width = '30rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;

        }


    }

    //when guess is high
    else if (guess > SecretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You Loose';
            document.querySelector('.score').textContent = 0;
        }

    }
    //when guess is low
    else if (guess < SecretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You Loose';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})