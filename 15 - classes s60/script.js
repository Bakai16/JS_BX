class Person {
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(){
        return (`Hello ${this.firstName} ${this.lastName}`);
    }


}
const Bakai = new Person ("Bakai", "Kazimirov");
console.log(Bakai);