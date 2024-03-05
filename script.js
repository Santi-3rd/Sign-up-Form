const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submitButton = document.querySelector('#submit')
const requiredInputs = document.querySelectorAll('input[required]');
const formContainer = document.querySelector('.form-container');

let passwordValue;
let confirmPasswordValue;

password.addEventListener('input', () => {
    passwordValue = password.value;
})

confirmPassword.addEventListener('input', () => {
    confirmPasswordValue = confirmPassword.value;
})

submitButton.onclick = function() {
    let isFormFilled = true;
    requiredInputs.forEach(input => {
        if (!input.value) {
            isFormFilled = false;
            const span = input.previousElementSibling;
            if (!span.textContent.startsWith('*')) {
                span.textContent = '*' + span.textContent;
            }
        }
    });

    if (!isFormFilled) {
        event.preventDefault();
        document.getElementById('field-error').textContent = 'Please fill out the required fields.';
    } else {
        document.getElementById('field-error').textContent = '';
    }

    if (passwordValue != confirmPasswordValue) {
        event.preventDefault();
        document.getElementById('password-error').textContent = 'Passwords do not match.';
    } else {
        document.getElementById('password-error').textContent = '';
    }
}

