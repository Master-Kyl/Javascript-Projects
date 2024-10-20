// Function to get the user's choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    // Check for valid choices including the cheat code
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('error');
    }
  };
  
  // Function to get the computer's choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
  
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // Function to determine the winner
  const determineWinner = (userChoice, computerChoice) => {
    // Check for the cheat code
    if (userChoice === 'bomb') {
      return 'The user won by using the bomb!';
    }
  
    // Check for a tie
    if (userChoice === computerChoice) {
      return 'The game is a tie';
    }
  
    // Determine the winner based on choices
    if (userChoice === 'rock') {
      return computerChoice === 'paper' ? 'The computer won' : 'The user won';
    }
  
    if (userChoice === 'paper') {
      return computerChoice === 'scissors' ? 'The computer won' : 'The user won';
    }
  
    if (userChoice === 'scissors') {
      return computerChoice === 'rock' ? 'The computer won' : 'The user won';
    }
  };
  
  // Main function to play the game
  const playGame = () => {
    const userChoice = getUserChoice('bomb'); // You can change this to test with other values
    const computerChoice = getComputerChoice();
  
    console.log('User choice:', userChoice);
    console.log('Computer choice:', computerChoice);
  
    // Determine the winner and log the result
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // Start the game
  playGame();
  