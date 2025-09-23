const score = 100
console.log(score); //here it automatically detect it as number 

const balance = new Number(100)
console.log(balance); // but when we are using new Number this means it is dedicatedly saying that 100 is a number

console.log(balance.toString()); // coverting the balance 100 into string

console.log(balance.toString().length); // checking the length of the string

console.log(balance.toFixed(2)); // it decides how many number we want after point like here we have given 2 that means after point there will be two numbers like 100.00


const another= 24.8907
console.log(another.toPrecision(3)); //here the o/p is 24.9 becaause we have given precision of 3 that means we want upto 3 numbers of digit with round off...if we would give 2 that means it would return 25 because we want upto 2 numbers of digit and with round off it became 25

//--------------------------------------------------------------------------------------------------------------

//console.log(Math);
console.log(Math.abs(-4)); // it means abs0olute value..it only converts negative value into positive value..

console.log(Math.round(4.4)); // it just round off like normal maths...

console.log(Math.ceil(4.2)); //it means if a value is slighty even bigger than the value menas here if the given number is even slightly bigger than 4 still it will return 5...it is ceiling vlaue..who always chooses the top value..

console.log(Math.floor(4.9)); //here it is opposite..though we have written 4.9 still it will return the floor or bottom value that is 4

console.log(Math.min(7,4,2,9,4.5));// return the minimum value in an array
console.log(Math.max(7,4,2,9,4.5));// returns the maximum value in an array

console.log(Math.random()); // it returns value between 0 to 1


console.log(Math.floor(Math.random() * 10) +1) // it will always return  value between 1 and 9

const min= 10
const max = 20

console.log(Math.floor(Math.random() * (max- min +1 )) + min); // here we have specified that we want minimum value 10 thatswhy it is giving all value greater than 10






