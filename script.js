const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submitButton = document.querySelector('#submit')

let passwordValue;
let confirmPasswordValue;

password.addEventListener('input', () => {
    passwordValue = password.value;
})

confirmPassword.addEventListener('input', () => {
    confirmPasswordValue = confirmPassword.value;
})

submitButton.onclick = function() {
    if (passwordValue != confirmPasswordValue) {
        event.preventDefault(); // Prevent form from submitting
        document.getElementById('password-error').textContent = 'Passwords do not match.'; // Display error message in HTML
    } else {
        document.getElementById('password-error').textContent = ''; // Clear error message when passwords match
    }
}

