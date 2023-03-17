// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// DATA ARRAY
let info = initArray('info');

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let userInEl = document.getElementById('userInSU');
  let passInEl = document.getElementById('passInSU');
  let confInEl = document.getElementById('confInSU');
  let errorEl = document.getElementById('errorSU');

  if (userInEl.value === '' || passInEl === '' || confInEl === '') {
    if (getindexOfArrayObject('username', userInEl.value) === -1) {
      if (passInEl.value == confInEl.value) {
        info.push({
          username: userInEl.value,
          password: passInEl.value,
        });
        saveArray('info', info);
        errorEl.innerHTML = '';
      } else {
        errorEl.innerHTML = 'Error: Password does not match confirm password';
      }
    } else {
      errorEl.innerHTML = 'Error: Username is already taken';
    }
  } else {
    errorEl.innerHTML = 'Error: Please fill all required fields';
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  console.log('Sign In Btn Clicked');
}
