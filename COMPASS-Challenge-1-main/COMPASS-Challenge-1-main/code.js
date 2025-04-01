document.getElementById('buttonSend').disabled = false;

function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const buttonInput = document.getElementById('buttonSend');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Name validation
    const nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isNameValid = nameRegex.test(name) && name.split(' ').length >= 2;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    // Message validation
    const isMessageValid = message.length > 20;

    // Boxes validation
    const checkboxOptions = document.querySelectorAll('.checkbox-box input[type="checkbox"]');
    let isChecked = false;
    checkboxOptions.forEach(function(checkbox) {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    buttonInput.disabled = !(isNameValid && isEmailValid && isMessageValid && isChecked);
}

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formFields = document.getElementById('formFields');
const buttonInput = document.getElementById('buttonSend');

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
messageInput.addEventListener("input", validateForm);

formFields.addEventListener("click", (e) => {
    e.preventDefault();

    const checkList = {
        "name": e.target.elements["name"].value,
        "email": e.target.elements["email"].value,
        "message": e.target.elements["message"].value,
    }

    localStorage.setItem("form", JSON.stringify(checkList));
    window.location.href = "index-2.html";
});
