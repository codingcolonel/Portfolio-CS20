// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get Speed & Speed Limit Inputs
  let d1Speed = +document.getElementById('d1-speed').value;
  let d1Limit = +document.getElementById('d1-limit').value;
  let d2Speed = +document.getElementById('d2-speed').value;
  let d2Limit = +document.getElementById('d2-limit').value;
  let d3Speed = +document.getElementById('d3-speed').value;
  let d3Limit = +document.getElementById('d3-limit').value;

  // Calculate & Output Ticket Types

  console.log(d1Speed);
  console.log(d1Limit);
  console.log(d2Speed);
  console.log(d2Limit);
  console.log(d3Speed);
  console.log(d3Limit);
  // Driver 1
  document.getElementById('d1-ticket').innerHTML = calcTicket(d1Speed, d1Limit);

  // Driver 2
  document.getElementById('d2-ticket').innerHTML = calcTicket(d2Speed, d2Limit);

  // Driver 3
  document.getElementById('d3-ticket').innerHTML = calcTicket(d3Speed, d3Limit);
}

function calcTicket(speed, limit) {
  if (speed > limit + 40) {
    return 'Really Big Ticket';
  } else if (speed > limit + 20) {
    return 'Big Ticket';
  } else if (speed > limit) {
    return 'Small Ticket';
  } else {
    return 'No Ticket';
  }
}
