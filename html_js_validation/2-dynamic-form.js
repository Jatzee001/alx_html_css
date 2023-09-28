<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Form</title>
</head>
<body>
    <form id="dynamicForm">
        <label for="numFields">Number of Fields:</label>
        <select id="numFields" name="numFields">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <div id="inputContainer"></div>
        <button type="submit">Submit</button>
    </form>

    <script>
        // Function to generate the specified number of text input fields dynamically
        function generateInputFields(numFields) {
            var inputContainer = document.getElementById("inputContainer");
            inputContainer.innerHTML = ""; // Clear any previous input fields

            for (var i = 1; i <= numFields; i++) {
                var input = document.createElement("input");
                input.type = "text";
                input.name = "field" + i;
                input.placeholder = "Field " + i;
                inputContainer.appendChild(input);
            }
        }

        // Function to validate the form before submission
        function validateForm(event) {
            event.preventDefault(); // Prevent form submission

            var numFields = document.getElementById("numFields").value;
            var inputContainer = document.getElementById("inputContainer");
            var inputs = inputContainer.getElementsByTagName("input");

            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].value.trim() === "") {
                    alert("Please fill in all fields.");
                    return; // Stop form submission if any field is empty
                }
            }

            // If all fields are filled, you can submit the form here
            alert("Form submitted successfully!");
            // Uncomment the line below to actually submit the form
            // document.getElementById("dynamicForm").submit();
        }

        // Add event listeners to handle dynamic field generation and form validation
        document.getElementById("numFields").addEventListener("change", function () {
            var numFields = this.value;
            generateInputFields(numFields);
        });

        document.getElementById("dynamicForm").addEventListener("submit", validateForm);
    </script>
</body>
</html>
