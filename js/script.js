// Empty script file to start with

//1. find element 1. find the button! find the class/id/etc
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")
let todoListContainer = document.getElementById("todo-list")
let showActiveButton = document.getElementById("show-active")
let showAllButton = document.getElementById("show-all")
let showComButton = document.getElementById("show-completed")

let templateElement = document.getElementById("list-item-template")
let template = templateElement.innerHTML


//2. Write a function to implement the behavior 2. write function

function saveTask(name, isCompleted) {
    localStorage.setItem(name, isCompleted)
}

function renderTasks() {
    for (let i = 0; i < localStorage.length; i++) {
        let taskName = localStorage.key(i)
        let isCompleted = localStorage.getItem(taskName) == "true"
        let taskHTML = template.replace("<!-- Task_Name -->", taskName)
        if (!isCompleted) {
            todoListContainer.insertAdjacentHTML("afterbegin", taskHTML);
        }
    }
}

function onAddTaskClicked(event) {
    let taskName = newTaskInput.value;
    newTaskInput.value = "";

    let taskHTML = template.replace("<!-- Task_Name -->", taskName)
    todoListContainer.insertAdjacentHTML("afterbegin", taskHTML);

    saveTask(taskName, false) //isCompleted == false, 
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

    let taskNameElement = targetElement.querySelector(".task-name")
    let taskName = taskNameElement.innerHTML //span을 

    saveTask(taskName, checkbox.checked);

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

function showComTasks() {
    /*
    let tasks = document.getElementsByClassName("task")
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains("completed")) {
            tasks[i].style.display = "block"
        }
        else {
            tasks[i].style.display = "none" //to show an element, set show all. block을 모두 보여줌
        }
    } 
    */
    for (let i = 0; i < localStorage.length; i++) {
        let taskName = localStorage.key(i)
        let isCompleted = localStorage.getItem(taskName) == "true"
        let taskHTML = template.replace("<!-- Task_Name -->", taskName)
        todoListContainer.insertAdjacentHTML("afterbegin", taskHTML);
    }
}




//3. add event listener. link element, function and name
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoListClicked);

showActiveButton.addEventListener('click', showActiveTasks)


showAllButton.addEventListener('click', showAllTasks)

showComButton.addEventListener('click', showComTasks)
renderTasks()