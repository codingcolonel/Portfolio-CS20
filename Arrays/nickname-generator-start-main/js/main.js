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
      outputEl.innerHTML += `<p class='error'>Please enter a valid nickname</p>`;
    }
  } else if (selection === 'randomNick') {
    if (firstName !== '' && lastName !== '') {
      randomNickname();
    } else {
      outputEl.innerHTML += `<p class='error'>Please enter a valid nickname</p>`;
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
  for (let i = 0; i < nicknames.length; i++) {
    outputEl.innerHTML += `<p>${firstName} "${nicknames[i]}" ${lastName}</p>`;
  }
}

function randomNickname() {
  // Get random nickname from array and output it
  outputEl.innerHTML += `<p>${firstName} "${
    nicknames[randomInt(0, nicknames.length)]
  }" ${lastName}</p>`;
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
  nicknames.pop();
  outputEl.innerHTML += '<p>Removed most recent nickname</p>';
  setTimeout(() => {
    outputEl.innerHTML = '';
  }, 1000);
}

function removeNicknameByIndex() {
  // Ask user for a valid index and remove that nickname from the array
}
