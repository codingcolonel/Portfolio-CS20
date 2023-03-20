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

  let userIndex = getindexOfArrayObject(info, 'username', userInEl.value);

  if (userInEl.value !== '' && passInEl.value !== '' && confInEl.value !== '') {
    if (userIndex === -1) {
      if (passInEl.value == confInEl.value) {
        info.push({
          username: userInEl.value,
          password: passInEl.value,
        });
        saveArray('info', info);
        userInEl.innerHTML = '';
        passInEl.innerHTML = '';
        confInEl.innerHTML = '';
        errorEl.innerHTML = '';
        signUpAlert();
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
  let userInEl = document.getElementById('userInSI');
  let passInEl = document.getElementById('passInSI');
  let errorEl = document.getElementById('errorSI');

  let userIndex = getindexOfArrayObject(info, 'username', userInEl.value);

  if (userInEl.value !== '' && passInEl.value !== '') {
    if (userIndex !== -1) {
      if (passInEl.value == info[userIndex]['password']) {
        userInEl.innerHTML = '';
        passInEl.innerHTML = '';
        errorEl.innerHTML = '';
        signInAlert();
      } else {
        errorEl.innerHTML = 'Error: Incorrect password';
      }
    } else {
      errorEl.innerHTML = 'Error: Username does not exist';
    }
  } else {
    errorEl.innerHTML = 'Error: Please fill all required fields';
  }
}
