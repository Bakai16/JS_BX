// async function myCoolFunc(){
//    const promise = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Hello");
//         }, 2000);
//     }); 

//     const error = true;

//     if(!error){
//         const res = await promise;

//         return res;
//     }else {
//         await Promise.reject(new Error("ошибка!!!"));
//     }

// }

// myCoolFunc().then((res) => {
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// async function getUsers(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');

//     const users = await res.json();

//     return users;
// }

// getUsers().then((users)=>{
//     console.log(users);
// });

const ul = document.querySelector(".post");

async function getPosts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/posts");

    const posts = await res.json();

    return posts;
}

getPosts().then((posts)=>{
    posts.forEach((post) =>{
        //card
        const card = document.createElement("li");
        card.classList.toggle("card");
        card.classList.toggle("col-4");

        //title
        const title = document.createElement("h3");
        title.classList.toggle("title");
        title.innerHTML = post.title;

        //content
        const content = document.createElement("p");
        content.classList.toggle("content");
        content.innerHTML = post.body;
        
        ul.appendChild(card);
        card.appendChild(title);
        card.appendChild(content);

    });
});
getPosts();