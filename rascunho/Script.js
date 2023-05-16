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