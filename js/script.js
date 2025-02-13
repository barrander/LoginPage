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

const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const loginContainer = document.querySelector(".login-container");
const welcomeMessage = document.getElementById("welcomeMessage");

loginBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();

    if (username !== "") {
        welcomeMessage.innerHTML = `<h2>Olá, ${username}!</h2>`;
        loginContainer.style.display = "none"; // PARA OCULTAR O FORM
        welcomeMessage.style.display = "block"; // PARA EXIBIR MENSAGEM DE OLÁ
    } else {
        alert("Por favor, informe o seu usuário!");
    }
});