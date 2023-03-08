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
  let userTask = tasksInputEl.value;
  if (e.keyCode === 13 && e.repeat === false && userTask !== '') {
    tasks.push(newTask(userTask));
    saveTasks();
    displayTasks();
    tasksInputEl.value = '';
  }
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
  tasksEl.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    tasksEl.appendChild(getTaskHTML(tasks[i], i));
  }
}

function newTask(taskDescription) {
  return {
    description: taskDescription,
    completed: false,
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
  checkBoxEl.dataset.index = index;
  checkBoxEl.checked = task.completed;
  checkBoxEl.addEventListener('input', checkBoxHandler);

  // Task Description Text Node
  let textSpanEl = document.createElement('span');
  textSpanEl.innerHTML = task.description;
  if (task.completed) {
    textSpanEl.className = 'completed';
  }

  // Remove button
  let buttonEl = document.createElement('button');
  buttonEl.innerHTML = 'Remove';
  buttonEl.dataset.index = index;
  buttonEl.addEventListener('click', removeBtnHandler);

  // Add everything to a div element
  let divEl = document.createElement('div');
  divEl.appendChild(checkBoxEl);
  divEl.appendChild(textSpanEl);
  divEl.appendChild(buttonEl);

  return divEl;
}

// Event Function
function checkBoxHandler(e) {
  // Get index of task to toggle
  let taskIndex = e.target.dataset.index;
  let task = tasks[taskIndex];
  task.completed = !task.completed;
  saveTasks();
  displayTasks();
  console.log(e.target);
}

function removeBtnHandler(e) {
  // Get index of task to remove
  let taskIndex = e.target.dataset.index;
  tasks.splice(taskIndex, 1);
  saveTasks();
  displayTasks();
  console.log(e.target);
}
