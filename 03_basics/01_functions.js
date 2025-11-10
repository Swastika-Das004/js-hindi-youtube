function sayMyname(){
    console.log("swas");
    console.log("tika");
    console.log("das");
}

sayMyname // when we are writing only the function name without parenthesis these means it it function referrence

sayMyname() // when we are adding parenthesis that means executing

function addTwoNumbers( num1 , num2){
    console.log(num1 + num2);
}
addTwoNumbers(3, 5)
//when we give something like that--

function loginUseMessage(username){
    return `${username} just logged in`
}
loginUseMessage("swastika")// here we have just said to return the value..so it has returned the value but we have not printed it..thatswhy it is not giving any result
console.log(loginUseMessage ("swastika"));

//when you don't pass any value it shows the o/p as undefined like--
console.log(loginUseMessage()); //o/p-undefined just logged in
//-------------------------------------------------------------------------------------------------------------------------------------------
function calculateCartPrice(num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500)); // if we print it it will give us only 200 ..the 1st value..

function calculateCartPrice(...num1){ // if we use these 3 dots as spread or rest operator we get a array like value
    return num1
}
//console.log(calculateCartPrice(200,300,500));

//again if we do--
function calculateCartPrice(val1, val2, ...num1){ // this indicate we want the rest of the value after value1 and value2 means after 200 and 400 
    return num1
}
console.log(calculateCartPrice(200,400,600,300,600)); // o/p-- 600,300,600

//how to use object in function
const user ={
    userName: "swastika",
    price: 499
}

function handleObject(anyobject){ // we don't write the object name here in function parameter ,instead we write anyobject , it is because we can passs any object thorugh this not specific any object
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
    
}

handleObject(user) // here we should definately mention ta real object name

//if we want to work with array in object--
const myNewArray=[200,600,300,500]
function returnSecondValue(getvalue){
    return getvalue[1]
}

console.log(returnSecondValue(myNewArray));



 