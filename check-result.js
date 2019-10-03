


const checkResult = (userSelection, computerGuess) => {

    if (userSelection === 'rock' && computerGuess === 'ROCK') {
        return 0;
        // yourGuess.textContent = 'ROCK';
        // computerGeneratedGuess.textContent = 'ROCK';
    } else if (userSelection === 'scissors' && computerGuess === 'SCISSORS') {
        return 0;
        // yourGuess.textContent = 'SCISSORS';
        // computerGeneratedGuess.textContent = 'SCISSORS';
    } else if (userSelection === 'paper' && computerGuess === 'PAPER') {
        return 0;
        // yourGuess.textContent = 'PAPER';
        // computerGeneratedGuess.textContent = 'PAPER';
    } else if (userSelection === 'rock' && computerGuess === 'PAPER') {
        return -1;
        // yourGuess.textContent = 'ROCK';
        // computerGeneratedGuess.textContent = 'PAPER';
    } else if (userSelection === 'rock' && computerGuess === 'SCISSORS') {
        return 1;
        // yourGuess.textContent = 'ROCK';
        // computerGeneratedGuess.textContent = 'SCISSORS';
    } else if (userSelection === 'paper' && computerGuess === 'ROCK') {
        return 1;
        // yourGuess.textContent = 'PAPER';
        // computerGeneratedGuess.textContent = 'ROCK';
    } else if (userSelection === 'paper' && computerGuess === 'SCISSORS') {
        return -1;
        // yourGuess.textContent = 'PAPER';
        // computerGeneratedGuess.textContent = 'SCISSORS';
    } else if (userSelection === 'scissors' && computerGuess === 'ROCK') {
        return -1;
        // yourGuess.textContent = 'SCISSORS';
        // computerGeneratedGuess.textContent = 'ROCK';
    } else if (userSelection === 'scissors' && computerGuess === 'PAPER') {
        return 1;
        // yourGuess.textContent = 'SCISSORS';
        // computerGeneratedGuess.textContent = 'PAPER';
    }
};

export default checkResult;