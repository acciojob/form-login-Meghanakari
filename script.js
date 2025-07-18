function getFormValue(event) {
    event.preventDefault(); 
    let firstName = document.getElementById('fname').value.trim();
    let lastName = document.getElementById('lname').value.trim();

    if (firstName && lastName) {
        alert(`${firstName} ${lastName}`);
    } else {
        alert("Please enter both first name and last name.");
    }
}

document.getElementById('myForm').addEventListener('submit', getFormValue);
