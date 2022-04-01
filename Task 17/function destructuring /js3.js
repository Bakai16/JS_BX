function func([name, surname, department, position = "джуниор"]) {
	console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
}

func(['Иван', 'Иванов', 'отдел разработки'] );

// expected output:
// Иван
// Иванов
// отдел разработки
// джуниор