/* error message creator */
function getNotification(input) {
  switch(input.name) {
    case("first-name"):     return "First Name cannot be empty";
    case("last-name"):      return "Last Name cannot be empty";
    case("email-address"):  return "Email Address cannot be empty";
    case("password"):       return "Password cannot be empty";
    default:                return "Field cannot be empty";
  }
}
/* ------------------------------------------------------- */

function isFieldEmpty(fieldContent) {
  return fieldContent.trim().length === 0;
}

function clearInputError(input) {
  if(input.classList.contains("empty-signup-input"))
    input.classList.remove("empty-signup-input");

  var spanElement = input.nextElementSibling;
  if (spanElement && spanElement.classList.contains("empty-signup-notification")) 
    spanElement.textContent = "";
}

function showEmptyFieldError(input) {
  input.classList.add("empty-signup-input");

  var spanElement = input.nextElementSibling;
  if (spanElement && spanElement.classList.contains("empty-signup-notification")) 
    spanElement.textContent = getNotification(input);
}

function showInvalidEmailError(input) {
  input.classList.add("empty-signup-input");

  var spanElement = input.nextElementSibling;
  if (spanElement && spanElement.classList.contains("empty-signup-notification")) 
    spanElement.textContent = "Looks like this is not an email";
}

/* Event handlers */ 
document.querySelectorAll(".signup-input").forEach(function(input) {
  input.addEventListener("input", function() {
    clearInputError(input);

    if (isFieldEmpty(input.value)) {
      showEmptyFieldError(input);
    } else if (input.type === "email" && !input.checkValidity()) {
      showInvalidEmailError(input);
    }
  });
});

document.querySelector(".signup-button").addEventListener("click", function(e) {
  e.preventDefault();
  
  document.querySelectorAll(".signup-input").forEach(function(input) {
    clearInputError(input);

    if (isFieldEmpty(input.value)) {
      showEmptyFieldError(input);
    } else if (input.type === "email" && !input.checkValidity()) {
      showInvalidEmailError(input);
    }
  });
});
