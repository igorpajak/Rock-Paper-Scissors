// // OK | Make array with three options: rock, paper, scissors
// // OK | Make function computerChoice which randomly picks one answer
// // Make prompt() where user picks one option
// // Make function game() which loops computer choices
// // Either computer and player has 5 rounds for selection
// // If playerSelection beats computer choice he wins, other way computer wins

// // Starting variables
// let choices = {
//    rock: 'Rock',
//    paper: 'Paper',
//    scissors: 'Scissors',
// };

// let playerScore = 0;
// let computerScore = 0;

// let playerSelection = prompt();
// const computerSelection = getComputerChoice(choices);

// // Function which picks computer answers
// function getComputerChoice(choices) {
//    const keys = Object.keys(choices);
//    const randomIndex = Math.floor(Math.random() * keys.length);
//    return choices[keys[randomIndex]];
// }

// const iteration = function () {
//    // Function rock beats scissors
//    function rockBeatsScissors(playerSelection, computerSelection) {
//       if (
//          playerSelection === choices.rock &&
//          computerSelection === choices.scissors
//       ) {
//          return 'player';
//       } else if (
//          playerSelection === choices.scissors &&
//          computerSelection === choices.rock
//       ) {
//          return 'computer';
//       } else {
//          return 'tie';
//       }
//    }

//    // Function scissors beats paper
//    function scissorsBeatsPaper(playerSelection, computerSelection) {
//       if (
//          playerSelection === choices.scissors &&
//          computerSelection === choices.paper
//       ) {
//          return 'player';
//       } else if (
//          playerSelection === choices.paper &&
//          computerSelection === choices.scissors
//       ) {
//          return 'computer';
//       } else {
//          return 'tie';
//       }
//    }

//    // Function paper beats rock
//    function paperBeatsRock(playerSelection, computerSelection) {
//       if (
//          playerSelection === choices.paper &&
//          computerSelection === choices.rock
//       ) {
//          return 'player';
//       } else if (
//          playerSelection === choices.rock &&
//          computerSelection === choices.paper
//       ) {
//          return 'computer';
//       } else {
//          return 'tie';
//       }
//    }

//    rockBeatsScissors();
//    paperBeatsRock();
//    scissorsBeatsPaper();
// };

// // Function game

// function game() {
//    // arrays for results
//    const playerResults = [];
//    const computerResults = [];

//    // 5 function launches
//    for (let i = 0; i < 5; i++) {
//       const result = iteration(); // function result
//       if (i === 'player') {
//          playerResults.push(result); // adding the result to the playerResults array
//       } else {
//          computerResults.push(result); // adding the result to the computerResults array
//       }
//    }

//    // saving scoreboards to localStorage
//    localStorage.setItem('playerResults', JSON.stringify(playerResults));
//    localStorage.setItem('computerResults', JSON.stringify(computerResults));

//    //game result
//    if (playerResults > computerResults) {
//       console.log(`Congrats you won!`);
//    } else if (playerResults < computerResults) {
//       console.log(`It's a pity - you lose!`);
//    } else {
//       console.log(`Haha it's a tie!`);
//    }
// }

// game();

// Define choices
const choices = {
   rock: 'Rock',
   paper: 'Paper',
   scissors: 'Scissors',
};

// Function to get computer choice
function getComputerChoice(choices) {
   const keys = Object.keys(choices);
   const randomIndex = Math.floor(Math.random() * keys.length);
   return choices[keys[randomIndex]];
}

// Function to compare player and computer selections
function compareSelections(playerSelection, computerSelection) {
   if (
      (playerSelection === choices.rock &&
         computerSelection === choices.scissors) ||
      (playerSelection === choices.scissors &&
         computerSelection === choices.paper) ||
      (playerSelection === choices.paper && computerSelection === choices.rock)
   ) {
      return 'player';
   } else if (
      (playerSelection === choices.rock &&
         computerSelection === choices.paper) ||
      (playerSelection === choices.paper &&
         computerSelection === choices.scissors) ||
      (playerSelection === choices.scissors &&
         computerSelection === choices.rock)
   ) {
      return 'computer';
   } else {
      return 'tie';
   }
}

// Function to run one iteration of the game
function iteration() {
   const playerSelection = prompt('Choose rock, paper, or scissors:');
   const computerSelection = getComputerChoice(choices);
   return compareSelections(playerSelection, computerSelection);
}

// Function to run the game
function game() {
   // Arrays to store results
   const playerResults = [];
   const computerResults = [];

   // Loop to run the game 5 times
   for (let i = 0; i < 5; i++) {
      const result = iteration(); // Run one iteration of the game
      if (result === 'player') {
         playerResults.push(result); // Add the result to the playerResults array
      } else if (result === 'computer') {
         computerResults.push(result); // Add the result to the computerResults array
      }
   }

   // Log the results to the console
   console.log(`Player results: ${playerResults}`);
   console.log(`Computer results: ${computerResults}`);

   // Compare the results and log the winner to the console
   if (playerResults.length > computerResults.length) {
      console.log(`Congrats you won!`);
   } else if (playerResults.length < computerResults.length) {
      console.log(`It's a pity - you lose!`);
   } else {
      console.log(`Haha it's a tie`);
   }
}

game();
