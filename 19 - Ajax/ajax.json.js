document.getElementById('get-user').addEventListener("click", loadUser);

function loadUser(){
    const xhr = new XMLHttpRequest(); 

    xhr.open("Get", "user.json ", true);       // true = asincrono

    xhr.onload = function ()              /////в процессе 
    {
        if(this.status === 200){
           const user = JSON.parse(this.response);
           

           const output = `
           <ul>
                <li>
                    <span>ID: ${user.id}</span>
                    <h4>Name: ${user.name}</h4>
                    <span>Age: ${user.id}</span>
                </li>
           
           </ul>
           `;

           document.querySelector(".output").innerHTML = output;
        }
    };

    xhr.send();
}


///json users.json
document.getElementById('get-users').addEventListener("click", loadUsers);

function loadUsers(){
    const xhr = new XMLHttpRequest(); 

    xhr.open("Get", "users.json ", true);       // true = asincrono

    xhr.onload = function ()              /////в процессе 
    {
        if(this.status === 200){
           const users = JSON.parse(this.response);

        //    let output  = "";

        //    users.forEach((user) => {
        //      output += `
        //         <li>
        //             <span>ID: ${user.id}</span>
        //             <h4>Name: ${user.name}</h4>
        //             <span>Age: ${user.id}</span>
        //         </li> 
        //    `;
        // });
           let sum  = 0;

           users.forEach((user) => {
             sum += user.age;
        });
        const average = sum / users.length;
        console.log(sum);

           document.querySelector(".output").innerHTML = average;
        }
    };

    xhr.send();
}



//news txt
document.getElementById('get-news').addEventListener("click", loadData);

function loadData(){
    const xhr = new XMLHttpRequest(); 

    xhr.open("Get", "news.txt", true);

    xhr.onload = function ()              /////в процессе 
    {
        if(this.status === 200){
            console.log(this.response);   //response    ответ   жоок    отклик
            document.querySelector(".output").innerHTML =`
            <p>
                ${this.response}
             </p>`; 
        }else if(this.status === 404) {
            alert("Can not connect to DB!");
        }
    };

    xhr.onprogress = function(){
        console.log(xhr.readyState);
    };


    xhr.send();
}