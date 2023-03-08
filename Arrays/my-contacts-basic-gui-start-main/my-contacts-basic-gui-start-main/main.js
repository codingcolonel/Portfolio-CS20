// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  for (let i = 0; i < array.length; i++) {}
  console.log('Display Contacts');
}

function addContact() {
  console.log('Add Contact');
}

function removeContact() {
  console.log('Remove Contact');
}

function displayByName() {
  console.log('Display by Name');
}

function displayByCountry() {
  console.log('Display by Country');
}

// Helper functions
// Display all tasks in global tasks array
function displayAll() {
  let outputStr = '';
  for (let i = 0; i < tasks.length; i++) {
    outputStr += getTaskHTMLStr(tasks[i], i);
  }
  outputEl.innerHTML = outputStr;
}

// Get html for given task
function getTaskHTMLStr(task, index) {
  return `
  <div class="${task.completed}">
  ${index}: ${task.description}
  </div>
  `;
}
