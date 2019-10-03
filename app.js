import getRandomThrow from './get-random-throw.js';
import checkResult from './check-result.js';

const gameButton = document.getElementById('game-button');
const resetButton = document.getElementById('reset-button');
const yourGuess = document.getElementById('your-guess');
const computerGeneratedGuess = document.getElementById('computer-guess');


//set initial state
let correctGuess = 0;
let countWin = 0;
let countLoss = 0;


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


const result = checkResult(userSelection, computerGuess);
gameButton.addEventListener('click', humanGuess);
resetButton.addEventListener('click', hardReset);