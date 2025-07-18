function getFormValue(event) {
    event.preventDefault(); 
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');

    // Check if elements exist
    if (!firstName || !lastName) {
        console.error("Input fields not found");
        return;
    }

    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();

    if (firstNameValue && lastNameValue) {
        alert(`${firstNameValue} ${lastNameValue}`);
    } else {
        alert("Please enter both first name and last name.");
    }
}