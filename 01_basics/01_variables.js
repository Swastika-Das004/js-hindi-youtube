const accountId = "22789";
let accontEmail= "swastika@gmail/com";
var accountPasswsord= "swas2342";
accountCity= "durgapur";
let accountState;

/*
prefer not to use var because of scope issue and functional issue..scope means curly braces...previously it was like it couldn't work on scope or block scope means if a prohrammer had used a variable like "name" and he assighned a aname and there came another progarmmer and he also accidentally had used this  same variable "name" and assigned something new value so js couldnot seperate it..it wouold consider the last value for everywhere..though it were the part of different program still it changed the value of evrywhere wherever it found out the same "name" variable.
*/

// const accountId= "3345" (if we have declared a variable previously  with const then we cannot reassign it again it will give error)

console.log(accountId);

accontEmail= "swas@gmail.com"
accountPasswsord=" 980988"
accountCity="diamond"

console.table([accontEmail, accountId, accountPasswsord, accountCity, accountState]) /* if we declare a variable but didn't assigned a value JS will consider it as undefined*/