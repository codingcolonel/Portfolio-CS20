// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');
let inputPEl;
let inputEl;

// Global array
let contacts = initContacts();

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    item = 'name';
    instanceCounter = 0;
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
  // Get all contacts from array and display them in output element
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

function addContact() {
  // Display input element then use ky handler to process data when enter is pressed
  outputEl.innerHTML = '';

  inputPEl = document.createElement('p');
  inputPEl.innerHTML = `<p>Please enter the contacts ${item}.</p>`;

  if (item !== 'phone number') {
    inputEl = document.createElement('input');
    inputEl.type = 'text';
  } else {
    inputEl = document.createElement('input');
    inputEl.type = 'number';
  }

  // Add everything to a div element
  let divEl = document.createElement('div');
  divEl.appendChild(inputPEl);
  divEl.appendChild(inputEl);
  outputEl.appendChild(divEl);

  // Add event listener to input
  inputEl.addEventListener('keydown', addContactHandler);
}

function removeContact() {
  outputEl.innerHTML = '';

  inputPEl = document.createElement('p');
  inputPEl.innerHTML = `<p>Please enter an index to remove.</p>`;

  inputEl = document.createElement('input');
  inputEl.type = 'number';

  // Add everything to a div element
  let divEl = document.createElement('div');
  divEl.appendChild(inputPEl);
  divEl.appendChild(inputEl);
  outputEl.appendChild(divEl);

  // Add event listener to input
  inputEl.addEventListener('keydown', removeContactHandler);
}

function displayByName() {
  outputEl.innerHTML = '';

  inputPEl = document.createElement('p');
  inputPEl.innerHTML = `<p>Search a name to display</p>`;

  inputEl = document.createElement('input');
  inputEl.type = 'text';

  // Add everything to a div element
  let divEl = document.createElement('div');
  divEl.appendChild(inputPEl);
  divEl.appendChild(inputEl);
  outputEl.appendChild(divEl);

  // Add event listener to input
  inputEl.addEventListener('keydown', searchContactHandler);
}

function displayByCountry() {
  console.log('Display by Country');
}

// Helper functions
// Get contacts from local storage
function initContacts() {
  let jsonContacts = localStorage.getItem('contacts');
  return JSON.parse(jsonContacts) ?? [];
}

// Save contacts to local storage
function saveContacts() {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Return array object for new contact
function newContact(index, name, email, phone, country) {
  return {
    index: index,
    name: name,
    email: email,
    phone: phone,
    country: country,
  };
}

// Get html for given contact
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
let nameIn = '';
let emailIn = '';
let phoneIn = '';
let countryIn = '';

// Key handler and add contact info to array
function addContactHandler(e) {
  let inputVal = inputEl.value;
  // Ensure enter is pressed and input is not empty
  if (
    (e.keyCode === 13 && e.repeat === false && inputVal !== '') ||
    inputVal === Number
  ) {
    // Check to see which item is current being asked for and update variable
    if (instanceCounter === 0) {
      nameIn = inputVal;
      item = 'email address';
      instanceCounter++;
      inputVal = '';
      addContact();
    } else if (instanceCounter === 1) {
      emailIn = inputVal;
      item = 'phone number';
      instanceCounter++;
      inputVal = '';
      addContact();
    } else if (instanceCounter === 2) {
      phoneIn = inputVal;
      item = 'country';
      instanceCounter++;
      inputVal = '';
      addContact();
    } else if (instanceCounter === 3) {
      countryIn = inputVal;
      // Once all input fields are filled out add to array, save and reset HTML
      contacts.push(
        newContact(contacts.length, nameIn, emailIn, phoneIn, countryIn)
      );
      saveContacts();
      instanceCounter = 0;
      outputEl.innerHTML += `<p>Contact added</p>`;
      setTimeout(() => {
        outputEl.innerHTML = '';
      }, 1000);
      item = 'name';
    }
  }
}

// Key handler and remove contact info to array
function removeContactHandler(e) {
  if (e.keyCode === 13 && e.repeat === false) {
    let inputVal = inputEl.value;
    try {
      // Attempt to parse input value
      inputVal = JSON.parse(inputVal);
    } catch {
      // Set value to null if textbox is empty
      inputVal = null;
    }
    if (contacts[inputVal] !== undefined && inputVal !== null) {
      // If index is valid remove from array and reset HTML
      contacts.splice(inputVal, 1);
      saveContacts();
      outputEl.innerHTML += `<p>Contact removed</p>`;
      setTimeout(() => {
        outputEl.innerHTML = '';
      }, 1000);
    } else {
      // If index is invalid output error and run function again
      outputEl.innerHTML += `<p class='error'>Not a valid index</p>`;
      setTimeout(() => {
        removeContact();
      }, 1000);
    }
  }
}

function searchContactHandler(e) {
  let inputVal = inputEl.value;
  if (e.keyCode === 13 && e.repeat === false) {
    console.log('hi');
  }
}
// https://docs.google.com/document/d/1lJ8SckwihxTvA9Z7TiJtx1UKwz-HS8ErKThc5fChbDI/edit
