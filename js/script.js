// Empty script file to start with

//1. find element
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")
let todoListContainer = document.getElementById("todo-list")
let templateElement = document.getElementById("list-item-template")
let template = templateElement.innerHTML


//2. Write a function to implement the behavior
function onAddTaskClicked(event) {
    let taskName = newTaskInput.value;
    newTaskInput.value = "";

    let taskHTML = template.replace("<!-- Task_Name -->", taskName)
    todoListContainer.insertAdjacentHTML("afterbegin", taskHTML);
}

//3. add event listener. link element, function and name
addTaskButton.addEventListener('click', onAddTaskClicked)
