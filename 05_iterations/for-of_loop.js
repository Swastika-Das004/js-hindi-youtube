const arr = [1, 2 , 3, 4 ,5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "hello world!!"
for (const greet of greetings) {
    //console.log(greet); 
    // // it will print each character of the word
   
}

//Maps 
// map is a object that holds key value pairs and rememebers the original insertion order of the keys

// ** most importantly **
// maps doesn't support duplicate values..it supports  only unique values
const map = new Map()
map.set('a', "101")
map.set('b', "102")
map.set('c', "103")

console.log(map);

// we can get the size of the object , any specific value of a key, or we can delete anything and can modify any value

// we can use loops in this map also-->

for (const key of map) {
    console.log(key);
    // if we want to print the keys in these way it will not...rather it will print all key value pairs...
}
// so if we want to get  both key and values togther-->

for (const [key, value] of map) {
    console.log(key, '-->', value );
    
}

// but if we want to iterate objects in this same way it will not show sae result it will show error because object is not iterable in this way

const myObj={
    'game1': 'coc',
    'game2': 'temple run'
}
for (const [key, value] of myObj) {
    console.log(key, '-->', value );
    
}// so this is not the way

//13:49


