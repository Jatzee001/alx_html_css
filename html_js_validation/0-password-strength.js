// Function to validate the password
function validatePassword() {
    // Get the password input field value
    var password = document.getElementById("password").value;

    // Regular expressions for password criteria
    var lengthRegex = /.{8,}/;
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*]/;

    // Error message element
    var errorElement = document.getElementById("error");

    // Initialize an array to hold error messages
    var errors = [];

    // Check each password criteria and add errors if not met
    if (!lengthRegex.test(password)) {
        errors.push("Password must be at least 8 characters long.");
    }
    if (!uppercaseRegex.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    if (!lowercaseRegex.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }
    if (!digitRegex.test(password)) {
        errors.push("Password must contain at least one numeric digit.");
    }
    if (!specialCharRegex.test(password)) {
        errors.push("Password must contain at least one special character (!@#$%^&*).");
    }

    // Display error messages or allow form submission
    if (errors.length > 0) {
        errorElement.innerHTML = errors.join("<br>");
        return false; // Prevent form submission
    } else {
        errorElement.innerHTML = ""; // Clear any previous error messages
        return true; // Allow form submission
    }
}

// Add an event listener to the form to trigger password validation on submission
document.getElementById("registration-form").addEventListener("submit", function (event) {
    if (!validatePassword()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});