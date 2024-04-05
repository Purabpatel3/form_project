// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = `<span class="task">${taskText}</span><button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(btn) {
    var li = btn.parentNode;
    li.parentNode.removeChild(li);
}
