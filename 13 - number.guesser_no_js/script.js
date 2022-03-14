let min = 1;
    max = 10;
    winningNum = 2;
    guessesLeft = 3;


const game = documetn.querySelector('#game');
     minNUm = document.querySelector(".min-num");
     maxNum = document.querySelector(".max-num");
     guessBtn = document.querySelector('#guess-btn');
     guessInput = document.querySelector('#guess-inpup');
     message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function (){
    let guess = parseInt(guessInput.value);

    //validation
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Нужно вести число от " ${min} + " до " + ${max}` , 'red');
    }
});