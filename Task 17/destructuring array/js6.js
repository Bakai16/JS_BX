let arr = [2022];

function year() {
    let year = new Date().getYear();

    return year;
}
function month() {
    let month = new Date().getMonth();
    return month;
}
function day() {
    let date = new Date().getDate();
    return date;
}

let [year = year(), month = month(), day = day()] = arr;

console.log(year);
console.log(month);
console.log(day);
