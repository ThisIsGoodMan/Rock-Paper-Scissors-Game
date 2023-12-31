$(document).ready(() => {
    // Game logic

    // Define scores and DOMs


    // Actual Game Logic
    const playGame = () => {
        const rockBtn = dociment.getElementById('rock');
        const paperBtn = document.getElementById('paper');
        const scissorBtn = document.getElementById('scissors');
        const playerOptions = ['rock', 'paper', 'scissors'];
        const computerOptions = [rockBtn, paperBtn, ScissorsBtn];

        // Start the game
        playerOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Decrease moves left counter for ever click or function
                const movesLeft = document.getElementById('movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;
                // Decide computer choice
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];
                // Check who wins
                winner(this.innerText, computerChoice);
                // Start gameOver function when movesLeft = 0
                if (moves === 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
    }

    // Decide winner
    const winner = (player, cimputer) => {
        // CSS Class Selectors
        const result = document.querySelector(`.result`);
        const playerScore = document.querySelector(`.p-count`);
        const computerScore = document.querySelector(`.c-count`);
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        
        // Game Rules
        if (player === computer) {
            result.textContent = `Tie`;
        }
        else if (player == `rock`) {
            if (computer == `paper`) {
                result.textContent = `Computer Won`;
                computerScore++;
            } else {
                result.textContent = `Player Won`;
                playerScore++;
            }
        }
        else if (player == `scissors`) {
            if (computer == `rock`) {
                result.textContent = `Computer Won`;
                computerScore++;
            } else {
                result.textContent = `Player Won`;
                playerScore++;
            }
        } 
        else if (player == `paper`) {
            if (computer == `scissors`) {
                result.textContent = `Computer Won`;
                computerScore++;
            } else {
                result.textContent = `Player Won`;
                playerScore++;
            }
        }
    }

    // Game Over Function
    const gameOver = (playerOptions, movesLeft) => {
        const 
    }
});     