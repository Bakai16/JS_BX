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
      let currentHour = new Date().getHours();
      let currentDay = new Date().getDay();
        console.log(currentDay);
    
    if(currentDay === 6  || currentDay === 0){
        return `${this.name} is closed`;
    }else{
        if(currentHour > 9 &&  currentHour < 22){
        return `${this.name} is open`;
    }else {
        return `${this.name} is closed`;
    }
    }

    
}
}

const bayKazan = new Restaurant ( "BayKazan", "Kyrgyz");
const Vasya = new Restaurant ( "Vasya", "Russian");

console.log(bayKazan.isOpen());
// console.log(Vasya.showInfo());

 