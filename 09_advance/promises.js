// *** promise is an object***

// // const promiseOne = new Promise() 
 
//  // thorugh new keyword we get a new instance

// // promis has two parts - resolve and rejection


// // Promise One->
// const promiseOne = new Promise(function(resolve, reject){
//     // simply do an async task like->
//     // DB calls, cryptography, network 

//     setTimeout(function(){
//         console.log("async task is completed");    
//         resolve() // if we don't call resolve there will be no connection between this resolve and .then..so to connect both of these we cxall resolve()
//     }, 1000)
// }) // it takes a callback function


// // there is a connection of resolve with .then
// promiseOne.then(function(){ // this function automatically receives an argument  which helps to return the values here from previous part 
//     console.log("promise consumed");
//     // though we have called back resolve() thatswhy now "promise consumed" is also being prnted
// })


// // Promise TWO->
// // when we are not storing it under any variable then we can directly put .then after this total promise
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

// // Promise THREE ->
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "swastika", email: "example@333.com"}) // so whatever parameter we pass through resolve it will be returned by .then's function
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })


// Promise FOUR ->
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false // if we do true here it will always return the rejection comment
        if(!error){
            resolve({username: "swastika", password:"5987"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    // if we do->
    console.log(user);
    return user.username
    // it will not give the username and all..so we have to add again .then()
}).then((username) =>{ // this is called chaining this means which value is we are getting from above .then  it will be returned in a new chain
    console.log(username); 
}).catch(function(error){
    console.log(error);   
}).finally(() => console.log("the promise is either resolved or rejected")) // this finally always happens..



// promise five->

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false // if we do true here it will always return the rejection comment
        if(!error){
            resolve({username: "swastika", password:"5987"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})
// now we will use async await instead of using .then()....this async await also works as then and chatch..it waits for the work completion ...once the work is done it goes ahead..otherwise it gives error at that moment...we use it when we don't want to go ahead without connection of database
async function consumePromiseFive(){
    const response = await promiseFive
}