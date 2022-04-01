let arr = ['Иван', 'Иванов', 'отдел разработки', ];

let [name, surname, department, position = "джуниор" ] = arr;

console.log("name: "+ name);
console.log("surname: "+ surname);
console.log("department: "+ department);
console.log("position: "+ position);

//expected output:
// name: Иван
// surname: Иванов
// department: отдел разработки
// position: джуниор
