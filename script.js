const passwords = document.querySelectorAll('.error');
const passwordMessage = document.querySelector('#password-message');

passwords[0].addEventListener('input', matchPasswords);
passwords[1].addEventListener('input', matchPasswords);

function matchPasswords () {
    if (passwords[0].value && passwords[1].value) {
        if (passwords[0].value === passwords[1].value) {
            passwordBorderChange ("lightGreen");
            passwordMessage.innerHTML = "";
        } else {
            passwordBorderChange ("red");
            passwordMessage.innerHTML = "* Passwords do not match";
        }
    } else {
        passwordBorderChange ("hsl(220, 13%, 87%)")
        passwordMessage.innerHTML = "";
    }
}

function passwordBorderChange (color) {
    for (let i=0; i < passwords.length; i++) {
        passwords[i].style.borderColor = color;
    }
}