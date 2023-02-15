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

  // Count number of yes, no and maybe and output results
  outputEl.innerHTML += `<p>Yes: ${
    surveyData.filter((Element) => Element === 'Yes').length
  }</p>`;
  outputEl.innerHTML += `<p>No: ${
    surveyData.filter((Element) => Element === 'No').length
  }</p>`;
  outputEl.innerHTML += `<p>Maybe: ${
    surveyData.filter((Element) => Element === 'Maybe').length
  }</p>`;
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

  outputEl.innerHTML += `<p>Under 18: ${
    ageData.filter((Element) => Element < 18).length
  }</p>`;
  outputEl.innerHTML += `<p>18-35: ${
    ageData.filter((Element) => Element >= 18 && Element <= 35).length
  }</p>`;
  outputEl.innerHTML += `<p>36-65: ${
    ageData.filter((Element) => Element >= 36 && Element <= 65).length
  }</p>`;
  outputEl.innerHTML += `<p>65+: ${
    ageData.filter((Element) => Element > 65).length
  }</p>`;
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

  for (let i = 0; i < ageData.length; i++) {
    calc = numberData[i] / 2;
    if (calc.isInteger() === true) {
      even++;
    } else {
      odd++;
    }
  }
  outputEl.innerHTML += `Even: <p>${even}</p>`;
  outputEl.innerHTML += `Odd: <p>${odd}</p>`;
}

// https://www.google.com/search?q=how+to+check+that+a+number+is+a+decimal+js&rlz=1C1GCEA_enCA1043CA1043&ei=71LtY4n5GdnA0PEP_LOwmAc&ved=0ahUKEwjJrPe1wJj9AhVZIDQIHfwZDHMQ4dUDCA8&uact=5&oq=how+to+check+that+a+number+is+a+decimal+js&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIJCAAQFhAeEPEEMgUIABCGAzIFCAAQhgMyBQgAEIYDOgQIABBHSgQIQRgASgUIQBIBMVDrA1iiCGCICWgAcAJ4AIABjgGIAcACkgEDMi4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp
