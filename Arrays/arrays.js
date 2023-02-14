// // Arrays
// let anArray = [2, 4, 6, 8, 10];
// function arrayInfo() {
//   console.log(anArray.at(0));
//   console.log(anArray.at(-1));
//   console.log(anArray.length);
// }

// // Arrays: Loops
// let happyArray = [];
// for (let n = 0; n <= 1000; n++) {
//   happyArray.push(Math.random());
// }

// // Arrays: querySelectorAll
// let pEls = document.querySelectorAll('p');

// // Arrays: Split a string
// let myStr = 'ford,chev,kia,toyata,honda';
// let myArray = myStr.split(',');
// console.log(myArray);

// // Arrays: Text files
// let colors;

// fetch('web-color.txt').then((rawData) => rawData.text());.then((strData
//   ) => colors = strData.split(/\r?\n/))

// function convertData(rawData) {
//    return rawData.text()
// }

// function processData(strData) {
//     colors = strData.split("\r\n")
//     colors = strData.split(/\r?\n/)
// }

// console.log(colors[0])

// // Practice - Create Arrays
// // Joy 700 times
// let joyArray = []

// for(let n = 0; n < 700; n++) {
//   joyArray.push("joy")
// }

// // Multiples of 4: 20-800
// let m4Array = []

// for(let n = 20; n < 700; n+= 4) {
//   m4Array.push(n)
// }

// // Seperate Colors
// let colorsStr = "red,orange,yellow,green,blue,indigo,violet";

// colorsStr.split(",")

// // Seperate Cities
// let citiesStr = "Edmonton;Calgary;Vancouver;Saskatoon;Winnipeg";

// citiesStr.split(";")

// // Traversing Arrays
// let names = []

// let outputEl = document.getElementById("output")

// for(let i = 0; i < names.length, i++) {
// outputEl.innerHTML += `<p>Hello ${names[0]}!</p>`
// }

// https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
