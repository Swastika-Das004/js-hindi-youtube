const school= ["scms", "hsms", "dav", "pvm"]
const college = ["tnu", "amity", "future", "techno"]
// school.push(college)
// console.log(school); // here we can see these two array dont showed up as one array as joining with each other instead of these we can it prints an array between an array.. like the college array is the array between school array

// console.log(school[4]); // if we do this we can see the total college array as 4t index

// console.log(school[4][2]); // if we want to access any eleemnt from the array between an array we can acces it by this method..here it means we want to print the 2nd index's element of college from 4th index of school


const newArray=school.concat(college) //but if we use concat we can get the desired joined array in a new array ..we should createv a new array to store the joined array ...concat always rerurn new array
console.log(newArray);

const instituition = [...school, ...college] // it just simply spread  the element of an array
console.log(instituition);  // it is not an array anymore it returns each value induvidually within an array
const anotherArr= [1, 2, 3 ,4, [2, 6 ,7], [6, 9, 0, [1,2]]]
const oneArr= anotherArr.flat(Infinity) // thif flat is used when there is a complex array like above mentioned, it helps to have an single array with all the ekements...we can also add numbers in place of infinity..it indicates in how much depth we want to solve the array
console.log(oneArr);

console.log(Array.isArray([1, 3, 5])); //Array.isArray() checks if the passed value is an Array.

console.log(Array.isArray([])); // it's also an array

console.log(Array.from("swastika")); // it just convert the input value into an araay

console.log(Array.from({name : "swastika"})); // it will always return empty array ...it can't convert this type of input..we need to specify which we want to convert into an array either the keys or the values


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //this of merge all the diffrent values in an array..and it returns a new array with selected elements





