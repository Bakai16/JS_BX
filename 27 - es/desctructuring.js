// let numbers = [100, 200, 300, 400, 500, 600, 700, 800];

// let x, y , z;

// [x, y, z, ...rest] = numbers;

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(rest);


const user = {
    name: "Bakia",
    age: 25,
    Location: "Bishkek",
    isMaried: false,
    phone: "+996 909 90 93 23"
};

const {name, age, ...rest } = user;

console.log(name);
console.log(age);
console.log(rest);