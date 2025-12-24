const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(  function (val) {
    console.log(val);
    
})
 // though it is a callback so this function doesn't have name only paranthesis...and we can take the parameter whatever we want to..val, ite, a, i just whatever... it will check itself every value of the array..

//-----------------------------------------------

 // callback function through arrow function

 coding.forEach( (item) => {
    console.log(item); // here also whatever can be the parameter..and no function name will be there
    
 })

 // ***important note***
 //  so this foreach  doesn;t only have the parameter of item it also has index, full array-->

 coding.forEach(  (item, index, arr)=> {
    console.log(item, index, arr); // it will print each item of coding array and their index of each and full array in each line
    
 })

 
 //-------------------------------------------------------------

 // when we want to access a element of an object which is under an array like this-->
 const myCoding = [
    {
        languagename: "javascript",
        languagefile: "js"
    },
    {
        languagename: "python",
        languagefile: "py"
    },
    {
        languagename: "java",
        languagefile: "java"
    }
 ]

 myCoding.forEach( (item) => {
    console.log(item.languagename);// so here we are accessing elemnt of an object which is actually under an array
    
 })

