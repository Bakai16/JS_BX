const users = ["Bakai", "Adilbek", "Beknazar"];

function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length ? {
                value: names[namesIndex++],
                done: false
            } : {
                done: true
            };
        }
    };
}
const names = nameIterator(users);
console.log(names.next());