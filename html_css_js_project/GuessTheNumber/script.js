let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.lastResult')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)


    });
}

function validateGuess (guess){
    if(isNaN(guess)){
        alert ('please enter a valid number')
    }else if(guess < 1){
        alert ('pleas enter a number more than one')
    } else if(guess > 100){
        alert ('please enter a number less than 100')
    } else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over, Randon number was ${randomNumber}`)
            endGame()
            
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('you guessed it right');
        endGame();
    } else if (guess < randomNumber){
        displayMessage('Number is TOOO low');
    } else if (guess > randomNumber){
        displayMessage('Number is TOOO high');
    }
}
function displayGuess(guess){ // cleanermethod 
    userInput.value = ' '
    guessSlot.innerHTML += ` ${guess} `
    numGuess++;
    remaining.innerHTML = `${11- numGuess}`
}


function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> start new Game</h2></h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();

}
function newGame(){
    const newGameButton =document.querySelector(`#newGame`)
    newGameButton.addEventListener('click', function(){
        randomNumber = (parseInt(Math.random() * 100 + 1));
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ` `
            remaining.innerHTML = `${11- numGuess}`;
            userInput.removeAttribute('disabled')
            startOver.removeChild(p);
        
        

        playGame = true

    })

}
