let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name, surname, department, position, salary] = arr;

console.log("name: "+ name);
console.log("surname: " + surname);
console.log("department: " + department);
console.log("position: " + position);
console.log("salary: " + salary);

//expected output:
// name: Иван
// surname: Иванов
// department: отдел разработки
// position: программист
// salary: 2000