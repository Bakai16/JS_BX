// const user = loadUsers();

// doOther(); 

// AJAX -> async JS XML 

document.getElementById('get-data').addEventListener("click", loadData);

function loadData(){
    const xhr = new HMLHttpReguest(); 

    xhr.open("Get", "db.txt", true);

    xhr.onload = function ()              /////в процессе 
    {
        if(this.status === 200){
            console.log(this.response);
        }
    };
    
}