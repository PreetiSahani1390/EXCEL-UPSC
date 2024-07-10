document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Here you can add your code to handle form submission, like sending data to server or validating input
    
    // For demonstration, just displaying the entered values
    var message = "Username: " + username + "<br>Email: " + email + "<br>Password: " + password;
    document.getElementById("message").innerHTML = message;
  });