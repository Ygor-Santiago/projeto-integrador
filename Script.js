const caixalogin = document.querySelector('.caixalogin');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btPopup = document.querySelector('.Btlogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    caixalogin.classList.add('active');
});

loginLink.addEventListener('click', () => {
    caixalogin.classList.remove('active');
});

btPopup.addEventListener('click', () => {
    caixalogin.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    caixalogin.classList.remove('active-popup');
});

function validar(email, senha) {
    if (email === "admin@aluno.com" && senha === "1234") {
        window.open("projetos2.html");
    
    } else {
        alert('Acesso negado');
    }
}

function clicar(){
    alert('Navegação privada, faça login para acessar conteúdo')
}




