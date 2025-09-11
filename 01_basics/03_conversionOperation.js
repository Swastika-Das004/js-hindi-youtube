let score = "333"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber= Number(score)//here we are converting the string into number .
console.log(typeof valueInNumber)
console.log( valueInNumber)


//but if we do such operations where the variable's value is not a  number then what will we see-->
let marks="78aa"
let grade= Number(marks)
console.log(typeof grade)
console.log(grade) //here this line shows  output "NaN" that means not a number..so we have to check if has anyone subitted a wrong value which is not a number so we will check this 


let a= null
console.log(typeof a)
let b= Number(a)
console.log(typeof b)
console.log(b)// if we convert a null value into number it will show the null value as 0

let c= undefined
console.log(typeof c)
let d= Number(c)
console.log(typeof d)
console.log(d)// here also it shows the undefined value as NaN

 let girl= "swastika"
console.log(typeof girl)
console.log(typeof(girl))
let naam= Number(girl)//here we are converting the string into number .
console.log(typeof naam)
console.log( naam)// here also if we want to convert a string to number it will show NaN which is actually not a number


let isLoggedIn = 1;
let booleanLoggedIn=Boolean(isLoggedIn)
console.log(booleanLoggedIn)

let x= ""
let y=Boolean(x)
console.log(y)


let w= "swastika"
let z=Boolean(w)
console.log(z)


//summery-->

//in number conversion-->
//"333" => 333
//"78aa" => NaN
//true= 1; false=0

//for boolean coversion-->
//1=> true
// "" => false
// "swastika" => true


