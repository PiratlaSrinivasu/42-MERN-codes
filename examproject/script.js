function validateForm() {
    // Get input values
    const fn=document.getElementById('first-name').value;
    const ln=document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('conpass').value;
    const checkbox = document.getElementById('agree').checked;

    // Regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // First name
    if(fn===""){
        alert('Please enter first name');
        return false;
    }
    
    // Last name
    if(ln===""){
        alert('Please enter last name');
        return false;
    }

    // Basic email validation
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Password validation (checking if password length is at least 6 characters)
    if (password.length < 6) {
        alert('Password should be at least 6 characters long.');
        return false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Checkbox validation
    if (!checkbox) {
        alert('You must agree to the terms and conditions.');
        return false;
    }

    // If all validations pass, show success alert and optionally submit the form
    alert('Form submitted successfully!');

    // Optionally, submit the form if it's a real form
    // document.getElementById('registration-form').submit();

    return true;
}