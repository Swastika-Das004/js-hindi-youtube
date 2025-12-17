// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break; // if we don't use break here it will execute the 2nd statement untill the break statement again come
    case 4:
        console.log("apr");
        break;
    case 5:
        console.log("may");
        break;
                 // now in modern languages like swift once a case is matched still it checks left all conditions after matched case ACCEPT default case
    default:
        console.log("default case match");
        break;
}