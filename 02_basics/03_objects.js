// we can declare objects in two ways -- 1)like literal literal  2) like constructor

// *** if we create an object by lilteral it will never be an singleton but if we create it from constructor it will be singleton *** //


// Object literals

//declaring a symmbol
const mySym = Symbol("key1")

const jsuser= {
    name: "swastika", // object must written as key values
    "full name": "swastika das",
    age: 20,
    email: "swastika@gmail.com",
    location: "DGP",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"],

    // if we want to ise the symbol as a key we can't directly use it..like mySym = "284794"
    // it will not directly give error but if we check it's datatype it will show it as string not as symbol

    //if we want to use  it as symbol then we need to declare it with square brackets
    [mySym]: "7657"
}

console.log(jsuser.age); //we can access objcets by key value but it is not a proper method

console.log(jsuser["age"]); // when we accessing thorugh this method we should input the key value as string 

//why we need to flollow the 2nd method?
// because if we have a key value pair like "full name" we can't access it by "."..thatswhy we need to apply the 2nd method that is with square bracket

console.log(mySym);
console.log(typeof(jsuser.mySym)); // now it will give the type as undefined that means due to use of square brackets it is behaving as symbol

//if we want to change any value we need to assign the value by "="
jsuser.email = "swastika@google.com"
console.log(jsuser["email"]);

// if we want to lock any value which  means i don't want to let anyone  chnage this value then we can use freeze
Object.freeze(jsuser)

// after freezing if we chnage any value it will not be chnaged it will same as before which we have locked