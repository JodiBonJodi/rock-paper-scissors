


const checkResult = (userSelection, computerGuess) => {

    if (userSelection === 'rock' && computerGuess === 'ROCK') {
        return 0;
        
    } else if (userSelection === 'scissors' && computerGuess === 'SCISSORS') {
        return 0;
     
    } else if (userSelection === 'paper' && computerGuess === 'PAPER') {
        return 0;
       
    } else if (userSelection === 'rock' && computerGuess === 'PAPER') {
        return -1;

    } else if (userSelection === 'rock' && computerGuess === 'SCISSORS') {
        return 1;
      
    } else if (userSelection === 'paper' && computerGuess === 'ROCK') {
        return 1;
       
    } else if (userSelection === 'paper' && computerGuess === 'SCISSORS') {
        return -1;
       
    } else if (userSelection === 'scissors' && computerGuess === 'ROCK') {
        return -1;

    } else if (userSelection === 'scissors' && computerGuess === 'PAPER') {
        return 1;
    }
};

export default checkResult;