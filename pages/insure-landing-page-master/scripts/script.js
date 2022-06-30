const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('disable-scroll');
    hamburger.classList.toggle('close-icon');
})