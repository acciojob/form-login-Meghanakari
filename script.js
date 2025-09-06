function getFormValue(event) {
    const form = document.getElementById('login-form');

function getFormValue(event) {
    event.preventDefault();
    const fname = document.querySelector('input[name="fname"]').value.trim();
    const lname = document.querySelector('input[name="lname"]').value.trim();
    if (fname && lname) {
        const fullName = `${fname} ${lname}`;
        alert(fullName);
    } else {
        alert("Please fill out both fields.");
    }
}

form.addEventListener('submit', getFormValue);
