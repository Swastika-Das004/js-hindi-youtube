//we can add string by (+ or ,) but this is kind of outdated
 
let name = "swastika "
let age = 20

// console.log(name + age + " blabla")

//but prereferable way is-->
console.log(`my name is ${name} and I'm ${age} years old`)


//we can declare string by--
const gameName= new String('swastikasd')

console.log(gameName[0]) // to print 1st letter
console.log(gameName.__proto__) //syntax

console.log(gameName.length) // to check length
console.log(gameName.toUpperCase()) // to convert all the letters into upper case

console.log(gameName.charAt('2')); //w to check what is the letter at index 2
console.log(gameName.indexOf('t')) // to check t is at which index

const newString= gameName.substring(0,4)// slicing (here we cann't put negetive value)
console.log(newString);

const anotherString = gameName.slice(-8,4) // here we can also put negetive slicing
console.log(anotherString);

const newString1 = "     swastika    "
console.log(newString1);
console.log(newString1.trim()); //it simply cut down all unnecessary spaces at the starting and ending to save storage

const url = "https://swastika.com/swastika%20das"
console.log(url.replace('%20' , '-')) // replacing '%20' with '-')


console.log(url.includes('swastika'))// checking if this keyword is present in it or not

const random = 'chini-mini-gini'
console.log(random.split('-')) // it slpits a value into array in the basis of seperator which we gave ...here the array is ['chini','mini','gini']










