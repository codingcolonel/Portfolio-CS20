// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch('data/survey-results.txt')
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch('data/age-data.txt')
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch('data/number-data.txt')
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById('output');

// Button Event Listener
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById('menu-select').value;

  // Process Menu Selection
  if (selection === 'survey') {
    traverseSurveyData();
  } else if (selection === 'ages') {
    traverseAgeData();
  } else if (selection === 'numbers') {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.

  // Reset any previous data
  outputEl.innerHTML = '';

  let yes = 0;
  let no = 0;
  let maybe = 0;

  // Reset any previous data
  outputEl.innerHTML = '';

  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] === 'Yes') {
      yes++;
    } else if (surveyData[i] === 'No') {
      no++;
    } else {
      maybe++;
    }
  }
  outputEl.innerHTML += `Yes: <p>${yes}</p>`;
  outputEl.innerHTML += `No: <p>${no}</p>`;
  outputEl.innerHTML += `Maybe: <p>${maybe}</p>`;
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.

  // Reset any previous data
  outputEl.innerHTML = '';

  let nUnder18 = 0;
  let n18to35 = 0;
  let n36to65 = 0;
  let n65plus = 0;

  // Reset any previous data
  outputEl.innerHTML = '';

  for (let h = 0; h < ageData.length; h++) {
    if (ageData[h] < 18) {
      nUnder18++;
    } else if (ageData[h] <= 35) {
      n18to35++;
    } else if (ageData[h] <= 65) {
      n36to65++;
    } else {
      n65plus++;
    }
  }
  outputEl.innerHTML += `Under 18: <p>${nUnder18}</p>`;
  outputEl.innerHTML += `18-35: <p>${n18to35}</p>`;
  outputEl.innerHTML += `36-65: <p>${n36to65}</p>`;
  outputEl.innerHTML += `65+: <p>${n65plus}</p>`;
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  let even = 0;
  let odd = 0;

  // Reset any previous data
  outputEl.innerHTML = '';

  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  outputEl.innerHTML += `Even: <p>${even}</p>`;
  outputEl.innerHTML += `Odd: <p>${odd}</p>`;
}
