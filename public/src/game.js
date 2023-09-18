let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click',
    () => {
        const guess = Number(document.querySelector('.guess').value);
// Enter the number
        if (!guess) {
            displayMessage('Enter the number!');
// Win
        } else if (guess === secretNumber) {
            displayMessage('You win!');
            document.querySelector('body').style.background = 'green';
            document.querySelector('.number').textContent = guess;
            if (score > highScore) {
                highScore = score;
                document.querySelector(`.highscore`).textContent = highScore;
            }
// Not guess
        } else if (guess !== secretNumber) {
            if (score > 1) {
                if (guess > secretNumber) {
                    displayMessage('Number is more');
                    score--;
                } else if (guess < secretNumber) {
                    displayMessage('Number is less');
                    score--;
                    document.querySelector('.score').textContent = score;
                }
            } else {
                displayMessage('You lose');
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.background = 'red';
            }
        }
    });

document.querySelector('.again').addEventListener('click', () => {
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   displayMessage('Start guessing');
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector(`.guess`).value = '';
   document.querySelector('body').style.background = 'black';
});
