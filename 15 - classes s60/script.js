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
        this.served = 0;
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
   Serve(){
        return(this.served += 1);

    }
    setServed(){
       return (this.served += num);
    }
    showtotalServer(){
        return (`Show total served: ${this.served}`);
    }
}

const bayKazan = new Restaurant ( "BayKazan", "Kyrgyz");
const Vasya = new Restaurant ( "Vasya", "Russian");

console.log(bayKazan.isOpen());
console.log(bayKazan.Serve());
console.log(bayKazan.setServed(29));
console.log(bayKazan.showtotalServer());
// console.log(Vasya.showInfo());


class cars {
    constructor(model, year, color, engine){
        this.model = model;
        this.year = year;
        this.color = color;
        this.engine = engine;
    }
    
    showInfo(){
        return (`Model: ${this.model}. Year: ${this.year}. Color: ${this.color}. Engine type: ${this.engine}`);
    }
}
 
class ElectroCars extends cars {
    constructor(model, year, color, engine, batery){
        super(model, year, color, engine);
        this.batery = batery;
    }
    Promate(){
        return(`We have best electrocars ever! follow we and enjoy!`);
    }
}

const Tesla = new cars("Tesla", "2022", "white", "diesel");
const Camry = new ElectroCars("Camry", 2020, "black", "electro");

console.log(Tesla.showInfo());
console.log(Camry.showInfo());
console.log(Camry.Promate());
