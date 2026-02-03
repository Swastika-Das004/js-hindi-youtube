// generating random color

const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[parseInt(Math.random() *16)];        
    }
    return color
}

const startChangingColor = function(){
    setInterval(chnageBGcolor, 1000)

    function chnageBGcolor(){
        document.body.style.backgroundColor = randomcolor()
    }
}
  

//stopChangingColor = function(){}

document.querySelector('#start').addEventListener('click', startChangingColor)

// document.querySelector('#stop').addEventListener('click', stopChangingColor(){})