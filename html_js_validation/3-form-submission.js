// Function to handle form submission and perform validation
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form field values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();

    // Get the error message element
    var errorElement = document.getElementById("error");

    // Validate form fields
    if (name === "" || email === "") {
        errorElement.innerHTML = "Please fill in all required fields.";
    } else {
        // Clear any previous error message
        errorElement.innerHTML = "";

        // Display a success message
        var successMessage = "Form submitted successfully!";
        alert(successMessage);

        // You can optionally submit the form here if needed
        // document.getElementById("yourFormId").submit();
    }
}

// Add an event listener to the form element to handle form submission
document.getElementById("yourFormId").addEventListener("submit", handleFormSubmit);
