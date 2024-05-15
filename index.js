$(".error-msg").slideUp(0);

$("#btn").click(function () {
  if ($("#first-name").val() === "") {
    $("#error-msg-fn").slideUp();
    setTimeout(() => {
      $("#error-msg-fn").slideDown();

      $("#input-area-fn").addClass("show-warning-msg");
      $("#first-name").addClass("warn-input");
      $("#error-fn").addClass("show-warning");
      $("#error-fn").fadeIn();
    }, 400);
  } else {
    $("#error-msg-fn").slideUp();
    $("#input-area-fn").removeClass("show-warning-msg");
    $("#first-name").removeClass("warn-input");
    $("#error-fn").removeClass("show-warning");
  }

  if ($("#last-name").val() === "") {
    $("#error-msg-ln").slideUp();
    setTimeout(() => {
      $("#error-msg-ln").slideDown();
      $("#input-area-ln").addClass("show-warning-msg");
      $("#last-name").addClass("warn-input");
      $("#error-ln").addClass("show-warning");
      $("#error-ln").fadeIn();
    }, 400);
  } else {
    $("#error-msg-ln").slideUp();
    $("#input-area-ln").removeClass("show-warning-msg");
    $("#last-name").removeClass("warn-input");
    $("#error-ln").removeClass("show-warning");
  }

  if ($("#email").val() === "" || validate($("#email").val()) === false) {
    var msg = "";
    if ($("#email").val() === "") {
      $("#error-msg-email").slideUp();
      msg = "Email cannot be empty";
    } else {
      $("#error-msg-email").slideUp();
      msg = "Looks like this is not an email";
    }
    setTimeout(() => {
      $("#error-msg-email").text(msg);
      $("#error-msg-email").slideDown();
      $("#input-area-email").addClass("show-warning-msg");
      $("#email").addClass("warn-input");
      $("#error-email").addClass("show-warning");
      $("#error-email").fadeIn();
    }, 400);
  } else {
    $("#error-msg-email").slideUp();
    $("#input-area-email").removeClass("show-warning-msg");
    $("#email").removeClass("warn-input");
    $("#error-email").removeClass("show-warning");
  }

  if ($("#pwd").val() === "") {
    $("#error-msg-pwd").slideUp();
    setTimeout(() => {
      $("#error-msg-pwd").slideDown();
      $("#input-area-pwd").addClass("show-warning-msg");
      $("#pwd").addClass("warn-input");
      $("#error-pwd").addClass("show-warning");
      $("#error-pwd").fadeIn();
    }, 400);
  } else {
    $("#error-msg-pwd").slideUp();
    $("#input-area-pwd").removeClass("show-warning-msg");
    $("#pwd").removeClass("warn-input");
    $("#error-pwd").removeClass("show-warning");
  }
});

function validate(email) {
  var pattern = /^[\w]+[\.\w+]*[\w]+@[\w]+\.[\w]+[\.\w]*[\w]+$/;
  return pattern.test(email);
}
