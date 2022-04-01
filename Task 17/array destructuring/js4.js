let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name, surname, ...info] = arr;

console.log("name: "+ name);
console.log("surname: "+ surname);
console.log(info);

//expected output:
// name: Иван
// surname: Иванов
// [ 'отдел разработки', 'программист', 2000 ]
