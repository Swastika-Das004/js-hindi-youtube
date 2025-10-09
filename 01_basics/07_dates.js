let myDate = new Date()
console.log(myDate); //2025-09-25T14:37:45.583Z
console.log(myDate.toString()); //Thu Sep 25 2025 20:07:45 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //o/p--Thu Sep 25 2025
console.log(myDate.toISOString()); //2025-09-25T14:38:41.525Z
console.log(myDate.toJSON());
console.log(myDate.toLocaleString()); // 9/10/2025, 6:59:13 pm

//let mycreatedDate = new Date("2023, 1, 23")
let mycreatedDate = new Date(2023, 12, 23,5,4); //(if we give only three digits it will be considered as date month and year but if we give 5 or 6 digits that means after date month and yesr it comes minutes, seconds, miliseconds etc.. and if we only put three digits then the time will be shown as 12:00 am by default)
console.log(mycreatedDate.toLocaleString()); // 23/1/2023, 12:00:00 am
// console.log(mycreatedDate.toDateString());

let myDATE= new Date("2023-10-29")

let myTimestamp = Date.now(); // it gives milisecond value of now from january 1, 1970 to today when we are doing it 
console.log(myTimestamp);

console.log(myDATE.getTime()); // it will give the value in milisecond of the time range between jan 1. 1970 to myDATE's date

console.log( Math.floor(Date.now()/1000));// if we want the value in seconds instead of milisecond  we should devide it by 1000 and to avoid the point problem in decimal we are using Math.floor





