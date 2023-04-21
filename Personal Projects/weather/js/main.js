// Data Arrays
let cityData = [];
let weather = [];
let searchSuggestions = [];
let recentCities = initArray('recentCities');
// let test1;

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
clearBtnEl.addEventListener('click', displaySearchSuggestions);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(processLocation);
} else {
  console.log('Geolocation is not supported by this browser.');
}

function processLocation(position) {
  selectSearchSuggestion(position);
  // test1 = position;
}

function clearSearchBar() {
  // Clear the search bar on button press
  searchInEl.value = '';
}

function clearSearchSuggestions(e) {
  // Clear search suggestions when clicked elsewhere
  if (e.target.id !== 'search-container' && e.target.id !== 'clear-icon')
    autocomBoxEl.innerHTML = '';
}

function displaySearchSuggestions(e) {
  autocomBoxEl.innerHTML = '';
  let searchInVal = searchInEl.value;

  // If Enter is pressed, select first suggestion
  if (e.key === 'Enter') {
    // console.log('hi');
    selectSearchSuggestion(e);
    return;
  } else {
    searchSuggestions = [];
  }

  // If search bar is empty, get the most recent picked locations from local storage
  if (searchInVal === '') {
    if (recentCities.length === 0) {
      for (let i = 0; i < 5; i++) {
        searchSuggestions.push(cityData[i]);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        if (recentCities[i] !== undefined) {
          searchSuggestions.push(recentCities[i]);
        }
      }
    }
  } else {
    // Sort exact matches first
    cityData.forEach((element) => {
      // Limit to 5 suggestions
      if (searchSuggestions.length <= 4) {
        let isAMatch = true;
        for (let i = 0; i < searchInVal.length; i++) {
          // Check if lengths are the same
          if (searchInVal.length !== element.city.length) {
            isAMatch = false;
            break;
          }

          // Check if the letters match
          if (element.city[i].toLowerCase() !== searchInVal[i].toLowerCase()) {
            isAMatch = false;
            break;
          }
        }
        // If everything matches, add to array
        if (isAMatch !== false) {
          searchSuggestions.push(element);
        }
        isAMatch = true;
      }
    });

    // If 5 Suggestions has not been reached add other suggestions until there is 5 or there is no remaining suggestions
    cityData.forEach((element) => {
      if (searchSuggestions.length <= 4) {
        let isAMatch = true;
        for (let i = 0; i < searchInVal.length; i++) {
          // Check if the letters match
          if (element.city[i].toLowerCase() !== searchInVal[i].toLowerCase()) {
            isAMatch = false;
            break;
          }
        }

        // Make sure city hasn't already been added
        if (
          searchSuggestions.some(
            (x) =>
              x.city === element.city && x.admin_name === element.admin_name
          ) === true
        ) {
          isAMatch = false;
        }

        // If everything matches, add to array
        if (isAMatch !== false) {
          searchSuggestions.push(element);
        }
        isAMatch = true;
      }
    });
  }

  // Add HTML elements
  let newUl = document.createElement('ul');
  autocomBoxEl.appendChild(newUl);

  for (let i = 0; i < searchSuggestions.length; i++) {
    const element = searchSuggestions[i];
    let newLi = document.createElement('li');
    newLi.setAttribute('id', `${i}`);
    newLi.innerHTML = `&nbsp${element.city}, ${element.admin_name}, ${element.country}`;
    newLi.addEventListener('click', selectSearchSuggestion);
    newUl.appendChild(newLi);
  }
}

function selectSearchSuggestion(e) {
  // console.log(e);
  let cityObj;
  if (e.key === 'Enter') {
    // If Enter is pressed, select first suggestion
    cityObj = searchSuggestions[0];
  } else if (e.coords !== undefined) {
    // cityData[closestAttributeValue()]
    let closest = closestCoordinateInArray(
      e.coords.latitude,
      e.coords.longitude,
      cityData
    );
    console.log(closest);
    cityObj = {
      lat: e.coords.latitude,
      lng: e.coords.longitude,
    };
    // FIX FORMAT
  } else {
    // Otherwise select suggestion that was clicked on
    cityObj = searchSuggestions[JSON.parse(e.target.id)];
  }
  // console.log(cityObj);

  // Save Selected City to Local Storage
  recentCities.unshift(cityObj);
  saveArray('recentCities', recentCities);

  // API request
  let request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://api.openweathermap.org/data/2.5/weather?lat=${cityObj.lat}&lon=${cityObj.lng}&exclude={part}&appid=e31d73c474dafc414b05ba01b6943b7a&units=metric`
  );
  request.send();
  request.onload = () => {
    console.log(request);
    if (request.status === 200) {
      // If no errors, add API data to array and call Update function
      weather = JSON.parse(request.response);
      console.log(weather);
      updateHTMLElements();
    } else {
      // Output error in console
      console.log(`error ${request.status} ${request.statusText}`);
    }
  };
}

function updateHTMLElements() {
  // Get HTML elements
  let tempEl = document.getElementById('temp');
  let imgEl = document.getElementById('weather-img');
  let feelsLikeEl = document.getElementById('feels-like-temp');
  let conditionEl = document.getElementById('weather-condition');
  let citySpanEl = document.getElementById('h1-location');

  // Update title
  citySpanEl.innerHTML = `${weather.name}, ${weather.sys.country}`;

  // Update temperature
  tempEl.innerHTML = `${Math.round(weather.main.temp)}`;
  // Update feels like temperature
  feelsLikeEl.innerHTML = `${Math.round(weather.main.temp)}`;
  // Update weather condition
  conditionEl.innerHTML = `${weather.weather[0].description}`;

  // Update image based on weather condition
  if (weather.weather[0].id < 300) {
    imgEl.setAttribute('src', 'img/thunder.png');
  } else if (weather.weather[0].id < 400) {
    imgEl.setAttribute('src', 'img/drizzle.png');
  } else if (weather.weather[0].id < 505) {
    imgEl.setAttribute('src', 'img/rain.png');
  } else if (weather.weather[0].id === 511) {
    imgEl.setAttribute('src', 'img/freezing-rain.png');
  } else if (weather.weather[0].id < 532) {
    imgEl.setAttribute('src', 'img/shower-rain.png');
  } else if (weather.weather[0].id < 623) {
    imgEl.setAttribute('src', 'img/snow.png');
  } else if (weather.weather[0].id < 782) {
    imgEl.setAttribute('src', 'img/mist.png');
  } else if (weather.weather[0].id === 800) {
    imgEl.setAttribute('src', 'img/clear.png');
  } else if (weather.weather[0].id === 801) {
    imgEl.setAttribute('src', 'img/few-clouds.png');
  } else if (weather.weather[0].id === 802) {
    imgEl.setAttribute('src', 'img/scattered-clouds.png');
  } else if (weather.weather[0].id === 803) {
    imgEl.setAttribute('src', 'img/broken-clouds.png');
  } else if (weather.weather[0].id === 804) {
    imgEl.setAttribute('src', 'img/overcast-clouds.png');
  }
}

// window.requestAnimationFrame(test);
// function test() {
//   console.log(searchSuggestions.length);
//   window.requestAnimationFrame(test);
// }

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//
// Key: e31d73c474dafc414b05ba01b6943b7a

// https://openweathermap.org/weather-conditions

// to do
// recent locations using local storage - done
// modify algoritm - done
// add functionality to suggestions - done
// update weather using API - done
// get user location
// mystery error
