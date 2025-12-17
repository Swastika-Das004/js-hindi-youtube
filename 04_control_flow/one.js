// if statement

// if(condition){

// }

//comparison operators -- >, <, <=, >=, ==, !=, ===

const score = 300
if(score==300){
    console.log("executed");
    
}

const a = 2
if(2 === "2"){
    console.log("it is due to ==");
}

// it will show nothing because === check not only value also its datatype so 2 and "2" is not same one is integer and another one is string...but == doesn't take it as error

const marks = 200

if(marks > 100){
    const subject = "OS" // but if we write var instead of const or let this subject can be accessed globally..because var is a global variable type
    console.log(`the subject is : ${subject}`);
}
//console.log(`the subject is : ${subject}`);

// it will show error because the subjeect is not under golabal scope..it is only present under if function..so it can be used only within those {} of if...

const balance = 1000
//sometimes we can write without scope-->
if(balance>500) console.log("testing"); // though it is not a good practice

// nested if-else

const value = 1000

if (value<500) {
    console.log("less than 500");
} else if (value<750) {
    console.log("less than 750");
}else if(value<1200){
    console.log("less than 1200"); 
}

// multiple condition check

const userloggedIn= true
const debitCard= true

if (userloggedIn && debitCard){ // using and(&&)
    console.log("allow to buy course");     
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");   
}



