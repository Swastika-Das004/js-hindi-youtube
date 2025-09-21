//datatypes--- 1) primitive (call by value)
  //           2)non- primitive

  //primitive--
  // string, Number, Boolean , Null , Undefined, Symbol , BigInt

const score =100
const scoreValue = 100.3 // in JS there is no diffrent types types of nu8mber tye like float, i9nt etc..so all are number..100 and 100.3 these two are just numbers

const isLoggedIn= false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId) //that means though we have passed same value through id and anotherId but still symbol doesn't consider it as same value

const bigNumber = 26382692744048481  // this is too large for numbers 
const bigNumber_2 = 263826927440484820279n  // but whenb we put n after this much big number it will turn the number into BigInt

console.log(typeof bigNumber) // this will eturn number
console.log(typeof bigNumber_2) // this will return bigInt

//non-primitive( call by reference)
  // Array, Objects, Functions

const heroes = ["shaktiman", 'naagraj' , 'doga']
//defining object
let myobj ={
    name : "swastika",
    age : 20,
}

 //defining any function in variable 
const myfunction = function(){
    console.log("hellooo bachhoo")
}; 


  //  Javascript is a dynamically typed language becaus there is no need to define datatype

//---------------------------------------------------------------------

//there are two types of memory -- stack memory(primitive) and heap memory(non-primitive)

//stack memory means where you can chnage or modify the value of copied one..it doesn't change the actual value..it chnages the value of one copy.

// heap memory means where the original value is chnaged not the copy..if you chnage or modify anything it also chnages the original value.

let myyoutube ="swastikadotcom"
let anothername= myyoutube

anothername="gintudotcom"

console.log(anothername)// output-- gintudotcom
console.log(myyoutube)// output-- swastikadotcom

//because here the variable is myyoutube and it's original value is swastikadotcom and anothername is just a copy..so when we change the anothername's value it only chnaged the anothername's value and that is copied but it didn't chnage the original value that is swastikadotcom. so this is stack memory where we cann't chnage the original value but can modify the copied one's.

let userOne = {
  email: "swastika@gmail.com",
  age: 20
}

let userTwo = userOne

userTwo.age= 30

console.log(userOne.age)// output-- 30
console.log(userTwo.age)// output-- 30
 
//in heap memory whenever we modify any value it chnages the original one also...thatswhy when we changed the value into 30 it chnaged the value of userOne value also.

