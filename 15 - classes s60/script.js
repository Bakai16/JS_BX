// class Person {
//     constructor(firstName, lastName)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greet(){
//         return (`Hello ${this.firstName} ${this.lastName}`);
//     }
// }
// class Client extends Person {
//     constructor(firstName, lastName, email, city)
//     {
//         super(firstName, lastName);
//         this.email = email;
//         this.city = city;
//     }

//     // greet()
//     // {
//     //     return super.greet() + " I'm from " + this.city;
//     // }
//     greet(){
//         return `${this.firstName} Email: ${this.email}`;
//     }
// }

// const Bakai = new Person("Bakai", "Akylbekov");
// console.log(Bakai.greet());

// const mary = new Client("Mary", "Mon", "mary@gmail.com", "New Your");
// console.log(mary.greet());
    




///практика 

class Restaurant{
    constructor(name, cusintype){
        this.name = name;
        this.cusintype = cusintype;
    }

    showInfo(){
       return `${this.name} is a restaurant of ${this.cusintype} meal.`;
    }

    isOpen() {
      let currentHour = new Date();
        console.log(currentHour);
    }
}

const bayKazan = new Restaurant ( "BayKazan", "Kyrgyz");
const Vasya = new Restaurant ( "Vasya", "Russian");

console.log(bayKazan.isOpen());
// console.log(Vasya.showInfo());

 