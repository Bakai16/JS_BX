const container = document.querySelector(".container");
const ul = document.querySelector("ul");
const li = document.querySelector("li"); 

li.addEventListener("click", () => {
    console.log("li");
});

ul.addEventListener("click", () => {
    console.log("ul");
});

container.addEventListener("click", () => {
    console.log("container");
});