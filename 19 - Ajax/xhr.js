// const user = loadUsers();

// doOther(); 

// AJAX -> async JS XML 

document.getElementById('get-data').addEventListener("click", loadData);

function loadData(){
    const xhr = new XMLHttpRequest(); 

    xhr.open("Get", "db.txt", true);

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