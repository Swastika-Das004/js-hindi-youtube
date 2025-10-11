const myArr= [1,2,3,4,5] // we can keep same element or also multi types in array..like we can keep numbers, strings, boolean in a single array

console.log(myArr[2]); // we can access arrray elements through indexing

// in JS when we copy some array it always create shallow copies... shallow means when we change in shallow copy it will also chnage the original array..( and deep copy means it only changes the copies material not the original content)

const myFrnd= ["srijon", "onno di","supu"]

// const myArr2 = new array

//array methods//

myArr.push(8) //  it adds new elemnt at the end of the array
myArr.push(7)
console.log(myArr);


myArr.pop() // it removes the last elemnt of the array
console.log(myArr);

myArr.unshift(0) // whatever we will give within brackets it will be added at the 1st position of an array..if we want to something at the very beginning of an array thwn only we will use unshift but if there is too many numbers of elemnt then the unshift is quite bad for system..because to insert an elemnt at fisrt we need to shift each and every elemnt of the array thatswhy and it will create pressure on system 
console.log(myArr);

myArr.shift() // it will remove the 1st element from the array
console.log(myArr);

console.log(myArr.includes(9)); //it checks if the given element is pfresent in the array

console.log(myArr.indexOf(9)); // we can check the index ofany elemnt and if te given element is not in the array it will return the index as -1

const newArr = myArr.join()// adds all the elements of an array into a string 
console.log(myArr); // here the return type is array like the output will be [ 1, 2, 3, 4, 5, 8 ] ...here the type of the o/p will be object
console.log(newArr); // here also comes the same o/p but here the return types changes.. like it will give o/p 1,2,3,4,5,8 as a string

console.log(typeof(myArr)); // o/p -- object
console.log(typeof(newArr)); // o/p -- string

//slice , splice

const mynew1= myArr.slice(1,4) // it will give the elemnt from index 1 to 3 andd the 4 will be excluded
console.log(mynew1);// it will print only the sliced part
console.log(myArr);// but it will not change the original array..slice make a different array with sliced part without changing original array


const mynew2= myArr.splice(1,4) // it helps to slice in array but it doesn't exlude the last given index eleemnt ..it slices from whatever is given to last index
console.log(mynew2); // it will print the spliced part only
console.log(myArr); // but if we now chwck the original array we can see that there is a cahnge in original rray that whatever we have taken from spliced it creates a different array and the original array then keeps the remain  element.


const mynew3= myArr.splice(1,4) 
console.log(mynew2);
console.log(myArr);
 








