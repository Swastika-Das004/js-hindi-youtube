// Immediately Invoked Function Expressions(IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai() 

//to use IIFE we need to write the function like this-->
// this is named IIFE--
(function chai() {
    console.log(`DB CONNECTED`);
    
}) ()     // here the syntax is like (function definition)(execution call)...means we are wrapping the total function in one () and then we are using another () for execution call..just like we were calling chai() for execution thats it.

//why do we use IIFE?
// sometimes there is a problem from global scope pollution so to avoid it or get rid of it we use IIFE.

// if we want to write two IIFE ..then we need to end the 1st function by ;(semicolon)..otherwise the program will not be executed

