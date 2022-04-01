function func(department, employee, [year, month, day] ) {
    console.log(department);
    console.log(employee);
    console.log(year);
    console.log(month);
    console.log(day);
}

func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] );
// expected output:
// отдел разработки
// [ 'Иван', 'Иванов' ]
// 2018
// 12
// 31