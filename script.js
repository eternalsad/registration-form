const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
function showError(field, message) {
  const formControl = field.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(field) {
  const formControl = field.parentElement;
  formControl.className = "form-control success";
}
function isValidEmail(field) {
  const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return reg.test(field);
}

//event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value == "") {
    showError(username, "Name is required");
  } else {
    showSuccess(username);
  }
  if (!isValidEmail(email.value)) {
    showError(email, "Wrong email");
  } else {
    showSuccess(email);
  }
  if (password.value == "") {
    showError(password, "Enter password");
  } else if (password.value.length < 4) {
    showError(password, "Too short password");
  } else {
    showSuccess(password);
  }
  if (password.value != password2.value) {
    showError(password2, "Passwords are not matching");
  } else {
    showSuccess(password2);
  }
  //console.log(username);
});
