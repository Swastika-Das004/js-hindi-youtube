

if (true) {
    let a = 10
    const b= 20
    var c = 30
}

console.log(a);
console.log(b);
console.log(c);

// whatever is inside {} these are called scope.. let and const are block scope that means when we decalre them inside {} it can't be read by program outside of {}..thatswhy in this above program a and b will not be printed..because we want to print it outside of the {} ..here only the c will be printed because var is function scoped, var allows programs to read the value outside of the {} 