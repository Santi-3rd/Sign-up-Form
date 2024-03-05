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
    if (passwordValue === confirmPasswordValue) {
        console.log('Passwords match!');
    } else {
        console.log('Passwords do not match.');
    }
}

