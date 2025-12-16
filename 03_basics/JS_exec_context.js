// there are two types of execution context-->
//                      1) Golabal execution context
//                      2) Function execution context
//                      3) Eval execution context(extra)

// two types of phase-- 1) Memory Creation Phase
//                      2)Execution phase

// in memory creation phase only the places are allocated for variables or whatever we have declared .( means no mathematical function happen here)
//and in execution phase there happens all the mathematical functions

// let consider a code--

let val1 = 12
let val2 = 3
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(7, 0)

// now let explain the code >>

//   1) Global execution( whatever the code can be..all code runs by global execution)..and then it is allocated under "this".
//   2)memory phase(MCP keeps all the variables in one place)      
//  val1=undefined (here it stores the value as undefined)
//  val2=undefined (also here)
//  addNum -> definition (but in functionname it stores the total functiondefinition..whatever can be the size of the code)
// result1 -> undefined
// result2 -> undefined


// 3) Execution phase >>
// val1 = 12
// val2 = 3
// addNum(empty)..because MCP has already hold this function defination so here nothing will happen
// now addName creates another execution context-->
//   -----------------------------------
//   |    new variable environment     |
//   |                +                |
//   |        execution thread         |
//   -----------------------------------
// how many times the dunction will be executed that much time this box will be created....and this box is called "NEW EXECUTIONAL CONTEXT"
// now under this new executional context again the MCP and Execution phase will happen

// memory phase-->
// val1 -> undefined
// val2 -> undefined
// total -> undefined

// Execution context
// num1 = 12
// num2 = 3
// total = 15 (  it returns under Global executional context)

// after completeing the task this box means the new executional context got deleted..once it's work is done

// in Execution phase which was actual step 3 of main prgram
//val1 = 12
// val2 = 3
// addNum(empty)
// result = 15( this one is now added)

