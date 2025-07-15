function getFormvalue() {
    //Write your code here
	document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let fname = document.querySelector('input[name="fname"]').value.trim();
    let lname = document.querySelector('input[name="lname"]').value.trim();
    let fullName = fname + ' ' + lname;
    alert(fullName);
});

}
