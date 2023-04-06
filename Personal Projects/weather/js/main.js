// HTML Elements
let searchInEl = document.getElementById('search-container');
let searchBtnEl = document.getElementById('search-btn');

// Event listener
searchInEl.addEventListener('keyup', selectTopItemFromList);
searchBtnEl.addEventListener('click', selectTopItemFromList);

function selectTopItemFromList(e) {
  console.log(e);
  if (e.key === 'Enter' || e.detail !== 0) {
    console.log('yay');
  } else {
    console.log('nay');
  }
}
