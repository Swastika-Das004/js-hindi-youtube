const randomNumber = (parseInt(Math.random() *100 +1)); // we want numbers from 1 to 100 and it hsould not be 0 thats why we have added 1

const submit = document.querySelector('#subt')
const  userinput= document.querySelector('#guessField')
const  guessSlot= document.querySelector('.guesses')
const  remaining= document.querySelector('.lastResult')
const  lowOrHi= document.querySelector('.lowOrHi')
const  startOver= document.querySelector('.resultParas')

const p = document.querySelector('p')

let prevguess = []
let numguess = 1

let playgame = true

function validateCheck(guess){
    if(isNaN(guess)){
        console.log("please enter a valid number");
    }else if(guess < 1){
        console.log("please enter a valid number");
    } else if (guess > 100){
        console.log("please enter a valid number");
    } else {
        prevguess.push()
        if( guess === 11){
            displayMessage(`gane is over!!..you have 0 guesses left`)
            endgame()
        } else {
            displayGuess(guess)
        }
    }
}

function checkguess(guess){
    if(guess = randomNumber){
        console.log("yeyyy!!!..you guessed it right");
        endgame()
    } else if (guess < randomNumber){
        console.log("number is too loww");
    } else (guess > randomNumber){
        console.log("number is too high");
    }

}

function displayGuess(guess){
    userinput.value = '';
    guessSlot.innerHTML += `${guess}`
    numguess++
    
}

function displayMessage(message){

}



