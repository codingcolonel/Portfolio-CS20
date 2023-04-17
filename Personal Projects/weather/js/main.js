// Data Arrays
let cityData = [];
let weather = [];
let searchSuggestions = [];

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

// HTML Elements
let searchInEl = document.getElementById('search-container');
let clearBtnEl = document.getElementById('clear-icon');
let autocomBoxEl = document.getElementById('autocom-box');

// Event listeners
document.addEventListener('click', clearSearchSuggestions);
searchInEl.addEventListener('keyup', displaySearchSuggestions);
searchInEl.addEventListener('click', displaySearchSuggestions);
clearBtnEl.addEventListener('click', clearSearchBar);

function clearSearchBar() {
  searchInEl.value = '';
}

function clearSearchSuggestions(e) {
  // console.log(e);
  if (e.target.id !== 'search-container' && e.target.id !== 'clear-icon')
    autocomBoxEl.innerHTML = '';
}

function displaySearchSuggestions(e) {
  autocomBoxEl.innerHTML = '';
  let searchInVal = searchInEl.value;

  if (e.key === 'Enter') {
    // selectSearchSuggestion(e);
    return;
  } else {
    searchSuggestions = [];
  }

  if (searchInVal === '') {
    for (let i = 0; i < 5; i++) {
      searchSuggestions.push(cityData[i]);
    }
  } else {
    // let filterCityData = cityData.filter(
    //   (element) => element.city.length === searchInVal.length
    // );

    // console.log(filterCityData);

    // filterCityData.forEach((element) => {
    //   let isAMatch = true;
    //   for (let i = 0; i < searchInVal.length; i++) {
    //     // console.log('ele' + element.city[i]);
    //     // console.log('ele' + element.city);
    //     // console.log('sea' + searchInVal[i]);
    //     if (element.city[i].toLowerCase() !== searchInVal[i].toLowerCase()) {
    //       isAMatch = false;
    //       break;
    //     }
    //   }
    //   if (isAMatch !== false) {
    //     searchSuggestions.push(element);
    //   }
    //   isAMatch = true;
    // });

    // cityData.sort(function (a, b) {
    //   // ASC  -> a.length - b.length
    //   // DESC -> b.length - a.length
    //   return a.length - b.length;
    // });

    // console.log(cityData)

    // Limit to 5 suggestions
    cityData.forEach((element) => {
      if (searchSuggestions.length <= 4) {
        let isAMatch = true;
        for (let i = 0; i < searchInVal.length; i++) {
          // console.log('ele' + element.city[i]);
          // console.log('ele' + element.city);
          // console.log('sea' + searchInVal[i]);
          if (element.city[i].toLowerCase() !== searchInVal[i].toLowerCase()) {
            isAMatch = false;
            break;
          }
        }
        if (isAMatch !== false) {
          searchSuggestions.push(element);
        }
        isAMatch = true;
      }
    });
  }
  let newUl = document.createElement('ul');
  autocomBoxEl.appendChild(newUl);

  for (let i = 0; i < searchSuggestions.length; i++) {
    const e = searchSuggestions[i];
    let newLi = document.createElement('li');
    newLi.setAttribute('id', `${i}`);
    newLi.innerHTML = `&nbsp${e.city}, ${e.admin_name}, ${e.country}`;
    newLi.addEventListener('click', selectSearchSuggestion);
    newUl.appendChild(newLi);
    // list += `<li id='search${i}'>&nbsp${e.city}, ${e.admin_name}, ${e.country}</li>`;
    // console.log(list);
  }
  // autocomBoxEl.innerHTML = `<ul>${list}</ul>`;

  // console.log(searchSuggestions);
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

function selectSearchSuggestion(e) {
  let cityObj = searchSuggestions[JSON.parse(e.target.id)];
  document.getElementById(
    'h1-location'
  ).innerHTML = `${cityObj.city}, ${cityObj.iso3}`;
  // API requests
  let request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://api.openweathermap.org/data/2.5/weather?lat=${cityObj.lat}&lon=${cityObj.lng}&exclude={part}&appid=e31d73c474dafc414b05ba01b6943b7a&units=metric`
  );
  request.send();
  request.onload = () => {
    console.log(request);
    if (request.status === 200) {
      weather = JSON.parse(request.response);
      console.log(weather);
      updateHTMLElements();
    } else {
      console.log(`error ${request.status} ${request.statusText}`);
    }
  };
}

function updateHTMLElements() {
  let tempEl = document.getElementById('temp');
  let imgEl = document.getElementById('weather-img');
  let feelsLikeEl = document.getElementById('feels-like-temp');
  let conditionEl = document.getElementById('weather-condition');

  tempEl.innerHTML = `${Math.round(weather.main.temp)}`;
  feelsLikeEl.innerHTML = `${Math.round(weather.main.temp)}`;
  conditionEl.innerHTML = `${weather.weather[0].description}`;
}

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//
// Key: e31d73c474dafc414b05ba01b6943b7a

// https://openweathermap.org/weather-conditions

// to do
// recent locations using local storage
// modify algoritm
// add functionality to suggestions - done
// update weather using API
