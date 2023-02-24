// NICKNAME GENERATOR CODE

// Input Data Variables
let firstName;
let lastName;

// Output Element Variable
let outputEl = document.getElementById('output');

// Nickname data array
let nicknames = [
  'Crusher',
  'the Scientist',
  'Twinkle-toes',
  'the Coder',
  'the Jester',
  'the Sloth',
  'Quicksilver',
];

// Button Event Listener
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById('menu-select').value;

  firstName = document.getElementById('firstNameIn').value;
  lastName = document.getElementById('lastNameIn').value;

  // Reset output elements
  outputEl.innerHTML = '';

  // Process Menu Selection
  if (selection === 'allNick') {
    if (firstName === '' || lastName === '') {
      // Output error if user did not enter first or last name
      outputEl.innerHTML += `<p class='error'>Please enter a valid first and last name</p>`;
    } else {
      // Run function if no errors are present
      allNicknames();
    }
  } else if (selection === 'randomNick') {
    if (firstName === '' || lastName === '') {
      // Output error if user did not enter first or last name
      outputEl.innerHTML += `<p class='error'>Please enter a valid first and last name</p>`;
    } else {
      // Run function if no errors are present
      randomNickname();
    }
  } else if (selection === 'addNick') {
    addNickname();
  } else if (selection === 'removeNick') {
    removeNickname();
  } else if (selection === 'removeNickIndex') {
    removeNicknameByIndex();
  } else if (selection === 'removeNickSearch') {
    removeNicknameSearch();
  }
}

function allNicknames() {
  // Get all nicknames from array and output them
  if (nicknames.length === 0) {
    // Output error if there are no nicknames in the array
    outputEl.innerHTML += `<p class='error'>No nicknames to display</p>`;
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  } else {
    // Display all nicknames if no errors are present
    for (let i = 0; i < nicknames.length; i++) {
      outputEl.innerHTML += `<p>${firstName} "${nicknames[i]}" ${lastName}</p>`;
    }
  }
}

function randomNickname() {
  // Get random nickname from array and output it
  if (nicknames.length === 0) {
    // Output error if there are no nicknames in the array
    outputEl.innerHTML += `<p class='error'>No nicknames to display</p>`;
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  } else {
    // Display nickname if no errors are present
    outputEl.innerHTML += `<p>${firstName} "${
      nicknames[randomInt(0, nicknames.length)]
    }" ${lastName}</p>`;
  }
}

function addNickname() {
  // Ask user for new nickname
  outputEl.innerHTML += `<p>New Nickname: <input type="text" id="newNicknameIn" class="input" /><button id="btn2">GO</button></p>`;

  // Add event listener to button
  document.getElementById('btn2').addEventListener('click', addNicknameToArray);
}

function addNicknameToArray() {
  // Add nickname to the end of the array
  let newNick = document.getElementById('newNicknameIn').value;

  if (newNick === '') {
    // Output error if user did not enter nickname
    outputEl.innerHTML += `<p class='error'>Please enter a valid nickname</p>`;
    document
      .getElementById('btn2')
      .addEventListener('click', addNicknameToArray);
  } else if (nicknames.includes(newNick)) {
    // Output error if user entered nickname that is already in the array
    outputEl.innerHTML += `<p class='error'>This nickname already exists</p>`;
    document
      .getElementById('btn2')
      .addEventListener('click', addNicknameToArray);
  } else {
    // Add nickname if no errors are present
    nicknames.push(newNick);
    outputEl.innerHTML = '';
    outputEl.innerHTML += 'Nickname Submitted';
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  }
}

function removeNickname() {
  // Remove the newest nickname in the array
  if (nicknames.length > 0) {
    nicknames.pop();
    outputEl.innerHTML += '<p>Removed most recent nickname</p>';
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  } else {
    // Output error if there are no nicknames in the array
    outputEl.innerHTML += `<p class='error'>No nicknames to remove</p>`;
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  }
}

function removeNicknameByIndex() {
  // Ask user for a valid index
  outputEl.innerHTML += `<p>Enter an index to remove: <input type="number" id="arrayIndexIn" class="input"/><button id="btn3">GO</button></p>`;

  // Add event listener to button
  document
    .getElementById('btn3')
    .addEventListener('click', removeNicknameFromArray);
}

function removeNicknameFromArray() {
  // Remove the nickname from the array

  // Get index
  let index = document.getElementById('arrayIndexIn').value;

  // Remove all instances of an error
  document.querySelectorAll('.error').forEach((e) => e.remove());

  if (nicknames.length === 0) {
    // Output error if there are no nicknames in the array
    outputEl.innerHTML += `<p class='error'>No nicknames to remove</p>`;
    document
      .getElementById('btn3')
      .addEventListener('click', removeNicknameFromArray);
  } else if (index < 0 || index > nicknames.length || index === '') {
    // Output error if a valid index is not entered
    outputEl.innerHTML += `<p class='error'>Please enter a valid index</p>`;
    document
      .getElementById('btn3')
      .addEventListener('click', removeNicknameFromArray);
  } else {
    // If no errors are present remove nickname at specified index
    nicknames.splice(index, 1);
    outputEl.innerHTML += `<p>Removed nickname at index ${index}</p>`;
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  }
}

function removeNicknameSearch() {
  // Remove the nickname from the array

  // Ask user for a valid nickname
  outputEl.innerHTML += `<p>Enter a nickname to remove: <input type="text" id="arraySearchIn" class="input"/><button id="btn4">GO</button></p>`;

  // Add event listener to button
  document
    .getElementById('btn4')
    .addEventListener('click', removeSearchedNicknameFromArray);
}

function removeSearchedNicknameFromArray() {
  // Get search results
  let search = document.getElementById('arraySearchIn').value;

  // Remove all instances of an error
  document.querySelectorAll('.error').forEach((e) => e.remove());

  if (search === '') {
    // Output error if search box is empty
    outputEl.innerHTML += `<p class='error'>Please enter a valid nickname</p>`;
    document
      .getElementById('btn4')
      .addEventListener('click', removeSearchedNicknameFromArray);
  } else if (nicknames.length === 0) {
    // Output error if there are no nicknames in the array
    outputEl.innerHTML += `<p class='error'>No nicknames to remove</p>`;
    document
      .getElementById('btn4')
      .addEventListener('click', removeSearchedNicknameFromArray);
  } else if (nicknames.includes(search) === false) {
    // Output error if nickname search does not exist in the array
    outputEl.innerHTML += `<p class='error'>Nickname does not exist</p>`;
    document
      .getElementById('btn4')
      .addEventListener('click', removeSearchedNicknameFromArray);
  } else {
    // If no errors are prsent then remove serach nickname from the array
    nicknames.splice(nicknames.indexOf(search), 1);
    outputEl.innerHTML += `<p>Removed ${search} from nicknames list</p>`;
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  }
}
