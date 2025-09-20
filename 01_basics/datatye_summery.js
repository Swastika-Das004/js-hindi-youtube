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
const myfunction = myfunc(){
    console.log("hellooo bachhoo")
} 


  //  Javascript is a dynamically typed language becaus there is no need to define datatype


