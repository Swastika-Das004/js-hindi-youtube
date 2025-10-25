const tinderUser= new Object()
const tinderUser2= {}

//in both cases if we print tinderUser we will get {} this..means empty object..doesn't matter how we have wrote this 
// just remember in 1st case it is singleton object and in 2nd case it is not singleton object

tinderUser.id= "132hjjh"
tinderUser.name= "swasti"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser ={
    email: "swas@gmail.com",
    fullname: {      // we can declare multiple objects in a object
        userfullname:{
            firstname : "swastika",
            lastname: "das"
        }
    }
}

console.log(regularUser.fullname); // it will give all the elements under this object in nested format like --> { userfullname: { firstname: 'swastika', lastname: 'das' } } but if we want to cut one step nest then we can specify more details like we can add userfullname..
console.log(regularUser.fullname.userfullname); // now it is showing this --> { firstname: 'swastika', lastname: 'das' }

// so mainly if we want to acces object under object with specification we can access it by just adding "." and by the object name

const obj1= {
    1: "a",
    2: "b"
}
const obj2= {
    3: "a",
    4: "b"
}

const obj3= {obj1 , obj2} // it is showing the same problem as array..that it is sowing two objects in a nested format like this--> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj3);

//so to overcome this problem if we want to join two objects-->
const obj4 = Object.assign({}, obj1, obj2) // if we add this "{}" it means it is guarranteed that we will surely get combined object in a single array not like nested ... this "{}" is like targer obj and beside this whatever we are writing that means we want to combine all this
console.log(obj4); // o/p-->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// the mlost used way to overcome the nested problem-->
const ob5= {...obj1, ...obj2}
console.log(ob5);

console.log(tinderUser);
console.log(Object.keys(tinderUser));// when we want to have only the keys of any object..then we can use this method and within brackets we need to specify the name of the object from which object we want the keys..it will help us when we will work with some datasets in a repeatative order..then we can use it because it gives the value in array form..

console.log(Object.values(tinderUser)); // finding values of any objects

console.log(Object.entries(tinderUser)); // [ [ 'id', '132hjjh' ], [ 'name', 'swasti' ], [ 'isLoggedIn', false ] ] it gives the value like array within an array..every single property means one pair of key value will come in a array form

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // it is used to check any value if it is present in it or not



//-------------------------------------------------------------------------------------------------


const course= {
    courseName: "JS in hindi",
    courseInstructor: "HItesh",
    price: "999"
}

// if we want to extract any value from any objects we can use this simple methods-->
console.log(course.courseInstructor);
//but if there is a need to print it or using it again and again it is not easy to every time we can type the same line so there is a different way to get rid from this-->
const {courseInstructor} = course
console.log(courseInstructor); // so now if we want to use it agian there is no need to write it like course.courseInstructor  instead of this we can simply write only the key like courseInstructor

//or if we want to give a short name to any key so we can use it again-->
const { courseInstructor: instructor } = course // now we can use this only "instructor" word in next lines..

// like-->
console.log(instructor);

// {
//     "name"= "swastika",
//     "age"=20
//     "college"= "neotia"
// }  we get APIs like in theses format..like object but there is no object name...after getting this we can convert it into object and then we can work with it

// JSON-- JavaScript Object Notation






