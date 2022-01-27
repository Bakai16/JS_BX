const souvenir = [];

souvenir.push('Hello');
console.log(souvenir);

///Math

const PI = Math.PI;
console.log(PI);

let myFloat = 4.93434;

// let rounded= Math.ceil(myFloat); 
// let rounded= Math.floor(myFloat);
// let rounded= Math.round(myFloat);
// let rounded= Math.trunc(myFloat);
 
// console.log(rounded);   

// console.log(Math.max(1,2,3,4,5,6,7,8,9,10));
console.log(Math.min(1,2,3,-4,5,6,7,8,9,10));
console.log(Math.pow(2,3));  //2инин 3 даражасы
console.log(Math.random());


let myRandom = Math.floor(Math.random() * 10 + 2);
console.log(myRandom);


console.log(Math.sqrt(100)); //Возвращает положительный квадратный корень числа.


let myArray = [140,2,3,33,5,6,7,8,9,10];
console.log(myArray);




//string
let src = '" HElo Bakai" \n gjaeij';

console.log(src);


//012  length-длину  
let str = 'Bajfjewajfij    ';

// console.log(str[1]);
console.log(str.length);





let firstName = 'Bakai ';
let secondName = 'Baxa';

console.log(firstName + '' + secondName);

//concat - 
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"


//repeat
console.log(str1.repeat(3));



//includes
let sentence = 'The quick brown fox jumps over the lazy dog.';
let word = 'fox';

console.log(sentence.includes(word));


//replace
let p = 'The quick brown fox jumps over the lazy dog.';

console.log(p.replace('fox', 'cat'));
//





const Sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(Sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


let firstName = 'bakai ';
let firstChar = firstName[0].toUpperCase();
let theRest = firstName.slice(1);

let formattedfirsName = firstChar + theRest;
console.log(formattedfirsName);
//Bakai
 

//lowercase
let pp = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.";

console.log(pp.toLowerCase());


//личный пробел убрать
let firtName = '            Bakai      ';
console.log(firtName.trim());


//Массивы
let friends = ['Alex', 'John', 'Mike'];

friends.push('Mary');
console.log(friends);

friends.pop(); //удаляет последний элемент массива
console.log(friends);

friends.shift(); //удаляет первый элемент массива
console.log(friends);












