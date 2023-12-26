$(document).ready(() => {
    let playerScore = 0;
    let computerScore = 0;

    // Arrays to store dice rolls
    const playerWins = [];
    const computerWins = [];

    // Declare hand throw

    const chooseNumber = () => Math.floor(Math.random() * 3) + 1;

    const computerChoice = document.getElementById('computer-choice');
    const userChoice = document.getElementById('user-choice');
    const displayResult = document.getElementById('result');
    const playButton = document.getElementById('play');
    const possibleChoices = ['rock', 'paper', 'scissors'];

    const choices = getElementsByName('Choices');
    
    choices.forEach((c) => {
        c.addEventListener('click', () => {
            playButton.disabled = false;
        });
    });

    

});


//     // Calculate rolls
// const calculateScore = (die1, die2) => {
//     if (die1 === 1 || die2 === 1) {
//         return 0;
//     } else if (die1 === die2) {
//         return (die1 + die2) * 2;
//     } else {
//         return die1 + die2;
//     }
// };

// // Update score
// const updateScore = () => {
//     playerScore = 0;
//     computerScore = 0;

    

//     $("#player-score").text(`${playerScore}`);
//     $("#computer-score").text(`${computerScore}`);
// };

//     // End
//     const endGame = () => {
//         let winner;
//         if (playerScore > computerScore) {
//             winner = "Player wins!";
//         } else if (computerScore > playerScore) {
//             winner = "Computer wins!";
//         } else {
//             winner = "It's a tie!";
//         }

//         $("#popup-message").text(winner);
//         $("#winner-popup").show();
//     };

// // Close event listener
// $("#close-popup").on("click", () => {
//     $("#winner-popup").hide();

//     resetGame();
// });
    

//     $("#roll-btn").on("click", () => {
//         // Roll dice and store rolls
//         const playerRoll = [rollDice(), rollDice()];
//         const computerRoll = [rollDice(), rollDice()];

//         playerDiceRolls.push(playerRoll);
//         computerDiceRolls.push(computerRoll);

//         // Update dice images and score
//         updateDiceImages(playerDiceRolls, computerDiceRolls);
//         updateScore();

//         rollCount++;

//         if (rollCount === 3) {
//             endGame();
//         }
//     });

//     $("#reset-btn").on("click", () => {
//         resetGame();
//     });

//     // Restart
//     resetGame();