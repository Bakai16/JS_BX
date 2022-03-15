//объект ориентирование программирование

// const joth = {
//     name: 'Joth',
//     age: 25,
//     sayName: function () {
//         console.log(this.name);
//     },
// };

// const Bakai = {
//     name: 'Bakai',
//     age: 25,
//     sayName: function(){
//         console.log(this.name);
//     },
// };

// Bakai.sayName();

function Person(name, age){     /// конструктор болщой буквы
    this.name = name;
    this.age = age; 
}

const Joth = new Person('Joth', 25);

console.log(Joth);