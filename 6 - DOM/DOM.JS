// window.alert("DOM.JS");
// window.console.log("hello");

// console.log(document.body);

// document.body;  //свойства body

const title =  document.createElement("h1");    //методы  создания элем 
title.innerText = "HEllo Bakai";

const p = document.createElement("p");
p.innerText = "hello again"; 


document.body.appendChild(title);
document.body.appendChild(p);



//id
const titlle = document.getElementById("title");

titlle.style.color = "red";
titlle.style.background = "yellow";
titlle.style.fontFamily = "roboto";



//class
const item = document.getElementsByClassName("subtitle");
const text = Array.from(item);
text.forEach(elem => {
    elem.style.color = "blue";
    elem.style.background = "#fff1f1";
    elem.style.fontFamily = "roboto";
});
// item[0].style.color = "blue";
// item[1].style.color = "blue";
console.log(item);
