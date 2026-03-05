// object literal->
 // it is literally a object..

const user ={
    username : "swastika",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log(`got username :${username}  details from database`); 
        // // if we don't use this keyword here before (this.username) program get's confused because  there arre a lot of codes are present in program queue.. so we have to tell the program to take something from outside of the function..otherwise it will not decide what to take...so if we use this keyword it shows that we are telling to take the crrent context's something

        // so we should write ->
        //console.log(`got username :${this.username}  details from database`)
     
        //console.log(this); // it will give us total object property...
        
    }
}

// console.log(user.username);
//console.log(user.getUserDetails());

//console.log(this);// but if we want to print this in global context it will printt empty parathesis

// note->
// when we try to print this in global environment in browser console then it gives a lots of functions and property but if we do this under node environment it will show nothing 


// constructor
// if we want to make same structure many times we can use constructor

// when we write ->
//const promiseOne = new Promise()
//const date = new Date()
// here this "new" keyword is the constructor function // this new keyword or constructor function allow us to make multiple instances from one object literal

function User (username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}
 
const userOne = User("srijon", 3, true);
const userTwo = User("sostuu", 9, false);
console.log(userOne);// so when we are printing this it is overwriting userOne values...so this is not good for coding..it will damage total code...so that's why we need new keyword...it every time makes a new copy without overwriting any value and also doesn't damage other value. 

// so here just by adding new keyword we can avoid this code malfunction..

//26:32



