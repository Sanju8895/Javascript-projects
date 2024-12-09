const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const updateButton = document.getElementById("update-btn");
const todoList = document.getElementById("todo-list");

let currentTask = null; // To track the task being edited

addButton.addEventListener("click", () => {
    let task = todoInput.value.trim();
    if (!task) return; // Prevent adding empty tasks

    // Create list item
    const li = document.createElement("li");
    li.textContent = task.toLowerCase();

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(li);
    });

    // Add edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.addEventListener("click", () => editTask(li));

    // Append list item and buttons
    const liDiv= document.createElement("div");
    todoList.appendChild(li);
    li.appendChild(liDiv);
    liDiv.appendChild(editButton);
    liDiv.appendChild(deleteButton);

    // Clear input field
    todoInput.value = "";
});

function editTask(li) {
    todoInput.value = li.firstChild.textContent; // Set input value to task text
    currentTask = li; // Set the task being edited
}

// Add a single listener to the update button
updateButton.addEventListener("click", () => {
    if (currentTask) {
        currentTask.firstChild.textContent = todoInput.value.trim(); // Update task text
        todoInput.value = ""; // Clear input field
        currentTask = null; // Reset the current task
    }
});
