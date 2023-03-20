// Control GUI changes

// HTML Variables
let signInDiv = document.getElementById('sign-in-div');
let signUpDiv = document.getElementById('sign-up-div');
let signInLink = document.getElementById('sign-in-link');
let signUpLink = document.getElementById('sign-up-link');
let signUpLink2 = document.getElementById('sign-up-link2');
let signUpAlertDiv = document.getElementById('sign-up-alert');
let signInAlertDiv = document.getElementById('sign-in-alert');

// Sign In Link Clicked
signInLink.addEventListener('click', displaySignIn);

function displaySignIn() {
  signUpDiv.style.display = 'none';
  signUpAlertDiv.style.display = 'none';
  signInAlertDiv.style.display = 'none';
  signInDiv.style.display = 'block';

  document.getElementById('userInSI').value = '';
  document.getElementById('passInSI').value = '';
  document.getElementById('errorSI').innerHTML = '';
}

// Sign Up Link Clicked
signUpLink.addEventListener('click', displaySignUp);
signUpLink2.addEventListener('click', displaySignUp);

function displaySignUp() {
  signInDiv.style.display = 'none';
  signUpAlertDiv.style.display = 'none';
  signInAlertDiv.style.display = 'none';
  signUpDiv.style.display = 'block';

  document.getElementById('userInSU').value = '';
  document.getElementById('passInSU').value = '';
  document.getElementById('confInSU').value = '';
  document.getElementById('errorSU').innerHTML = '';
}

// Sign up is sucessful
function signUpAlert() {
  signInDiv.style.display = 'none';
  signUpAlertDiv.style.display = 'block';
  signInAlertDiv.style.display = 'none';
  signUpDiv.style.display = 'none';
}

// Sign in is sucessful
function signInAlert() {
  signInDiv.style.display = 'none';
  signUpAlertDiv.style.display = 'none';
  signInAlertDiv.style.display = 'block';
  signUpDiv.style.display = 'none';
}
