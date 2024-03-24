const passwords = document.querySelectorAll('.error');

passwords[1].addEventListener('input', () => {
    if (passwords[0].value && passwords[1].value) {
        if (passwords[0].value === passwords[1].value) {
            console.log("Matches");
        } else {
            console.log("Not!");
        }
    }
})