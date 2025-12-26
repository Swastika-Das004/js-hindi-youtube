// sometimes we need to just do some operation on array instead of printing so we can use filter

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum= myNum.filter( (num) => num> 5)
//console.log(newNum); 
// // it will print 6, 7, 8, 9, 10

const newNumber= myNum.filter( (num) => {
    // num> 5  // but if we do this it will return empty array.. [] like this
    return num >5
})
     
console.log(newNumber); 



