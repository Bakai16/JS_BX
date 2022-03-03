const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clrBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task ");

loadEventListeners();

function loadEventListeners(){
    form.addEventListener("submit", addTask);

    task.addEventListener("click", removeTask);

    clrBtn.addEventListener("click", clearTasks);
} 

function clearTasks() {
    // taskList.innerHTML = "";

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}


function removeTask(e){
    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure???")){
            e.target.parentElement.parentElement.remove();
        }
    }
}


function addTask(e){
    if(taskInput.value === ""){
        alert("Add a task");
    }

    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));


    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);
    taskInput.value= "";

    e.preventDefault();
}