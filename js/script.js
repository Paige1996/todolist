// Empty script file to start with

//1. find element 1. find the button! find the class/id/etc
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")
let todoListContainer = document.getElementById("todo-list")
let showActiveButton = document.getElementById("show-active")
let showAllButton = document.getElementById("show-all")

let templateElement = document.getElementById("list-item-template")
let template = templateElement.innerHTML


//2. Write a function to implement the behavior 2. write function
function onAddTaskClicked(event) {
    let taskName = newTaskInput.value;
    newTaskInput.value = "";

    let taskHTML = template.replace("<!-- Task_Name -->", taskName)
    todoListContainer.insertAdjacentHTML("afterbegin", taskHTML);
}

function onTodoListClicked(event) {
    let targetElement = event.target;

    while (!targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement
    }
    let checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked) {
        targetElement.classList.add("completed");
    }
    else {
        targetElement.classList.remove("completed");
    }
}

function showActiveTasks() {
    let tasks = document.getElementsByClassName("task")
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains("completed")) {
            tasks[i].style.display = "none"
        }
        else {
            tasks[i].style.display = "block" //to show an element, set show all. block을 모두 보여줌
        }

    }
}

function showAllTasks() {
    let tasks = document.getElementsByClassName("task")
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].style.display = "block"
    }
}

//3. add event listener. link element, function and name
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoListClicked);

showActiveButton.addEventListener('click', showActiveTasks)


showAllButton.addEventListener('click', showAllTasks)