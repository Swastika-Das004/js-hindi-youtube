// general comparison

// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2!=1)
// console.log(2==1)

console.log("2">1) // true
console.log(2>"1") // true

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true [the reason is that an equality check == and cpmparisons like < , > , <= , >= work differently.    comparisons convert null to a number, treating it as 0. that's why (null>=0) is true and (null > 0) is false]


console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined <= 0)
//for undefined all comparison will give the loutput as false

// remember that in JS equality check and comparison work diffrently...

// === (strict check)
console.log("2" === 2);
// it doesn't only check the value it also compares the datatype of value..if both of them matches then only it will return true
