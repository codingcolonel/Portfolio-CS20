// Colorful Colors Start Code

// Load Colors from Text File
let colors;
fetch('web-colors.txt')
  .then((rawData) => rawData.text())
  .then((strData) => (colors = strData.split(/\r?\n/)));

// Output Variable
let outputEl = document.getElementById('output');

// Button Event Listener
document.getElementById('go-btn').addEventListener('click', goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById('menu-select').value;

  // Process Menu Selection
  if (selection === 'all') {
    displayAll();
  } else if (selection === 'start-letter') {
    displayStartingLetter();
  } else if (selection === 'random') {
    randomColor();
  }
}

// Menu Functions
function displayAll() {
  outputEl.innerHTML = '';
  for (let i = 0; i < colors.length; i++) {
    outputEl.innerHTML += `<div style="background-color: ${colors[i]};">${colors[i]}</div>`;
  }
}

function displayStartingLetter() {
  let startLetter = prompt('pick a letter').toUpperCase();
  let count = 0;

  outputEl.innerHTML = '';
  for (let i = 0; i < colors.length; i++) {
    if (colors[i][0] === startLetter) {
      count++;
      outputEl.innerHTML += `<div style="background-color: ${colors[i]};">${colors[i]}</div>`;
    }
  }
  outputEl.innerHTML += `<p>Number of Colors: ${count}</p>`;
}

function randomColor() {
  let ranColor = randomInt(0, colors.length + 1);

  outputEl.innerHTML = `<div style="background-color: ${colors[ranColor]};">${colors[ranColor]}</div>`;
}

// https://www.youtube.com/watch?v=Q-4InT18p8w&list=PLVrsNRbJzKu-P-pj7jQRu21lJaI46-t_J&index=9
