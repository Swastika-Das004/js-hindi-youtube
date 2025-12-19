// for loops

for (let score = 0; score < 10; score++) {
    const element = score;
    //console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop : ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        
        //console.log(`${i} * ${j} = ${i*j}`);
               
    }
    
}

let myArray= ["ginu", "pichu", "machu"]
//console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
  
}


// break 

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("detected 5");
        break
    }
    //console.log(`value of i is ${index}`);  

}


// continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("detected 5");
        continue
    }
    console.log(`value of i is ${index}`);  

}