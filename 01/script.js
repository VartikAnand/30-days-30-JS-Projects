// Selecting HTML elements
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new task item
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;

  // Add task item to the list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";

  // Add a click event to delete the task
  const deleteButton = li.querySelector(".delete");
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });
}

// Add task when the "Add" button is clicked
addButton.addEventListener("click", addTask);

// Add task when the "Enter" key is pressed in the input field
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
