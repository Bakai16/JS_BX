// const sectionHello = document.querySelector('.hello');
// const oldTitle = document.querySelector('.hello h1');

// const newTitle = document.createElement('h2');
// newTitle.appendChild(document.createTextNode("New super title"));

// sectionHello.replaceChild(newTitle, oldTitle);
// expected output: New super title


const list = document.querySelector("ul");
const listItem = document.querySelectorAll("li");

// listItem.forEach(item =>{
//     item.remove();
// });
// expected output: all li elements removed

// listItem[0].remove();
//expected output: removed item 1


const title = document.querySelector("h4");
title.remove();
// expected output: removed













const firstItem = document.querySelector("li:first-child");

const linkInFirstItem = firstItem.children[0];

//get classes
console.log(linkInFirstItem.className);
console.log(linkInFirstItem.classList);


//add class
linkInFirstItem.classList.add("new-class");


//remove class
linkInFirstItem.classList.remove("link");


//toggle class
linkInFirstItem.classList.toggle("active_class");
// expected output: active_class




//get attributes
console.log(linkInFirstItem.getAttribute("href"));
console.log(linkInFirstItem.attributes); 

//set attributes
linkInFirstItem.setAttribute("href", "https://www.google.com");
linkInFirstItem.setAttribute("title", "Hello Bakai");


//check attributes
console.log(linkInFirstItem.hasAttribute("target"));
// expected output: false   target жок


 //remove attributes
// linkInFirstItem.removeAttribute("href"); 









///data attributes
const button = document.querySelector("button"); 
console.log(button.dataset); 
console.log(button.dataset.number);
console.log(button.dataset.hello);
console.log(button.dataset.testAttributes);


button.dataset.hello2 = "hello2";

button.removeAttribute("data-number");