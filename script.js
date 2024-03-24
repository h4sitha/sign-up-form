const passwords = document.querySelectorAll('.error');

passwords[0].addEventListener('input', matchPasswords);
passwords[1].addEventListener('input', matchPasswords);

function matchPasswords () {
    if (passwords[0].value && passwords[1].value) {
        if (passwords[0].value === passwords[1].value) {
            for (let i=0; i < passwords.length; i++) {
                passwords[i].style.borderColor = "lightGreen";
            }
        } else {
            for (let i=0; i < passwords.length; i++) {
                passwords[i].style.borderColor = "red";
            }
        }
    }
}