let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = arr.filter((number) => {
    return number %2 ===0;
});
console.log(result);
//expected output: [2, 4, 6, 8]