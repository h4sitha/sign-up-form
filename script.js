const passwords = document.querySelectorAll('.error');
const passwordMessage = document.querySelector('#password-message');

const otherInputs = document.querySelectorAll('input:not(.error)');

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Submit button clicked!");
})

for (let i=0; i < otherInputs.length; i++) {
    otherInputs[i].addEventListener('input', () => {
        otherInputBorderChange(otherInputs[i]);
    })
}

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

function otherInputBorderChange (input) {
    if (input.value) {
        if (input.checkValidity()) {
            input.style.borderColor = "lightGreen";
        } else {
            input.style.borderColor = "red";
        }
    } else {
        input.style.borderColor = "hsl(220, 13%, 87%)";
    }
}