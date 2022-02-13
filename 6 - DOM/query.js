const title = document.querySelector("[data-title]");   //первый элемент с атрибутом data-title
const subTitle = document.querySelector("#subtitle");   //id
const paragrahs = document.querySelectorAll(".text");  //class
const form = document.querySelector("form");   
const inputText = document.querySelector("input[type='text']");   


paragrahs.forEach(elem => {
    elem.style.color = "yellow";
});


form.style.padding = "10rem";
form.style.border = "1px solid black";
form.style.background = 'red';

inputText.style.width = "500px";
inputText.style.height = "100px";