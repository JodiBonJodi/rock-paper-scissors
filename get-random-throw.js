const getRandomThrow = () => {
    let computerSelection = Math.floor(Math.random() * 3) + 1;

    if (computerSelection === 1) {
        return 'rock';
    } else if (computerSelection === 2) {
        return 'paper';
    } else if (computerSelection === 3) {
        return 'scissors';
    }
};

export default getRandomThrow;