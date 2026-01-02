const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newnums = myNumbers.map ( (num) => { return num + 10})
//console.log(newnums);

// chaining
// basically it means working with multiple map and filter in a chaining method...like whtaever method is applied on the 1st map then the 2nd map will be working on the 1st map's result array..

const chain = myNumbers
              .map( (num) => num * 10)
              .map( (num) => num + 1)
              .filter( (num) => num>50)

console.log(chain);
              