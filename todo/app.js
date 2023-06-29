
 // Array to store tasks
let tasks = [];

function addTask() {
     // Get the task input value
let taskInput = document.getElementById("taskInput");
let task = taskInput.value;

if (task.trim() !== "") {
     // Add task to the array
    tasks.push(task);

     // Clear the task input
    taskInput.value = "";

     // Refresh the ToDo list
    displayTasks();
}
}

function displayTasks() {
     // Get the task list element
    let taskList = document.getElementById("taskList");

     // Clear existing list
    taskList.innerHTML = "";

     // Iterate through tasks and create list items
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];

         // Create a new list item
        let listItem = document.createElement("li");
        listItem.textContent = task;

         // Add list item to the task list
        taskList.appendChild(listItem);
    }
}