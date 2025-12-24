const language={
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in language) {
    console.log(key);// just to have the key
    console.log(language[key]);// to have the values
    console.log(`${key} shortcut is for ${language[key]}`);     
}

//------------------------------------------------------------------------

// let's see if this for-in loop also works with array or not

const programming =[ "js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key); // it will print index like 0, 1, 2 , 3, 4

    //***important notes***

    //    array also has keys and they are by default numbers which starts from 0...so when we want to print key of an array thorough for-in loop it will show the numbers starts from 0...upto how many values we brought

    console.log(programming[key]); // it will show all the elements of array..as we ahve already discussed that array actually has keys and what we put as a element in array these all are values..  
}

// map doesn't support for-in loop beacuse map is not iterable...so it will not give any error but it will not also show anything..