// let user = "Bakai";

// switch (user){
//     case "John":
//         console.log("You are not user");
//         break;
//     case "Hanna":
//         console.log("You are moderator");
//         break;
//     case "Bakai":
//         console.log("You are admin");
//         break;   
//     default:
//     console.log("I don't know you!"); 
// }


//Тернарного оператора   ? :   единственный оператор

// let user = "John";
// console.log(user === "John" ? "You are John" : "You are not John");



function greet(name = "unknown user"){ 
    console.log(`Hello ${name}`);
}
greet();
//expected output : Hello Bakai
//expected output : Hello unknown user


const  hi = (name) => {
    console.log(`Hello ${name}`);
};
hi("Asan");
//expected output : Hello Asan



const sum = (a, b) => {
    let result = a + b;
    return result;
}
console.log(sum(10, 10));
//expected output : 20



const divide = (a, b) => (a / b);
console.log(divide(10, 5));
//expected output : 2