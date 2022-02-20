// const btn = document.querySelector('.btn');
// const title = document.querySelector('h1');

// btn.addEventListener("click", function(){
//     title.classList.add('active');
// });


////11
// const divs = document.querySelectorAll(".box");

// divs.forEach((item) =>{
//     item.addEventListener("click", () =>{
//         item.classList.toggle("active"); 
//     });
// });

// console.log(divs);

// window.addEventListener('load', function(){
//     const div = document.querySelector(".box");
    
//     div.addEventListener("click", addClass);
    
//     function addClass(e){
//         e.target.parentNode.classList.add("active");
//     }
// });


window.addEventListener("load", function (){
  const box = document.querySelector(".box");


  box.addEventListener("mouseleave", function(){ ///mousedown   mouseover   
    box.style.background = "red";

 });

//   const link = document.querySelector(".link");
  
//     link.addEventListener("click", function(e){
//         e.preventDefault(); 
//     });
//     document.addEventListener("keydown", function(e){
//         console.log('keed');
//     });

    const input = document.querySelector(".input");
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", function (){
        const userInput = input.value;


        input.value = "";
        alert(userInput);
    });
});
