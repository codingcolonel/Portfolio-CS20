// Weekly Wages - Start Code

// Determine Wage Button Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get Employee Inputs
  let dmHours = +document.getElementById('dm-hours').value;
  let dmPayrate = +document.getElementById('dm-payrate').value;
  let soHours = +document.getElementById('so-hours').value;
  let soPayrate = +document.getElementById('so-payrate').value;
  let kyHours = +document.getElementById('ky-hours').value;
  let kyPayrate = +document.getElementById('ky-payrate').value;

  // Calculate & Output Pay
  // Darcy Maddox
  calcWage(dmHours, dmPayrate);
  document.getElementById('dm-wage').innerHTML = calcWage(
    dmHours,
    dmPayrate
  ).toFixed(2);

  // Sofie Orenstein
  calcWage(dmHours, dmPayrate);
  document.getElementById('so-wage').innerHTML = calcWage(
    soHours,
    soPayrate
  ).toFixed(2);

  // Karl Yoon
  calcWage(dmHours, dmPayrate);
  document.getElementById('ky-wage').innerHTML = calcWage(
    kyHours,
    kyPayrate
  ).toFixed(2);
}

function calcWage(hours, payrate) {
  let overtime = 0;
  if (hours > 40) {
    overtime = hours - 40;
    dmHours = 40;
  }
  return hours * payrate + overtime * 1.5 * payrate;
}
