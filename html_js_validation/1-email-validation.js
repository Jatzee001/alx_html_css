// Function to validate the email
function validateEmail() {
    // Get the email input field value
    var email = document.getElementById("email").value;

    // Regular expression for email format validation
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Error message element
    var errorElement = document.getElementById("error");

    // Check if the email format is correct
    if (!emailRegex.test(email)) {
        errorElement.innerHTML = "Please enter a valid email address.";
        return false; // Prevent form submission
    } else {
        errorElement.innerHTML = ""; // Clear any previous error message
        return true; // Allow form submission
    }
}

// Add an event listener to the form to trigger email validation on submission
document.getElementById("emailForm").addEventListener("submit", function (event) {
    if (!validateEmail()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
