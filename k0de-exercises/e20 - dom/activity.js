console.log("Direct Object Manipulation"); 

let addButton = document.querySelector("#addButton");
let taskContainer = document.querySelector(".taskContainer");

addButton.addEventListener("click",() => {
    let addedTasks = document.querySelector("#addedTasks").value;

    //if user added a task; this disregards the length of input
    if(addedTasks){
        let li = document.createElement("li");
        let text = document.getElementById("addedTasks");
        li.className = "todo";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id="todo-list";

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(text.value));

        taskContainer.appendChild(li);
        document.querySelector("#addedTasks").value = "";

    }
    //If user clicked the 'Add button' but input is empty
    else if (addedTasks === ""){
        alert("You have not yet entered any tasks. Please try again.");
    }
}); 

//delete tasks
function removeTasks(){
    let i;
    let ul = document.getElementById("taskList");
    let tasks = ul.getElementsByTagName("li");

    for (i=0; i<tasks.length; i++){
        if(tasks[i].firstChild.checked)
        {
            ul.removeChild(tasks[i]);
            i=i-1;
        }
    }
}



