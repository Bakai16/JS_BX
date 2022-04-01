let arr = [2022];

function year() {
    let year = new Date().getYear();

    return year;
}
function month() {
    let month = new Date().getMonth() + 1;
    return month;
}
function day() {
    let date = new Date().getDate();
    return date;
}

let [year1 = year(), month1 = month(), day1 = day()] = arr;

console.log("Year: "+ year1);
console.log("month: "+ month1);
console.log("day: "+ day1);


//expected output:
// Year: 2022
// month: 4
// day: 1
