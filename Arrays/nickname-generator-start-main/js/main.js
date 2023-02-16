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

  // Process Menu Selection
  if (selection === 'allNick') {
    allNicknames();
  } else if (selection === 'randomNick') {
    randomNickname();
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
    // outputEl += `${}`
  }
}

function randomNickname() {
  // Get random nickname from array and output it
}

function addNickname() {
  // Ask user for new nickname and add it to the array
}

function removeNickname() {
  // Remove the newest nickname in the array
}

function removeNicknameByIndex() {
  // Ask user for a valid index and remove that nickname from the array
}
