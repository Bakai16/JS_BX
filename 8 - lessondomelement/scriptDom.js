// const sectionHello = document.querySelector('.hello');
// const oldTitle = document.querySelector('.hello h1');

// const newTitle = document.createElement('h2');
// newTitle.appendChild(document.createTextNode("New super title"));

// sectionHello.replaceChild(newTitle, oldTitle);
//expected output: New super title


const list = document.querySelector("ul");
const listItem = document.querySelectorAll("li");
listItem[0].remove();
//expected output: removed item 1


const title = document.querySelector("h4");
title.remove();
// expected output: removed