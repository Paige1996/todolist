// Empty script file to start with

//1. find element
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task")
//2. Write a function to implement the behavior
function onAddTaksClicked(event) {
    let taskName = newTaskInput.value;
    newTaskInput.value = "";
    console.log(taskName)
}

//3. add event listener. link element, function and name
addTaskButton.addEventListener('click', onAddTaksClicked)
