// Retrieve tasks from local storage or set an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks on the page
function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });

  // Save tasks to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('task-input');
  const newTask = taskInput.value.trim();

  if (newTask !== '') {
    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
  }
}

// Function to edit a task
function editTask(index) {
  const updatedTask = prompt('Edit task:', tasks[index]);

  if (updatedTask !== null) {
    tasks[index] = updatedTask.trim();
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  const confirmDelete = confirm('Are you sure you want to delete this task?');

  if (confirmDelete) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

// Initial rendering of tasks
renderTasks();
