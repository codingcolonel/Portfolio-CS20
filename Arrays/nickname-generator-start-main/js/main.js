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
    if (firstName !== '' && lastName !== '') {
      allNicknames();
    } else {
      outputEl.innerHTML += `<p class='error'>Please enter a valid first and last name</p>`;
    }
  } else if (selection === 'randomNick') {
    if (firstName !== '' && lastName !== '') {
      randomNickname();
    } else {
      outputEl.innerHTML += `<p class='error'>Please enter a valid first and last name</p>`;
    }
  } else if (selection === 'addNick') {
    addNickname();
  } else if (selection === 'removeNick') {
    removeNickname();
  } else if (selection === 'removeNickIndex') {
    removeNicknameByIndex();
  }
}

function allNicknames() {
  // Get all nicknames from array and output them
  if (nicknames.length > 0) {
    for (let i = 0; i < nicknames.length; i++) {
      outputEl.innerHTML += `<p>${firstName} "${nicknames[i]}" ${lastName}</p>`;
    }
  } else {
    outputEl.innerHTML += `<p class='error'>No nicknames to display</p>`;
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  }
}

function randomNickname() {
  if (nicknames.length > 0) {
    // Get random nickname from array and output it
    outputEl.innerHTML += `<p>${firstName} "${
      nicknames[randomInt(0, nicknames.length)]
    }" ${lastName}</p>`;
  } else {
    outputEl.innerHTML += `<p class='error'>No nicknames to display</p>`;
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  }
}

function addNickname() {
  // Ask user for new nickname and add it to the end of the array
  outputEl.innerHTML += `<p>New Nickname: <input type="text" id="newNicknameIn" class="input" /><button id="btn2">GO</button></p>`;

  document.getElementById('btn2').addEventListener('click', addNicknameToArray);
}

function addNicknameToArray() {
  let newNick = document.getElementById('newNicknameIn').value;

  if (newNick !== '') {
    nicknames.push(newNick);
    outputEl.innerHTML = '';
    outputEl.innerHTML += 'Nickname Submitted';
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  } else {
    outputEl.innerHTML += `<p class='error'>Please enter a valid nickname</p>`;
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
    outputEl.innerHTML += `<p class='error'>No nicknames to remove</p>`;
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  }
}

function removeNicknameByIndex() {
  // Ask user for a valid index and remove that nickname from the array
  // Remove the newest nickname in the array
  outputEl.innerHTML += `<p>Enter an index to remove: <input type="number" id="arrayIndexIn" class="input" /><button id="btn3">GO</button></p>`;

  document
    .getElementById('btn3')
    .addEventListener('click', removeNicknameFromArray);
}

function removeNicknameFromArray() {
  let index = document.getElementById('arrayIndexIn').value;
  if (nicknames.length > 0 && index > 0 && index < nicknames.length) {
    document.getElementById('error1').remove();
    nicknames.splice(index, 1);
    outputEl.innerHTML += `<p>Removed nickname at index ${index}</p>`;
    setTimeout(() => {
      outputEl.innerHTML = '';
    }, 1000);
  } else if (index < 0 || index > nicknames.length) {
    outputEl.innerHTML += `<p class='error' id='error1'>Please enter a valid index</p>`;
    document
      .getElementById('btn3')
      .addEventListener('click', removeNicknameFromArray);
  } else {
    outputEl.innerHTML += `<p class='error' id='error1'>No nicknames to remove</p>`;
    document
      .getElementById('btn3')
      .addEventListener('click', removeNicknameFromArray);
  }
}
