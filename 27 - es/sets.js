// const set1 = new Set();

// set1.add(100);
// set1.add("abc");
// set1.add({name: "John"});
// set1.add(true );
// set1.add(100);

// console.log(set1);


const names = ["Asan", "Adilbek", "Dastan", "Bekish", "Syimyk", "Asan" ,"Asan"];

let uniqueNames = new Set(names);
// uniqueNames = new Array(uniqueNames);
uniqueNames = Array.from(uniqueNames);

// console.log(uniqueNames);
// console.log(names); 

uniqueNames.forEach(name =>{
    console.log(name);
});