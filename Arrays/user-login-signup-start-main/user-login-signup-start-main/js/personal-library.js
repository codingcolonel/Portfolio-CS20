// LOCAL STORAGE
// Initiate array to local storage values
function initArray(array) {
  let jsonArray = localStorage.getItem(array);
  return JSON.parse(jsonArray) ?? [];
}

// Save array values to local storage
function saveArray(reference, array) {
  localStorage.setItem(reference, JSON.stringify(array));
}

// ARRAY OBJECTS
// Return first index of a specific value in an array of objects
function getindexOfArrayObject(array, attribute, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][`${attribute}`] == value) {
      return i;
    }
  }
  return -1;
}

// RANDOM LIBRARY
// Return a random decimbal b/t low (inclusive) and high (exclusive)
function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}

// Return a random integer b/t low (inclusive) and high (exclusive)
function randomInt(low, high) {
  return Math.floor(randomDec(low, high));
}

// Return a random rgb color- 'rgb(__, __, __)'
function randomRGB() {
  return `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(
    0,
    256
  )})`;
}
