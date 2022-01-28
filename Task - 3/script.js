//Литералы обьектов
let user = {
    name: 'John',
    age: 30,
    hasCard: true,
    "user hobbies": ["sport", "cooking" , "codding"],
    friends: [{
        name: 'Pete',
        age: 30,
    }],
    address: []
};
console.log(user["user hobbies"][0]); //1 hobby

user.address.push("Maldybaev street, 48b"); //добавление нового свойства   в массив
console.log(user.address);

delete user.address; //удаление свойства
console.log(user.address);

user.name = "Bakai"; //добавление нового свойства
console.log(user.name);

console.log(Object.keys(user)); //выводит все ключи обьекта





//уловние операторы ветвления логические
let a = 10;
let b = 20;
console.log(a != b);  //не равно

//логические операторы
if (a > b) {
    console.log("Больше");
}

else {
    console.log("Меньше");
}
//truthy
//все что не false

//falsy
//undefined
//0
//false
//null  







//логические операции
let userAge = prompt('Введите возраст:', '');
// && --> and (И)
// || --> or (ИЛИ)
// ! --> not (НЕ)
 if (userAge < 14 ){
    console.log("Baby");
} else if (userAge >= 14 && userAge <= 18) {
    console.log("Teenager");
} else if (userAge >= 18 && userAge <= 38){
    console.log("Adult");
}else if(userAge >= 35) {
    console.log("Old");
}


let userAGe = false;
console.log(!userAGe); //пример не используется










//Функции
function greet(){
    console.log("Hello");
}
greet();
//Hello


let K = 5;
let c = 10;
function calcSum(num1, num2){
    // console.log(num1 + num2);
    let sum = num1 + num2;

    return sum;
}

let sum = calcSum(K, c);
console.log(sum);

calcSum(K, c);
//30
//15