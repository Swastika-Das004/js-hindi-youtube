let randomNumber = (parseInt(Math.random() *100 +1)); // we want numbers from 1 to 100 and it hsould not be 0 thats why we have added 1

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

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateCheck(guess)
    })
}

function validateCheck(guess){
    if(isNaN(guess)){
        displayMessage("please enter a valid number");
    }else if(guess < 1){
        displayMessage("please enter a valid number");
    } else if (guess > 100){
        displayMessage("please enter a valid number");
    } else {
        prevguess.push(guess)
        if( numguess === 11){
            displayMessage(`game is over!!..random number is ${randomNumber}`)
            endgame()
        } else {
            prevguess.push(guess)
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess === randomNumber){
        displayMessage("yeyyy!!!..you guessed it right");
        endgame()
    } else if (guess < randomNumber){
        displayMessage("number is too loww");
    } else if (guess > randomNumber){
        displayMessage("number is too high");
    }

}

function displayGuess(guess){
    userinput.value = '';
    guessSlot.innerHTML += `${guess} `
    numguess++;
    remaining.innerHTML = `${11- numguess}`

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newgame">Start new game</h2>`
    startOver.appendChild(p) 
    playgame = false
    newgame();
}

function newgame(){
    const newgamebutton =document.querySelector('#newgame')
    newgamebutton.addEventListener('click', function(e){
        randomNumber = (parseInt(Math.random() *100 +1))
        prevguess = []
        numguess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML =  `$(11 - numguess)`
        userinput.removeAttribute('disabled')
        startOver.removeChild(p)

        playgame = true
    })
}



