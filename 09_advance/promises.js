// const promiseOne = new Promise() 
 
 // thorugh new keyword we get a new instance

// promis has two parts - resolve and rejection


// Promise One->
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


// Promise TWO->
// when we are not storing it under any variable then we can directly put .then after this total promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

// Promise THREE ->
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "swastika", email: "example@333.com"}) // so whatever parameter we pass through resolve it will be returned by .then's function
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


// Promise FOUR ->
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "hitesh", password:"5987"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {

    // 26:00
})