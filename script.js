let todo = JSON.parse( localStorage.getItem("todo")) || [ ];
const todoInput = document.getElementById("todoInput");
const todoList= document.getElementById("todoList");
const todoCount=document.getElementById("todoCount");
const addButton=document.querySelector(".btn");
const deleteButton = document.querySelector(".dlt-btn");

    


    addButton.addEventListener("click" ,addTask);
    todoInput.addEventListener('keydown',function(event) {
        if(event.key==="Enter"){
            addTask();
        }
    } );

    deleteButton.addEventListener("click" ,deleteAllTasks);

function addTask() {
const newTask=todoInput.value.trim();
if (newTask!==""){
    todo.push({
        text: newTask, disabled:false
    });
    saveToLocalStorage();
    todoInput.value="";
    displayTasks();
}
}

function deleteAllTasks(){
    console.log("test")
}

function displayTasks(){
    todoList.innerHTML="";
    todo.forEach((item,index)=>{
        const p=document.createElement("p");
        p.innerHTML=`
         <div class="todo-container">
         <input type="checkbox" class="todo-checkbox"
          id="input-${index}" ${item.disabled ? "checked":"" }>
          <p id="todo-${index}" class="${item.disabled ? "disabled":""}" onclick="editTask(${index})"> ${item.text}
          </p>
         </div> 
                ` ;
                p.querySelector(".todo-checkbox").addEventListener
                ("change",()=>{
                    toggleTask(index);
                }

                );
                todoList.appendChild(p);
    }

    );
   todoCount.textContent=todo.length;
}
function toggleTask(index){
    todo[index].disabled = !todo[index].disabled;
    saveToLocalStorage();
    displayTasks();
}
function deleteAllTasks(index){
    todo=[];
    saveToLocalStorage();
    displayTasks();
}

function saveToLocalStorage(){
    localStorage.setItem("todo",JSON.stringify(todo));
}