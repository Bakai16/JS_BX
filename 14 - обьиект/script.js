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


//222konstruktor

// function Person(name, birthday){     /// конструктор болщой буквы
//     this.name = name;
//     // this.age = age; 
//     this.birthday = new Date(birthday);

//     // console.log(this);
//     // this.sayName = function (){
//     //     console.log(`Hello my name is: ${this.name}`);
//     // };

//     // this.calculateAge = function () {};
// }

// Person.prototype.calculateAge = function (){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return ageDate.getUTCFullYear() - 1970;
// };
 
// const Bakai = new Person("Bakai", '01-01-2003');
// const Sanjar = new Person("Sancho", '01-01-2001');

// console.log(Bakai.calculateAge === Sanjar.calculateAge);
// console.log(Bakai.calculateAge());
// console.log(Sanjar.calculateAge());
// Sanjar.sayName();
// Bakai.sayName();


//333 конструктор и прототип
// const myStr = "djsferjijef";
// const myStr2 = new String("djsferjijef");

// console.log(myStr);
// console.log(myStr2);


// const myStr = new String("Hello");
// console.log(myStr.toUpperCase());

// myStr.prototype.toUpperCase = function () {
//     return this.value.toUpperCase();
// }

function Auto (model , year, color, fuelLeft){
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelLeft = fuelLeft;
}

Auto.prototype.showInfo = function (){
    console.log(`Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Fuel left: ${this.fuelLeft}`
    );
};

Auto.prototype.drive = function (){
    if(this.fuelLeft > 0){
        this.fuelLeft -= 10;
    }else {
        console.log("No fuel left");
    }
};

const bmw = new Auto("BMW", "2020", "red", 10);
const audi = new Auto("Audi", "2020", "red", 100);
bmw.showInfo();
audi.showInfo();
bmw.drive();
bmw.showInfo();
bmw.drive();
