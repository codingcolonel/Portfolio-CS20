// Data Arrays
let cityData = [];
let weather = [];

// Get city data
fetch('../weather/data/worldcities.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    cityData = data;
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

// API requests
// let request = new XMLHttpRequest();
// request.open(
//   'GET',
//   'http://api.openweathermap.org/geo/1.0/direct?q=Amsterdam,NL&limit=5&appid=e31d73c474dafc414b05ba01b6943b7a'
// );
// request.send();
// request.onload = () => {
//   console.log(request);
//   if (request.status === 200) {
//     cities = JSON.parse(request.response);
//   } else {
//     console.log(`error ${request.status} ${request.statusText}`);
//   }
// };

// HTML Elements
let searchInEl = document.getElementById('search-container');
let searchBtnEl = document.getElementById('search-btn');

// Event listener
searchInEl.addEventListener('keyup', keyUpHandler);
searchBtnEl.addEventListener('click', displayCityOptions);

function keyUpHandler(e) {
  if (e.key === 'Enter') {
    selectTopItemFromList(e);
  }
}

function displayCityOptions(e) {
  let searchErrEl = document.getElementById('search-err');
  console.log(e);
  if (searchInEl.value !== '') {
    console.log('yay');
  } else {
    searchErrEl.innerHTML = 'Error: Searchbox Empty';
  }
}

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//
// Key: e31d73c474dafc414b05ba01b6943b7a
