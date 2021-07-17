// Get the user's choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    }
    else {
        console.log('There is an error! Please enter paper, rock or scissors, thank you!');
    }
}
// console.log(getUserChoice('Paint')); 


// Get the computer’s choice
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        default:
            return 'scissors';
    }
}
// console.log(getComputerChoice()); 


// Compare the two choices and determine a winner.
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game was a tie!"
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won the game!';
        } else {
            return 'You won the game, Congratulations!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won the game!';
        } else {
            return 'You won the game, Congratulations!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won the game!';
        } else {
            return 'You won the game, Congratulations!';
        }
    }

    if (userChoice === 'bomb') {
        return 'You won the game, Congratulations!';
    }
}
//  console.log(determineWinner('paper', 'rock'));


// Start the program and display the results

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('The computer chose:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame()