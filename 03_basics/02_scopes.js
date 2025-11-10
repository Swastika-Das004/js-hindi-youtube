// if (true) {
//     let a = 10
//     const b= 20
//     var c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c);

// whatever is inside {} these are called scope.. let and const are block scope that means when we decalre them inside {} it can't be read by program outside of {}..thatswhy in this above program a and b will not be printed..because we want to print it outside of the {} ..here only the c will be printed because var is function scoped, var allows programs to read the value outside of the {} 

//--------------------------------------------------------------------------------------------------------------

// nested function-->>
// function one(){
//     const usergirl = "swastika"

//     function two(){
//         const website = "youtube"
//         console.log(usergirl);    
//     }
//     //console.log(website); // this will give error because we have declared website inside scope and it cann't be accesed outside of the scope...
    
//     two()
// }

// one()

// we need to rememeber one thing in a way that children can take things from their parents but parents cann't take things from their children..that means when we are having double scope or scope inside scope or nested function  so the children scope can access elements of parent's scope because it is like golbal scope to the inner scope.

if (true){
    const username ="swastika"
    if (username === "swastika"){
        const website = " youtube"
        console.log(username+website); 
    }
    //console.log(website); it will give error because website is inside if and we want to print it outside of the if loop
    
}

//console.log(username);// it will also give error because username is declared inside if ..not as a global variable so we cann't print it outside of if..

//-------------------------------------------------------------------------------------------------------------------

//type 1 of declaring function-->
function addone(num){
    return num+1 // here it will only return the value but not gonna print it
}

addone(2) // in this type we cann access function befpre declaring means if we shift the line addone(2) to top of the function then we can see it will still gonna work

//type 2 of declaring function
const addTwo = function(num){
    return num+2
}
addTwo(3) //  but in this type if we shift the functio call at the top pf the function  it will not gonna work because here we have declared the function inside a avriable and we cann't access this before declaring  a variable