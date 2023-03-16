// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');
let inputPEl;
let inputEl;
let errorEl;

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
  } else if (selection === 'display-email') {
    displayByEmail();
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

  inputEl = document.createElement('input');
  inputEl.type = 'text';

  errorEl = document.createElement('p');

  // Add everything to a div element
  let divEl = document.createElement('div');
  divEl.appendChild(inputPEl);
  divEl.appendChild(inputEl);
  divEl.appendChild(errorEl);
  outputEl.appendChild(divEl);

  // Add event listener to input
  inputEl.addEventListener('keydown', addContactHandler);
}

function removeContact() {
  outputEl.innerHTML = '';

  inputPEl = document.createElement('p');
  inputPEl.innerHTML = `<p>Please enter an email to remove.</p>`;

  inputEl = document.createElement('input');
  inputEl.type = 'text';

  errorEl = document.createElement('p');

  // Add everything to a div element
  let divEl = document.createElement('div');
  divEl.appendChild(inputPEl);
  divEl.appendChild(inputEl);
  divEl.appendChild(errorEl);
  outputEl.appendChild(divEl);

  // Add event listener to input
  inputEl.addEventListener('keydown', removeContactHandler);
}

function displayByName() {
  outputEl.innerHTML = '';

  inputPEl = document.createElement('p');
  inputPEl.innerHTML = `<p>Search for a name to display</p>`;

  inputEl = document.createElement('input');
  inputEl.type = 'text';

  errorEl = document.createElement('p');

  // Add everything to a div element
  let divEl = document.createElement('div');
  divEl.appendChild(inputPEl);
  divEl.appendChild(inputEl);
  divEl.appendChild(errorEl);
  outputEl.appendChild(divEl);

  // Add event listener to input
  inputEl.addEventListener('keydown', searchNameHandler);
}

function displayByCountry() {
  outputEl.innerHTML = '';

  inputPEl = document.createElement('p');
  inputPEl.innerHTML = `<p>Search for a Country to display</p>`;

  inputEl = document.createElement('input');
  inputEl.type = 'text';

  errorEl = document.createElement('p');

  // Add everything to a div element
  let divEl = document.createElement('div');
  divEl.appendChild(inputPEl);
  divEl.appendChild(inputEl);
  divEl.appendChild(errorEl);
  outputEl.appendChild(divEl);

  // Add event listener to input
  inputEl.addEventListener('keydown', searchCountryHandler);
}

function displayByEmail() {
  outputEl.innerHTML = '';

  inputPEl = document.createElement('p');
  inputPEl.innerHTML = `<p>Search for an Email to display</p>`;

  inputEl = document.createElement('input');
  inputEl.type = 'text';

  errorEl = document.createElement('p');

  // Add everything to a div element
  let divEl = document.createElement('div');
  divEl.appendChild(inputPEl);
  divEl.appendChild(inputEl);
  divEl.appendChild(errorEl);
  outputEl.appendChild(divEl);

  // Add event listener to input
  inputEl.addEventListener('keydown', searchEmailHandler);
}

// HELPER FUNCTIONS
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

function indexOfArrayObject(attribute, value) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i][`${attribute}`] == value) {
      return i;
    }
  }
  return -1;
}

// KEY HANDLERS
// Variables that must be declared outside function
let instanceCounter = 0;
let item = 'name';
let nameIn = '';
let emailIn = '';
let phoneIn = '';
let countryIn = '';

// Add contact info to array
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
      inputEl.value = '';
      inputEl.addEventListener('keydown', addContactHandler);
      inputPEl.innerHTML = `<p>Please enter the contacts ${item}.</p>`;
    } else if (instanceCounter === 1) {
      if (indexOfArrayObject('email', inputVal) === -1) {
        emailIn = inputVal;
        item = 'phone number';
        instanceCounter++;
        inputEl.value = '';
        inputEl.type = 'number';
        inputEl.addEventListener('keydown', addContactHandler);
        errorEl.innerHTML = ``;
        inputPEl.innerHTML = `<p>Please enter the contacts ${item}.</p>`;
      } else {
        // Display error if email already exists
        inputEl.value = '';
        inputEl.addEventListener('keydown', addContactHandler);
        errorEl.innerHTML = `<p class='error'>Email already exists</p>`;
      }
    } else if (instanceCounter === 2) {
      phoneIn = inputVal;
      item = 'country';
      instanceCounter++;
      inputEl.value = '';
      inputEl.type = 'text';
      inputEl.addEventListener('keydown', addContactHandler);
      inputPEl.innerHTML = `<p>Please enter the contacts ${item}.</p>`;
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

// Remove contact info to array
function removeContactHandler(e) {
  if (e.keyCode === 13 && e.repeat === false) {
    let inputVal = inputEl.value;
    let arrayIndex = indexOfArrayObject('email', inputVal);
    if (arrayIndex !== -1) {
      // If index is valid remove from array and reset HTML
      contacts.splice(arrayIndex, 1);
      saveContacts();
      errorEl.innerHTML = ``;
      outputEl.innerHTML += `<p>Contact removed</p>`;
      setTimeout(() => {
        outputEl.innerHTML = '';
      }, 1000);
    } else {
      // If email is invalid display error
      errorEl.innerHTML = `<p class='error'>Not a valid email</p>`;
      inputEl.value = '';
      inputEl.addEventListener('keydown', removeContactHandler);
    }
  }
}

// Search array for a name and display it
function searchNameHandler(e) {
  let inputVal = inputEl.value.toLowerCase();
  let isInArray = false;
  if (e.keyCode === 13 && e.repeat === false) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name.toLowerCase() == inputVal) {
        if (!isInArray) {
          outputEl.innerHTML = '';
        }
        outputEl.innerHTML += getTaskHTMLStr(
          i,
          contacts[i].name,
          contacts[i].email,
          contacts[i].phone,
          contacts[i].country
        );
        isInArray = true;
      }
    }
    if (!isInArray || inputVal === '') {
      // If name is invalid display error
      errorEl.innerHTML = `<p class='error'>Invalid name</p>`;
      inputEl.value = '';
      inputEl.addEventListener('keydown', searchNameHandler);
    }
  }
}

// Search array for a country and display it
function searchCountryHandler(e) {
  let inputVal = inputEl.value.toLowerCase();
  let isInArray = false;
  if (e.keyCode === 13 && e.repeat === false) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].country.toLowerCase() == inputVal) {
        if (!isInArray) {
          outputEl.innerHTML = '';
        }
        outputEl.innerHTML += getTaskHTMLStr(
          i,
          contacts[i].name,
          contacts[i].email,
          contacts[i].phone,
          contacts[i].country
        );
        isInArray = true;
      }
    }
    if (!isInArray || inputVal === '') {
      // If country is invalid display error
      errorEl.innerHTML = `<p class='error'>Invalid country</p>`;
      inputEl.value = '';
      inputEl.addEventListener('keydown', searchCountryHandler);
    }
  }
}

// Search array for an email and display it
function searchEmailHandler(e) {
  let inputVal = inputEl.value;
  let isInArray = false;
  if (e.keyCode === 13 && e.repeat === false) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].email.toLowerCase() == inputVal) {
        if (!isInArray) {
          outputEl.innerHTML = '';
        }
        outputEl.innerHTML += getTaskHTMLStr(
          i,
          contacts[i].name,
          contacts[i].email,
          contacts[i].phone,
          contacts[i].country
        );
        isInArray = true;
      }
    }
    if (!isInArray || inputVal === '') {
      // If email is invalid display error
      errorEl.innerHTML = `<p class='error'>Invalid email</p>`;
      inputEl.value = '';
      inputEl.addEventListener('keydown', searchEmailHandler);
    }
  }
}
