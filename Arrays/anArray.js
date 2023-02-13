// Arrays
let anArray = [2, 4, 6, 8, 10];
function arrayInfo() {
  console.log(anArray.at(0));
  console.log(anArray.at(-1));
  console.log(anArray.length);
}

// Arrays: Loops
let happyArray = [];
for (let n = 0; n <= 1000; n++) {
  happyArray.push(Math.random());
}

// Arrays: querySelectorAll
let pEls = document.querySelectorAll('p');

// Arrays: Split a string
let myStr = 'ford,chev,kia,toyata,honda';
let myArray = myStr.split(',');
console.log(myArray);

// Arrays: Text files
let colors;

fetch('web-color.txt').then(convertData);.then(processData)

function convertData(rawData) {
   return rawData.text()
}

function processData(strData) {
    // colors = strData.split("\r\n")
    // colors = strData.split(/\r?\n/)
    // console.log(colors)
}


