const btn = document.querySelector('.btn');
const title = document.querySelector('h1');

btn.addEventListener("click", function(){
    title.classList.add('active');
});