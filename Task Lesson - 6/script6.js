let arr = [1, 2, 3, 1, 2, 3, 1, 6, 2, 1, 3, 4];
function dedude(arr){
    let result = [];
    arr.forEach(element => {
        if (result.length === 0) {
            result.push(element);
        } else if (!result.includes(element)){
            result.pust(element);
        }
    });
    return result;
}
console.log(dedude(arr));