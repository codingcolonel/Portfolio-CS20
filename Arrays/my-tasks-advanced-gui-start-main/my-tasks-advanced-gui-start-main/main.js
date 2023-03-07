// My Tasks Basic

// HTML Elements
let tasksInputEl = document.getElementById('task-input');
let menuEl = document.getElementById('menu');
let tasksEl = document.getElementById('tasks');

// Global Variables
let tasks = initTasks();
displayTasks();

// Go Btn - Menu Listener
tasksInputEl.addEventListener('keydown', keydownHandler);

function keydownHandler(e) {
  console.log(e.keyCode);
  if (e.keyCode === 13) {
    let userTask = tasksInputEl.value;
    tasks.push(newTask(userTask));
    saveTasks();
    displayTasks();
    tasksInputEl.value = '';
  }
}

function toggleTask() {
  let taskIndex = +prompt('Please enter number of task to toggle:');
  let task = tasks[taskIndex];
  if (task.completed === '') {
    task.completed = 'completed';
  } else {
    task.completed = '';
  }
  saveTasks();
  displayTasks();
}

function removeTask() {
  let taskIndex = +prompt('Please enter number of task to remove:');
  tasks.splice(taskIndex, 1);
  saveTasks();
  displayTasks();
}

function clearAll() {
  tasks = [];
  saveTasks();
  displayTasks();
}

// HELPERS
function initTasks() {
  let jsonTasks = localStorage.getItem('tasks');
  return JSON.parse(jsonTasks) ?? [];
}

function displayTasks() {
  for (let i = 0; i < tasks.length; i++) {
    tasksEl.appendChild(getTaskHTML(tasks[i], i));
  }
}

function newTask(taskDescription) {
  return {
    description: taskDescription,
    completed: '',
  };
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTaskHTML(task, index) {
  // Use JS to build the task div

  // Check Box Element
  let checkBoxEl = document.createElement('input');
  checkBoxEl.type = 'checkbox';
  checkBoxEl.addEventListener('input', checkBoxHandler);

  // Task Description Text Node
  let textEl = document.createTextNode(task.description);

  // Remove button
  let buttonEl = document.createElement('button');
  buttonEl.innerHTML = 'Remove';
  buttonEl.addEventListener('click', removeBtnHandler);

  // Add everything to a div element
  let divEl = document.createElement('div');
  divEl.appendChild(checkBoxEl);
  divEl.appendChild(textEl);
  divEl.appendChild(buttonEl);

  return divEl;
}

// Event Function
function checkBoxHandler(e) {
  console.log(e.target);
}

function removeBtnHandler(e) {
  console.log(e.target);
}
