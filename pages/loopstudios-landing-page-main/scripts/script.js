const hamburger = document.querySelector('.hamburger');
const logo = document.querySelector('.logo');
const nav = document.querySelector('header ul');
const greyWrap = document.querySelector('.greyWrap');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    logo.classList.toggle('active');
    greyWrap.classList.toggle('active');
});