const john = {
    name: "john",
    age: 24
};
const Bakai = {
    name: "Bakai",
    age: 21
};
const Adilbek = {
    name: "Adilbek",
    age: 25
};

function logUser(user){
    console.log(`My name is ${user.name}. I am ${user.age}`);
}

module.export = {
    john: john,
    Bakia: Bakai,
    Adilbek: Adilbek,
    logUser: logUser,
};