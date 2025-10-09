function isFieldEmpty(fieldContent) {
  return fieldContent.trim().length === 0;
}

function addNotification($input) {
  var inputName = $input.attr("name");
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

function showEmptyFieldError( $input) {
  $input.addClass("empty-signup-input");
  $input.after(`<p class="empty-signup-notification">${addNotification($input)}</p>`);
}

function showInvalidEmailError($input) {
  $input.attr("placeholder", $input.val());
  $input.addClass("empty-signup-input");
  $input.after(`<p class="empty-signup-notification">Looks like this is not an email</p>`);
}

function clearInputError($input) {
  $input.removeClass("empty-signup-input");
  $input.next("p.empty-signup-notification").remove();
}

$(".signup-input").on("input", function() {
  var $input = $(this);
  clearInputError($input);

  if(isFieldEmpty($input.val()))
    showEmptyFieldError($input);
  else if($input.attr("type") === "email" && !$input[0].checkValidity()) 
    showInvalidEmailError($input);
});

$(".signup-button").on("click", function() {
  $(".signup-input").each(function() {
    var $input = $(this);
    clearInputError($input);

    if(isFieldEmpty($input.val()))
      showEmptyFieldError($input);
    else if($input.attr("type") === "email" && !$input[0].checkValidity())
     showInvalidEmailError($input);

  });
});
