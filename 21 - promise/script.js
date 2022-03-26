// const promise = new Promise((resolve, reject) => {      //обешать убада promise

//     const sum = 1 + 1;                          //resolve   решать   чечуу
//     if(sum === 2)                                 //reject    отказываться   четке кагуу
//     {
//         resolve(sum);
//     }else{
//         reject('Error');
//     }
// });

// promise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

setTimeoutPromise(5000).then(()=>{
    console.log("Promise");
});

function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve , duration);
    });
}    

console.log('start');