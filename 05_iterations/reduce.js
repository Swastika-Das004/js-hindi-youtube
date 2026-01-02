const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function( acc, currval){
//     console.log( `acc: ${acc} and current_val: ${currval}`);
    
//     return acc+currval
// } , 0) // whatever value we put here after coma it is the initial value of accumulator after that it gradually increases

// console.log(myTotal);

// how can we use reduce in arrow function->

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);

const shopping =[
    {
       itemName: "JS",
       pric: 2999 
    },
    {
       itemName: "py",
       pric: 999 
    },
    {
       itemName: "c",
       pric: 29199 
    } 
]

// if we want to add all the prices->
const priceToPay= shopping.reduce( (acc,item) => acc + item.pric, 0)
//console.log(priceToPay);

