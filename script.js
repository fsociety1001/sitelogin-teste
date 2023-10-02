const loginForm = document.getElementById('login-form');
const loginErrorMessage = document.getElementById('login-error-message');

const signupForm = document.getElementById('signup-form');
const signupSuccessMessage = document.getElementById('signup-success-message');
const signupErrorMessage = document.getElementById('signup-error-message');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;


    if (username === 'usuario' && password === 'senha') {
        window.location.href = 'dashboard.html';
    } else {
        loginErrorMessage.textContent = 'Usuário ou senha incorretos. Tente novamente.';
    }
});

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {

        signupSuccessMessage.textContent = 'Cadastro realizado com sucesso!';
        signupErrorMessage.textContent = '';
        document.getElementById('signup-username').value = '';
        document.getElementById('signup-password').value = '';
    } else {
        signupErrorMessage.textContent = 'Preencha todos os campos.';
    }
});
