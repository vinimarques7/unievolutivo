document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const submitButton = form.querySelector('input[type="submit"]');
    const emailError = document.getElementById('email-error');
    const senhaError = document.getElementById('senha-error');

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailValue === "") {
            emailError.innerText = "Campo obrigatório";
            emailError.style.display = 'block';
            return false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.innerText = "Email inválido";
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }

    function validateSenha() {
        const senhaValue = senhaInput.value.trim();
        if (senhaValue === "") {
            senhaError.innerText = "Campo obrigatório";
            senhaError.style.display = 'block';
            return false;
        } else if (senhaValue.length < 6) {
            senhaError.innerText = "Senha deve ter no mínimo 6 caracteres";
            senhaError.style.display = 'block';
            return false;
        } else {
            senhaError.style.display = 'none';
            return true;
        }
    }

    function validateForm() {
        const isEmailValid = validateEmail();
        const isSenhaValid = validateSenha();
        submitButton.disabled = !(isEmailValid && isSenhaValid);
    }

    emailInput.addEventListener('input', function() {
        validateEmail();
        validateForm();
    });

    senhaInput.addEventListener('input', function() {
        validateSenha();
        validateForm();
    });

    form.addEventListener('submit', function(event) {
        const isEmailValid = validateEmail();
        const isSenhaValid = validateSenha();
        if (!isEmailValid || !isSenhaValid) {
            event.preventDefault();
        }
    });

    validateForm(); // Initial validation check
});
