const friends = ['Bakai', 'Asan', 'John', 'Hanna'];

let i = 0;
while (i < friends.length) {
    console.log(friends[i].toUpperCase());
    i++; // i = i + 1
}
// expected output :
// BAKAI
// ASAN
// JOHN
// HANNA


//поулярный вариант цикла
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].toUpperCase());
}
// expected output :
// BAKAI
// ASAN
// JOHN
// HANNA



const friend = ['Bakai', 'Asan', 'John', 'Hanna', 'Tashma', 'Kirill'];

for (let i = 0; i < friend.length; i++) {
    if (friend[i] === 'Hanna') {
        // break;   // прерывает цикл Bakai Asan John 
        continue; // пропускает итерацию Hanna  Bakai Asan John Hanna Tashma Kirill
    } else {
        console.log(friend[i]);
    }
}





//even numbers  четные числа  жуп сандар
for (let i = 1; i < 20; i++) {
    if (i % 2 === 0) {
        if (i === 10) {
            continue;
        } else {
            console.log(i);
        }

    }
}
// expected output : 2 4 6 8 10 12 14 16 18  





// do while
let b = 0;

do {
    console.log(b);
    b++;
} while (b <= 10);
// expected output : 0 1 2 3 4 5 6 7 8 9 10