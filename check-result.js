const checkResult = (userSelection, computerGuess) => {

    if (userSelection === computerGuess) {
        return 'draw';
       
    } else if (userSelection === 'rock' && computerGuess === 'paper') {
        return 'loss';

    } else if (userSelection === 'rock' && computerGuess === 'scissors') {
        return 'win';
      
    } else if (userSelection === 'paper' && computerGuess === 'rock') {
        return 'win';
       
    } else if (userSelection === 'paper' && computerGuess === 'scissors') {
        return 'loss';
       
    } else if (userSelection === 'scissors' && computerGuess === 'rock') {
        return 'loss';

    } else if (userSelection === 'scissors' && computerGuess === 'paper') {
        return 'win';
    }
};

export default checkResult;