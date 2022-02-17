const title = document.createElement("h1");
title.innerText = "Таблица умножения";

for (let a = 1; a < 9 ; a++){
    for (let b = 1; b < 9; b++){
       const div = document.createElement("div");
        div.innerText = a + ' *' + b + ' = ' + (a*b) + '<br>';
    }
}




const wrapperChild = document.querySelectorAll(".wrapper > div");

const box = document.querySelector(".box"); 


console.log(box.closest(".grand-wrapper"));
