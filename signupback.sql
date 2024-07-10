-- Create a table for storing user information
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insert a sample user (you can add more users)
INSERT INTO users (username, password) VALUES ('user1', 'password1');

-- Check login credentials
CREATE PROCEDURE CheckLogin(
    IN p_username VARCHAR(255),
    IN p_password VARCHAR(255)
)
BEGIN
    SELECT * FROM users WHERE username = p_username AND password = p_password;
END;

-- Add a new user
CREATE PROCEDURE AddUser(
    IN p_username VARCHAR(255),
    IN p_password VARCHAR(255)
)
BEGIN
    INSERT INTO users (username, password) VALUES (p_username, p_password);
END;
