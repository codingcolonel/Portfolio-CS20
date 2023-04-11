// Data Arrays
let cities = [];
let weather = [];

// API requests
let request1 = new XMLHttpRequest();
request1.open(
  'GET',
  'http://api.openweathermap.org/geo/1.0/direct?q=Amsterdam,NL&limit=5&appid=e31d73c474dafc414b05ba01b6943b7a'
);
request1.send();
request1.onload = () => {
  console.log(request1);
  if (request1.status === 200) {
    cities = JSON.parse(request1.response);
  } else {
    console.log(`error ${request1.status} ${request1.statusText}`);
  }
};

let request2 = new XMLHttpRequest();
request2.open(
  'GET',
  'https://api.openweathermap.org/data/2.5/weather?lat=53.5461&lon=-113.494&appid=e31d73c474dafc414b05ba01b6943b7a&units=metric'
);
request2.send();
request2.onload = () => {
  console.log(request2);
  if (request2.status === 200) {
    weather = JSON.parse(request2.response);
  } else {
    console.log(`error ${request2.status} ${request2.statusText}`);
  }
};

// HTML Elements
let searchInEl = document.getElementById('search-container');
let searchBtnEl = document.getElementById('search-btn');

// Event listener
searchInEl.addEventListener('keyup', keyUpHandler);
searchBtnEl.addEventListener('click', selectTopItemFromList);

function keyUpHandler(e) {
  if (e.key === 'Enter') {
    selectTopItemFromList(e);
  }
}

function selectTopItemFromList(e) {
  console.log(e);
  if (searchInEl.value !== '') {
    console.log('yay');
  } else {
    console.log('nay');
  }
}
