
// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10 (right one is the default value and left one is actual value)
val1 = null ?? 10 // o/p-- 10
console.log(val1);

let name = "";
console.log(name ?? "Guest"); // o/p - ""

let value;
console.log(value ?? "default"); //o/p-- "default"

console.log(null ?? undefined ?? "OK");

let remember = null ?? 10 ?? 20
console.log(remember); // it will always print the 1st value if there are two default values ae present after null or undefined


//---------------------------------------------------------

//Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");


