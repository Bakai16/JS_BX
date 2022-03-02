const container = document.querySelector(".container");
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li"); 

// li.addEventListener("click", () => {
//     console.log("li");
// });

// ul.addEventListener("click", () => {
//     console.log("ul");
// }, true);

// container.addEventListener("click", () => {
//     console.log("container");
// }, true);

lis.forEach((li) => {
    li.addEventListener("click", () => {
        console.log("li");
    });
});

container.addEventListener(("click"), (e)=> {
    console.log(e.target.textContent);
});