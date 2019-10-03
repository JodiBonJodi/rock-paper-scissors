import getRandomThrow from './get-random-throw.js';


const gameButton = document.getElementById('game-button');
const resetButton = document.getElementById('reset-button');
const yourGuess = document.getElementById('your-guess');
const computerGeneratedGuess = document.getElementById('computer-guess');


//set initial state
let correctGuess = 0;
let countWin = 0;
let countLoss = 0;
let result

//define DOM utility
const hardReset = () => {
    correctGuesses = 0;
    countWin = 0;
    countLoss = 0;
    
}

const humanGuess = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelection = selectedRadioButton.value; 
};

const checkResult = (userSelection, computerGuess) => {
    if (userSelection === 'rock' && computerGuess === 'ROCK') {
        result = 0;
        yourGuess.textContent = 'ROCK';
        computerGeneratedGuess.textContent = 'ROCK';
    }   else if (userSelection === 'scissors' && computerGuess === 'SCISSORS') {
        result = 0;
        yourGuess.textContent = 'SCISSORS';
        computerGeneratedGuess.textContent = 'SCISSORS';
    } else if (userSelection === 'paper' && computerGuess === 'PAPER') {
        result = 0;
        yourGuess.textContent = 'PAPER';
        computerGeneratedGuess.textContent = 'PAPER';
    } else if (userSelection === 'rock' && computerGuess === 'PAPER') {
        result = -1;
        yourGuess.textContent = 'ROCK';
        computerGeneratedGuess.textContent = 'PAPER';
    } else if (userSelection === 'rock' && computerGuess === 'SCISSORS') {
        result = 1;
        yourGuess.textContent = 'ROCK';
        computerGeneratedGuess.textContent = 'SCISSORS';
    } else if (userSelection === 'paper' && computerGuess === 'ROCK') {
       result = 1;
       yourGuess.textContent = 'PAPER';
       computerGeneratedGuess.textContent = 'ROCK';
    } else if (userSelection === 'paper' && computerGuess === 'SCISSORS') {
        result = -1;
        yourGuess.textContent = 'PAPER';
        computerGeneratedGuess.textContent = 'SCISSORS';
    } else if (userSelection === 'scissors' && computerGuess === 'ROCK') {
        result = -1;
        yourGuess.textContent = 'SCISSORS';
        computerGeneratedGuess.textContent = 'ROCK';
    } else if (userSelection === 'scissors' && computerGuess === 'PAPER') {
        result = 1;
        yourGuess.textContent = 'SCISSORS';
        computerGeneratedGuess.textContent = 'PAPER';
    }
};

const result = checkResult(userSelection, computerGuess);

gameButton.addEventListener('click', humanGuess);
resetButton.addEventListener('click', hardReset);