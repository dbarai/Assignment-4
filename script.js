$(document).ready(function () {

  $("#toggle").click(function () {
    let pass = $("#password");
    if (pass.attr("type") === "password") {
      pass.attr("type", "text");
      $(this).text("Hide");
    } else {
      pass.attr("type", "password");
      $(this).text("Show");
    }
  });

  $("#myForm").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let password = $("#password").val();

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

    if (name === "" || email === "" || phone === "" || password === "") {
      $("#message").html("<div id='error'>All fields are required</div>");
    }
    else if (!email.match(emailPattern)) {
      $("#message").html("<div id='error'>Invalid Email</div>");
    }
    else if (phone.length !== 10) {
      $("#message").html("<div id='error'>Phone must be 10 digits</div>");
    }
    else if (!password.match(passwordPattern)) {
      $("#message").html("<div id='error'>Weak Password</div>");
    }
    else {
      $("#message").html("<div id='success'>Form Submitted Successfully</div>");
      $("#myForm")[0].reset();
    }
  });

});
