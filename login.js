document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Here you can add your logic for authentication
    // For this example, let's just log the username and password to the console
    console.log("Username: " + username);
    console.log("Password: " + password);
});