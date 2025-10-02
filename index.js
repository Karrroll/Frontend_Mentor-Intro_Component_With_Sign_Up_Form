$(".signup-input").on("focus", function() {
  $(this).on("keydown", function(event) {
    $(this).text(event.key);
  });
});
