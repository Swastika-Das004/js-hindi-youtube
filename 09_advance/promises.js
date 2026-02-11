// const promiseOne = new Promise() 
 
 // thorugh new keyword we get a new instance

// promis has two parts - resolve and rejection

const promiseOne = new Promise(function(resolve, reject){
    // simply do an async task like->
    // DB calls, cryptography, network 

    setTimeout(function(){
        console.log("async task is completed");    
        resolve() // if we don't call resolve there will be no connection between this resolve and .then..so to connect both of these we cxall resolve()
    }, 1000)
}) // it takes a callback function


// there is a connection of resolve with .then
promiseOne.then(function(){ // this function automatically receives an argument  which helps to return the values here from previous part 
    console.log("promise consumed");
    // though we have called back resolve() thatswhy now "promise consumed" is also being prnted
})