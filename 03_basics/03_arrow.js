const user ={
    username: "swastika",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${username} ,welcome to website`); // we cann't use username like this..instead of this we need to use "this"
        console.log(`${this.username}, welcome to website`); // "this" keyword refers to current context..
        // console.log(this); // it gives the total current context which are inside scope
        
        
    }
}

user.welcomeMessage() // it will definately show the result as swastika..

// but if we change the value of username-->
user.username= "srijon"
user.welcomeMessage() // now the username refers to srijon

// that means wgatever will be the current context will be displayed through "this"

console.log(this); // but this is giving empty object {} like this...because in node

//*** global object inside browser is window object*** //


//-----------------------------------------------------------------------------------------------------------------------------

// function chai(){
//     let username = "swastika"
//     //console.log(this); // it is giving a lot of elements under this

//     //but if we do like this->
//     console.log(this.username);// it is givinf undefined because we cann't use "this" inside any function..
// }
// chai()

//arrow function-->
const chai = () => { // removing the "function" word and just adding a => means arrow function
    let username = "swastika"
    console.log(this); // but here it is also giving empty object {}.
}
chai()


// arrow function syntax-->
//  () => {}

// const addTwo = (num1,num2) => {
//     returnnum1+num2
// }

// console.log(addTwo(3,7));

// impliicit return
// in implicit return we don't use {} instead we write the return line just beside => this..that means iam assuming that you have given only one line that means you want to return this value 

const addTwo = (num1,num2) => num1+num2 // we have not written return here..because here it is showing that we want to return num1+num2 ..we can also write this inside ().. in that case also no need to write return..(num1+num2)

console.log(addTwo(3,7));


//if we want to return any object--

const name =(name1) => ({username : "swastika"}) // we need to wrap the object inside()..otherwise it will give undefined
console.log(name(1));

    
