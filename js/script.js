// 1) EXIBIR E OCULTAR SENHA ALTERANDO TAMBÉM O ÍCONE NO INPUT
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password")

togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // EXIBE A SENHA
        togglePassword.classList.remove("bxs-lock-alt");
        togglePassword.classList.add("bxs-show") // ICONE DE VISUALIZAR ATIVO
    } else {
        passwordInput.type = "password"; // OCULTA A SENHA NOVAMENTE
        togglePassword.classList.remove("bxs-show");
        togglePassword.classList.add("bxs-lock-alt"); // ICONE DE CADEADO
    }
});

// 2) EXIBIR MENSANGEM DE BEM-VINDO AO CLICAR NO BOTÃO DE LOGIN

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const loginBtn = document.getElementById("loginBtn");
    const usernameInput = document.getElementById("username");
    const loginWrapper = document.querySelector(".wrapper");
    const message = document.getElementById("welcomeMessage");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // PARA PREVENIR O RECARREGAMENTO DA PÁGINA

        const username = usernameInput.value.trim();

        if (username !== "") {
            message.innerHTML = `<h2>Olá, ${username}!</h2>`;
            message.style.display = "flex"; // EXIBE MENSAGEM DE SAUDAÇÃO
            loginWrapper.style.display = "none"; // OCULTA O FORM
        } else {
            alert("Por favor, insira o seu usuário!");
        }
    });

});