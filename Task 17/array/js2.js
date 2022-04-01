function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [name, surname, department, position, salary] = func();

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