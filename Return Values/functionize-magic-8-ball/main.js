// Magic 8 Ball Answer Logic

// Variables to store HTML Elements
let qTextboxEl = document.getElementById('qTextbox');
let img8BallEl = document.getElementById('img8Ball');
let answerOutEl = document.getElementById('answerOut');

// Add event listener
img8BallEl.addEventListener('click', eventListener);

function eventListener() {
  // Get Input
  let question = qTextboxEl.value;
  let questionCriteria = checkQuestion(question);

  // Check if question passes criteria
  if (questionCriteria === '') {
    answerOutEl.innerHTML = randomResponse();
  } else {
    answerOutEl.innerHTML = questionCriteria;
  }

  // Change text color when clicked
  document.getElementById('answerOut').style.color = 'green';
}

// Helper functions
function checkQuestion(question) {
  if (question === 'Does a magic 8 ball actually work?') {
    return 'How dare you doubt me!';
  } else if (question === 'Is JavaScript awesome?') {
    return 'Of Course!';
  } else if (question === '') {
    return 'Please ask a question...';
  } else {
    return '';
  }
}

function randomResponse() {
  let ranNum = Math.random();
  if (ranNum < 0.2) {
    return 'Without a Doubt.';
  } else if (ranNum < 0.4) {
    return 'As I see it, yes.';
  } else if (ranNum < 0.6) {
    return 'Concentrate and ask again.';
  } else if (ranNum < 0.8) {
    return "Don't count on it.";
  } else {
    return 'Outlook not so good.';
  }
}
