const clock = document.getElementById('clock')

let date = new Date()
console.log(date.toLocaleTimeString());


// i want to run this after some time again and again because we want current time and it ofcourse get changed every second, so we will use setInterval->

setInterval(function(){
    let date = new Date()
    //console.log(date.toLocaleTimeString());

    // now we will put it in clock which has written in html code->
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)// this is mili second
