let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [, , department, position ] = arr;

console.log("department: " + department);
console.log("position: " + position);

//expected output: 
// department: отдел разработки
// position: программист
