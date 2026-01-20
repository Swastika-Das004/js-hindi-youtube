const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',  function(e){ //after click whta function is gonna happen-
        console.log(e.target);    

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id  //(or we can also simply assign "grey")
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id  //(or we can also simply assign "yellow")
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id  //(or we can also simply assign "white")
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id  //(or we can also simply assign "blue")
        }
    })
})
