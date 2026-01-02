const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function( acc, currval){
    console.log( `acc: ${acc} and current_val: ${currval}`);
    
    return acc+currval
} , 0) // whatever value we put here after coma it is the initial value of accumulator after that it gradually increases

console.log(myTotal);
