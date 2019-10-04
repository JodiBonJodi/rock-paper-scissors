// IMPORT MODULES under test here:
// import example from '../src/example.js';

import checkResult from '../check-result.js';


const test = QUnit.test;

test('will return win if users input is rock and computer input is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userSelection = 'rock';
    const computerGuess = 'scissors';
   
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('will return win if users input is paper and computer input is rock', function(assert) {
     //Arrange
    // Set up your parameters and expectations
    const userSelection = 'paper';
    const computerGuess = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('will return win if users input is scissors and computer input is paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userSelection = 'scissors';
    const computerGuess = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('will return draw if users input equals computer input', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userSelection = 'rock';
    const computerGuess = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});


test('will return loss if users input is rock and computer input is paper', function(assert) {
     //Arrange
    // Set up your parameters and expectations
    const userSelection = 'rock';
    const computerGuess = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'loss');
});

test('will return loss if users input is scissors and computer input is rock', function(assert) {
        //Arrange
    // Set up your parameters and expectations
    const userSelection = 'scissors';
    const computerGuess = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'loss');
});

test('will return loss if users input is paper and computer input is scissors', function(assert) {
       //Arrange
    // Set up your parameters and expectations
    const userSelection = 'paper';
    const computerGuess = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userSelection, computerGuess);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'loss');
});