const school= ["scms", "hsms", "dav", "pvm"]
const college = ["tnu", "amity", "future", "techno"]
school.push(college)
console.log(school); // here we can see these two array dont showed up as one array as joining with each other instead of these we can it prints an array between an array.. like the college array is the array between school array

console.log(school[4]); // if we do this we can see the total college array as 4t index

console.log(school[4][2]); // if we want to access any eleemnt from the array between an array we can acces it by this method..here it means we want to print the 2nd index's element of college from 4th index of school



