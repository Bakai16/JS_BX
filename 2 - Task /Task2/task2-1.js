//Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'

let str = 'ddd@bbb@ccc';

console.log(str.replace(/@/g, '!'));








let text = 'dd@bbb@ccc@fff';

let newtext = text.replaceAll('@', '!');
// console.log(text.replaceAll('@' ,'!'));
console.log(newtext);

