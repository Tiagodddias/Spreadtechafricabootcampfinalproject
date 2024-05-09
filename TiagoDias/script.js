function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task description.");
    return;
  }

  var newRow = document.createElement("tr");

  var taskDescription = document.createElement("td");
  taskDescription.textContent = taskInput.value;
  newRow.appendChild(taskDescription);

  var checkboxCell = document.createElement("td");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      taskDescription.style.textDecoration = "line-through";
    } else {
      taskDescription.style.textDecoration = "none";
    }
  });
  checkboxCell.appendChild(checkbox);
  newRow.appendChild(checkboxCell);

  var deleteCell = document.createElement("td");
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    newRow.remove();
  });
  deleteCell.appendChild(deleteButton);
  newRow.appendChild(deleteCell);

  taskList.appendChild(newRow);
  taskInput.value = "";
}
