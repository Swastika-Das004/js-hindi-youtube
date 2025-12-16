// let str1= "hello"
// let str2= " swas"

// let str3= str1+str2
// console.log(str3) // it will simply add two strings as hello swas)

// console.log("1" + 2)
// console.log(1 + "2")
// // this two will print 12 12


// console.log("1" + 2 + 2)
// //it will print the output as "122"

// console.log(1 +2 + "2")
// // but here it gives the output as 32

// // so we need to remember when string is in 1st place then the total will be considered as string..and it will give the result how a normal two string added...but when string is in last place then the previous operation will be done previously and then the string will just placed beside the operation's output.

// console.log(+true) // it gives 1
// console.log(+"") // it gives 0

let gameCounter = 100

let x= gameCounter++
console.log(gameCounter) //it gives the actual value then increment the value..so it will return 101
console.log(x)// it will return 100

let y= ++gameCounter 
console.log(gameCounter)// it increments the value at first...it gives the incremented value..
console.log(y)// also this gives the incremented value