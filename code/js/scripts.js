$(document).ready(() => {
    const compChoice = document.getElementById('computer-choice');
    const yourChoice = document.getElementById('user-choice');
    const resultDisplay = document.getElementById('result');
    const playButton = document.getElementById('play');
    const possibleChoices = ['Rock', 'Paper', 'Scissors'];
    
    // Listen for click of choice, then enable 'Play' button
    const choices = document.getElementsByName('choice');
    choices.forEach((c) => {
        c.addEventListener('click', () => {
            playButton.disabled = false;
        });
    });
    
    // 
    playButton.addEventListener('click', (e) => {
        const buttonsArray = Array.from(choices);
        const selected = buttonsArray.filter((b) => b.checked);
        addTextToSpan(yourChoice, selected[0].id);
        const randChoice = generateComputerChoice();
        showResult(selected[0].id, randChoice)
        e.target.disabled = true;
        choices.forEach((b) => {
            b.checked = false;
        });
    });
    
    function addTextToSpan(spanControl, text) {
        spanControl.textContent = text;
    }
    
    function generateComputerChoice() {
        const randomNumber = Math.floor(Math.random() * possibleChoices.length);
        const computerChoice = possibleChoices[randomNumber];
        addTextToSpan(compChoice, possibleChoices[randomNumber]);
        return computerChoice;
    }

    // Guts of the game and results displayer
    const showResult = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            addTextToSpan(resultDisplay, 'Tie!');
        } else if (userChoice === 'Rock') {
            addTextToSpan (resultDisplay, computerChoice === 'Paper' ? 'You lost :(' : 'You won!');
        } else if (userChoice === 'Paper') {
            addTextToSpan (resultDisplay, computerChoice === 'Scissors' ? 'You lost :(' : 'You won!');
        } else if (userChoice === 'Scissors') {
            addTextToSpan (resultDisplay, computerChoice === 'Rock' ? 'You lost :(' : 'You won!');
        }
    };
    console.log(showResult);
});