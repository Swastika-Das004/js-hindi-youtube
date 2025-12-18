const userEmail =  "swastika@mail.com"

if(userEmail){
    console.log("GOT user email");    
}else{
    console.log("don't have user email");
    
}
// truthy value means when we assume that it is the true vale...like here we have not checked for any condition like if userEmail== something or not , so this is truthy vale..here we are assuming swastika@mail.com is the truthy vale means we are assuming it is the real value..

// if we don't give any mail then-->

const userEmail2 =  ""

if(userEmail2){
    console.log("GOT user email");    
}else{
    console.log("don't have user email");
}
// it will say don't have user email because since here is a empty string so it considered that it is a false value


// Falsy values-->

// false,  0, -0, BigInt 0n, "", null, undefined, NaN
// these all are falsy values ...and rest of the all things are truthy values

// truthy values
// "0", 'false', " "(even a single space inside "" is considered as truthy value), {}, function(){} 

// to check if array is empty or not
const checking = []
if (checking. length===0) {
    console.log("array is empty");
}

// to check if object is empty or not
const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty"); 
}

// ********* need  to remember *********
//    -----------------------------------
//   |    false == 0  (true)            |
//   |    false == "" (true)            | 
//   |    0 == ""  (true)               |
//   -----------------------------------


//-------------------------------------------------------------------------------------------





