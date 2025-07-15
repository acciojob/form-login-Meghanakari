function getFormvalue(event) {
    event.preventDefault();
    let fname = document.querySelector('input[name="fname"]').value.trim();
    let lname = document.querySelector('input[name="lname"]').value.trim();
	if (!fname || !lname) {
        alert("Please enter both first and last names.");
        return;
    }
    let fullName = fname + ' ' + lname;
    alert(fullName);
	
}