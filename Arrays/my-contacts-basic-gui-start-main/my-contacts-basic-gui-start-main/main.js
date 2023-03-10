// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');
let textboxPEl;
let textboxEl;

// Global array
let contacts = initContacts();
displayAll();

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
  // for (let i = 0; i < array.length; i++) {

  // }
  saveContacts();
  displayAll();
}

function addContact() {
  outputEl.innerHTML = '';

  textboxPEl = document.createElement('p');
  textboxPEl.innerHTML = `<p>Please enter the contacts ${item}.</p>`;

  textboxEl = document.createElement('input');
  textboxEl.type = 'text';
  console.log(textboxEl);

  // Add everything to a div element
  let divEl = document.createElement('div');
  divEl.appendChild(textboxPEl);
  divEl.appendChild(textboxEl);
  outputEl.appendChild(divEl);

  textboxEl.addEventListener('keydown', keydownHandler);

  // tasks.push(newContact(userTask));
  // saveTasks();
  // displayTasks();
  // tasksInputEl.value = '';
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
function initContacts() {
  let jsonContacts = localStorage.getItem('contacts');
  return JSON.parse(jsonContacts) ?? [];
}

// function displayTasks() {
//   tasksEl.innerHTML = '';
//   for (let i = 0; i < tasks.length; i++) {
//     tasksEl.appendChild(getTaskHTML(tasks[i], i));
//   }
// }

function newContact(index, name, email, phone, country) {
  return {
    index: index,
    name: name,
    email: email,
    phone: phone,
    country: country,
  };
}

// Display all contacts in global contacts array
function displayAll() {
  let outputStr = '';
  for (let i = 0; i < contacts.length; i++) {
    outputStr += getTaskHTMLStr(
      i,
      contacts[i].name,
      contacts[i].email,
      contacts[i].phone,
      contacts[i].country
    );
  }
  outputEl.innerHTML = outputStr;
}

function saveContacts() {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Get html for given task
function getTaskHTMLStr(index, name, email, phone, country) {
  return `
  <div>
  <p>${index}: ${name}</p>
  <p>${email}</p>
  <p>${phone}(${country})
  </div>
  `;
}

// Variables that must be declared outside function
let instanceCounter = 0;
let item = 'name';
let name = '';
let email = '';
let phone = '';
let country = '';
function keydownHandler(e) {
  let textboxVal = textboxEl.value;
  if (e.keyCode === 13 && e.repeat === false && textboxVal !== '') {
    if (instanceCounter === 0) {
      name = textboxVal;
      item = 'email';
      instanceCounter++;
      textboxVal = '';
      addContact();
    } else if (instanceCounter === 1) {
      email = textboxVal;
      item = 'phone';
      instanceCounter++;
      textboxVal = '';
      addContact();
    } else if (instanceCounter === 2) {
      phone = textboxVal;
      item = 'country';
      instanceCounter++;
      textboxVal = '';
      addContact();
    } else if (instanceCounter === 3) {
      country = textboxVal;
      contacts.push(newContact(contacts.length, name, email, phone, country));
      saveContacts();
      instanceCounter = 0;
      outputEl.innerHTML += `<p>Contact added</p>`;
      setTimeout(() => {
        outputEl.innerHTML = '';
      }, 1000);
      item = 'name';
    }
  }
  console.log(instanceCounter);
}

// https://docs.google.com/document/d/1lJ8SckwihxTvA9Z7TiJtx1UKwz-HS8ErKThc5fChbDI/edit
