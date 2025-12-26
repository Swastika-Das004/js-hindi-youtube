// sometimes we need to just do some operation on array instead of printing so we can use filter

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum= myNum.filter( (num) => num> 5)
//console.log(newNum); 
// // it will print 6, 7, 8, 9, 10

const newNumber= myNum.filter( (num) => {
    // num> 5  // but if we do this it will return empty array.. [] like this
    return num >5 // so we should use return 
})
     
//console.log(newNumber); 

// we can also do this by using forEach

const numbers =[]
myNum.filter( (num) => {
    if (num > 4) {
        numbers.push(num)
    }
})

// console.log(numbers); 

// another example

const book = [
    { title : "book one", genre: "fiction", publish: 1981, edition: 2004},
    { title : "book two", genre: "history", publish: 1989, edition: 2010},
    { title : "book three", genre: "history", publish: 1961, edition: 2009},
    { title : "book four", genre: "science", publish: 1991, edition: 2014},
]

// want to have only those books which genre is history

const userBooks = book.filter( (item) => item.genre === "history")

console.log(userBooks);

//13:59

