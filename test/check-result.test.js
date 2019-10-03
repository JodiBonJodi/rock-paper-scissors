// IMPORT MODULES under test here:
// import example from '../src/example.js';

import checkResult from '../check-result.js'


const test = QUnit.test;

test('will return 1 if users input is rock and computer input is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userSelection = 'rock';
    const computerGuess = 'SCISSORS';
   
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
});

test('will return 1 if users input is paper and computer input is rock', function(assert) {
     //Arrange
    // Set up your parameters and expectations
    const userSelection = 'paper';
    const computerGuess = 'ROCK';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
});

test('will return 1 if users input is scissors and computer input is paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userSelection = 'scissors';
    const computerGuess = 'PAPER';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
});

test('will return 0 if users input is rock and computer input is rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userSelection = 'rock';
    const computerGuess = 'ROCK';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});
test('will return 0 if users input is scissors and computer input is scissors', function(assert) {
     //Arrange
    // Set up your parameters and expectations
    const userSelection = 'scissors';
    const computerGuess = 'SCISSORS';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});
test('will return 0 if users input is paper and computer input is paper', function(assert) {
       //Arrange
    // Set up your parameters and expectations
    const userSelection = 'paper';
    const computerGuess = 'PAPER';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});

test('will return -1 if users input is rock and computer input is paper', function(assert) {
     //Arrange
    // Set up your parameters and expectations
    const userSelection = 'rock';
    const computerGuess = 'PAPER';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);
});

test('will return -1 if users input is scissors and computer input is rock', function(assert) {
        //Arrange
    // Set up your parameters and expectations
    const userSelection = 'scissors';
    const computerGuess = 'ROCK';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);
});

test('will return -1 if users input is paper and computer input is scissors', function(assert) {
       //Arrange
    // Set up your parameters and expectations
    const userSelection = 'paper';
    const computerGuess = 'SCISSORS';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);
});