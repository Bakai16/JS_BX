// const btn = document.querySelector('.btn');
// const title = document.querySelector('h1');

// btn.addEventListener("click", function(){
//     title.classList.add('active');
// });


const divs = document.querySelectorAll(".box");

divs.forEach((item) =>{
    item.addEventListener("click", () =>{
        item.classList.toggle("active"); 
    });
});

console.log(divs);