function getFormvalue(event) {
    event.preventDefault();
    let fname = document.querySelector('input[name="fname"]').value.trim();
    let lname = document.querySelector('input[name="lname"]').value.trim();
    let fullName = fname + ' ' + lname;
    alert(fullName);
}