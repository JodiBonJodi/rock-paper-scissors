const getRandomThrow = (computerGeneratedGuess) => {
    let computerSelection = Math.floor(Math.random() * 3) + 1;


    if (computerSelection === 1) {
        computerGeneratedGuess.textContent = 'ROCK';
    } else if (computerSelection === 2) {
        computerGeneratedGuess.textContent = 'PAPER';
    } else if (computerSelection === 3) {
        computerGeneratedGuess.textContent = 'SCISSORS';
    }
};

export default getRandomThrow;