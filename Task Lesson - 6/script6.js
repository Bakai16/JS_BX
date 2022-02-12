let arr = [1, 2, 3, 1, 2, 3, 1, 2, 6, 3, 4];
function dedude(arr){
    let result = [];
    arr.forEach(element => {
        if (result.length === 0) {
            result.push(element);
        } else if (!result.includes(element)){
            result.push(element);
        }
    });
    return result;
}
console.log(dedude(arr));