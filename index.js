/* error element creator */
function addNotification(input) {
  var inputName = input.name;
  var fieldName;

  switch(inputName) {
    case("first-name"):
      fieldName = "First Name";
      break;
    case("last-name"):
      fieldName = "Last Name";
      break;
    case("email-address"):
      fieldName = "Email Address";
      break;
    case("password"):
      fieldName = "Password";
      break;
    default:
      fieldName = "Not Found";
  }

  return `${fieldName} cannot be empty`;
}

function createErrorElement(errorMessage) {
  var errorElement = document.createElement("p");
  errorElement.className = "empty-signup-notification";
  errorElement.textContent = errorMessage;

  return errorElement;
}
/* ------------------------------------------------------- */

function isFieldEmpty(fieldContent) {
  return fieldContent.trim().length === 0;
}

function clearInputError(input) {
  input.classList.remove("empty-signup-input");

  if (input.nextElementSibling && input.nextElementSibling.classList.contains("empty-signup-notification")) 
    input.nextElementSibling.remove();
}

function showEmptyFieldError(input) {
  input.classList.add("empty-signup-input");

  var errorMessage = addNotification(input);
  input.after(createErrorElement(errorMessage));
}

function showInvalidEmailError(input) {
  input.setAttribute("placeholder", input.value);
  input.classList.add("empty-signup-input");

  var errorMessage = "Looks like this is not an email";
  input.after(createErrorElement(errorMessage));
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

document.querySelector(".signup-button").addEventListener("click", function() {
  document.querySelectorAll(".signup-input").forEach(function(input) {
    clearInputError(input);

    if (isFieldEmpty(input.value)) {
      showEmptyFieldError(input);
    } else if (input.type === "email" && !input.checkValidity()) {
      showInvalidEmailError(input);
    }
  });
});