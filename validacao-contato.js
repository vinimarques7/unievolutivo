document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const personaInputs = document.querySelectorAll('input[name="persona"]');
    const feedbackInput = document.getElementById('feedback');
    const submitButton = document.getElementById('form-submit');

    const nomeError = document.createElement('span');
    nomeError.classList.add('error');
    nomeError.textContent = 'Nome é obrigatório.';
    nomeInput.parentNode.insertBefore(nomeError, nomeInput.nextSibling);

    const emailError = document.createElement('span');
    emailError.classList.add('error');
    emailError.textContent = 'Email é obrigatório e deve ser válido.';
    emailInput.parentNode.insertBefore(emailError, emailInput.nextSibling);

    const personaError = document.getElementById('persona-error');
    const feedbackError = document.getElementById('feedback-error');

    function validateNome() {
        const nomeValue = nomeInput.value.trim();
        if (nomeValue === "") {
            nomeError.style.display = 'block';
            return false;
        } else {
            nomeError.style.display = 'none';
            return true;
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailValue === "") {
            // Oculta a mensagem de erro se o campo estiver vazio
            emailError.style.display = 'none';
        } else if (!emailPattern.test(emailValue)) {
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }

    function validatePersona() {
        let isValid = false;
        personaInputs.forEach(input => {
            if (input.checked) {
                isValid = true;
            }
        });
        if (!isValid) {
            personaError.style.display = 'block';
            return false;
        } else {
            personaError.style.display = 'none';
            return true;
        }
    }

    function validateFeedback() {
        const feedbackValue = feedbackInput.value.trim();
        if (feedbackValue === "") {
            feedbackError.style.display = 'block';
            return false;
        } else {
            feedbackError.style.display = 'none';
            return true;
        }
    }

    function validateForm() {
        const isNomeValid = validateNome();
        const isEmailValid = validateEmail();
        const isPersonaValid = validatePersona();
        const isFeedbackValid = validateFeedback();
        submitButton.disabled = !(isNomeValid && isEmailValid && isPersonaValid && isFeedbackValid);
    }

    nomeInput.addEventListener('input', validateNome);
    emailInput.addEventListener('input', validateEmail);
    personaInputs.forEach(input => {
        input.addEventListener('change', validatePersona);
    });
    feedbackInput.addEventListener('input', validateFeedback);

    form.addEventListener('submit', function(event) {
        const isNomeValid = validateNome();
        const isEmailValid = validateEmail();
        const isPersonaValid = validatePersona();
        const isFeedbackValid = validateFeedback();
        if (!isNomeValid || !isEmailValid || !isPersonaValid || !isFeedbackValid) {
            event.preventDefault();
        }
    });

    // Oculta as mensagens de erro ao carregar a página
    nomeError.style.display = 'none';
    emailError.style.display = 'none';
    personaError.style.display = 'none';
    feedbackError.style.display = 'none';

    validateForm(); // Verificação inicial de validação
});
