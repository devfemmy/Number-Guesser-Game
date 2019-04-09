//this is a guesser game where users can enter numbers between the range of 1 to 10;
let max = 10;
let min = 1;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

//UI Elements
const game = document.getElementById('game');
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num');
const guessBtn = document.getElementById('guess-value');
const guessInput = document.getElementById('guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
        console.log(1);    
    }


});

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Pls enter a number between ${min} and ${max}`, 'red');
    }
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU Win!`);
       
    }else{
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            //game is lost
            gameOver(false, `Game Over, you lost! The correct number 
            was ${winningNum}`);
           
        }else{
            //game continues - answer is wrong
            guessInput.style.borderColor = 'red';
            guessInput.value = '';

            //tell user answer is wrong
            setMessage(`${guess} is wrong, you have ${guessesLeft} tries left`, 'red')
        }
    }
});

//function for win or lose
function gameOver(win, msg) {
    let color;
    win === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);  

    //play again
    guessBtn.value = 'Play again';
    guessBtn.className = 'play-again';
}

//set message function
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

//function to get winning number
function getRandomNum(min, max) {
 return  Math.floor(Math.random()*((max-min+1)-min)) ;

}