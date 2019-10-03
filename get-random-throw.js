const getRandomThrow = () => {
    let computerSelection = Math.floor(Math.random() * 3) + 1;


    if (computerSelection === 1) {
        return 'ROCK';
    } else if (computerSelection === 2) {
        return 'PAPER';
    } else if (computerSelection === 3) {
        return 'SCISSORS';
    }
};

export default getRandomThrow;