// Functionize Vivaldi Demo

// spring-color: #0E94D1
// summer-color: #1BA848
// autumn-color: #FE6732
// winter-color: #1C64B9

var autumn = {
  text: "autumn",
  color: "#FE6732",
  image: "img/autumn.jpg",
  audio: "songs/vivaldi-autumn.mp3",
  background: "#FE6732",
}

var summer = {
  text: "summer",
  color: "#1BA848",
  image: "img/summer.jpg",
  audio: "songs/vivaldi-summer.mp3",
  background: "#1BA848",
}

var winter = {
  text: "winter",
  color: "#1C64B9",
  image: "img/winter.jpg",
  audio: "songs/vivaldi-winter.mp3",
  background: "#1C64B9",
}

var spring = {
  text: "spring",
  color: "#0E94D1",
  image: "img/spring.jpg",
  audio: "songs/vivaldi-spring.mp3",
  background: "#0E94D1",
}

// Variables for HTML Elements
let seasonSelect = document.getElementById("season-select");
let seasonH2 = document.getElementById("season-heading");
let seasonImg = document.getElementById("season-img");
let seasonAudio = document.getElementById("season-audio");

// Event Listener
seasonSelect.addEventListener("input", seasonSelectChanged);

// Event handler for season select
function seasonSelectChanged() {
  // Get selected season
  let season = seasonSelect.value;
  if (season === "spring") {
    changeSeason(spring)
  } else if (season === "summer") {
    changeSeason(summer)
  } else if (season === "autumn") {
    changeSeason(autumn)
  } else if (season === "winter") {
    changeSeason(winter)
  }
}

function changeSeason(seasonChoosen) {
  // Update page to match selected season
  seasonH2.innerHTML = seasonChoosen.text;
  seasonH2.style.color = seasonChoosen.color;
  seasonImg.src = seasonChoosen.image;
  seasonAudio.src = seasonChoosen.audio;
  document.body.style.backgroundColor = seasonChoosen.background;
}

