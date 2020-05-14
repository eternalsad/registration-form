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

function checkEmail(field) {
  const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (reg.test(field.value.trim())) {
    showSuccess(field);
  } else {
    showError(field, `${getFieldName(field)} is not valid`);
  }
}

// check if field is required
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `Email is required`);
    } else {
      showSuccess(input);
    }
  });
}
// get capitalized field name
function getFieldName(field) {
  return field.id.charAt(0).toUpperCase() + field.id.slice(1);
}
//check field length
function checkLength(field, min, max) {
  if (field.value.trim().length < min) {
    showError(
      field,
      `${getFieldName(field)} should at least be ${min} characters long`
    );
  } else if (field.value.trim().length > max) {
    showError(
      field,
      `${getFieldName(field)} should be shorter than ${max} characters`
    );
  } else showSuccess(field);
}
//check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value.trim() !== input2.value.trim()) {
    showError(input2, "passwords are not matching");
  } else {
    showSuccess(input2);
  }
}

//event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 35);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
  //console.log(username);
});
