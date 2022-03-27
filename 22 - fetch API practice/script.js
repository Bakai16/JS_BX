const container = document.querySelector(".container");

function get(){
    fetch("https://api.github.com/users")
    .then((res)=>{
        return res.json();
    })
    .then((users)=>{

        users.forEach((user) =>{
           const div = document.createElement("div");
           div.setAttribute("class", "cart");
           const img = document.createElement("img");
           img.setAttribute("class", "photo");
           const h2 = document.createElement("h2");
           h2.setAttribute("class", "h2");
           const a = document.createElement("a");
           const button = document.createElement("button");
           button.setAttribute("class", "btn-link");

        
           img.setAttribute('src', user.avatar_url);
           h2.innerHTML = `${user.login}`;
           a.setAttribute('href', user.html_url);
           a.innerHTML = "cсылка";

           div.appendChild(img);
           div.appendChild(h2);
           button.appendChild(a);
           div.appendChild(button);

           container.appendChild(div);

        });

    });
}
get();